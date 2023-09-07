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
    console.log('Valor de profileName:', profileName.value);
    console.log('Valor de profileAbout:', profileAbout.value);

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

const addButtons = document.querySelectorAll('.add-button');

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });
});
