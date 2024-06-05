import { createGalleryMarkup } from './render-functions';

export const KEY_API = '43230635-158e2f6795128fbec19d81d21';
export const URL = 'https://pixabay.com/api/';

export function fetchImages(searchQuery) {
  const searchParams = new URLSearchParams({
    key: KEY_API,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${URL}?${searchParams}`);
}