class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        // Criando elementos de imagem e legenda
        this._image = document.createElement('img');
        this._image.classList.add('popup__image');
        this._caption = document.createElement('p');
        this._caption.classList.add('popup__caption');
    }

    open(imageSrc, imageCaption) {
        // Configurando a imagem e a legenda
        this._image.src = imageSrc;
        this._image.alt = imageCaption;
        this._caption.textContent = imageCaption;

        // Limpando o conteúdo anterior e adicionando a imagem e legenda ao popup
        this._popup.innerHTML = ''; // Removendo qualquer conteúdo anterior
        this._popup.appendChild(this._image);
        this._popup.appendChild(this._caption);

        // Chamar o método open da classe base
        super.open();
    }
}

const popupDeImagem = new PopupWithImage('#meuPopupDeImagem');
popupDeImagem.setEventListeners();

// Para abrir o popup com uma imagem e legenda
popupDeImagem.open('caminho/para/imagem.jpg', 'Legenda da Imagem');
