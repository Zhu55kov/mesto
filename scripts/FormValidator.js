class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._formInputs = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );
    this._buttonSubmit = this._formElement.querySelector(
      this._config.submitButtonSelector
    );
  }

  clearError() {
    this._formInputs.forEach((input) => this._hideInputError(input));

    // const formSpansList = Array.from(
    //   this._formElement.querySelectorAll(this._config.inputError)
    // );
    // formSpansList.forEach((span) => {
    //   span.textContent = "";
    // });
  }

  _showInputError(input) {
    const inputError = this._formElement.querySelector(`.${input.id}-error`);
    inputError.classList.add(this._config.errorClass);
    inputError.textContent = input.validationMessage;
    input.classList.add(this._config.inputErrorClass);
  }

  _hideInputError(input) {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);

    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = "";
    input.classList.remove(this._config.inputErrorClass);
  }

  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._hideInputError(input);
    } else {
      this._showInputError(input);
    }
  }

  _hasInvalidInput() {
    return this._formInputs.some((input) => {
      return !input.validity.valid;
    });
  }

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonSubmit.classList.add(this._config.inactiveButtonClass);
      this._buttonSubmit.disabled = true;
    } else {
      this._buttonSubmit.classList.remove(this._config.inactiveButtonClass);
      this._buttonSubmit.disabled = false;
    }
  }

  _setEventListeners() {
    this.toggleButtonState();

    this._formInputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this.toggleButtonState();
      });
    });
  }

  enableValidation(validationConfig) {
    this._setEventListeners();
  }
}

export default FormValidator;
