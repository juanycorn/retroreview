var apikey = process.env.RAWG_API_KEY

var gameName = gameName.split('').join('-');

const getGame = () =>
    fetch(`https://api.rawg.io/api/games/` + `${gameName}` + `/screenshots?key=9f4cf210f2d444348491d5c9b6de68b3`, {
        method: 'GET',
    })
        .then((res) => res.json())
        .then((data) => data);