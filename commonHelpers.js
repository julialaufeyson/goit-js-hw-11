import{S as m,i as l}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(i){const r=document.querySelector(".gallery"),o=i.map(({webformatURL:e,largeImageURL:t,tags:a,likes:u,views:d,comments:f,downloads:h})=>`
  
        <div class="gallery-card">
            <li class="gallery-items">
                <a href="${t}">
                <img src="${e}" alt="${a}" class="gallery-img"></a>
                <div class="card-text-div">
                    <ul class="card-text-list">
                        <li class="card-text">
                            <h2>Likes</h2>
                            <p>${u}</p>
                        </li>
                        <li class="card-text">
                            <h2>Views</h2>
                            <p>${d}</p>
                        </li>
                        <li class="card-text">
                            <h2>Comments</h2>
                            <p>${f}</p>
                        </li>
                        <li class="card-text">
                            <h2>Downloads</h2>
                            <p>${h}</p>
                        </li>
                    </ul>
                </div>
                
            </li>
        </div>`).join("");r.insertAdjacentHTML("beforeend",o),new m(".gallery a",{captionsData:"alt",captionDelay:150,captionPosition:"bottom",widthRatio:.9,heightRatio:.8}).refresh()}function y(i){const r="44196331-e97f1baca858df1659672f5a2",o="https://pixabay.com/api/",s=new URLSearchParams({key:r,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`${o}?${s}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(e=>{e.total||l.error({title:"Error",position:"center",message:"Sorry, there are no images matching your search query. Please try again!"}),p(e.hits)}).catch(e=>{l.error({title:"Error",position:"topRight",message:"Oops! Something went wrong!"})}).finally(()=>loader.hidden=!0)}const n=document.querySelector(".search-form"),g=document.querySelector(".gallery"),c=document.querySelector(".loader");n.addEventListener("submit",L);c.hidden=!0;function L(i){i.preventDefault(),g.innerHTML="";const{searchRequest:r}=i.currentTarget.elements;let o=r.value;if(!o)return alert("This field can not be empty!");c.hidden=!1,y(o),n.reset()}
//# sourceMappingURL=commonHelpers.js.map
