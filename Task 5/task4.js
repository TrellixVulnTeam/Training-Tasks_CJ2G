function readMore(un) {
    let dots = document.querySelector(
      `.card[data-university="${un}"] .dots`
    );
    let moreText = document.querySelector(
      `.card[data-university="${un}"] .more`
    );
    let btnText = document.querySelector(
      `.card[data-university="${un}"] .myBtn`
    );

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.textContent = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.textContent = "Read less";
      moreText.style.display = "inline";
    }
  }