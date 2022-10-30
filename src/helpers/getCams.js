export const getCams = async (category) => {
    const apiKey = 'w2LdN2E06GeyCxLjxhFvdyWRuv5ZyfVF'
    
    const url = `https://api.windy.com/api/webcams/v2/list/country=${category}/limit=9/?key=${apiKey}&show=webcams:location,image,url,player&lang=es`
  
    const resp = await fetch(url)
    const { result } = await resp.json()
    //console.log(url)
    //console.log(result.total);  
  
    const cams = result.webcams.map(webcams => {
      if (webcams.title === '') {
        webcams.title = category
      }
  
      return {
        id: webcams.id,
        title: webcams.title,
        image: webcams.image.current.thumbnail,
        region: webcams.location.region,
        pais: webcams.location.country,
        url: webcams.url.current.desktop,
        player: webcams.player.day.embed
      }
    })


    // console.log(gifs);
    return cams
  }
  