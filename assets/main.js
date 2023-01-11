const API = 'https://api.giphy.com/v1/gifs/search?api_key=F6fjQpTdhw74reKL2GMMLHRN7mjSXqB0&q=cats&limit=35&offset=0&rating=g&lang=en'

const form = document.querySelector('.formSearch')
const input = document.querySelector('.inputSearch')
const content = null || document.getElementById('content')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const value = input.value
    let newAPi = `https://api.giphy.com/v1/gifs/search?api_key=F6fjQpTdhw74reKL2GMMLHRN7mjSXqB0&q=cats+${value}&limit=35&offset=0&rating=g&lang=en`
    handleGalery(newAPi)
    input.value = ''
})


async function fechData(urlApi) {
    const response = await fetch(urlApi)
    const data = await response.json()
    return data
}

async function handleGalery(urlApi) {
    try {
        const gifs = await fechData(urlApi)
        let view = `
            ${gifs.data?.map(gif => `
                <div key=${gif.id} class="galery">
                    <img src="${gif.images.downsized.url}" alt="${gif.title}" class="imgGalery">
                </div>
            `).slice(2, 21).join('')}
                
        `
        content.innerHTML = view
    } catch (error) {
        console.error(error)
    }
}

handleGalery(API)