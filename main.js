const myModal = document.querySelector(".modal");
const declineBtn = document.getElementById("decline-btn");
const btnContainer = document.querySelector(".modal-choice-btns");
const formEl = document.getElementById("form-el");
const modalText = document.getElementById("modal-text");
const modalInner = document.getElementById("modal-inner");
const modalCloseBtn = document.getElementById("modal-close-btn");

setTimeout(function () {
  myModal.style.display = "block";
  myModal.style.backgroundColor = "#a2357d";
}, 1500);
declineBtn.addEventListener("mouseenter", function () {
  btnContainer.classList.toggle("reverse");
});
formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  const consentFormData = new FormData(formEl);
  let userName = consentFormData.get("fullname");
  modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`;
  setTimeout(function () {
    const uploadText = document.getElementById("upload-text");

    uploadText.innerText = "Making the Sale.....";
  }, 1500);
  setTimeout(function () {
    modalInner.innerHTML = `<h2>Thanks <span class="modal-display-name">${userName} </span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `;
    modalCloseBtn.removeAttribute("disabled");
    modalCloseBtn.addEventListener("click", function () {
      myModal.style.display = "none";
    });
  }, 3000);
});
