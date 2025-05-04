document.querySelector('.hamburger').addEventListener('click', () => {
    console.log("Hamburguer just clicked!");
    document.querySelector('.nav-links').classList.toggle('expanded');
  });