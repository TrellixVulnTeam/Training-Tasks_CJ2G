export class subjectinfo {
  constructor(
    public name: string,
    public subtitle: string,
    public button: string,
    public image: image,
    public bgcolor: string,
    public code: string,
    public time: string
  ) {}
}

export class image {
  constructor(
    public name: string,
    // public subtitle: string,
    public url: string
  ) {}
}
// export interface subjectinfo {
//   name: string;
//   subtitle: string;
//   button: string;
//   image: image;
// }
