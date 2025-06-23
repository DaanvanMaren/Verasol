"use strict";

function updateVisibility() {
  var hasActie = document.querySelector('.actie') !== null;
  var hasUsp = document.querySelector('.usp') !== null;
  var uspEl = document.querySelector('.usp');
  var actieEl = document.querySelector('.actie');

  if (uspEl) {
    uspEl.style.display = hasActie ? 'none' : '';
  }

  if (actieEl) {
    actieEl.style.display = hasUsp ? 'none' : '';
  }
}