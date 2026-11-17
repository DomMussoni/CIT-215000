const cocktailMenu = [
  {
    name: "Classic Eggnog",
    mainIngredients: "Bourbon, eggnog, nutmeg",
    recipe: "2 oz bourbon, 4 oz prepared eggnog, pinch of ground nutmeg. Shake with ice, strain into a chilled glass, grate fresh nutmeg on top.",
    calories: 320,
    glass: '<svg viewBox="0 0 100 100" class="glass"><path d="M30 30 L70 30 L64 85 L36 85 Z" fill="#fff8e7" stroke="#b08d2e" stroke-width="2"/><path d="M32 38 L68 38 L63 85 L37 85 Z" fill="#f3e2b3"/><circle cx="45" cy="42" r="1.4" fill="#7a5230"/><circle cx="55" cy="44" r="1.4" fill="#7a5230"/><circle cx="50" cy="48" r="1.4" fill="#7a5230"/><rect x="47" y="18" width="4" height="16" rx="2" fill="#8a4b23" transform="rotate(12 49 26)"/></svg>'
  },
  {
    name: "Mulled Wine",
    mainIngredients: "Red wine, orange, warm spices",
    recipe: "1 bottle dry red wine, 1 sliced orange, 3 cinnamon sticks, 6 whole cloves, 2 star anise, 3 tbsp honey. Simmer on low for 20 min (do not boil), strain, serve warm.",
    calories: 190,
    glass: '<svg viewBox="0 0 100 100" class="glass"><path d="M30 15 Q30 40 50 45 Q70 40 70 15 Z" fill="none" stroke="#b08d2e" stroke-width="2"/><path d="M33 18 Q33 38 50 42 Q67 38 67 18 Z" fill="#7a0f24"/><rect x="48" y="45" width="4" height="30" fill="#b08d2e"/><ellipse cx="50" cy="78" rx="16" ry="4" fill="#b08d2e"/><circle cx="60" cy="20" r="9" fill="#e8872f" stroke="#b05c15" stroke-width="1.5"/><line x1="60" y1="13" x2="60" y2="27" stroke="#fff3df" stroke-width="1"/><line x1="53" y1="20" x2="67" y2="20" stroke="#fff3df" stroke-width="1"/></svg>'
  },
  {
    name: "Peppermint Mocha Martini",
    mainIngredients: "Vodka, coffee liqueur, peppermint",
    recipe: "1.5 oz vanilla vodka, 1 oz coffee liqueur, 0.5 oz peppermint schnapps, 1 oz heavy cream. Shake with ice, strain into a chilled martini glass, garnish with crushed candy cane.",
    calories: 280,
    glass: '<svg viewBox="0 0 100 100" class="glass"><path d="M20 18 L80 18 L52 50 L52 75 L62 75 L62 80 L38 80 L38 75 L48 75 L48 50 Z" fill="none" stroke="#b08d2e" stroke-width="2"/><path d="M25 22 L75 22 L50 48 Z" fill="#6b4226"/><circle cx="68" cy="24" r="3" fill="#ffffff" stroke="#c81d3f" stroke-width="1.5"/><circle cx="63" cy="20" r="2" fill="#ffffff" stroke="#c81d3f" stroke-width="1.5"/></svg>'
  },
  {
    name: "Hot Buttered Rum",
    mainIngredients: "Dark rum, butter, brown sugar",
    recipe: "1.5 oz dark rum, 1 tbsp butter, 1 tbsp brown sugar, pinch of cinnamon and nutmeg, 6 oz hot water. Mix butter, sugar and spices in a mug, stir in rum and hot water until butter melts.",
    calories: 250,
    glass: '<svg viewBox="0 0 100 100" class="glass"><rect x="28" y="30" width="40" height="42" rx="4" fill="#fff8e7" stroke="#8a4b23" stroke-width="2"/><rect x="31" y="36" width="34" height="30" fill="#c6791f"/><path d="M68 38 Q86 38 86 50 Q86 62 68 60" fill="none" stroke="#8a4b23" stroke-width="4"/><rect x="44" y="33" width="12" height="5" fill="#f5d87a" stroke="#b08d2e" stroke-width="1"/><path d="M38 22 Q41 16 38 10" fill="none" stroke="#cfd8d6" stroke-width="2"/><path d="M50 22 Q53 16 50 10" fill="none" stroke="#cfd8d6" stroke-width="2"/><path d="M62 22 Q65 16 62 10" fill="none" stroke="#cfd8d6" stroke-width="2"/></svg>'
  },
  {
    name: "Cranberry Ginger Fizz",
    mainIngredients: "Cranberry juice, ginger beer, lime",
    recipe: "3 oz cranberry juice, 4 oz ginger beer, 0.5 oz fresh lime juice, ice. Fill glass with ice, add cranberry and lime juice, top with ginger beer, stir gently, garnish with fresh cranberries.",
    calories: 120,
    glass: '<svg viewBox="0 0 100 100" class="glass"><path d="M34 15 L66 15 L62 85 L38 85 Z" fill="#eaf6f3" stroke="#0b3d2e" stroke-width="2"/><path d="M36 25 L64 25 L61 85 L39 85 Z" fill="#c81d3f"/><circle cx="45" cy="55" r="1.6" fill="#ffb3c6"/><circle cx="54" cy="45" r="1.3" fill="#ffb3c6"/><circle cx="49" cy="68" r="1.4" fill="#ffb3c6"/><path d="M40 15 A8 8 0 0 0 56 15 Z" fill="#7bbf6a" stroke="#4f8a3e" stroke-width="1"/><rect x="58" y="4" width="3" height="34" fill="#e8872f" transform="rotate(10 59 20)"/></svg>'
  }
];

const cardMarkup = (drink, index) => `
  <div class="cocktail-card" data-index="${index}">
    ${drink.glass}
    <h2>${drink.name}</h2>
    <div class="info state-ingredients">${drink.mainIngredients}</div>
  </div>
`;

const renderMenu = () => {
  const allCards = cocktailMenu.map(cardMarkup).join("");
  $("#menu").html(allCards);
};

const resetToIngredients = ($card) => {
  const drink = cocktailMenu[$card.data("index")];
  $card.find(".info")
    .attr("class", "info state-ingredients")
    .text(drink.mainIngredients);
};

const showRecipe = ($card) => {
  const drink = cocktailMenu[$card.data("index")];
  $card.find(".info")
    .attr("class", "info state-recipe")
    .text(drink.recipe);
};

const showCalories = ($card) => {
  const drink = cocktailMenu[$card.data("index")];
  $card.find(".info")
    .attr("class", "info state-calories")
    .text(drink.calories + " calories per serving");
};

const wireUpEvents = () => {
  $(".cocktail-card").on("mouseenter", function () {
    showRecipe($(this));
  });

  $(".cocktail-card").on("mouseleave", function () {
    resetToIngredients($(this));
  });

  $(".cocktail-card").on("click", function () {
    showCalories($(this));
  });
};

$(document).ready(() => {
  renderMenu();
  wireUpEvents();
});
