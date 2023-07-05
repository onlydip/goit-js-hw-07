

import { galleryItems } from './gallery-items.js';
// Change code below this line

const listItems = document.querySelector('.gallery')

function createMarkupItems(arr) {
    return arr.map(({preview,original,description}) =>`
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    ).join(' ')
};


listItems.insertAdjacentHTML('beforeend', createMarkupItems(galleryItems));



const handlerClickItem = (event) => {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const originalImg = event.target.getAttribute("data-source");


let instance;
  const openModal = () => {
    instance = basicLightbox.create(
      `
    <img src="${originalImg}" width="600" height="600">`,
      
        {
        onShow: () => {
          window.addEventListener("keydown", closeModalByEsc);
        },
        onClose: () => {
          window.removeEventListener("keydown", closeModalByEsc);
        },
      }
    );
    instance.show();
  };

  const closeModalByEsc = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  };

  openModal();
};

listItems.addEventListener('click', handlerClickItem);



// createMarkup(galleryItems)
// console.log(galleryItems);


