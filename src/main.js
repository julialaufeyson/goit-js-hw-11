
import onSearch from "./js/pixabay-api";

const form = document.querySelector(".search-form");
const galleryList = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

form.addEventListener("submit", onSubmit);
loader.hidden = true;

function onSubmit(event) {
    event.preventDefault();
    
    galleryList.innerHTML = "";
    const { searchRequest } = event.currentTarget.elements;
    let searchQuery = searchRequest.value;
    if (!searchQuery) {
        return alert('This field can not be empty!');
    }
    loader.hidden = false;
 
    onSearch(searchQuery);
    form.reset();
}