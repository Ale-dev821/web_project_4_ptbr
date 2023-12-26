// formvalidator.js

export default class FormValidator {
    constructor(formSelector, formSubmitCallback) {
        this._formElement = document.querySelector(formSelector);

        if (!this._formElement) {
            console.error(`Formulário com seletor '${formSelector}' não encontrado.`);
            return;
        }

        this._formSubmitCallback = formSubmitCallback;

        this._formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            this.validateForm();
        });
    }

    _validateName() {
        const nameField = this._formElement.querySelector('#profileName');
        if (nameField.value.length < 2 || nameField.value.length > 40) {
            this._setError(nameField, 'Por favor, preencha este campo corretamente');
            return false;
        } else {
            this._removeError(nameField);
            return true;
        }
    }

    _validateAbout() {
        const aboutField = this._formElement.querySelector('#profileAbout');
        if (aboutField.value.length < 2 || aboutField.value.length > 200) {
            this._setError(aboutField, 'Por favor, preencha este campo corretamente');
            return false;
        } else {
            this._removeError(aboutField);
            return true;
        }
    }

    _setError(inputElement, errorMessage) {
        inputElement.classList.add('form__input_type_error');
        const errorSpan = document.getElementById(`${inputElement.id}Error`);
        errorSpan.textContent = errorMessage;
        errorSpan.style.display = 'block';
    }

    _removeError(inputElement) {
        inputElement.classList.remove('form__input_type_error');
        const errorSpan = document.getElementById(`${inputElement.id}Error`);
        errorSpan.textContent = '';
        errorSpan.style.display = 'none';
    }

    validateForm = () => {
        const isNameValid = this._validateName();
        const isAboutValid = this._validateAbout();

        if (isNameValid && isAboutValid) {
            this._formSubmitCallback();
        }
    }
}
