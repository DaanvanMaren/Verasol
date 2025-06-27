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
} // bij paginaload


document.addEventListener('DOMContentLoaded', updateVisibility); // modal JS
// mobiel groote aangeven

function isMobile() {
  return window.innerWidth <= 768;
} // modal-btn selecteren


document.querySelectorAll('.modal-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var modalId = this.getAttribute('data-modal');
    var modal = document.getElementById(modalId);
    if (!modal) return; // Toggle: sluit als al open

    if (modal.style.display === 'block') {
      modal.style.display = 'none';
      return;
    }

    var modalWidth = modal.offsetWidth || 300;
    var margin = 12; // modal midden in het scherm als hij op mobiel staat

    if (window.innerWidth <= 768) {
      modal.style.top = '50%';
      modal.style.left = '50%';
      modal.style.transform = 'translate(-50%, -50%)';
    } else {
      var container = this.closest('.media-2');
      var containerRect = container.getBoundingClientRect();
      var btnRect = this.getBoundingClientRect();
      var topPx = btnRect.top - containerRect.top;
      modal.style.top = topPx + 'px';
      var spaceRight = containerRect.right - btnRect.right;
      var leftPx;

      if (spaceRight < modalWidth + margin) {
        leftPx = btnRect.left - containerRect.left - modalWidth - margin;
      } else {
        leftPx = btnRect.right - containerRect.left + margin;
      }

      modal.style.left = leftPx + 'px';
      modal.style.transform = 'none';
    }

    modal.style.display = 'block';
  });
}); // Sluit modals via X

document.querySelectorAll('.close').forEach(function (span) {
  span.addEventListener('click', function () {
    var modalId = this.getAttribute('data-modal');
    var modal = document.getElementById(modalId);

    if (modal) {
      modal.style.display = 'none';
    }
  });
}); // Sluit modals bij klik buiten de modal-content

document.addEventListener('click', function (event) {
  document.querySelectorAll('.modal').forEach(function (modal) {
    if (event.target === modal || modal.contains(event.target) && event.target.classList.contains('modal')) {
      modal.style.display = 'none';
    }
  });
});