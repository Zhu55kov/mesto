const page = document.querySelector('.page');
const editButton = page.querySelector('.profile__edit-button');
const popup = page.querySelector('.popup');
const closeButton = page.querySelector('.popup__close');
const profileTitle = page.querySelector('.profile__title');
const profileSubtitle = page.querySelector('.profile__subtitle');
const inputName = page.querySelector('.popup__input_form_name');
const inputDescription = page.querySelector('.popup__input_form_description');
const formSubmit = page.querySelector('.popup__form');


function editForm() {
  popup.classList.add('popup_opened');
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;
};


function closeForm() {
  popup.classList.remove('popup_opened');
  console.log(popup);
};


function formSubmitHndlr(event) {
  event.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
  closeForm();
}
editButton.addEventListener('click', editForm);
closeButton.addEventListener('click', closeForm);
formSubmit.addEventListener('submit', formSubmitHndlr);
