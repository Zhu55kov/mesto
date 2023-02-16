import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, popupSubmitCb) {
    super(selector);
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = Array.from(this._form.querySelectorAll(".popup__input"));
    this._popupSubmitCb = popupSubmitCb;
  }

  _getInputValues() {
   const values = {};
   this._inputList.forEach((input) => {
    values[input.name] = input.value;
   });
   return (values);
  }

setEventListeners() {
  super.setEventListeners();
  this._form.addEventListener('submit', (event) => {
    event.preventDefault();

    this.popupSubmitCb(this._getInputValues())
  });
}

}
