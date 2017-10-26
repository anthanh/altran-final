'use strict';

(function() {

  $('#login').submit(function(event) {
    event.preventDefault();

    var isValid = true;

    $('form input').each(function(index, elem) {
      if (!elem.checkValidity()) {
        isValid = false;
        $(elem).parent().addClass('has-error');
        $(elem).parent().removeClass('has-success');
      } else {
        $(elem).parent().removeClass('has-error');
        $(elem).parent().addClass('has-success');
      }
    });

    if (isValid) {
      window.location = '/index.html';
    }

  });

})();
