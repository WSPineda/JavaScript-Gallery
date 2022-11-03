//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

import {gallery} from './movies'

for (let m of gallery) {
    let m_thumb = document.getElementById('c' + m.id);
    m_thumb.innerHTML = `
        <img src="${m.poster}" alt="${m.title}" class="img-thumbnail"/>
    `
    m_thumb.onclick = function(){
        displayMovie(m);
    }
}
let featured_movie = document.querySelector(".featured");

function displayMovie(movie) {
    featured_movie.innerHTML = `
            <div class="card">
            
                <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
    <div class="card-body">
    <div class="card-header">${movie.title}</div>
      <p class="card-text">"I have a pretty good memory, but memories are time beings, too, like cherry blossoms or ginkgo leaves; for a while they are beautiful and then they and die." </p>
    </div>
  </div>
    `

}
function searchMovies(event){
    event.preventDefault();
    let input = document.querySelector('[type="search"]').value || "";
    let count = 0;
    for(let m of movies){
        if(m.title.toUpperCase().indexOf(input.toUpperCase()) == -1){
            document.querySelector('#m${m.id}').classList.add('d-none')
        }
        else{
            document.querySelector('#m${m.id}').classList.remove('d-none')
            count++;
        }
    }
    featured_movie.innerHTML = count == 0 ? 'Nothing was found' : ''
}

