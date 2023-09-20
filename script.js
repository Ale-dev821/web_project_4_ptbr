const editButton = document.querySelector('.edit-button');

editButton.addEventListener('click', () => {
    editButton.classList.toggle('active');
});

const editProfilePopup = document.querySelector('#editProfilePopup');
const closePopupButton = document.querySelector('.close-button');
const saveProfileButton = document.querySelector('#saveProfileButton');
const profileName = document.querySelector('#profileName');
const profileAbout = document.querySelector('#profileAbout');


editButton.addEventListener('click', () => {
    profileName.value = document.querySelector('.title-intro').textContent;
    profileAbout.value = document.querySelector('.subtitle-intro').textContent; 
});

saveProfileButton.addEventListener('click', () => {
    document.querySelector('.title-intro').textContent = profileName.value;
    document.querySelector('.subtitle-intro').textContent = profileAbout.value;
    editProfilePopup.style.display = 'none';
});

function checkLocalStorage() {
    const savedName = localStorage.getItem('profileName');
    const savedAbout = localStorage.getItem('profileAbout');
    
    if (savedName) {
      document.querySelector('.title-intro').textContent = savedName;
      document.querySelector('.profile-intro h2').textContent = savedAbout;
    }
  }
  
  function openEditPopup() {
    document.getElementById('editProfilePopup').classList.add('popup_opened');
  }
  
  function saveProfile() {
    const newName = document.getElementById('profileName').value;
    const newAbout = document.getElementById('profileAbout').value;
  
    if (newName) {
      document.querySelector('.title-intro').textContent = newName;
      localStorage.setItem('profileName', newName);
    }
  
    if (newAbout) {
      document.querySelector('.profile-intro h2').textContent = newAbout;
      localStorage.setItem('profileAbout', newAbout);
    }
  
    closeEditPopup();
  }
  
  function closeEditPopup() {
    document.getElementById('editProfilePopup').classList.remove('popup_opened');
  }
  
  document.querySelector('.edit-button').addEventListener('click', openEditPopup);
  document.getElementById('saveProfileButton').addEventListener('click', saveProfile);
  document.getElementById('closePopupButton').addEventListener('click', closeEditPopup);
  
  checkLocalStorage();
  
function openEditProfilePopup() {
    editProfilePopup.classList.add('popup_opened');
}

function closeEditProfilePopup() {
    editProfilePopup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openEditProfilePopup);
closePopupButton.addEventListener('click', closeEditProfilePopup);

const imageButtons = document.querySelectorAll('.button-like');

imageButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });
});

const addButton = document.querySelector('.add-button');
const addPopup = document.querySelector('.add-popup');
const addItemButton = document.getElementById('addItemButton');
const closeAddPopupButton = document.getElementById('closeAddPopupButton');
const imageElement = document.querySelector('.gallery-image');
const itemTitle = document.querySelector('#itemTitle');
const itemLink = document.querySelector('#itemLink');

addButton.addEventListener('click', () => {
    openAddPopup();
});

addItemButton.addEventListener('click', () => {
    closeAddPopup();
});

closeAddPopupButton.addEventListener('click', () => {
    closeAddPopup();
});

function openAddPopup() {
    addPopup.style.display = 'block';
}

function closeAddPopup() {
    addPopup.style.display = 'none';
}

addButton.addEventListener('click', () => {
  itemTitle.value = document.querySelector('itemTitle').textContent;
});

addItemButton.addEventListener('click', () => {
  document.querySelector('.group-text').textContent = itemTitle.value;
  document.querySelector('.gallery-image').textContent = itemLink.value;
  addPopup.style.display = 'none';
});

addItemButton.addEventListener('click', () => {
  const newTitle = itemTitle.value;
  const newLink = itemLink.value;

  if (newTitle && newLink) {
    const galleryImage = document.querySelector('.gallery-image');

    galleryImage.src = novoLink;

    galleryImage.alt = novoTitulo;

    document.querySelector('.group-text').textContent = novoTitulo;

    addPopup.style.display = 'none';
  } else {
  }
});

// Função para remover um cartão
function removeCart(event) {
  const botaoExclusao = event.target;
  const groupImage = botaoExclusao.closest('.group-image');

  if (groupImage) {
    groupImage.remove(); 
  }
}

const botoesExclusao = document.querySelectorAll('.delete-button');

botoesExclusao.forEach((botao) => {
  botao.addEventListener('click', removeCart);
});

const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.getElementById("close-button");

galleryImages.forEach(function (galleryImage) {
    galleryImage.addEventListener("click", function () {
        lightbox.style.display = "block";
        lightboxImage.src = this.src;

        lightboxImage.style.maxWidth = "90%";
        lightboxImage.style.maxHeight = "90vh"; // 90% da altura da janela
    });
});

closeButton.addEventListener("click", function () {
    lightbox.style.display = "none";
});


