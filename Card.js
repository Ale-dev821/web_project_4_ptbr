export default class Card {
    createTemplate(name, link) {
      return `
        <div class="group-image">
          <img class="gallery-image" src="${link}" alt="${name}" data-type="auto" />
          <p class="group-text">${name}</p>
          <button class="button-like"></button>
          <button class="delete-button"></button>
        </div>
      `;
    }
  
    removeCard(event) {
      const deleteButton = event.target;
      const groupImage = deleteButton.closest(".group-image");
  
      if (groupImage) {
        groupImage.remove();
      }
    }
  
}
  