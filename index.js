const result = document.getElementById("result");
const form = document.querySelector("form");
let meals = [];

// Appel de mon api
async function fetchMeals() {
  await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=duck").then(
    (response) => response.json().then((data) => (meals = data.meals))
  );

  console.log(meals);
}

//fetchMeals();

function mealsDisplay() {
  meals.length = 12;

  result.innerHTML = meals.map(
    (meal) =>
      `
        <li class="card">
            <h2>${meal.strMeal}</h2>
            <p>${meal.strArea}</p>
            <img src=${meal.strMealThumb} alt="photo ${meal.strMeal}" />
            <ul></ul>
        </li>
        `
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchMeals().then(() => mealsDisplay());
});
