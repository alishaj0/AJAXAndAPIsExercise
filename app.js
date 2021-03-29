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
        const jokeJS2 = res.data[0];
        p3.innerText = res.data[0].setup;
        p4.innerText = res.data[0].punchline;
    })
    .catch(err => {
        console.log(err);
    }); 



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

const baseEndpoint = `http://api.tvmaze.com/`;
const id = `38963`;
const season = `1`;
const number = `8`;
const episodeSearchURL = `shows/${id}/episodebynumber?season=${season}&number=${number}`;
const fullEndpoint = baseEndpoint + episodeSearchURL

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

const body = document.querySelector(`body`);
let img = new Image();
const div = document.createElement('div');
body.append(div);

img.onload = function() {
    div.appendChild(img);
}
img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";

/*
const body = document.querySelector(`body`);
let img = new Image();
let div = document.createElement('div');
body.append(div);
img.onload = function() {
    div.appendChild(img);
};
img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
*/