const endpoints = 'https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/refs/heads/master/countries.json'

let cities = [];


// it return a promise
console.log(endpoints)
fetch(endpoints)
    .then(blob => blob.json())
    .then(data => cities.push(...data))
// console.log(blob);



function findMatches(wordMatch, cities)
{
    return cities.filter(place  => {
        const regex = new RegExp(wordToMatch , 'gi');
        return place.city.match(regex) || place.state.match(regex)
    });
}

function displayMatches()
{
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        return `
            <li>
                <span class="name"> ${place.city}, ${place.state}</span>
                <span class="population">${place.population}</span>
            </li>
        `;
    }).join('');
}

const searchInput = document.querySelector('.search');
const suggestion = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches)
suggestion.addEventListener('keyup', displayMatches)