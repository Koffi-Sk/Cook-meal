let meals = [];

async function fetchMeals() {
  await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=duck").then(
    (response) => response.json().then((data) => (meals = data.meals))
  );

  console.log(meals);
}

fetchMeals();
