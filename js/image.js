let movieName = document.getElementById("text-string");
let btn = document.querySelector("#add-text");
let review = document.querySelector('#avatarlist');

//Function to fetch data from API 
btn.addEventListener('click',() => {
    getMovie();
})

let getMovie = () => {
    let movie = movieName.value;
    movie = encodeURIComponent(movie.trim())
    console.log(movie);
    let url = `http://127.0.0.1:8000/?prompt=${movie}`;
    if(movie.length <= 0) {
        review.innerHTML = `<h2 class="notice"> Please Enter A Prompt </h2>`;
    }
    else {
        fetch(url)
            .then((response) => response.json())
            .then(async (data) => {
                if(data.ok) {
                    data = await data.json();
                }
                console.log(data);
                review.innerHTML = `
                <h1 class="test">test</h1>
                    <img class="img-polaroid" src=${data[0]} alt="" />
                    <img class="img-polaroid" src=${data[1]} alt="" />
                    <img class="img-polaroid" src=${data[2]} alt="" />
                `
            }).catch(e => {
                review.innerHTML = `<h2 class="notice">Image does not found</h2>`
            })
            
        }
}