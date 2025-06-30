const addImageBtn = document.getElementById('addImageBtn');
const removeImageBtn = document.getElementById('removeImageBtn');
const imageURL = document.getElementById('imageURL');
const gallery = document.getElementById('gallery');

addImageBtn.addEventListener('click', () => {
  const url = imageURL.value.trim();
  if (url) {
    const img = document.createElement('img');
    img.src = url;

    img.addEventListener('click', () => {
      deselectImages();
      img.classList.add('selected');
    });

    gallery.appendChild(img);
    imageURL.value = '';
  } else {
    alert('Por favor ingresa una URL válida.');
  }
});

removeImageBtn.addEventListener('click', () => {
  const selectedImage = document.querySelector('.gallery img.selected');
  if (selectedImage) {
    gallery.removeChild(selectedImage);
  } else {
    alert('No hay ninguna imagen seleccionada.');
  }
});

function deselectImages() {
  const images = document.querySelectorAll('.gallery img');
  images.forEach(img => img.classList.remove('selected'));
}

// Atajo: Presionar Enter en el input para agregar imagen
imageURL.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addImageBtn.click();
  }
});
