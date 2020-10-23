
const BASE_URL = `https://ghibliapi.herokuapp.com/`
let ghibli_Films = document.querySelector('.ghibli-films')

const getPerson = () => {
    axios.get(BASE_URL + "people")
    .then(response => {
        // console.log("second")
        console.log(response.data)
        let allPeople = response.data
        // array of the response object's keys
        for (let i = 0; i < allPeople.length; i++) {
            let singlePerson = document.createElement('div')
            let people = document.createElement('h2')
            let name = document.createElement('h2')
            let gender = document.createElement('h4')
            let eye_color = document.createElement('h5')
            let age = document.createElement("h6")

          
            name.innerText = `Name: ${allPeople[i].name}`
            gender.innerText = `Gender: ${allPeople[i].gender}`
            eye_color.innerText = `Eye Color: ${allPeople[i].eye_color}`
            age.innerText = `Age ${allPeople[i].age}`
            singlePerson.appendChild(name)
            singlePerson.appendChild(people)
            singlePerson.appendChild(gender)
            singlePerson.appendChild(eye_color)
            singlePerson.appendChild(age)
            ghibli_Films.appendChild(singlePerson)
        }
    })
}

document.addEventListener('DOMContentLoaded', getPerson)