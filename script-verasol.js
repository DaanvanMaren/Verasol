document.addEventListener('DOMContentLoaded', function () {
  // Modal open/sluit
  document.querySelectorAll('.modal-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (!modal) return;

      const isOpen = modal.style.display === 'block';

      // Sluit alle andere modals en reset buttons
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

      const modalWidth = modal.offsetWidth || 300;
      const margin = 12;

      if (window.innerWidth <= 768) {
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
      } else {
        const container = this.closest('.media-2');
        const containerRect = container.getBoundingClientRect();
        const btnRect = this.getBoundingClientRect();

        const topPx = btnRect.top - containerRect.top;
        modal.style.top = topPx + 'px';

        const spaceRight = containerRect.right - btnRect.right;
        let leftPx;
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
  });

  // Sluit modal bij klik buiten modal-content
  document.addEventListener('click', function (event) {
    document.querySelectorAll('.modal').forEach(function (modal) {
      if (
        event.target === modal ||
        (modal.contains(event.target) && event.target.classList.contains('modal'))
      ) {
        modal.style.display = 'none';

        // Reset open-status
        document.querySelectorAll('.modal-btn').forEach(function (btn) {
          btn.classList.remove('open');
        });
      }
    });
  });

  // Sluit modal via X-knop (alleen zichtbaar op mobiel)
  document.querySelectorAll('.close-mobile').forEach(function (closeBtn) {
    closeBtn.addEventListener('click', function () {
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (!modal) return;

      modal.style.display = 'none';

      document.querySelectorAll('.modal-btn').forEach(function (btn) {
        if (btn.getAttribute('data-modal') === modalId) {
          btn.classList.remove('open');
        }
      });
    });
  });

  // USP's en x-shape-bg verbergen of tonen afhankelijk van .actie
  function updateVisibility() {
    const hasActie = !!document.querySelector('.actie');

    document.querySelectorAll('.usp').forEach(el => {
      el.style.display = hasActie ? 'none' : '';
    });

    document.querySelectorAll('.actie-vaantje-onderkant').forEach(container => {
      const shapeBg = container.querySelector('x-shape-bg');
      if (!shapeBg) return;
      shapeBg.style.display = hasActie ? '' : 'none';
    });
  }

  updateVisibility();
});
