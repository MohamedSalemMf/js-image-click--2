// window.alert("Hello")    //Test

const gellery = document.querySelectorAll(".gellery .image");

previewbBox = document.querySelector(".preview-box");
previewbImg = previewbBox.querySelector(".imgZoom");

closeTimes = previewbBox.querySelector(".closeTimes");


currentImg = previewbBox.querySelector(".current-img");
totalImg = previewbBox.querySelector(".total-img");

shadow = document.querySelector(".shadow");

window.onload = () => {
  for (let i = 0; i < gellery.length; i++) {
    totalImg.textContent = gellery.length;
    let newIndex = i;
    let clickImgIndex = newIndex
    gellery[i].onclick = () => {
      // console.log(i);

      function preview() {
        currentImg.textContent = newIndex + 1;

        let selectdImgUrl = gellery[newIndex].querySelector("img").src;
        previewbImg.src = selectdImgUrl;
        console.log(selectdImgUrl);
      }

      // next and prev
      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");

      if (newIndex == 0) {

        prevBtn.style.display = "none";
      }

      if (newIndex >= gellery.length - 1) {
        nextBtn.style.display = "none";
      }

      prevBtn.onclick = () => {
        newIndex--;
        if (newIndex == 0) {
          preview();
          prevBtn.style.display = "none";
        }
        else {
          preview();
          nextBtn.style.display = "block";
        }
      }

      nextBtn.onclick = () => {
        newIndex++;
        if (newIndex >= gellery.length - 1) {
          preview();
          nextBtn.style.display = "none";
        }
        else {
          preview();
          prevBtn.style.display = "block";
        }
      }

      preview();
      previewbBox.classList.add("show");
      shadow.style.display = "block";

      closeTimes.onclick = () => {
        newIndex = clickImgIndex
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";

        previewbBox.classList.remove("show");
        shadow.style.display = "none";

      }
    }
  }
}