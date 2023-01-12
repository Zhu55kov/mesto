// Находим в разметке содержательный блок и назыаем его page
const page = document.querySelector(".page");

// Находим id #element и задаем переменную для шаблона
const elementTemplate = page.querySelector("#element").content;

// Находим место вставки новых элементов в html-разметке и задаем соответствующую переменную
const elementsPlaces = page.querySelector(".elements");

// Находим profile title и subtitle и назначаем переменные для них
const profileTitle = page.querySelector(".profile__title");
const profileSubtitle = page.querySelector(".profile__subtitle");

// Находим кнопку редактирования профиля Жак-Ив Кусто и назначаем переменную для нее
const editionButton = page.querySelector(".profile__edit-button");

// Находим кнопку добавления новой карточки нового места и назначаем переменную для нее
const additionButton = page.querySelector(".profile__add-button");

// Находим кнопку закрытия попапа карточки Жак Ив Кусто и задаем переменную
const closureButtonInfo = page.querySelector(".info-popup__close");

// находим кнопку закрытия попапа добавления новой карточки нового места и задаем переменную
const closureButtonForm = page.querySelector(".card-popup__close");

// Попап инфо
const infoPopup = page.querySelector(".info-popup");
const infoPopupForm = infoPopup.querySelector(".info-popup__form");
const infoPopupInputName = infoPopupForm.querySelector(
  ".info-popup__input-name"
);
const infoPopupInputDescription = infoPopupForm.querySelector(
  ".info-popup__input-description"
);
const infoPopupFormButton = infoPopupForm.querySelector(
  ".info-popup__form-button"
);
const infoPopupFormTitle = infoPopup.querySelector(".info-popup__title");
const infoPopupCloseButton = infoPopup.querySelector(".info-popup__close");

// Попап добавления картинки;
const cardPopup = page.querySelector(".card-popup");
const cardPopupForm = cardPopup.querySelector(".card-popup__form");
const cardPopupInputName = cardPopupForm.querySelector(
  ".card-popup__input-name"
);
const cardPopupInputDescription = cardPopupForm.querySelector(
  ".card-popup__input-src"
);
const cardPopupCloseButton = cardPopup.querySelector(".card-popup__close");

const cardPopupFormButton = cardPopupForm.querySelector(".card-popup__form-button");

const cardPopupFormInputs = Array.from(cardPopupForm.querySelectorAll(".popup__input"));

const cardsPopupFormSpanTitle = cardPopupForm.querySelector(".card-title-error");

// Функция создания 'скелета' любой карточки
function createAnyCard(card) {
  const userCardElement = elementTemplate
    .querySelector(".element")
    .cloneNode(true);

  const userCardElementPhoto = userCardElement.querySelector(".element__photo");

  userCardElementPhoto.src = card.link;
  userCardElement.querySelector(".element__title").textContent = card.name;
  userCardElementPhoto.alt = card.name;

  const like = userCardElement.querySelector(".element__like");
  addLikeSign(like);
  const delButton = userCardElement.querySelector(".element__trash");
  deleteElement(delButton);
  addElementPhoto(userCardElementPhoto);

  return userCardElement;
}
// Попап и переменные для открытия/закрытия фотографии карточки места
const photoPopup = page.querySelector(".photo-popup");
const photoPopupFigcaption = photoPopup.querySelector(".popup__figcaption");
const popupPhotograph = photoPopup.querySelector(".popup__photograph");
const photoPopupClose = photoPopup.querySelector(".photo-popup__close");

function addElementPhoto(el) {
  el.addEventListener("click", function (event) {
    popupPhotograph.src = event.target.src;
    popupPhotograph.alt = event.target.alt;
    photoPopupFigcaption.textContent = event.target.alt;
    openPopup(photoPopup);
  });
}

// функция добавления класса с ключом _active для чекбокса 'сердечко'
function addLikeSign(el) {
  el.addEventListener("click", function (event) {
    event.target.classList.toggle("element__like_active");
  });
}

// Функция удаления карточки
function deleteElement(el) {
  el.addEventListener("click", function (event) {
    event.target.closest(".element").remove();
  });
}

initialCards.forEach((el) => {
  const fullCard = createAnyCard(el);
  addCard(elementsPlaces, fullCard);
});

// Функция добавления новой каротчки в начало списка
function addCard(place, card) {
  place.prepend(card);
}

function handleTheFormCardSubmitHandler(event) {
  event.preventDefault();

  const myCard = {
    name: cardPopupInputName.value,
    link: cardPopupInputDescription.value,
  };
  closePopup(cardPopup);
  cardPopupForm.reset();

  const fullCard = createAnyCard(myCard);
  addCard(elementsPlaces, fullCard);
}

function editInfoForm(popup) {
  infoPopupInputName.value = profileTitle.textContent;
  infoPopupInputDescription.value = profileSubtitle.textContent;
  openPopup(popup);
}

function closePopupWithEsc(evt) {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup);
  }
}

function closePopupWithOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    const openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup);
  }
}

// Функция закрытия всех попапов
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closePopupWithEsc);
  document.removeEventListener('mouseup', closePopupWithOverlay);
}
// Функция окрытия всех попапов
function openPopup(popup) {

  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupWithEsc);
  document.addEventListener('mouseup', closePopupWithOverlay);
}

function clearError(form) {

  const formInputsList = Array.from(form.querySelectorAll('.popup__input'));
  formInputsList.forEach((input) => {
    input.classList.remove('popup__input_type_error');
  })

  const formSpansList = Array.from(form.querySelectorAll('.popup__input-error'));
  formSpansList.forEach((span) => {
    span.textContent = ''
  })
}

// Функция для редактирования данных пользователя
function handleTheFormInfoSubmitHandler(event) {
  event.preventDefault();
  profileTitle.textContent = infoPopupInputName.value;
  profileSubtitle.textContent = infoPopupInputDescription.value;

  closePopup(infoPopup);
  infoPopupForm.reset();
}

// открывает infoPopup (с карандашом)
editionButton.addEventListener("click", () => {
  infoPopupForm.reset();
  clearError(infoPopupForm);
  editInfoForm(infoPopup);
});

// закрывает infoPopup
closureButtonInfo.addEventListener("click", () => {
  closePopup(infoPopup);

});

// сабмитит форму infoPopup с данными пользователя
infoPopupForm.addEventListener("submit", handleTheFormInfoSubmitHandler);

// открывает cardPopup (с плюсом)
additionButton.addEventListener("click", () => {
  cardPopupForm.reset();
  clearError(cardPopupForm);
  toggleButtonState(cardPopupFormInputs, cardPopupFormButton, validationConfig);
  openPopup(cardPopup);
});

// закрывает cardPopup
closureButtonForm.addEventListener("click", () => {
  closePopup(cardPopup);
});

// submit...
cardPopupForm.addEventListener("submit", handleTheFormCardSubmitHandler);
// cardPopupForm

// закрывает photoPopup
photoPopupClose.addEventListener("click", () => closePopup(photoPopup));

