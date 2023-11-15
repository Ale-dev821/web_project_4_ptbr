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

  closeAnyPopup() {
    const popups = document.querySelectorAll('.popup-enter');
    popups.forEach((popup) => {
      popup.classList.remove('popup-enter');
      popup.style.display = 'none';
    });
    isAddPopupOpen = false;
    ispopupContainerOpen = false;
  }

 // Função para fechar formulários, imagens e qualquer popup com a tecla "Esc"
closeOnEscape(e) {
  if (e.key === "Escape") {
    // Fechar formulários
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.style.display = 'none';
    });

    // Fechar imagens
    const images = document.querySelectorAll("lightbox-image");
    images.forEach(image => {
      image.style.display = 'none';
    });

    // Fechar qualquer popup aberta
    this.closeAnyPopup();
  }
}

closeAnyPopup() {
  const popups = document.querySelectorAll('.popup');
  popups.forEach(popup => {
    popup.style.display = 'none';
  });
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
