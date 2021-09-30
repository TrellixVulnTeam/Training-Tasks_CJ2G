import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';
import { CommonService } from '../services/common.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // value = 'This is interpolation of angular component';
  image: any;
  // fileToUpload: File | null = null;
  public input: any;
  isUpdate: boolean = false;
  user = {};
  itemarray: any = [];
  myForm!: FormGroup;

  City: any = [
    {
      name: 'Florida',
      value: 'flordia',
    },
    {
      name: 'Cliforniya',
      value: 'californiya',
    },
    {
      name: 'New York',
      value: 'New York',
    },
  ];
  formValue: any;
  constructor(private commonService: CommonService, private http: HttpClient) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      zip: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl(''),
      address: new FormControl(null, Validators.required),
      right: new FormControl('', Validators.requiredTrue),
      city: new FormControl(Validators.required),
      file: new FormControl('', [Validators.required]),
      fileSource: new FormControl('s', [Validators.required]),
    });

    // update service call
    this.commonService.triggerUpdate.subscribe((res) => {
      console.log(res);
      this.updateRecord(res);
      this.id = res;
    });
  }

  // reset funtion

  reset() {
    this.myForm.reset('');
  }

  id: any;
  // submit function

  onSubmit() {
    if (!this.isUpdate) {
      let user: any = [];
      if (localStorage.getItem('form-data')) {
        user = JSON.parse(localStorage.getItem('form-data') || '[]');
        // console.log(user);
      }
      console.log(this.myForm.value);
      this.user = Object.assign(this.user, this.myForm.value);
      user.push(this.user);
      localStorage.setItem('form-data', JSON.stringify(user));
      this.commonService.itemRefresh.next('Updated');
      this.myForm.reset('');
      alert('Submited File');
    } else {
      const array: any = JSON.parse(localStorage.getItem('form-data') || '[]');
      array[this.id] = this.myForm.value;
      // console.log(this.myForm.value);
      localStorage.setItem('form-data', JSON.stringify(array));
      this.isUpdate = false;
      this.myForm.reset('');
      this.commonService.itemRefresh.next('Updated');
      alert('Data Updated');
    }
  }

  // update funtion

  updateRecord(id: any) {
    const array: any = JSON.parse(localStorage.getItem('form-data') || '[]');
    this.isUpdate = true;
    array.forEach((element: any, index: any) => {
      if (index == id) {
        // console.log(element);
        this.myForm.patchValue({
          name: element.name,
          email: element.email,
          address: element.address,
          gender: element.gender,
          zip: element.zip,
          city: element.city,
          image: element.image,
        });
      }
    });
  }
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      this.myForm.patchValue({
        fileSource: file,
      });
    }
  }
  // upload() {
  //   const formData = new FormData();
  //   formData.append('file', this.myForm.get('fileSource').value);

  //   this.http
  //     .post('http://localhost:8001/upload.php', formData)

  //     .subscribe((res) => {
  //       console.log(res);
  //     });
  // }
}
