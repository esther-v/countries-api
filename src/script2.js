//récupérer nom du pays cliqué, dans l'url
let nameCountry = window.location.href.split("?")[1]
console.log(nameCountry)

//redirect homepage
function goHome() {
    window.location.href="../index.html"
}

//get country infos
const getCountryDetails = async () => {
    const response = await fetch(`https://restcountries.com/v2/name/${nameCountry}`)
    if(!response.ok) {
        throw new Error("could not fetch data, please refresh page")
    }
    const details = await response.json()
    const infos = details[0]
    console.log(infos)
    let content = document.createElement('div')
    const main = document.querySelector('main')
    main.appendChild(content)
    let borders = infos.borders
    console.log(borders)
   
    
    content.innerHTML = `
        <img src=${infos.flags.png}>
        <div class="country-details">
            <h2>${infos.name}</h2>
            <div class="infos">
                <div className="name">
                    <p>Native Name: <span> ${infos.nativeName}</span></p>
                    <p>Population: <span>${infos.population}</span></p>
                    <p>Region: <span>${infos.region}</span></p>
                    <p>Sub Region: <span>${infos.subregion}</span></p>
                    <p>Capital: <span>${infos.capital}</span></p>
                </div>
                <div className="domain">
                    <p>Top Level Domain: <span> ${infos.topLevelDomain[0]} </span></p>
                   
                    <p>Currencies: <span>${infos.currencies[0].name}</span></p>
                       
                    <p>Languages: <span>${infos.languages[0].name}</span></p>
                </div>
                
            </div>
            <div class="country-borders">
                <p>Border Countries: </p>
              
                
                ${borders.map((border) => {
                    return`
                        <span class="border">${border}</span>
                    `
                }).join("")}
             
         
            </div>
            
        </div>
        ` 
}

getCountryDetails()