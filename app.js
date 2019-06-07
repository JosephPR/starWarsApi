// const API_URL = "https://swapi.co/api/people";
// const data = fetch(API_URL)
// .then(function(response) {
//   return response.json()
// })
// .then(function(results) {
//   return results;
// });
//
//
// console.log(data)
// .then(function(response) {
//   return response.json()
// })
// .then(function(results) {
//   return results;
// });

async function fetchData() {
  const response = await fetch("https://swapi.co/api/people");
  const results = await response.json();
  return results;
}

function htmlTemplate(data) {
  console.log(data)
  const dataToAppend = data.results.reduce(function(acc,data) {
    let ele = `<article class="">
        <h2>${data.name}</h2><br>
        <p>BirthYear: ${data.birth_year}</p>
        <p>Height: ${Math.round(data.height / 30.48)}ft</p>
        <p>Eyes: ${data.eye_color}</p>

      </article>`;
    return acc += ele;
  },'');
return dataToAppend;
}


document.addEventListener("DOMContentLoaded", async function() {
  const root = document.getElementById('root');
const data = await fetchData();
const elements = htmlTemplate(data);
root.innerHTML = elements;
})
