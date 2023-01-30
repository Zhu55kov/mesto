class Card {
  constructor({ name, link }, elementTemplate) {
    this._name = name;
    this._link2photo = link;
    this._elementTemplate = elementTemplate;
    // this._description = description;
    // this._wastebasket = wastebasket;
    // this._like = like;
  }

  // const userCardElement = this._elementTemplate.querySelector(".element").cloneNode(true);

  _getTemplate() {
    return this._elementTemplate.querySelector(".element").cloneNode(true);
  }

  _setName() {
    this._newCard.querySelector(".element__title").textContent = this._name;
  }

  _getLink() {
    this._userCardElementPhoto = this._newCard.querySelector(".element__photo");
    this._userCardElementPhoto.src = this._link2photo;
  }

  _getAlt() {
    this._userCardElementPhoto = this._newCard.querySelector(".element__photo");
    this._userCardElementPhoto.alt = this._name;
  }

  _deleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _likeCard() {
    this._addLikeSign.classList.toggle("element__like_active");
  }

  _setEventListeners() {
    this._delButton
      .addEventListener("click", () => {
        this._deleteCard();
      });
      this._addLikeSign.addEventListener("click", () => {
        this._likeCard();
      });
  }

  getView() {
    this._newCard = this._getTemplate();
    this._delButton = this._newCard.querySelector(".element__trash")
    this._addLikeSign = this._newCard.querySelector(".element__like")
    this._setName();
    this._getLink();
    this._getAlt();
    this._setEventListeners();

    return this._newCard;
  }
}

export default Card;

// generateCard() {
//   this._element = this._getTemplate();
//   this._photoElement = this._element.querySelector('.element__photo');
//   this._elementLike = this._element.querySelector('.element__like');
//   this._elementDelete = this._element.querySelector('.element__delete')

//   this._photoElement.src = this._url;
//   this._photoElement.alt = this._title;
//   this._element.querySelector('.element__title').textContent = this._title;

//   this._setEventListeners();

//   return this._element;
// }

// _setEventListeners() {
//   // this._elementLike.addEventListener('click', () => this._changeLike());
//   // this._elementDelete.addEventListener('click', () => this._deleteCard());
//   this._photoElement.addEventListener('click', () => this._openImagePopup());
// }
