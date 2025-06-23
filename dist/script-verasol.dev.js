"use strict";

function updateUspVisibility() {
  var hasActie = !!document.querySelector('.actie');
  document.querySelectorAll('.usp').forEach(function (el) {
    el.style.display = hasActie ? 'none' : '';
  });
  document.querySelectorAll(x - shape).forEach(function (el) {
    el.display = hasActie ? 'none' : '';
  });
} // bij laden


document.addEventListener('DOMContentLoaded', updateUspVisibility);