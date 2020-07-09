document.addEventListener('DOMContentLoaded', function () {

    // header
    let div1 = document.createElement('div')
    div1.id = 'header'
    document.body.appendChild(div1)
    let pageTitle = document.createElement('h1')
    let slogan = document.createElement('h4')
    pageTitle.innerText = `Flew'd Out Flight Finder!`
    slogan.innerText = `Where you can get "Flew'd Out" for the low low!`
    div1.appendChild(pageTitle)
    div1.appendChild(slogan)



    // user input div
    let div2 = document.createElement('div')
    document.body.appendChild(div2)
    div2.id = 'flighSearch'

    // user input flight date

    let searchDate = document.createElement('input')
    searchDate.id = 'searchDate'
    searchDate.type = 'date'
    div2.appendChild(searchDate)

    // user input Destionation From

    let searchCityOutbound = document.createElement('input')
    searchCityOutbound.id = 'searchOutbound'
    searchCityOutbound.type = "text"
    searchCityOutbound.placeholder = "Destination From"
    div2.appendChild(searchCityOutbound)

    // user input Destionation To

    let searchCityInbound = document.createElement('input')
    searchCityInbound.id = 'searchInbound'
    searchCityInbound.type = "text"
    searchCityInbound.placeholder = "Destination To"
    div2.appendChild(searchCityInbound)


    // button

    let button = document.createElement('button')
    button.id = 'searchButton'
    button.innerText = "Search"
    button.style.color = "white"
    button.style.backgroundColor = 'green'
    div2.appendChild(button)





    document.getElementById(button.id).addEventListener('click', load)
    // after button is clicked

    function load() {

        // user search input values
        const flightDate = document.getElementById(searchDate.id).value
        const outBoundCity = document.getElementById(searchCityOutbound.id).value
        const inBoundCity = document.getElementById(searchCityInbound.id).value
        console.log(`${flightDate} ${outBoundCity} ${inBoundCity}`)
    }





})














