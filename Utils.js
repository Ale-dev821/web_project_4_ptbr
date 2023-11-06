export default class Utils {
  openEditPopup() {
    document.getElementById("editProfilePopup").classList.add("popup_opened");
  }

  saveProfile() {
    const isNameValid = nameValidate();
    const isAboutValid = aboutValidate();
    const newName = document.getElementById("profileName").value;
    const newAbout = document.getElementById("profileAbout").value;

    if (isNameValid && isAboutValid && newName && newAbout) {
      document.querySelector(".title-intro").textContent = newName;
      document.querySelector(".subtitle-intro").textContent = newAbout;
      localStorage.setItem("profileName", newName);
      localStorage.setItem("profileAbout", newAbout);
    }
  }

  closeEditPopup() {
    document.getElementById("editProfilePopup").classList.remove("popup_opened");
  }

  openEditProfilePopup2() {
    editProfilePopup.classList.add("popup_opened");
  }

  closeEditProfilePopup2() {
    editProfilePopup.classList.remove("popup_opened");
  }

  openAddPopup() {
    const addPopup = document.getElementById("addPopup");
    addPopup.classList.toggle("popup-enter");
    addPopup.style.display = "block";
  }

  closeAddPopup() {
    const addPopup = document.getElementById("addPopup");
    addPopup.classList.toggle("popup-exit");
    setTimeout(function () {
      addPopup.style.display = "none";
      addPopup.classList.remove("popup-enter", "popup-exit");
    }, 500);
  }

  openAddPopup2() {
    addPopup.classList.add("popup-enter");
    addPopup.style.display = "block";
    isAddPopupOpen = true;
  }

  setEventListeners() {
    const editButton = document.querySelector(".edit-button");
    const closePopupButton = document.querySelector(".close-button");
    const saveProfileButton = document.querySelector("#saveProfileButton");
    const addButton = document.querySelector(".add-button");
    const addItemButton = document.getElementById("addItemButton");
    const closeAddPopupButton = document.getElementById("closeAddPopupButton");

    editButton.addEventListener("click", this.openEditPopup);
    saveProfileButton.addEventListener("click", this.saveProfile);
    closePopupButton.addEventListener("click", this.closeEditPopup);
    addButton.addEventListener("click", this.openAddPopup);
    addItemButton.addEventListener("click", this.closeAddPopup);
    closeAddPopupButton.addEventListener("click", this.closeAddPopup);
  }
}
