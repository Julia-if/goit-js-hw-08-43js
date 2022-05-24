// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
const refs = {
    gallery: document.querySelector('.gallery'),
    image: document.querySelector('.gallery__image')
}

function galleryItemsMarkUp(galleryItems) {
    return galleryItems.map(
        ({ original, preview, description }) => {
            return `<a class="gallery__item" 
            href=${original}>
        <img class="gallery__image"
         src=${preview} 
         alt=${description} />
      </a>
    `
        }
    ).join("");
};
const markUp = galleryItemsMarkUp(galleryItems);
refs.gallery.innerHTML = markUp;

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionType: 'attr', captionDelay: "250" });