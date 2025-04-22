document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById('menu-icon');
    const menuHamburguesa = document.getElementById('menu-hamburguesa');
    const cerrarMenu = document.getElementById('cerrar-menu');
  
    // Abrir menú
    menuIcon.addEventListener('click', () => {
      menuHamburguesa.style.display = 'flex';
      menuIcon.style.display = 'none';
      //document.body.style.overflow = 'hidden'; // Bloquear scroll de fondo
    });
  
    // Cerrar menú
    cerrarMenu.addEventListener('click', () => {
      menuHamburguesa.style.display = 'none';
      menuIcon.style.display = 'flex';
      document.body.style.overflow = ''; // Restaurar scroll
    });
  
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('#menu-hamburguesa a').forEach(link => {
      link.addEventListener('click', () => {
        menuHamburguesa.style.display = 'none';
        menuIcon.style.display = 'flex';
        document.body.style.overflow = '';
      });
    });
  
    // Si vuelve a tamaño de pantalla grande, ocultar menú hamburguesa
    window.addEventListener('resize', () => {
      if (window.innerWidth > 568) {
        menuHamburguesa.style.display = 'none';
        menuIcon.style.display = 'none'; // Este ícono no debe verse en pantalla completa
        document.body.style.overflow = '';
      } else {
        menuIcon.style.display = 'flex';
      }
    });
  });
  