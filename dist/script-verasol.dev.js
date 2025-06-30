"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // Modal open/sluit
  document.querySelectorAll('.modal-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var modalId = this.getAttribute('data-modal');
      var modal = document.getElementById(modalId);
      if (!modal) return;
      var isOpen = modal.style.display === 'block'; // Sluit alle andere modals en reset buttons

      document.querySelectorAll('.modal').forEach(function (m) {
        m.style.display = 'none';
      });
      document.querySelectorAll('.modal-btn').forEach(function (b) {
        b.classList.remove('open');
      });

      if (isOpen) {
        modal.style.display = 'none';
        this.classList.remove('open');
        return;
      }

      var modalWidth = modal.offsetWidth || 300;
      var margin = 12;

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
      this.classList.add('open');
    });
  }); // Sluit modal bij klik buiten modal-content

  document.addEventListener('click', function (event) {
    document.querySelectorAll('.modal').forEach(function (modal) {
      if (event.target === modal || modal.contains(event.target) && event.target.classList.contains('modal')) {
        modal.style.display = 'none'; // Reset open-status

        document.querySelectorAll('.modal-btn').forEach(function (btn) {
          btn.classList.remove('open');
        });
      }
    });
  }); // Sluit modal via X-knop (alleen zichtbaar op mobiel)

  document.querySelectorAll('.close-mobile').forEach(function (closeBtn) {
    closeBtn.addEventListener('click', function () {
      var modalId = this.getAttribute('data-modal');
      var modal = document.getElementById(modalId);
      if (!modal) return;
      modal.style.display = 'none';
      document.querySelectorAll('.modal-btn').forEach(function (btn) {
        if (btn.getAttribute('data-modal') === modalId) {
          btn.classList.remove('open');
        }
      });
    });
  }); // USP's en x-shape-bg verbergen of tonen afhankelijk van .actie

  function updateVisibility() {
    var hasActie = !!document.querySelector('.actie');
    document.querySelectorAll('.usp').forEach(function (el) {
      el.style.display = hasActie ? 'none' : '';
    });
    document.querySelectorAll('.actie-vaantje-onderkant').forEach(function (container) {
      var shapeBg = container.querySelector('x-shape-bg');
      if (!shapeBg) return;
      shapeBg.style.display = hasActie ? '' : 'none';
    });
  } // tekst bold maken voor scrollbare blokken


  var steps = document.querySelectorAll(".step-content");
  var links = document.querySelectorAll(".text-3");
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var step = entry.target.getAttribute("data-step");
        links.forEach(function (link) {
          link.classList.toggle("active", link.getAttribute("data-step") === step);
        });
      }
    });
  }, {
    threshold: 1 // Aangepast op basis van wanneer het blok echt "in beeld" is

  });
  steps.forEach(function (step) {
    return observer.observe(step);
  });
  updateVisibility();
});