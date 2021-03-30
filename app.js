// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p8 = document.createElement(`p`);
first.append(p1);
first.append(p2);
first.append(p8);

const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);    
console.log(jokeJS1);
p1.innerText = jokeJS1.setup;
p2.innerText = jokeJS1.punchline, 
p8.innerHTML = `&#128518;`;   



// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);

axios.get(`https://official-joke-api.appspot.com/jokes/programming/random`)
    .then(res => {
            // 'res' is parameter that will hold the jokeJS2 value
        const jokeJS2 = res;
    // For whatever reason the programming joke api is coming back in an array which requires data[index].setup etc. 
        p3.innerText = jokeJS2.data[0].setup;
        p4.innerText = jokeJS2.data[0].punchline;
    })   
    .catch(err => console.log(err)); 

/*

axios.get(`https://official-joke-api.appspot.com/jokes/random`)
  .then(res => {
    const jokeJS2 = res;
    console.log(jokeJS2);
    // This jokes/random api isn't returning data in the same format as the programming one above - just returning an object/ not an array.
    p3.innerText = jokeJS2.data.setup;
    p4.innerText = jokeJS2.data.punchline;
  })
  .catch(err => console.log(err));
*/


// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);

async function jokeFunc() {
    try {
        const jokeJS3 = await axios.get(`https://official-joke-api.appspot.com/random_joke`);
        p5.innerText = jokeJS3.data.setup;
        p6.innerText = jokeJS3.data.punchline;
    } catch (err) {
        console.log(err);
    }
}
jokeFunc();



// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

const id = `38963`;
const season = `1`;
const number = `8`;
const rootURL = `http://api.tvmaze.com/`;
const epidsodeByNumberURL = `shows/${id}/episodebynumber?season=${season}&number=${number}`;
const fullEndpoint = rootURL + epidsodeByNumberURL;
// const fullURL = `http://api.tvmaze.com/shows/${id}/episodebynumber?season=${season}&numbers=${number}`;

async function tvMazeFunc() {
    try {
        const mando = await axios.get(fullEndpoint);
        console.log(mando.data);
        p7.innerText = mando.data.name;
    } catch (err) {
        console.log(err);
    }
}
tvMazeFunc();





// BONUS 

// "GET" img from pokiAPI
const body = document.querySelector(`body`);
const img = document.createElement(`img`);
body.append(img);
async function pokeFunc() {
    try {
        const pokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`);
        img.src = pokeData.data.sprites.other.dream_world.front_default;
        // img.src = pokeData.data.sprites.front_default;
    } catch (err) {
        console.log(err);
    }
}
pokeFunc();


// Img using direct url 
/*
const body = document.querySelector(`body`);
let img = new Image();
const div = document.createElement('div');
body.append(div);

img.onload = function() {
    div.append(img);
}
img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
*/