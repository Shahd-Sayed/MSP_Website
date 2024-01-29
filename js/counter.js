var workshop = setInterval(workshops, 10)
var Trainner = setInterval(Trainners, 10)
var Year_Of_Experience = setInterval(Years_Of_Experience, 10)
var Mega_Events = setInterval(Mega_Event, 10)
let count1 = 40;
let count2 = 7975;
let count3 = 1;
let count4 = 1;

function workshops() {
    count1++
    document.querySelector("#number1").innerHTML = `${count1}<span>+</span> `
    if (count1 == 55) {
        clearInterval(workshop)
    }
}
function Trainners() {
    count2++
    document.querySelector("#number2").innerHTML = `${count2}<span>+</span>`
    if (count2 == 8000) {
        clearInterval(Trainner)
    }
}
function Years_Of_Experience() {
    count3++
    document.querySelector("#number3").innerHTML = `${count3}<span>+</span>`
    if (count3 == 12) {
        clearInterval(Year_Of_Experience)
    }
}
function Mega_Event() {
    count4++
    document.querySelector("#number4").innerHTML = `${count4}<span>+</span>`
    if (count4 == 11) {
        clearInterval(Mega_Events)
    }
}