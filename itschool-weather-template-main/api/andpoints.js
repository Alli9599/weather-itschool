// 1. Constantele care stim ca nu se vor schimba niciodata in proiectul nostru putem sa le pastram cu 'const' iar denumirea lor poate fi scrisa cu litere mai(uperCase)
// 2. AP KEY-urile sau token-urile nu ar trebui sa stea intr-un fisier text- de ce? pentru ca nu este sigur. Aceste key-uri ar trebui sa stea pe un server - dar in cazul nostru cum API-ul nostru este gratuit atunci e ok sa-l tinem asa
const API_KEY = "50f003f3a6836559d6f085fbed4ef6e9";

// Construim link-urile (endpoint-urile) serverelor catre care vom face call-urile ca sa primim date despre vreme
function getCurrentWeatherEndpoint(city) {
    // Cand se foloseste "?" dupa url inseamna ca avem de a face cu query params (query string) - asta inseamna ca API-ul va lua in considerare acei parametri pentru a ne intoarce data functiei de ei
    // Noi avem urmatorii params:
    // 1. q = este folosit pentru a identifica orasul
    // 2. lang = este folosit pentru a-i spune API-ul sa ne intoarca datele in limba romana
    // 3. units
    // 4. appid
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

function getForecastEndpoint (city) {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`
}