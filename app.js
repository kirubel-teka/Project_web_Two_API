const jokeBtn = document.getElementById('jokeBtn');
const jokeText = document.getElementById('jokeText');


jokeBtn.addEventListener('click', ()=>{

	console.log('clicked the button');
	const url = "http://api.icndb.com/jokes/random";
	fetch(url)
	.then(res => {
		return res.json()
	}).then(data =>{
		console.log(data.value.joke);
		jokeText.innerHTML = data.value.joke;
	})
});