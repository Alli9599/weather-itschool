// Din fisierul index.js va pleca toata functionalitatea noastra
const currentCityTag = document.querySelector('.current-city')

// Daca nu aveam salvat in locawl storage niciun oras , atunci salvam in local storage ce default Bucuresti - asta facem ca vrem sa persistam ce alege user-ul din drop-down-ul cu orase
// Pas 1: extragem ce este in localStorage dupa cheia city
let currentCity = localStorage.getItem("city");

// Daca nu avem setat/salvat in localstorage nici o valoare pentru city, atunci o setam cu metodat setItem
if(!currentCity) {
    localStorage.setItem("city", "București")
    currentCity = "București";
}
console.log(currentCity)
// Actualizam tag-ul sa afiseze valoarea din localStorage
currentCityTag.innerHTML = currentCity;
console.log(currentCity)
// Afisam vremea curente direct cand intram pe pagina
displayCurrentWeather(currentCity);
// Afisam si prognoza pe urmatoarele 5 zile
displayWeatherForcast(currentCity);

const scrollToTopButton = document.querySelector(".scroll-to-top");
scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
document.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
        scrollToTopButton.style.visibility = "visible";   
    } else {
        scrollToTopButton.style.visibility = "hidden";
    }
});