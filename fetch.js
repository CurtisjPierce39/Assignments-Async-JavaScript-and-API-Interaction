async function fetchHeroData() {
    const publicKey = "4d52fb3fa1ef52af3d6b38218aff5477"
    const privateKey = "3471342790297b69a2033a856eca00c7a72390de"
    const timestamp = 1
    const hash = "a80ea7d0806646c1f3b6bf37422fc6fd"

    const response = await fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`);
    const heroData = await response.json();
    return heroData.data.results;
}

document.addEventListener('DOMContentLoaded', async () => {
    const heroData = await fetchHeroData();
    const heroInfoElement = document.getElementById('hero-info')

    heroInfoElement.innerHTML = `
    <h2>${heroData.name}</h2>
    <img src="${heroData.thumbnail}" alt="${heroData.name}">
    <h3>Description:</h3>
    <p>${heroData.description}</p>
    `;
});