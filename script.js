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
    var editProfilePopup = document.getElementById('editProfilePopup');
    editProfilePopup.classList.toggle('popup-enter');
    editProfilePopup.style.display = 'block';
  }
  
  function closeEditPopup() {
    var editProfilePopup = document.getElementById('editProfilePopup');
    editprofilePopup.classList.toggle('popup-exit');
    setTimeout(function() {
      editProfilePopup.style.display = 'none';
      Popup.classList.remove('popup-enter', 'popup-exit');
    }, 500);
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
  var addPopup = document.getElementById('addPopup');
  addPopup.classList.toggle('popup-enter');
  addPopup.style.display = 'block';
}

function closeAddPopup() {
  var addPopup = document.getElementById('addPopup');
  addPopup.classList.toggle('popup-exit');
  setTimeout(function() {
    addPopup.style.display = 'none';
    addPopup.classList.remove('popup-enter', 'popup-exit');
  }, 500);
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

    galleryImage.src = newLink;

    galleryImage.alt = newTitle;

    document.querySelector('.group-text').textContent = newTitle;

    addPopup.style.display = 'none';
  } else {
  }
});

// Enviar a imagem do servidor externo do JavaScript para o HTML
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];

// Função para preencher as imagens a partir de initialCards
function fillImages() {
  const photoGrid = document.getElementById('photoGrid');
  photoGrid.innerHTML = ''; // Limpa o conteúdo atual
  
  initialCards.forEach(card => {
    const groupImageHTML = `
      <div class="group-image">
        <img class="gallery-image" src="${card.link}" alt="${card.name}" data-type="auto">
        <p class="group-text">${card.name}</p>
        <button class="button-like" data-default="" data-hover="" data-active=""></button>
        <button class="delete-button" data-active=""></button>
      </div>
    `;
    
    photoGrid.innerHTML += groupImageHTML;
  });
}

// Chame a função para preencher as imagens
fillImages();
;

const imageButtons = document.querySelectorAll('.button-like');

imageButtons.forEach(button => {
    button.addEventListener('click', () => {
    button.classList.toggle('active');
    });
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
    lightboxImage.style.maxHeight = "90vh";
  });
});

closeButton.addEventListener("click", function () {
    lightbox.style.display = "none";
});