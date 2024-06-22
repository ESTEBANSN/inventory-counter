const hamburger1 = document.querySelector('.hamburger')
const imagenes = document.querySelectorall('.img-galeria')
const imagenesLight= document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.image-light')

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerimagen(imagen.getAttribute('src'));
    })
});

const aparecerimagen = (imagen)=> {
    imagenesLightLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showimage')
}
