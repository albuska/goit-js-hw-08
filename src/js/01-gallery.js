// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const containerRef = document.querySelector('.gallery');

containerRef.addEventListener('click', onTargetItemClick); 

const imagesList = createGalleryItem(galleryItems);

function onTargetItemClick(event) {
    event.preventDefault();
if(event.target.nodeName !== 'IMG') {
    return; 
 }
}

function createGalleryItem(items) {
    return items.map(item => 
    `<a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
    </a>`).join('');
    }

containerRef.innerHTML = imagesList;

    let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
});

