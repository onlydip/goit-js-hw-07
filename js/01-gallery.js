import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery')

function createMarkupItems(arr) {
    return arr.map(({preview,original,description}) =>
        `
    <li><img src="${preview}" alt="${description}" width="350">

</li>`
    ).join(' ')



}
list.insertAdjacentHTML('beforeend', createMarkupItems(galleryItems))
// createMarkup(galleryItems)
// console.log(galleryItems);


