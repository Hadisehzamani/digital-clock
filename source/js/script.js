let date = new Date();
let hour = document.querySelector('#hour')
let minute = document.querySelector('#minute')
let second = document.querySelector('#seconds')

setInterval(() => {
    let date = new Date();
    let newhour = date.getHours()
    let newminute = date.getMinutes()
    let newsecond = date.getSeconds()

    if(newhour < 10){
        newhour = '0' + newhour
    }
    if(newminute < 10){
        newminute = '0' + newminute
    }
    if(newsecond < 10){
        newsecond = '0' + newsecond
    }

    hour.innerHTML = newhour
    minute.innerHTML = newminute
    second.innerHTML = newsecond
}, 1000)