async function catFact() {
    try {
        let res = await axios.get("https://catfact.ninja/fact");
        document.querySelector("#catFact").innerText = res.data.fact;
    } catch (error) {
        document.querySelector("#catFact").innerText = "Failed to load cat fact. Try again!";
    }
}

async function dogImage() {
    try {
        let res = await axios.get("https://dog.ceo/api/breeds/image/random");
        let img = document.querySelector("#dogImage");
        img.src = res.data.message;
        img.style.display = "block";
    } catch (error) {
        document.querySelector("#dogImage").style.display = "none";
    }
}

async function joke() {
    try {
        let res = await axios.get("https://official-joke-api.appspot.com/random_joke");
        document.querySelector("#joke").innerText = `${res.data.setup} ${res.data.punchline}`;
    } catch (error) {
        document.querySelector("#joke").innerText = "Failed to load joke. Try again!";
    }
}

async function quote() {
    try {
        let res = await axios.get("https://dummyjson.com/quotes/random");
        document.querySelector("#quote").innerText = res.data.quote;
    } catch (error) {
        document.querySelector("#quote").innerText = "Failed to load quote. Try again!";
    }
}

async function country() {
    try {
        let res = await axios.get("https://restcountries.com/v3.1/all");
        let c = res.data[Math.floor(Math.random() * res.data.length)];
        document.querySelector("#country").innerText = `${c.name.common}\nCapital: ${c.capital}`;
    } catch (error) {
        document.querySelector("#country").innerText = "Failed to load country. Try again!";
    }
}

async function recipe() {
    try {
        let res = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
        document.querySelector("#recipe").innerText = res.data.meals[0].strMeal;
    } catch (error) {
        document.querySelector("#recipe").innerText = "Failed to load recipe. Try again!";
    }
}

async function activity() {
    try {
        let res = await axios.get("https://bored-api.appbrewery.com/random");
        document.querySelector("#activity").innerText = res.data.activity;
    } catch (error) {
        document.querySelector("#activity").innerText = "Failed to load activity. Try again!";
    }
}

async function advice() {
    try {
        let res = await axios.get("https://api.adviceslip.com/advice");
        document.querySelector("#advice").innerText = res.data.slip.advice;
    } catch (error) {
        document.querySelector("#advice").innerText = "Failed to load advice. Try again!";
    }
}

async function numberFact() {
    try {
        let num = Math.floor(Math.random() * 100);
        let res = await axios.get(`http://numbersapi.com/${num}?json`);
        document.querySelector("#numberFact").innerText = res.data.text;
    } catch (error) {
        document.querySelector("#numberFact").innerText = "Failed to load number fact. Try again!";
    }
}

async function user() {
    try {
        let res = await axios.get("https://randomuser.me/api");
        let u = res.data.results[0];
        document.querySelector("#user").innerText = `${u.name.first} ${u.name.last}\n(${u.email})`;
    } catch (error) {
        document.querySelector("#user").innerText = "Failed to load user. Try again!";
    }
}