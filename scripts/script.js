const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const page = document.querySelector(".page");
const editButton = page.querySelector(".profile__edit-button");
const popup = page.querySelector(".popup");
const closeButton = page.querySelector(".popup__close");
const profileTitle = page.querySelector(".profile__title");
const profileSubtitle = page.querySelector(".profile__subtitle");
// const form = page.querySelector('.popup__form');
// const inputName = form.querySelector('.popup__input_data_name');
// const inputDescription = form.querySelector('.popup__input_data_job');

function editForm() {
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;
  popup.classList.add("popup_opened");
}

function closeForm() {
  popup.classList.remove("popup_opened");
}

// function formSubmitHandler(event) {
//   event.preventDefault();
//   profileTitle.textContent = inputName.value;
//   profileSubtitle.textContent = inputDescription.value;
//   closeForm();
// }

// editButton.addEventListener("click", editForm);
// closeButton.addEventListener("click", closeForm);
// form.addEventListener("submit", formSubmitHandler);

const elementTemplate = document.querySelector("#element").content;
//нашли конкретный темплейт под айди элемент и взяли только его содержимое

const elementInsert = page.querySelector(".elements");
//Нашли в элементе пейдж место вставки всех карточек

function insertCard() {
  initialCards.forEach((el) => {
    console.log(el.name);
    console.log(el.link);

    const userCardElement = elementTemplate
      .querySelector(".element")
      .cloneNode(true);
    //клонировали шаблон карточки для заполнения содержимым

    userCardElement.querySelector(".element__photo").src = el.link;
    //находим место для вставки фото и 'приравниваем' как переменную к новому значению - которое = src ...
    userCardElement.querySelector(".element__title").textContent = el.name;
    //нашли место для вставки названия и 'приравниваем' как переменную к новому значению - которое =

    elementInsert.append(userCardElement);
  });
}
insertCard();

// ниже пойдет скрипт для popup

const cardTemplate = document.querySelector("#popup").content;
//предположительно нашли темплейт ПОПАПА

const cardInsert = page.querySelector(".popup");
//Нашли в секции HTML - пейдж - место вставки ЛЮБОГО из попапов (?) Поэтому название переменной ОК

const cardForm = popup.querySelector(".popup__form");

const form = popup.querySelector(".popup__form");
console.log(cardForm);
const inputName = form.querySelector(".popup__input_data_name");
console.log(inputName);
const inputDescription = form.querySelector(".popup__input_data_job");
