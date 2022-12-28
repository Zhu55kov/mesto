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
const editButton = page.querySelector(".profile__edit-button");

// Находим кнопку добавления новой карточки нового места и назначаем переменную для нее
const addButton = page.querySelector(".profile__add-button");

// Находим кнопку закрытия попапа карточки Жак Ив Кусто и задаем переменную
const closeButtonInfo = page.querySelector(".info-popup__close");

// находим кнопку закрытия попапа добавления новой карточки нового места и задаем переменную
const closeButtonCard = page.querySelector(".card-popup__close");

// Попап инфо
const infoPopup = page.querySelector(".info-popup");
const infoPopupForm = infoPopup.querySelector(".info-popup__form");
const infoPopupInputName = infoPopupForm.querySelector(
  ".info-popup__input_form_name"
);
const infoPopupInputDescription = infoPopupForm.querySelector(
  ".info-popup__input_form_description"
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
  ".card-popup__input_form_name"
);
const cardPopupInputDescription = cardPopupForm.querySelector(
  ".card-popup__input_form_description"
);
const cardPopupCloseButton = cardPopup.querySelector(".card-popup__close");

// Функция создания 'скелета' любой карточки
function anyCard(card) {
  const userCardElement = elementTemplate
    .querySelector(".element")
    .cloneNode(true);

  userCardElement.querySelector(".element__photo").src = card.link;
  userCardElement.querySelector(".element__title").textContent = card.name;
  userCardElement.querySelector(".element__photo").alt = card.name;

  const like = userCardElement.querySelector(".element__like");
  elLike(like);
  const delButton = userCardElement.querySelector(".element__trash");
  elDel(delButton);
  const img = userCardElement.querySelector(".element__photo");
  elImg(img);

  return userCardElement;
}
// Попап и переменные для открытия/закрытия фотографии карточки места
const photoPopup = page.querySelector(".photo-popup");
const photoPopupFigcaption = photoPopup.querySelector(".popup__figcaption");
const popupPhotograph = photoPopup.querySelector(".popup__photograph");
const photoPopupClose = photoPopup.querySelector(".photo-popup__close");

function elImg(el) {
  el.addEventListener("click", function (event) {
    popupPhotograph.src = event.target.src;
    popupPhotograph.alt = event.target.alt;
    photoPopupFigcaption.textContent = event.target.alt;
    openPopup(photoPopup);
  });
}

// функция добавления класса с ключом _active для чекбокса 'сердечко'
function elLike(el) {
  el.addEventListener("click", function (event) {
    event.target.classList.toggle("element__like_active");
  });
}

// Функция удаления карочки
function elDel(el) {
  el.addEventListener("click", function (event) {
    event.target.closest(".element").remove();
  });
}

initialCards.forEach((el) => {
  const fullCard = anyCard(el);
  addCard(elementsPlaces, fullCard);
});

// Функция добавления новой каротчки в начало списка
function addCard(place, card) {
  place.prepend(card);
}

function formCardSubmitHandler(event) {
  event.preventDefault();
  const myCard = {
    name: cardPopupInputName.value,
    link: cardPopupInputDescription.value,
  };
  closePopup(cardPopup);

  const fullCard = anyCard(myCard);
  addCard(elementsPlaces, fullCard);
}

function editInfoForm(popup) {
  infoPopupInputName.value = profileTitle.textContent;
  infoPopupInputDescription.value = profileSubtitle.textContent;
  openPopup(popup);
}

// Функция закрытия всех попапов
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
// Функция окрытия всех попапов
function openPopup(popup) {
  popup.classList.add("popup_opened");
}
// Функция для редактирования данных пользователя
function formInfoSubmitHandler(event) {
  event.preventDefault();
  profileTitle.textContent = infoPopupInputName.value;
  profileSubtitle.textContent = infoPopupInputDescription.value;

  closePopup(infoPopup);
}

// открывает infoPopup (с карандашом)
editButton.addEventListener("click", () => editInfoForm(infoPopup));

// закрывает infoPopup
closeButtonInfo.addEventListener("click", () => closePopup(infoPopup));

// сабмитит форму infoPopup с данными пользователя
infoPopupForm.addEventListener("submit", formInfoSubmitHandler);

// открывает cardPopup (с плюсом)
addButton.addEventListener("click", () => openPopup(cardPopup));

// закрывает cardPopup
closeButtonCard.addEventListener("click", () => closePopup(cardPopup));

// submit...
cardPopupForm.addEventListener("submit", formCardSubmitHandler);

// закрывает photoPopup
photoPopupClose.addEventListener("click", () => closePopup(photoPopup));
