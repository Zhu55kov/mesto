const page = document.querySelector(".page");
const editButton = page.querySelector(".profile__edit-button");
const popup = page.querySelector(".popup");
const closeButton = page.querySelector(".popup__close");
const profileTitle = page.querySelector(".profile__title");
const profileSubtitle = page.querySelector(".profile__subtitle");
const form = page.querySelector(".popup__form");
const inputName = form.querySelector(".popup__input_info_name");
const inputDescription = form.querySelector(".popup__input_data_name");

function editForm() {
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;
  popup.classList.add("popup_opened");
}

function closeForm() {
  popup.classList.remove("popup_opened");
}

function formSubmitHandler(event) {
  event.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
  closeForm();
}

editButton.addEventListener("click", editForm);
closeButton.addEventListener("click", closeForm);
form.addEventListener("submit", formSubmitHandler);
