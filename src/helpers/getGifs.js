
export const getGifs = async( category ) => {
    console.log(category)
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&api_key=4feLUPaoCa2IcV1qgjVdZDaVtqpVyd5h&limit=10`
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const gifs = data.map((img)=>{
        return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
        }
    })
    
    //console.log(gifs);
    
    return gifs;

}