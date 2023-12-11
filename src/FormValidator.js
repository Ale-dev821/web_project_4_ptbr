export default class FormValidator {
    constructor(formSelector, FormPopup) {
        this._formSelector = formSelector;
        this._openPopup = FormPopup;
        this._formElement = document.querySelector(this._formSelector);

        if (!this._formElement) {
            console.error(`Formulário com seletor '${this._formSelector}' não encontrado.`);
            return;
        }

        this._validationFunctions = [
            this._validateName.bind(this),
            this._validateAbout.bind(this),
            this._validateTitle.bind(this),
            this._validateLink.bind(this)
        ];

        this._formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            this.validateForm();
        });
    }

    _validateName() {
        let campos = this._formElement.querySelectorAll('.required');
        if (campos[0].value.length < 2 || campos[0].value.length > 40) {
            this._setError(campos[0], 'Por favor, preencha este campo corretamente');
            return false;
        } else {
            this._removeError(campos[0]);
            return true;
        }
    }

    _validateAbout() {
        let campos = this._formElement.querySelectorAll('.required');
        if (campos[1].value.length < 2 || campos[1].value.length > 200) {
            this._setError(campos[1], 'Por favor, preencha este campo corretamente');
            return false;
        } else {
            this._removeError(campos[1]);
            return true;
        }
    }

    _validateTitle() {
        let campos = this._formElement.querySelectorAll('.required');
        if (campos[2].value.length < 2 || campos[2].value.length > 30) {
            this._setError(campos[2], 'Por favor, preencha este campo corretamente');
            return false;
        } else {
            this._removeError(campos[2]);
            return true;
        }
    }

    _validateLink() {
        let campos = this._formElement.querySelectorAll('.required');
        const linkValue = campos[3].value.trim();
        if (!this._isValidURL(linkValue)) {
            this._setError(campos[3], 'Por favor, insira um endereço web válido');
            return false;
        } else {
            this._removeError(campos[3]);
            return true;
        }
    }

    _isValidURL(url) {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
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
        const errorSpan = inputElement.nextElementSibling;
        errorSpan.textContent = '';
        errorSpan.classList.remove('form__input-error_active');
    }
    
    
    validateForm = () => {        // ForEach para iterar sobre as funções de validação
        this._validationFunctions.forEach((validationFunction) => {
            validationFunction();
        });
    }
}