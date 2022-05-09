let fistNumber = 2
let lastNumber = 20

    let timeNumber = function() {
        fistNumber += 1
        console.log(fistNumber);
    }

let time = ((lastNumber*1000)-2000)

const intervalid = setInterval(timeNumber, 1000)

setTimeout(function(){ clearInterval(intervalid) }, time);