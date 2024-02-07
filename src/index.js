import Card from "./components/Card.js";
import Utils from "./components/Utils.js";
import FormValidator from "./components/FormValidator.js";
import './blocks/footer.css';
import './blocks/header.css';
import './blocks/inter.css';
import './blocks/main.css';
import './blocks/page.css';
import './blocks/photo-grid.css';
import './blocks/profile.css';

const token = "ff4f017e-43f3-4e41-82c0-79a54bc6a7d2";
const groupId = "web_ptbr_08";
const url = `https://around.nomoreparties.co/v1/${groupId}/users/me`;

fetch(url, {
  headers: {
    authorization: token
  }
})
  .then(res => res.json())
  .then((userData) => {
    const { name, about, avatar, _id } = userData;

    console.log("Nome:", name);
    console.log("Sobre:", about);
    console.log("Avatar:", avatar);
    console.log("ID de Usuário:", _id);
  })
  .catch(error => {
    console.error('Erro na solicitação:', error);
  });



const formValidator = new FormValidator('#editProfilePopup',  document.getElementById('editProfilePopup'));
const editButton = document.querySelector(".edit-button");
const editProfilePopup = document.querySelector("#editProfilePopup");
const closePopupButton = document.querySelector(".close-button");
const saveProfileButton = document.querySelector("#saveProfileButton");
const profileName = document.querySelector("#profileName");
const profileAbout = document.querySelector("#profileAbout");
const formElement = document.getElementById('addPopup');
const inputElements = formElement.querySelectorAll('.required');
const submitButton = formElement.querySelector('#addItemButton');
const form = document.getElementById('form');
const card = new Card();
const utils = new Utils();


editButton.addEventListener("click", () => {
  editButton.classList.toggle("active");
  const titleIntro = document.querySelector(".title-intro");
  const subtitleIntro = document.querySelector(".subtitle-intro");
  profileName.value = titleIntro.textContent;
  profileAbout.value = subtitleIntro.textContent;
  openEditProfilePopup();
});

saveProfileButton.addEventListener("click", () => {
  const newName = profileName.value;
  const newAbout = profileAbout.value;

  if (nameValidate(newName) && aboutValidate(newAbout)) {
    const titleIntro = document.querySelector(".title-intro");
    const subtitleIntro = document.querySelector(".subtitle-intro");
    titleIntro.textContent = newName;
    subtitleIntro.textContent = newAbout;
    
    localStorage.setItem("profileName", newName);
    localStorage.setItem("profileAbout", newAbout);
    closeEditProfilePopup();
  }
});

function openEditProfilePopup() {
  editProfilePopup.style.display = "block";
}

function closeEditProfilePopup() {
  editProfilePopup.style.display = "none";
}
function checkLocalStorage() {
  const savedName = localStorage.getItem("profileName");
  const savedAbout = localStorage.getItem("profileAbout");

  if (savedName && savedAbout) {
    // Verificar se os valores salvos atendem aos critérios de validação antes de sobrescrever os elementos HTML
    if (nameValidate(savedName) && aboutValidate(savedAbout)) {
      document.querySelector(".title-intro").textContent = savedName;
      document.querySelector(".subtitle-intro").textContent = savedAbout;
    }
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

function openEditProfilePopuptwo() {
  editProfilePopup.classList.add("popup_opened");
}

function closeEditProfilePopuptwo() {
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

const isAddPopupOpen = false;
function openAddPopuptwo() {
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
  let ispopupContainerOpen = false;
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeAnyPopup();
  }
});


addButton.addEventListener("click", () => {
  const itemTitleElement = document.querySelector(".itemTitle");
  
  if (itemTitleElement) {
    itemTitle.value = itemTitleElement.textContent;
  } else {
    console.log("Elemento .itemTitle não encontrado.");
  }
});

addItemButton.addEventListener("click", () => {
  const newTitle = itemTitle.value;
  const newLink = itemLink.value;

  if (newTitle && newLink) {
    const template = document.querySelector("#imageTemplate");
    const newCard = document.importNode(template.content, true);

    const img = newCard.querySelector(".gallery-image");
    img.src = newLink;
    img.alt = newTitle;

    const text = newCard.querySelector(".group-text");
    text.textContent = newTitle;

    const likeButton = newCard.querySelector(".button-like");
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("active");
    });

    const newDeleteButton = newCard.querySelector(".delete-button");
    newDeleteButton.addEventListener("click", () => {
      
    });

    const photoGrid = document.getElementById("photoGrid");
    const firstCard = photoGrid.querySelector(".group-image");

    photoGrid.insertBefore(newCard, firstCard);

    itemTitle.value = "";
    itemLink.value = "";

    closeAddPopup();

    const deleteButtons = document.querySelectorAll(".delete-button");
    
    deleteButtons.forEach((deleteButton) => {
      deleteButton.addEventListener("click", removeCart);
    });
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
    
    buttonLike.addEventListener('click', () => {
      buttonLike.classList.toggle('active');
    });
    
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

const deletePopup = document.getElementById('deletePopup');
const confirmDeleteButton = document.getElementById('confirmDeleteButton');
const closeDeletePopupButton = document.getElementById('closebutton');

// Função para remover um cartão
function removeCart(event) {
  const deleteButton = event.target;
  const groupImage = deleteButton.closest(".group-image");

  confirmDeleteButton.addEventListener('click', () => {
    if (groupImage) {
      groupImage.remove();
    }

    deletePopup.classList.add('hidden');
  });

  closeDeletePopupButton.addEventListener('click', () => {
    deletePopup.classList.add('hidden');
  });

  deletePopup.classList.remove('hidden');
}

const deleteButtons = document.querySelectorAll(".delete-button");

deleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener("click", removeCart);
});

