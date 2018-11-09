// API call to JSON file
// It can also be caled from static file, or api call to the server
const getRecipes = () => {
  let url = "https://api.myjson.com/bins/hlj7i";
  $.ajax({
    type: "GET",
    url:url,
    dataType: "json",
    success: function(data) {
      displayGrid(data);
    }
  }) 
}

//Map out data items on grid
const displayGrid = (recipes) => {
  let grid = $(".main-card");
    recipes.map((recipe) => {
      grid.append(createCard(recipe));
      getIngredients(recipe);           
    });   
}

// Create single card items
const createCard = (recipe) =>{
  const{name, type, cook_time, ingredients} = recipe;
  const card =   
    `<a class="recipe-card" data-toggle="collapse" href="#collapse-${name}" role="button" aria-expanded="false" aria-controls="collapse-${name}">
      <div class="card border-success m-3 recipe-${name}" style="min-width: 18rem;">
        <div class="card-header">Recipe Type: ${type}</div>
        <div class="card-body text-success">
          <h5 class="card-title">Name: ${name}</h5>
          <p class="card-text">Cook Time: ${cook_time}</p>
        </div>
        <div class="ingredients collapse" id="collapse-${name}">
          <div class="card border-warning m-3" style="width: 15rem;">
            <div class="card-header text-center">
              Ingredients
            </div>
            <ul class="list-group list-group-flush" id=${name}Ingredients>
              
            </ul>
          </div>
        </div>
      </div>
    </a>`
    
  return card;
}

// Get Ingredients
const getIngredients = (recipe) => {
  const{name, type, cook_time, ingredients} = recipe;
  var ingredientsList = recipe.ingredients.sort();
  ingredientsList.map((ingredient) => {
    $(`#${name}Ingredients`).append(
      `<li class="list-group-item">${ingredient}</li>`
    )
  });  
}

$(() => {
  //Document Ready Function
  getRecipes();  
});