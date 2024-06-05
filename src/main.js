import { fetchImages } from "./js/pixabay-api";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createGalleryMarkup } from './js/render-functions';

const form = document.querySelector(".search-form");
const galleryList = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

form.addEventListener("submit", onSubmit);
loader.hidden = true;

function onSubmit(event) {
    event.preventDefault();

    galleryList.innerHTML = "";
    loader.hidden = false;
    const { searchRequest } = event.currentTarget.elements;
    let searchQuery = searchRequest.value.trim();

    fetchImages(searchQuery)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        if (!data.total) {
          iziToast.error({
            title: 'Error',
            position: 'center',
            message: 'Sorry, there are no images matching your search query. Please try again!',
          });
        } else {
          createGalleryMarkup(data.hits);
        }
      })
      .catch(error => {
        iziToast.error({
          title: 'Error',
          position: 'topRight',
          message: 'Oops! Something went wrong!',
        });
      })
      .finally(() => {
        loader.hidden = true;
        form.reset();
      });
}