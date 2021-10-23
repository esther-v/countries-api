//récupérer nom du pays cliqué, dans l'url
let nameCountry = window.location.href.split("?")[1]
console.log(nameCountry)

//redirect homepage
function goHome() {
    window.location.href="index.html"
}

//get country infos
const getCountryDetails = async () => {
    const response = await fetch(`https://restcountries.com/v2/name/${nameCountry}`)
    const details = await response.json()
    const infos = details[0]
    console.log(infos)
    let content = document.createElement('div')
    const main = document.querySelector('main')
    main.appendChild(content)
    content.innerHTML = `
        <img src=${infos.flags.png}>
        <p>${infos.name}</p>
    `
}

getCountryDetails()