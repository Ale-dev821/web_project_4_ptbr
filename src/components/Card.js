export default class Card {
    constructor(name, link, handleCardClick) {
        this.name = name;
        this.link = link;
        this._handleCardClick = handleCardClick; // Função passada para o construtor
    }

    _createTemplate() {
        // Crie o elemento div do card
        const cardTemplate = document.createElement('div');
        cardTemplate.classList.add('group-image');

        // Crie o elemento de imagem
        const imgElement = document.createElement('img');
        imgElement.classList.add('gallery-image');
        imgElement.src = this.link;
        imgElement.alt = this.name;
        imgElement.setAttribute('data-type', 'auto');

        // Crie o elemento de parágrafo
        const textElement = document.createElement('p');
        textElement.classList.add('group-text');
        textElement.textContent = this.name;

        // Crie os botões
        const likeButton = document.createElement('button');
        likeButton.classList.add('button-like');

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');

        // Adicione o evento de clique à imagem
        imgElement.addEventListener('click', () => this._handleCardClick(this.name, this.link));

        // Adicione todos os elementos ao card
        cardTemplate.appendChild(imgElement);
        cardTemplate.appendChild(textElement);
        cardTemplate.appendChild(likeButton);
        cardTemplate.appendChild(deleteButton);

        return cardTemplate;
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
