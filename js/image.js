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
                const bet = document.createElement('div');
                const res = document.createElement('div');
                res.innerHTML = `
                    <img class="img-polaroid" src=${data[0]} alt="" />
                    <img class="img-polaroid" src=${data[1]} alt="" />
                    <img class="img-polaroid" src=${data[2]} alt="" />
                `
                res.addEventListener('click', mokup);
                console.log(res);
                bet.append(res);
                review.appendChild(bet);
                // review.innerHTML = `
                //     <img class="img-polaroid" src="https://pbxt.replicate.delivery/uUfDowfxbPjKDUuxY6JmoFSpUwhyLV98Iz05dfmweVmOfUjNC/out-0.png" alt="" />
                //     <img class="img-polaroid" src=${data[0]} alt="" />
                //     <img class="img-polaroid" src=${data[1]} alt="" />
                //     <img class="img-polaroid" src=${data[2]} alt="" />
                // `
            }).catch(e => {
                review.innerHTML = `<h2 class="notice">Image does not found</h2>`
            })
            
        }
}

function mokup(e) {
    console.log("clicked");
      var el = e.target;
      /*temp code*/
      var offset = 50;
    var left = fabric.util.getRandomInt(0 + offset, 200 - offset);
    var top = fabric.util.getRandomInt(0 + offset, 400 - offset);
    var angle = fabric.util.getRandomInt(-20, 40);
    var width = fabric.util.getRandomInt(30, 50);
    var opacity = (function(min, max){ return Math.random() * (max - min) + min; })(0.5, 1);
      fabric.Image.fromURL(el.src, function(image) {
          image.set({
            left: 0,
            top: 0,
            angle: 0,
            padding: 0,
            cornersize: 0,
                hasRotatingPoint:true
          });
          image.scale(getRandomNum(0.1, 0.25)).setCoords();
          canvas.add(image);
        });
}	  		  