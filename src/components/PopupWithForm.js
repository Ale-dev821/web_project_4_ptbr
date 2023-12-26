class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitCallback) {
        super(popupSelector);
        this._handleSubmitCallback = handleSubmitCallback;
        this._form = this._popup.querySelector('.form'); // Assumindo que o formulário tem a classe 'form'
        this._inputs = Array.from(this._form.querySelectorAll('input'));
    }

    _getInputValues() {
        // Coleta os valores dos campos de entrada
        return this._inputs.reduce((values, input) => {
            values[input.name] = input.value;
            return values;
        }, {});
    }

    setEventListeners() {
        // Adiciona manipulador de evento de submit ao formulário
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this._handleSubmitCallback(this._getInputValues());
        });

        // Chama setEventListeners da classe pai para adicionar outros ouvintes
        super.setEventListeners();
    }

    close() {
        // Redefine o formulário ao fechar o popup
        this._form.reset();
        super.close();
    }
}

const formPopup = new PopupWithForm('#meuPopupDeFormulario', (formData) => {
    // Lógica para lidar com os dados do formulário
    console.log(formData);
});

formPopup.setEventListeners();
