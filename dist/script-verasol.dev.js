"use strict";

function updateVisibility() {
  var hasActie = !!document.querySelector('.actie'); // 1) USP togglen

  document.querySelectorAll('.usp').forEach(function (el) {
    el.style.display = hasActie ? 'none' : '';
  }); // 2) x-shape-bg onder .actie-vaantje-onderkant togglen

  document.querySelectorAll('.actie-vaantje-onderkant').forEach(function (container) {
    var shapeBg = container.querySelector('x-shape-bg');
    if (!shapeBg) return; // als er géén .actie is, verberg; anders toon

    shapeBg.style.display = hasActie ? '' : 'none';
  });
}

function updateVisibilityTwee() {
  var hasActie = !!document.querySelector('.actie-categorie'); // 1) USP togglen

  document.querySelectorAll('.usp2').forEach(function (el) {
    el.style.display = hasActie ? 'none' : '';
  }); // 2) x-shape-bg onder .actie-vaantje-onderkant togglen

  document.querySelectorAll('.actie-vaantje-onderkant').forEach(function (container) {
    var shapeBg = container.querySelector('x-shape-bg');
    if (!shapeBg) return; // als er géén .actie is, verberg; anders toon

    shapeBg.style.display = hasActie ? '' : 'none';
  });
} // bij paginaload


document.addEventListener('DOMContentLoaded', updateVisibility);
document.addEventListener('DOMContentLoaded', updateVisibilityTwee);