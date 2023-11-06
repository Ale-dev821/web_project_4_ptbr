export default class FormValidator {

    constructor (formSelector, FormPopup) {
        this._formSelector = formSelector;
        this._openPopup = FormPopup;
        this._formElement = document.querySelector(this._formSelector);
    }

    _getTemplate() {
        const formElement = document.querySelector(this._formSelector)
        return formElement;
    }

    generateValidation() {
        this._element = this._getTemplate();
        console.log (this)
    }
    
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
    if (campos[2].value.length < 2 || campos[2].value.length > 30) {
      setError(2);
      return false;
    } else {
      removeError(2);
      return true;
    }
  }
  
  function validateLink() {
    let campos = document.querySelectorAll('.required');
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
  
  function validateForm() {
    const isNameValid = validateName();
    const isAboutValid = validateAbout();
    const isTitleValid = validateTitle();
    const isLinkValid = validateLink();
  
    if (isNameValid && isAboutValid && isTitleValid && isLinkValid) {
      // O formulário é válido, você pode prosseguir com o envio dos dados ou outra ação desejada.
    } else {
      // Exiba uma mensagem geral de erro ou ação apropriada, se necessário.
      // Não salve as informações se houver erros de validação.
    }
  }
  