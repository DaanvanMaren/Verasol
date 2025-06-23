function updateVisibility() {
    const hasActie = document.querySelector('.actie') !== null;
    const hasUsp   = document.querySelector('.usp')   !== null;

    const uspEl   = document.querySelector('.usp');
    const actieEl = document.querySelector('.actie');

    if (uspEl) {
      uspEl.style.display = hasActie ? 'none' : '';
    }
    if (actieEl) {
      actieEl.style.display = hasUsp ? 'none' : '';
    }
  }

  document.addEventListener('DOMContentLoaded', updateVisibility);
