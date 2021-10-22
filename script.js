//dark mode

const darkModeBtn = document.querySelector('.mode')
const container = document.querySelector('.container')
const countries = document.querySelector('.countries')


darkModeBtn.addEventListener('click', () => {
    container.classList.toggle('dark-mode')    
})

//api call

const apiURL = 'https://restcountries.com/v2/all'

const getCountries = async () => {
    const response = await fetch(apiURL)

    const results = await response.json()

    console.log(results)

    results.forEach(result => {
        let box = document.createElement('div')
        countries.appendChild(box)
        
        box.innerHTML = `
            <p>${result.name}</p>
            <p>${result.capital}</p>
        `
        box.classList.add('box')
    })
}

getCountries()