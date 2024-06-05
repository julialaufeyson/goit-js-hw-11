import{S as f,i as n}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();let m=new f(".gallery a",{captionsData:"alt",captionDelay:150,captionPosition:"bottom",widthRatio:.9,heightRatio:.8});function p(i){const o=document.querySelector(".gallery"),s=i.map(({webformatURL:r,largeImageURL:e,tags:t,likes:a,views:u,comments:d,downloads:h})=>`
  
        <div class="gallery-card">
            <li class="gallery-items">
                <a href="${e}">
                <img src="${r}" alt="${t}" class="gallery-img"></a>
                <div class="card-text-div">
                    <ul class="card-text-list">
                        <li class="card-text">
                            <h2>Likes</h2>
                            <p>${a}</p>
                        </li>
                        <li class="card-text">
                            <h2>Views</h2>
                            <p>${u}</p>
                        </li>
                        <li class="card-text">
                            <h2>Comments</h2>
                            <p>${d}</p>
                        </li>
                        <li class="card-text">
                            <h2>Downloads</h2>
                            <p>${h}</p>
                        </li>
                    </ul>
                </div>
                
            </li>
        </div>`).join("");o.insertAdjacentHTML("beforeend",s),m.refresh()}const y="43230635-158e2f6795128fbec19d81d21",g="https://pixabay.com/api/";function L(i){const o=new URLSearchParams({key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${g}?${o}`)}const c=document.querySelector(".search-form"),S=document.querySelector(".gallery"),l=document.querySelector(".loader");c.addEventListener("submit",b);l.hidden=!0;function b(i){i.preventDefault(),S.innerHTML="",l.hidden=!1;const{searchRequest:o}=i.currentTarget.elements;let s=o.value.trim();L(s).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()}).then(r=>{r.total?p(r.hits):n.error({title:"Error",position:"center",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(r=>{n.error({title:"Error",position:"topRight",message:"Oops! Something went wrong!"})}).finally(()=>{l.hidden=!0,c.reset()})}
//# sourceMappingURL=commonHelpers.js.map
