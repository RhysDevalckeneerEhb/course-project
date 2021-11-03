'use strict';

let baseurl = `https://api.themoviedb.org/3/search/movie`;
let list = [];

window.onload = function(){
    console.log('window loaded!');

    document.getElementById('searchform').addEventListener('submit', event => {
        event.preventDefault();
        let html = '';
        let url = baseurl + `?api_key=ace96559b8fb0dd613fdfd48023afa84&query=${document.getElementById('input').value}`;
        // log url to check
        // console.log(url)

        // get data
        getData(url).then(movie => {
            // push data to array
            list = movie.results;
            // loop over movies
            for(let movie of list) {
                html += `
                    <div class='col-md-2' style="margin:1% 0;border-radius:6px">
                        <div class="movie" style="border-radius:6px">
                            <div class="movie-image" style="position:relative">
                                <div class="icon-background" style="background-color:rgba(239, 246, 255, .8);position:absolute;top:5%;right:5%;z-index:999;border-radius:2px;padding:6px 8px">
                                    <i class="far fa-bookmark fa-lg" style="color:#2563EB"></i>
                                </div>
                                
                                <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="${movie.title} movie poster" style="width:100%">
                            </div>
                            <!-- <div class="movie-image">
                                <h6>${movie.title}</h6>
                            </div> -->
                        </div>
                    </div>
                `;

                document.getElementById('movielist').innerHTML = html;
                // console.log(`movie: ${movie.title}`);
            }
            // console.log(list);
        })
    });
}

async function getData(url) {
    let response = await fetch(url);
    return await response.json();
}