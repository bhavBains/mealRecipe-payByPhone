const getRecipes = () => {
  let url = "https://api.myjson.com/bins/hlj7i";
  $.ajax({
    type: "GET",
    url:url,
    dataType: "json",
    success: function(data) {
      displayGrid(data);
      getIngredients(data);
    }
  }) 
}

//Map out data items on grid
const displayGrid = (recipes) => {
  let grid = $(".main-card");
  recipes.map((recipe) => {
    grid.append(createCard(recipe));
  });   
}

// Create single card items
const createCard = (recipe) =>{
  const{name, type, cook_time, ingredients} = recipe;
  const card = `  
	<div class="card border-success m-3" style="min-width: 18rem";>
	  <div class="card-header">${type}</div>
	  <div class="card-body text-success">
	    <h5 class="card-title">Name: ${name}</h5>
	    <p class="card-text">Cook Time: ${cook_time}</p>
    </div>
    <div class="ingredients"></div>
  </div>`;
  return card;
}

const getIngredients = (items) => {
  
}


$(() => {
  //Document Ready Function
  getRecipes();  
});