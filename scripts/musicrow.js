let artists = [
    {
        first: "Bruce",
        last: "Atikins",
        style: "Country",
        age: 23
    },
    {
        first: "Jensen",
        last: "Brown",
        style: "Pop",
        age: 20
    },
    {
        first: "Dre",
        last: "Funkz",
        style: "Funk",
        age: 25
    },
    {
        first: "Dusta",
        last: "Grimes",
        style: "Rap",
        age: 21
    },
    {
        first: "Bartholomew",
        last: "Danielson",
        style: "Bluegrass",
        age: 23
    },
    {
        first: "Avilee",
        last: "Dallas",
        style: "Country",
        age: 19
    },
    {
        first: "Austin",
        last: "Kinkaid",
        style: "Pop",
        age: 22
    },
    {
        first: "Loyoncé ",
        last: "Branis",
        style: "Rap",
        age: 27
    }
]
let     jumpStopRecords = [];
let     chattenRecords = [];
let     polarRecords = [];


const createBluegrassArtist = (artistFirst,artistLast,artistStyle,artistAge) => {
    const artist = {
        first: artistFirst,
        last: artistLast,
        style: artistStyle,
        age: artistAge
    }
    console.log(artist)

    chattenRecords.push(artist)
}

const createPopArtist = (artistFirst,artistLast,artistStyle,artistAge) => {
    const artist = {
        first: artistFirst,
        last: artistLast,
        style: artistStyle,
        age: artistAge
    }
    console.log(artist)
    polarRecords.push(artist)
}

const createFunkArtist = (artistFirst,artistLast,artistStyle,artistAge) => {
    const artist = {
        first: artistFirst,
        last: artistLast,
        style: artistStyle,
        age: artistAge
    }
    console.log(artist)

    jumpStopRecords.push(artist)
}


artists.forEach(artist => {
    let music = artist.style.toLowerCase()
    switch(music) {
        case "pop":
            createPopArtist(artist.first,artist.last,artist.style,artist.age)
            break;
        case "funk":
            createFunkArtist(artist.first,artist.last,artist.style,artist.age)
                break;
        case "rap":
            createFunkArtist(artist.first,artist.last,artist.style,artist.age)
                break;
        case "country":
            createBluegrassArtist(artist.first,artist.last,artist.style,artist.age)
            break;
        case "bluegrass":
            createBluegrassArtist(artist.first,artist.last,artist.style,artist.age)
            break;
        default:
            break;
    }
})


const HTMLConverter = (style, artist) => {
    document.querySelector(".article__musicrow").innerHTML+=`
<section>
    Company: ${style}
    Artist Name: ${artist.first} ${artist.last}<br>
    Music Style: ${artist.style}<br>
    Age: ${artist.age}
</section>
`
}


let recordCompanies = [chattenRecords, polarRecords, jumpStopRecords]


recordCompanies.forEach((company)=>{
        company.forEach((artist) => {
            HTMLConverter(artist.style, artist)
        })
})
    




