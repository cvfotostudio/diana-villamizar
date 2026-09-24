// Interacciones pequeñas: menú móvil y preparación del correo de contacto.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuButton && navigation) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
    navigation.classList.remove('is-open');
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); });
}

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const feedback = document.querySelector('#form-feedback');
    if (!contactForm.checkValidity()) {
      feedback.textContent = 'Revisa los campos obligatorios y escribe un mensaje de al menos 10 caracteres.';
      contactForm.reportValidity();
      return;
    }

    const fields = new FormData(contactForm);
    const subject = `Consulta fotográfica de ${fields.get('nombre')}`;
    const body = `Nombre: ${fields.get('nombre')}\nCorreo: ${fields.get('correo')}\nTeléfono: ${fields.get('telefono') || 'No indicado'}\n\nMensaje:\n${fields.get('mensaje')}`;
    const mailto = `mailto:hola@cvfotostudio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    feedback.textContent = 'Se abrirá tu aplicación de correo con el mensaje preparado. Recuerda enviarlo desde allí.';
    window.location.href = mailto;
  });
}

