
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
            let description = document.createElement('h4')
            let img = document.createElement("img")
            let director = document.createElement('h5')
            let release_date = document.createElement('h5')
            title.innerText = allFilms[i].title
            description.innerText = allFilms[i].description
            director.innerText = allFilms[i].director
            release_date.innerText = allFilms[i].release_date
            singleFilm.appendChild(title)
            singleFilm.appendChild(description)
            singleFilm.appendChild(director)
            singleFilm.appendChild(release_date)
            ghibliFilms.appendChild(singleFilm)

            switch (allFilms[i].title) {
                case 'Castle in the Sky':
                    img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/f/f5/Castle_in_the_Sky_%281986%29.png")
                    singleFilm.appendChild(img)
                    break;
                case 'Grave of the Fireflies':
                    img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg")
                    singleFilm.appendChild(img)
                    break;
                    case 'My Neighbor Totoro':
                    img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg")
                    singleFilm.appendChild(img)
                    break;
                    case "Kiki's Delivery Service":
                    img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/0/07/Kiki%27s_Delivery_Service_%28Movie%29.jpg")
                    singleFilm.appendChild(img)
                    break;
                    case "Only Yesterday":
                    img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/4/46/OYpost.jpg")
                    singleFilm.appendChild(img)
                    break;case "Porco Rosso":
                    img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/f/fc/Porco_Rosso_%28Movie_Poster%29.jpg")
                    singleFilm.appendChild(img)
                    break;
                    case "Pom Poko":
                    img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/6/68/Pompokoposter.jpg")
                    singleFilm.appendChild(img)
                    break;case "Whisper of the Heart":
                    img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/9/93/Whisper_of_the_Heart_%28Movie_Poster%29.jpg")
                    singleFilm.appendChild(img)
                    break;
                    case "Princess Mononoke":
                    img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/8/8c/Princess_Mononoke_Japanese_poster.png")
                    singleFilm.appendChild(img)
                    break;
                    case "My Neighbors the Yamadas":
                    img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/4/4b/My_Neighbors_the_Yamadas_%281999%29.jpg")
                    singleFilm.appendChild(img)
                    break;
                    case "Spirited Away":
                    img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png")
                    singleFilm.appendChild(img)
                    break;
                    case "The Cat Returns":
                    img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/8/8e/Cat_Returns.jpg")
                    singleFilm.appendChild(img)
                    break;
                    case "Howl's Moving Castle":
                    img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/a/a0/Howls-moving-castleposter.jpg")
                    singleFilm.appendChild(img)
                    break;
                    case "Tales from Earthsea":
                    img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/e/e5/Gedo6sn.jpg")
                    singleFilm.appendChild(img)
                    break;
                    case "Ponyo":
                    img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/9/9d/Ponyo_%282008%29.png")
                    singleFilm.appendChild(img)
                    break;
                    case "Arrietty":
                    img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/e/e7/Karigurashi_no_Arrietty_poster.png")
                    singleFilm.appendChild(img)
                    break;
                    case "From Up on Poppy Hill":
                    img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/c/c9/From_Up_on_Poppy_Hill.png")
                    singleFilm.appendChild(img)
                    break;
                    case "The Wind Rises":
                    img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/a/a3/Kaze_Tachinu_poster.jpg")
                    singleFilm.appendChild(img)
                    break;
                    case "The Tale of the Princess Kaguya":
                    img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/The_Tale_of_the_Princess_Kaguya_%28poster%29.jpg/220px-The_Tale_of_the_Princess_Kaguya_%28poster%29.jpg")
                    singleFilm.appendChild(img)
                    break;
                    case "When Marnie Was There":
                    img.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/a/a7/When_Marnie_Was_There.png")
                    singleFilm.appendChild(img)
                    break;
            }
 
        }
    })
}

// const addImg = () => {
//     let img1 = document.createElement("IMG")
//             img1.setAttribute('src', "https://upload.wikimedia.org/wikipedia/en/f/f5/Castle_in_the_Sky_%281986%29.png")
//             img1.innerHTML = allFilms[0].title.img1
// }
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


// document.querySelector('.films').addEventListener('click', getFilms)

document.addEventListener('DOMContentLoaded', getFilms)