const darkModeBtn = document.querySelector('.mode')
const container = document.querySelector('.container')
const countries = document.querySelector('.countries')
const listCountries = []
const selectBtn = document.querySelector('#region-select')

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
        listCountries.push(box)
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

//filter by region

selectBtn.addEventListener('change', () => {
    listCountries.forEach(country => {
        if(!country.innerText.includes(selectBtn.value)){
            country.style.display = 'none'   
        } else {
            country.style.display = 'block'
        }
    })
})

