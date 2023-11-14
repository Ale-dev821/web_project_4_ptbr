export default class Card {
  constructor(name, link) {
      this.name = name;
      this.link = link;
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
      imageElement.addEventListener('click', this._handleImageClick.bind(this));

      return cardTemplate;
  }

  _handleImageClick() {
      console.log(`Clicou na imagem: ${this.name}`);
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
