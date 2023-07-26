const myModal = document.querySelector(".modal");
const declineBtn = document.getElementById("decline-btn");
const btnContainer = document.querySelector(".modal-choice-btns");
const formEl = document.getElementById("form-el");
const modalText = document.getElementById("modal-text");

setTimeout(function () {
  myModal.style.display = "block";
  myModal.style.backgroundColor = "#a2357d";
}, 1500);
declineBtn.addEventListener("mouseenter", function () {
  btnContainer.classList.toggle("reverse");
});
formEl.addEventListener("submit", function (event) {
  setTimeout(function () {
    const uploadText = document.getElementById("upload-text");
    uploadText.innerText = "Making the Sale.....";
  }, 1500);
  event.preventDefault();
  modalText.innerHTML = `<div class="modal-inner-loading">
  <img src="images/loading.svg" class="loading">
  <p id="upload-text">
      Uploading your data to the dark web...
  </p>
</div>`;
});
