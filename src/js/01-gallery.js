// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


console.log(galleryItems);
const galleryRef = document.querySelector(`.gallery`);

galleryRef.innerHTML = createGalleryMurkup(galleryItems);

    
function createGalleryMurkup(el) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"" />
   </a>
</li>
`}).join(``);
};

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
