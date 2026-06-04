# Random Stuff (Vanilla JS + Public APIs)

A simple front-end mini project that generates random content for multiple categories (cat facts, dog images, jokes, quotes, countries, recipes, activities, advice, number facts, and random users).

It uses **Axios** (via CDN) to call public APIs and renders the results into the UI.

---

## Features

- ✅ Cat fact generator
- ✅ Random dog image generator
- ✅ Random joke generator
- ✅ Random quote generator
- ✅ Random country generator
- ✅ Random recipe generator
- ✅ Random activity generator
- ✅ Random advice generator
- ✅ Random number fact generator
- ✅ Random user generator

---

## How it works

- `index.html` defines the layout: a grid of cards, each with a **Generate** button and a corresponding output element (e.g. `#catFact`, `#joke`, etc.).
- `script.js` contains functions like `catFact()`, `dogImage()`, `joke()`, etc. Each function:
  1. Calls a public API using `axios.get(...)`
  2. Updates the matching DOM element with the returned data
  3. Shows a fallback message if the request fails
- `style.css` provides the dark themed layout and basic styling.

---

## File structure

- `index.html`
- `style.css`
- `script.js`

---

## APIs used

- Cat fact: `https://catfact.ninja/fact`
- Dog image: `https://dog.ceo/api/breeds/image/random`
- Joke: `https://official-joke-api.appspot.com/random_joke`
- Quote: `https://dummyjson.com/quotes/random`
- Country list: `https://restcountries.com/v3.1/all`
- Recipe: `https://www.themealdb.com/api/json/v1/1/random.php`
- Activity: `https://bored-api.appbrewery.com/random`
- Advice: `https://api.adviceslip.com/advice`
- Number fact: `http://numbersapi.com/<num>?json`
- Random user: `https://randomuser.me/api`

---

## Running it

Because this is a pure front-end project, you can run it by opening `index.html` in a browser.

> Note: Some browsers restrict `http://` requests from an `https://` page. The number fact endpoint uses `http://numbersapi.com/...`. If you run into issues, consider changing it to `https://numbersapi.com/...`.

---

## Customization

To add a new card:

1. Add a new section in `index.html` with a button calling your function and a target element (with an `id`).
2. Implement the corresponding function in `script.js` using `axios`.
3. Optionally style/adjust in `style.css`.

---

## Notes / Troubleshooting

- If a specific category fails, it’s likely due to the upstream API being down, blocked, or rate-limited.
- If `numberFact()` fails due to mixed content, switch the endpoint to HTTPS.

