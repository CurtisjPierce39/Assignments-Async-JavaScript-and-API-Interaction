async function fetchHeroData() {
    // Question 1 Task 1
    const publicKey = "d0137fa40d5132a1d5e0eb148caa0932"
    const privateKey = "3471342790297b69a2033a856eca00c7a72390de"
    const timestamp = 1
    const hash = "b4b87f94c2284ac8230ef8908d164ee8"

    const response = await fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`);
    const heroData = await response.json();
    return heroData.data.results;
}

// Question 1 Task 2
document.addEventListener('DOMContentLoaded', async () => {
    const heroData = await fetchHeroData();
    const heroInfoElement = document.getElementById('hero-info')
    heroData.map(hero => {
        heroInfoElement.innerHTML += `
        <h2>${hero.name}</h2>
        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}">
        <h3>Description:</h3>
        <p>${hero.description}</p>
        `;
    });
});
