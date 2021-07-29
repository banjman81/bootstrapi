const doggoButton = $('.doggo-button')
const randomWeatherButton = $('.random-weather-button')
const dogContent = $('.dog-display')
const weatherContent = $('.weather-display')
const weatherImg = $('.main-weather img')
const weatherImage = $('img.weather-display')
const wind = $('.wind')
const temp = $('.temp')
const desc = $('.desc')
const wind1 = $('.wind1')
const temp1 = $('.temp1')
const wind2 = $('.wind2')
const temp2 = $('.temp2')
const wind3 = $('.wind3')
const temp3 = $('.temp3')
const search = $('.search')
const textSearch = $(':input[type="text"]')
const hidden = $('.hidden')
const regex = /[a-zA-z]/


doggoButton.on('click', function(){
    console.log('clicked')
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (rawData){
        return rawData.json()
    })
    .then(function (data) {
        dogContent.attr('src', `${data.message}`)
    });
})
const cityArr = ['cancun', 'chicago', 'curitiba', 'atlanta', 'london', 'kingston', 'paris', 'bangkok', 'tokyo']
randomWeatherButton.on('click', function(){
    console.log('clicked')
    let rand = rng(cityArr.length)
    console.log(rand)
    fetch(`https://goweather.herokuapp.com/weather/${cityArr[rand]}`)
    .then(function (rawData){
        return rawData.json()
    })
    .then(function (data) {
        weatherImage.remove()
        if(data.description === 'span'){
            wind.text(`not found`)
            temp.text(`${data.temperature} ${data.description} --${data.forecast[0].wind}--${data.forecast[1].wind}--${data.forecast[2].wind}`)
        }
        else{
            hidden.removeClass('hidden')
            if(data.description === "Sunny" ){
                weatherImg.attr('src', 'img/sunny.png')
            }
            else if(data.description === "Patchy light rain with thunder" ){
                weatherImg.attr('src', 'img/thunder-rain.png')
            }
            else if(data.description === "Partly cloudy" ){
                weatherImg.attr('src', 'img/partly-cloudy.png')
            }
            else if(data.description === "Patchy rain possible" ){
                weatherImg.attr('src', 'img/cloudy.png')
            }
            desc.text(`${data.description}`)
            wind.text(`${data.wind}`)
            temp.text(`${data.temperature}`)
            temp1.text(`${data.forecast[0].temperature}`)
            temp2.text(`${data.forecast[1].temperature}`)
            temp3.text(`${data.forecast[2].temperature}`)
            wind1.text(`${data.forecast[0].wind}`)
            wind2.text(`${data.forecast[1].wind}`)
            wind3.text(`${data.forecast[2].wind}`)
        }
    });
})

function rng(m){
    return Math.floor(Math.random()*m)
}


