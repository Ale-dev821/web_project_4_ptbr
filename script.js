const editButton = document.querySelector(".edit-button");

editButton.addEventListener("click", () => {
  editButton.classList.toggle("active");
});

const editProfilePopup = document.querySelector("#editProfilePopup");
const closePopupButton = document.querySelector(".close-button");
const saveProfileButton = document.querySelector("#saveProfileButton");
const profileName = document.querySelector("#profileName");
const profileAbout = document.querySelector("#profileAbout");
const formElement = document.getElementById('addPopup');
const formElements = document.getElementById('editProfilePopup')
const inputElements = formElement.querySelectorAll('.required');
const errorSpans = formElement.querySelectorAll('.span-required');
const submitButton = formElement.querySelector('#addItemButton');
const submitButtons = formElement.querySelector('#saveProfileButton')

editButton.addEventListener("click", () => {
  profileName.value = document.querySelector(".title-intro").textContent;
  profileAbout.value = document.querySelector(".subtitle-intro").textContent;
});

saveProfileButton.addEventListener("click", () => {
  document.querySelector(".title-intro").textContent = profileName.value;
  document.querySelector(".subtitle-intro").textContent = profileAbout.value;
  editProfilePopup.style.display = "none";
});

function checkLocalStorage() {
  const savedName = localStorage.getItem("profileName");
  const savedAbout = localStorage.getItem("profileAbout");

  if (savedName) {
    document.querySelector(".title-intro").textContent = savedName;
    document.querySelector(".profile-intro h2").textContent = savedAbout;
  }
}

const popupContainer = document.getElementById('popupContainer');

function openPopup() {
  popupContainer.classList.add('popup-enter');
  popupContainer.style.display = 'block';
}

function closePopup() {
  popupContainer.classList.add('popup-exit');

  popupContainer.addEventListener('transitionend', function onTransitionEnd() {
    popupContainer.removeEventListener('transitionend', onTransitionEnd);
    setTimeout(() => {
      popupContainer.style.display = 'none';
      popupContainer.classList.remove('popup-enter', 'popup-exit');
    }, 500);
    popupContainer.style.display = 'none';
    popupContainer.classList.remove('popup-enter', 'popup-exit');
  });
}

popupContainer.addEventListener('click', (event) => {
  if (event.target === popupContainer) {
    closePopup();
  }
});

openPopup();

function openEditPopup() {
  document.getElementById("editProfilePopup").classList.add("popup_opened");
}

function saveProfile() {
  const newName = document.getElementById("profileName").value;
  const newAbout = document.getElementById("profileAbout").value;

  if (newName) {
    document.querySelector(".title-intro").textContent = newName;
    localStorage.setItem("profileName", newName);
  }

  if (newAbout) {
    document.querySelector(".profile-intro h2").textContent = newAbout;
    localStorage.setItem("profileAbout", newAbout);
  }

  closeEditPopup();
}

function closeEditPopup() {
  document.getElementById("editProfilePopup").classList.remove("popup_opened");
}

document.querySelector(".edit-button").addEventListener("click", openEditPopup);
document
  .getElementById("saveProfileButton")
  .addEventListener("click", saveProfile);
document
  .getElementById("closePopupButton")
  .addEventListener("click", closeEditPopup);

checkLocalStorage();

function openEditProfilePopup() {
  editProfilePopup.classList.add("popup_opened");
}

function closeEditProfilePopup() {
  editProfilePopup.classList.remove("popup_opened");
}

editButton.addEventListener("click", openEditProfilePopup);
closePopupButton.addEventListener("click", closeEditProfilePopup);

const addButton = document.querySelector(".add-button");
const addPopup = document.querySelector(".add-popup");
const addItemButton = document.getElementById("addItemButton");
const closeAddPopupButton = document.getElementById("closeAddPopupButton");
const imageElement = document.querySelector(".gallery-image");
const itemTitle = document.querySelector("#itemTitle");
const itemLink = document.querySelector("#itemLink");

addButton.addEventListener("click", () => {
  openAddPopup();
});

addItemButton.addEventListener("click", () => {
  closeAddPopup();
});

closeAddPopupButton.addEventListener("click", () => {
  closeAddPopup();
});

function openAddPopup() {
  const addPopup = document.getElementById("addPopup");
  addPopup.classList.toggle("popup-enter");
  addPopup.style.display = "block";
}

function closeAddPopup() {
  const addPopup = document.getElementById("addPopup");
  addPopup.classList.toggle("popup-exit");
  setTimeout(function () {
    addPopup.style.display = "none";
    addPopup.classList.remove("popup-enter", "popup-exit");
  }, 500);
}

let isAddPopupOpen = false;
function openAddPopup() {
  addPopup.classList.add('popup-enter');
  addPopup.style.display = 'block';
  isAddPopupOpen = true;
}

