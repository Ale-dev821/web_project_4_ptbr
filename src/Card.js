export default class Card {
    constructor(name, link, handleCardClick) {
        this.name = name;
        this.link = link;
        this._handleCardClick = handleCardClick; // Função passada para o construtor
    }

    _createTemplate() {
        const cardTemplate = document.createElement('div');
        cardTemplate.classList.add('group-image');

        cardTemplate.innerHTML = `
            <img class="gallery-image" src="${this.link}" alt="${this.name}" data-type="auto" />
            <p class="group-text">${this.name}</p>
            <button class="button-like"></button>
            <button class="delete-button"></button>
        `;

        const imageElement = cardTemplate.querySelector('.gallery-image');
        imageElement.addEventListener('click', () => this._handleCardClick(this.name, this.link));

        return cardTemplate;
    }

    // Esta função agora chama a função _handleCardClick passada pelo construtor
    _handleImageClick() {
        this._handleCardClick(this.name, this.link);
    }

    appendTo(container) {
        const cardElement = this._createTemplate();
        container.appendChild(cardElement);
    }

    removeCard(event) {
        const deleteButton = event.target;
        const groupImage = deleteButton.closest('.group-image');

        if (groupImage) {
            groupImage.remove();
        }
    }
}
