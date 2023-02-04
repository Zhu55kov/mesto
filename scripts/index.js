import Card from "./Card.js";
import { initialCards } from "./cardsArray.js";
import { validationConfig } from "./cardsArray.js";
import FormValidator from "./FormValidator.js";

const page = document.querySelector(".page");

const elementTemplate = page.querySelector("#element").content;

const elementsPlaces = page.querySelector(".elements");
const popups = page.querySelectorAll(".popup");
const profileTitle = page.querySelector(".profile__title");
const profileSubtitle = page.querySelector(".profile__subtitle");

const editionButton = page.querySelector(".profile__edit-button");

const additionButton = page.querySelector(".profile__add-button");

const infoPopup = page.querySelector(".info-popup");
const infoPopupForm = infoPopup.querySelector(".info-popup__form");

const infoPopupInputName = infoPopupForm.querySelector(
  ".info-popup__input-name"
);

const infoPopupInputDescription = infoPopupForm.querySelector(
  ".info-popup__input-description"
);

const cardPopup = page.querySelector(".card-popup");
const cardPopupForm = cardPopup.querySelector(".card-popup__form");
const cardPopupInputName = cardPopupForm.querySelector(
  ".card-popup__input-name"
);
const cardPopupInputDescription = cardPopupForm.querySelector(
  ".card-popup__input-src"
);

const closeButtons = document.querySelectorAll(".popup__close");
const cardPopupFormButton = cardPopupForm.querySelector(
  ".card-popup__form-button"
);
const cardPopupFormInputs = Array.from(
  cardPopupForm.querySelectorAll(".popup__input")
);

const photoPopup = page.querySelector(".photo-popup");
const photoPopupFigcaption = photoPopup.querySelector(".popup__figcaption");
const popupPhotograph = photoPopup.querySelector(".popup__photograph");

function createCard(cardObject, templateSelector, popup) {
  const newCard = new Card(cardObject, templateSelector, popup);
  return newCard.getView();
}

initialCards.forEach((el) => {
  const readyCard = createCard(el, "#element", openImagePopup);
  addCard(elementsPlaces, readyCard);
});

function addCard(place, card) {
  place.prepend(card);
}

function editInfoForm(popup) {
  infoPopupInputName.value = profileTitle.textContent;
  infoPopupInputDescription.value = profileSubtitle.textContent;
  openPopup(popup);
}

function handleTheFormCardSubmitHandler(event) {
  event.preventDefault();

  const myCard = {
    name: cardPopupInputName.value,
    link: cardPopupInputDescription.value,
  };

  closePopup(cardPopup);
  cardPopupForm.reset();
  formCardValidator.toggleButtonState();

  const readyCard = createCard(myCard, "#element", openImagePopup);
  addCard(elementsPlaces, readyCard);
}

additionButton.addEventListener("click", () => {
  cardPopupForm.reset();
  formCardValidator.clearError();
  openPopup(cardPopup);
});

cardPopupForm.addEventListener("submit", handleTheFormCardSubmitHandler);

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupWithEsc);
}

function closePopupWithEsc(evt) {
  if (evt.keyCode === 27) {
    const openPopup = document.querySelector(".popup_opened");
    closePopup(openPopup);
  }
}

function closePopupWithOverlay(evt) {
  if (evt.target.classList.contains("popup_opened")) {
    closePopup(evt.target);
  }
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupWithEsc);
}

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

popups.forEach((popup) => {
  popup.addEventListener("mouseup", closePopupWithOverlay);
});

function handleTheFormInfoSubmitHandler(event) {
  event.preventDefault();
  profileTitle.textContent = infoPopupInputName.value;
  profileSubtitle.textContent = infoPopupInputDescription.value;

  closePopup(infoPopup);
  infoPopupForm.reset();
}

editionButton.addEventListener("click", () => {
  infoPopupForm.reset();
  formInfoValidator.clearError();
  editInfoForm(infoPopup);
});

infoPopupForm.addEventListener("submit", handleTheFormInfoSubmitHandler);

function openImagePopup(title, url) {
  photoPopupFigcaption.textContent = title;
  popupPhotograph.src = url;
  popupPhotograph.alt = title;

  openPopup(photoPopup);
}

const formInfoValidator = new FormValidator(validationConfig, infoPopupForm);
formInfoValidator.enableValidation();

const formCardValidator = new FormValidator(validationConfig, cardPopupForm);
formCardValidator.enableValidation();