function closeAnyPopup() {
  const popups = document.querySelectorAll('.popup-enter');
  popups.forEach((popup) => {
    popup.classList.remove('popup-enter');
    popup.style.display = 'none';
  });
  isAddPopupOpen = false;
  ispopupContainerOpen = false;
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeAnyPopup();
  }
});

addButton.addEventListener("click", () => {
  itemTitle.value = document.querySelector("itemTitle").textContent;
});

addItemButton.addEventListener("click", () => {
  document.querySelector(".group-text").textContent = itemTitle.value;
  document.querySelector(".gallery-image").textContent = itemLink.value;
  addPopup.style.display = "none";
});

addItemButton.addEventListener("click", () => {
  const newTitle = itemTitle.value;
  const newLink = itemLink.value;

  if (newTitle && newLink) {
    const galleryImage = document.querySelector(".gallery-image");

    galleryImage.src = newLink;

    galleryImage.alt = newTitle;

    document.querySelector(".group-text").textContent = newTitle;

    addPopup.style.display = "none";
  }
});

// Enviar a imagem do servidor externo do JavaScript para o HTML
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

// Função para preencher as imagens a partir de initialCards
function fillImages() {
  const photoGrid = document.getElementById('photoGrid');

  initialCards.forEach(card => {
    const groupImage = document.createElement('div');
    groupImage.classList.add('group-image');
    
    const img = document.createElement('img');
    img.classList.add('gallery-image');
    img.src = card.link;
    img.alt = card.name;
    img.setAttribute('data-type', 'auto');
    
    const text = document.createElement('p');
    text.classList.add('group-text');
    text.textContent = card.name;
    
    const buttonLike = document.createElement('button');
    buttonLike.classList.add('button-like');
    
    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('delete-button');
    
    groupImage.appendChild(img);
    groupImage.appendChild(text);
    groupImage.appendChild(buttonLike);
    groupImage.appendChild(buttonDelete);
    
    photoGrid.appendChild(groupImage);
  });
}

fillImages();

const imageButtons = document.querySelectorAll(".button-like");

imageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
  });
});

// Função para remover um cartão
function removeCart(event) {
  const deleteButton = event.target;
  const groupImage = deleteButton.closest(".group-image");

  if (groupImage) {
    groupImage.remove();
  }
}

const deleteButton = document.querySelectorAll(".delete-button");

deleteButton.forEach((botao) => {
  botao.addEventListener("click", removeCart);
});

const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.getElementById("close-button");

galleryImages.forEach(function (galleryImage) {
  galleryImage.addEventListener("click", function () {
    lightbox.style.display = "block";
    lightboxImage.src = this.src;
  });
});

closeButton.addEventListener("click", function () {
  lightbox.style.display = "none";
});

const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');

function setError(index) {
  campos[index].style.border = '1px solid #FF0000';
  spans[index].style.display = 'block';
}

function removeError(index) {
  campos[index].style.border = '';
  spans[index].style.display = 'none';
}
function nameValidate() {
  if (campos[0].value.length < 2 || campos[0].value.length > 40) {
    setError(0);
    return false;
  } else {
    removeError(0);
    return true;
  }
}

function aboutValidate() {
  if (campos[1].value.length < 2 || campos[1].value.length > 200) {
    setError(1);
    return false;
  } else {
    removeError(1);
    return true;
  }
}

function validateTitle() {
  if (campos[2].value.length < 2 || campos[2].value.length > 30) {
    setError(2);
    return false;
  } else {
    removeError(2);
    return true;
  }
}

function validateLink() {
  const linkValue = campos[3].value.trim();
  if (!isValidURL(linkValue)) {
    setError(3);
    return false;
  } else {
    removeError(3);
    return true;
  }
}

function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  
  const isNameValid = nameValidate();
  const isAboutValid = aboutValidate();
  const isTitleValid = validateTitle();
  const isLinkValid = validateLink();

  if (isNameValid && isAboutValid && isTitleValid && isLinkValid) {
    alert('Formulário válido. Você pode prosseguir.');
  } else {
    alert('Por favor, corrija os erros no formulário.');
  }
});

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  validateForm();
});

const showInputError = (inputElement, errorMessage) => {
  const errorSpan = inputElement.nextElementSibling;
  inputElement.classList.add('form__input_type_error');
  errorSpan.textContent = errorMessage;
  errorSpan.classList.add('form__input-error_active');
};

const hideInputError = (inputElement) => {
  const errorSpan = inputElement.nextElementSibling;
  inputElement.classList.remove('form__input_type_error');
  errorSpan.classList.remove('form__input-error_active');
  errorSpan.textContent = '';
};

const checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElement.validationMessage);
  } else {
    hideInputError(inputElement);
  }
};

const setEventListeners = () => {
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(inputElement);
      checkFormValidity();
    });
  });
};

const checkFormValidity = () => {
  const isFormValid = Array.from(inputElements).every((inputElement) => inputElement.validity.valid);
  submitButton.disabled = !isFormValid;
};

setEventListeners();

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
});
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation();
