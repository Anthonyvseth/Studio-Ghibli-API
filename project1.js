
const BASE_URL = `https://ghibliapi.herokuapp.com/`
let ghibliFilms = document.querySelector('.ghibli-films')

const getFilms = () => {
    axios.get(BASE_URL + "films")
    .then(response => {
        // console.log("second")
        console.log(response.data)
        let allFilms = response.data
        // array of the response object's keys
        for (let i = 0; i < allFilms.length; i++) {
            let singleFilm = document.createElement('div')
            let title = document.createElement('h2')
            title.innerText = allFilms[i].title
            singleFilm.appendChild(title)
            ghibliFilms.appendChild(singleFilm)
            
        }
    })
}

// const getFilmData = async (event) => {
//     let title = event.target.value
//     const FILM_DATA_URL = `https://ghibliapi.herokuapp.com/`
    
//     try {
//         const response = await axios.get(FILM_DATA_URL)
//         let filmData = response.data
//         let getData = {
//             title: title,
//             date: filmData, d
//         }
//     displayFilmData(getData)
//     }catch (error) {
//         console.log(error)
//     }
// }

// const displayFilmData = (filmData) => {
//     let searchArea = document.querySelector('.search')
//     let resultWraper = document.createElement('div')
//     let resultHeader = document.createElement('h1')
//     let 

    // resultHeader.innerText = filmData.title

    // resultWrapper.appendChild(resultHeader)
    // searchArea.appendChild(resultWraper)
// }


document.querySelector('.films').addEventListener('click', getFilms)