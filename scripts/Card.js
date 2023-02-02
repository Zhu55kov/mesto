class Card {
  constructor({ name, link }, elementTemplate, openImagePopup) {
    this._name = name;
    this._link2photo = link;
    this._elementTemplate = elementTemplate;
    this._openPopup = openImagePopup;
  }

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

  _photoPopup() {
    this._openPopup(this._name, this._link2photo);
  }

  _setEventListeners() {
    this._delButton.addEventListener("click", () => {
      this._deleteCard();
    });

    this._addLikeSign.addEventListener("click", () => {
      this._likeCard();
    });

    this._image.addEventListener("click", () => {
      this._photoPopup();
    });
  }

  getView() {
    this._newCard = this._getTemplate();
    this._delButton = this._newCard.querySelector(".element__trash");
    this._addLikeSign = this._newCard.querySelector(".element__like");
    this._image = this._newCard.querySelector(".element__photo");

    this._setName();
    this._getLink();
    this._getAlt();
    this._setEventListeners();

    return this._newCard;
  }
}

export default Card;
