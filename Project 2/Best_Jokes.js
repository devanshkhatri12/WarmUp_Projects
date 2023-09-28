
const jokes = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')


const generatejokes = async () => {

    try{
        const SetHeader =  {
            headers: {
                accept: "application/json"
            }
        }
    
        const res =  await fetch('https://icanhazdadjoke.com/', SetHeader)
        const data = await res.json();
        jokes.innerHTML = data.joke;
    }catch(error){
        console.log(`th error is ${error}`);
    }
}

jokeBtn.addEventListener('click' , generatejokes);
generatejokes();        



