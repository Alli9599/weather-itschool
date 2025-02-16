// Declaram functia care o sa ne faca predictia pentru vreme pentru urmatoarele 5 zil. Apelul functiei se va face in fisierul ChooseLocation.js si in index.js
function displayWeatherForcast(city) {
    // Generam link-ul serverului catre care trebuie sa facem call-ul pe baza orasului
    const forecastEndpoint = getForecastEndpoint(city);

    // Inainte sa facem call-ul catre server si ca sa putem sa afisam noile informatii in HTML, trebuie sa selectam elementul de interes
    let weatherForcastContainer = document.querySelector('.weather-forecast');
    // Stergem de pe ecran datele vechi
    weatherForcastContainer.innerHTML = '';

    fetch(forecastEndpoint)
        .then((response) => response.json())
        .then((data) => {
          // Din datele venite de la openWeather API noi o sa pastram doar propietatea list (deoarece ea contine predictia vremii pe urmatoarele zile) -  care este un array
          const { list } = data;

          // Avem nevoie de un obiect in care sa grupam predictiile pe zile
          const daysMap = {};

          // Iteram prin cele 40 de predictii primite de la server pe care la gasim la variabila list
            list.forEach ((element) => {
                // Extragem propietatea dt de pe elementul iterat
                const {dt} = element;
                // Folosim functia getDayOfTheWeek din utilitarul date.js pentru a transforma data in: Luni, Marti, Miercuri etc
                const day = getDayOffTheWeek(dt);
                // Daca deja avem ziua saptamanii in obiectul daysMap, atunci ii adaugam o noua predictie de vreme (adica obiectul peste care iteram: elemnt)
                if(daysMap[day]) {
                    daysMap[day].push(element);
                } else {
                    // Altfel daca ziua sapt nu exista in obiectul daysMap, atunci il adaugam cu noua predictie (obiectul curent peste care iteram: element)
                    daysMap[day] = [element];
                }
            });
            
            // Parcurgem cu ajutorul for.....in continutul din obiectul daysMap - cheile sunt zilele saptamanii pentru care o sa afisam predictiile
            for (key in daysMap) {
                // Afisam ziua saptamanii pe ecran (o inseram in HTML)
                weatherForcastContainer.innerHTML += `<h3 class="text-primary">${key}</h3>`;

                let daysPrediction = daysMap[key];
                // Pt fiecare element (predictie dintr-o zi) extragem datele necesare:
                daysPrediction.forEach((element) => {
                    const {dt, main, weather} = element;
                    // Formatam ora folosind functia deja creata de noi:  getHour
                    const hour = getHour (dt);
                    // Rotunjim temperaturile:
                    const temperature = Math.round(main.temp);
                    const realFeel = Math.round (main.feels_like);
                    // Ne extragem descrierea - o luam de pe obiectul weather care ATENTIE este un array
                    const weatherDescription = weather[0].description;
                    // Ne extragem iconita pe care o formatam cu functia deja creata de noi: getWeatherIcon
                    const weatherIcon = getWeatherIcon (weather [0].icon);

                    // Afisam pe ecran (adica inseram in HTML) toate informatiile de mai sus
                    weatherForcastContainer.innerHTML += `
                        <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3"> 
                            <div>${hour}</div>
                            <div><img src="${weatherIcon}" alt="weather icon"></div>
                            <div class="fs-3"><strong>${temperature}°C</strong></div>
                            <div>${weatherDescription}</div>
                            <div class="real-feel">Real feel: <strong>${realFeel}°C</strong></div>
                        </div>
                    `;
                })
            }
        });

}