'use strict';

(function() {

  var nameInput = document.getElementById('name');
  var phoneInput = document.getElementById('phone');
  var submitButton = document.getElementById('form-submit');

  /* Форма заказа POP-UP*/
  var request1 = document.getElementById('request-1');
  var request2 = document.getElementById('request-2');
  var request3 = document.getElementById('request-3');
  var popup = document.querySelector('.overlay');

  if (request1) {
    request1.addEventListener('click', function(event) {
      event.preventDefault();
      popup.classList.add('overlay--show');
    });
  }

  if (request2) {
    request2.addEventListener('click', function(event) {
      event.preventDefault();
      popup.classList.add('overlay--show');
    });
  }

  if (request3) {
    request3.addEventListener('click', function(event) {
      event.preventDefault();
      popup.classList.add('overlay--show');
    });
  }
  /*Конец формы заказа POP-UP*/

  _disableForm();
  nameInput.onblur = function() {
    if (_checkField(nameInput)) {
      _borderRedHide(nameInput);
    } else {
      _borderRedShow(nameInput);
    }
    validateForm();
  };

  phoneInput.onblur = function() {
    if (_checkPhone(phoneInput)) {
      _borderRedHide(phoneInput);
    } else {
      _borderRedShow(phoneInput);
    }
    validateForm();
  };

  function validateForm() {
    _disableForm();
    if (_checkField(nameInput) && _checkPhone(phoneInput)) {
      _enableForm();
    } else {
      _disableForm();
    }
  }

  // Disabling form
  function _disableForm() {
    submitButton.setAttribute('disabled', 'disabled');
  }


  // Enabling form
  function _enableForm() {
    submitButton.removeAttribute('disabled');
  }

  function _borderRedShow(input) {
    input.style.border = '1px solid rgba(255, 0, 0, 0.5)';
  }

  function _borderRedHide(input) {
    input.style.border = 'none';
  }

  function _checkField(name) {
    var nameLength = name.value.length;
    if (nameLength < 1 && name.required) {
      return false;
    } else {
      return true;
    }
  }


  function _checkPhone(phone) {
    var regExp = /^\d[\d\(\)\ -]{4,14}\d$/;
    var phoneChecked = phone.value;
    if (regExp.test(phoneChecked)) {
      return true;
    } else {
      return false;
    }
  }


})();
