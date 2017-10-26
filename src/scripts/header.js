'use strict';

(function () {

  $('#search').submit(function (event) {
    event.preventDefault();
    var value = $('#search input').val();
    alert(value);
  });

})();
