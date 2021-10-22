const darkModeBtn = document.querySelector('.mode')
const container = document.querySelector('.container')
const countries = document.querySelector('.countries')

//dark mode

darkModeBtn.addEventListener('click', () => {
    container.classList.toggle('dark-mode')    
})

//api call for getting all countries

const apiURL = 'https://restcountries.com/v2/all'

const getCountries = async () => {
    const response = await fetch(apiURL)

    const results = await response.json()

    console.log(results[10])

    results.forEach(result => {
        let box = document.createElement('div')
        countries.appendChild(box)
        let pop = new Intl.NumberFormat('en-US').format(`${result.population}`) 
        
        box.innerHTML = `
            <div class="flag">
                <img src="${result.flags.png}" alt="flag-${result.name}">
            </div>

            <div class="country-infos">
                <h2>${result.name}</h2>
                <p>Population: ${pop}</p>
                <p>Region: ${result.region}</p>
                <p>Capital: ${result.capital}</p>
            </div>
              
        `
        box.classList.add('box')
    })
}

getCountries()

// api call for getting all regions

// const apiURLRegions = 'https://restcountries.com/v2/continent/europe'

// const getRegions = async () => {
//     const res = await fetch (apiURLRegions)
//     const results = await res.json()

//     console.log(results)
// }

// getRegions()