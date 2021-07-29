const doggoButton = $('.doggo-button')
const randomWeatherButton = $('.random-weather-button')
const dogContent = $('.dog-display')
const weatherContent = $('.weather-display')
const weatherImage = $('img.weather-display')
const city = $('.city')
const temp = $('.temp')
const search = $('.search')
const textSearch = $(':input[type="text"]')
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

randomWeatherButton.on('click', function(){
    console.log('clicked')
    fetch('https://goweather.herokuapp.com/weather/awdaawdfgawsfrft')
    .then(function (rawData){
        return rawData.json()
    })
    .then(function (data) {
        weatherImage.remove()
        if(data.description === 'span'){
            city.text(`not found`)
            temp.text(`${data.temperature} ${data.description} --${data.forecast[0].wind}--${data.forecast[1].wind}--${data.forecast[2].wind}`)
        }
        else{
            city.text(`${data.name}`)
            temp.text(`${data.temperature} ${data.description} --${data.forecast[0].wind}--${data.forecast[1].wind}--${data.forecast[2].wind}`)
        }
    });
})

search.on('click', function(){
    if(regex.test(textSearch.val()) === true){
        console.log(textSearch.val())
    }
    else{
        console.log('nope')
    }
})
