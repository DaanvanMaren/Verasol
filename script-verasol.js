function updateUspVisibility() {
    const hasActie = !!document.querySelector('.actie');
    document.querySelectorAll('.usp').forEach(el => {
      el.style.display = hasActie ? 'none' : '';
    });
    document.querySelectorAll(x-shape).forEach(el =>{
        el.display = hasActie ? 'none': '';
    })
  }

  // bij laden
  document.addEventListener('DOMContentLoaded', updateUspVisibility);