document.addEventListener('DOMContentLoaded', () => {
  deletePopup.classList.add('hidden');
});

const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.getElementById("close-button");

// Função para fechar lightbox
function closeLightbox() {
  lightbox.style.display = "none";
}

// Event listener para clicar na imagem na galeria
galleryImages.forEach(function (galleryImage) {
  galleryImage.addEventListener("click", function () {
    lightbox.style.display = "block";
    lightboxImage.src = this.src;
  });
});

// Event listener para clicar no botão de fechar
closeButton.addEventListener("click", function () {
  closeLightbox();
});

// Event listener para a tecla "Esc"
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeLightbox();
  }
});

function setError(index) {
  let campos = document.querySelectorAll('.required');
  let spans = document.querySelectorAll('.span-required');
  
  // Verifique se há um erro no campo específico
  if (!isValid(index)) {
      campos[index].style.border = '1px solid #FF0000';
      spans[index].style.display = 'block';
      console.log('Erro removido para o elemento de índice ' + index);
  }
}

function removeError(index) {
  let campos = document.querySelectorAll('.required');
  let spans = document.querySelectorAll('.span-required');
  
  // Remova o estilo de erro no campo específico
  campos[index].style.border = '';
  spans[index].style.display = 'none';
}

// Função de validação específica do campo
function isValid(index) {
  let campo = document.querySelectorAll('.required')[index];
  // Implemente a lógica de validação específica do campo aqui
  // Exemplo: verificar se o valor do campo é válido
  return campo.value.length >= 2 && campo.value.length <= 40;
}


function nameValidate() {
  let campos = document.querySelectorAll('.required');
  if (campos[0].value.length < 2 || campos[0].value.length > 40) {
    setError(0);
    return false;
  } else {
    removeError(0);
    return true;
  }
}

function aboutValidate() {
  let campos = document.querySelectorAll('.required');
  if (campos[1].value.length < 2 || campos[1].value.length > 200) {
    setError(1);
    return false;
  } else {
    removeError(1);
    return true;
  }
}

function validateTitle() {
    let campos = document.querySelectorAll('.required');
    return campos[2].value.length >= 2 && campos[2].value.length <= 30;
}

function validateLink() {
    let campos = document.querySelectorAll('.required');
    const linkValue = campos[3].value.trim();
    return isValidURL(linkValue);
}

function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}

function validateForm() {
    const isTitleValid = validateTitle();
    const isLinkValid = validateLink();

    if (isTitleValid && isLinkValid) {
        // O formulário é válido, você pode prosseguir com o envio dos dados ou outra ação desejada.
    } else {
        // Exiba uma mensagem geral de erro ou ação apropriada, se necessário.
        // Não salve as informações se houver erros de validação.
    }
}

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  validateForm();
});

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
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

// Exemplo de uso:
const inputElement = document.getElementById('profileName');
const errorMessage = 'Por favor, preencha esse campo';

// Exibir erro
showInputError(inputElement, errorMessage);

// Ocultar erro
hideInputError(inputElement);

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

// Create a function that returns a template for a new card
function createCardTemplate(name, link) {
  const cardTemplate = `
    <div class="group-image">
      <img class="gallery-image" src="${link}" alt="${name}" data-type="auto" />
      <p class="group-text">${name}</p>
      <button class="button-like"></button>
      <button class="delete-button"></button>
    </div>
  `;
  return cardTemplate;
}
