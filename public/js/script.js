const addIngridientsBtn = document.querySelector("#addIngredients");
const addInstructionsBtn = document.querySelector("#addInstructions");
const ingridientList = document.querySelector(".ingredientsList");
const ingredientDiv = document.querySelectorAll(".ingredientsDiv")[0];
const directionList = document.querySelector(".directionsList");
const directionDiv = document.querySelectorAll(".directionsDiv")[0];

addIngridientsBtn.addEventListener("click", function () {
  let newIngredients = ingredientDiv.cloneNode(true);
  let input = newIngredients.getElementsByTagName("input")[0];
  input.value = "";
  ingridientList.appendChild(newIngredients);
});

addInstructionsBtn.addEventListener("click", function () {
  let newInstructions = directionDiv.cloneNode(true);
  let input = newInstructions.getElementsByTagName("input")[0];
  input.value = "";
  directionList.appendChild(newInstructions);
});

// update page submit button
// const submitBtn = document.getElementById("submitBtn");

// submitBtn.addEventListener("click", function () {
//   fetch("http://localhost:5000/update-recipe/" + req.param.id, {
//     method: "PUT",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(req.body),
//   });
// });
