

 const getGifs = async ( category ) => {

const api_key = 'nXhYhkc0Cb99rokU9QGGFNgQpkDireAT';
const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=${api_key}`;


    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((item) => {
        return {
            id: item.id,
            title: item.title,
            url: item.images.downsized_medium.url,
        }
    });
    // console.log(gifs);
    return gifs;
}

export default getGifs;
