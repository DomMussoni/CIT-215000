const MAX_GAMES = 10;

let nextId = 1;

function createGame(title, platform, genre, hours) {

  const game = { id: nextId, title: title, platform: platform, genre: genre, hours: hours };

  nextId = nextId + 1;

  return game;

}

const games = [

  createGame("Minecraft", "PC", "Sandbox", 120),

  createGame("Rocket League", "PC", "Sports", 85),

  createGame("Zelda: Breath of the Wild", "Switch", "Adventure", 70),

  createGame("Mario Kart 8 Deluxe", "Switch", "Racing", 55),

  createGame("Stardew Valley", "PC", "Simulation", 40)

];

const gameList = document.getElementById("game-list");

const countText = document.getElementById("count");

const detailsBox = document.getElementById("details");

const messageBox = document.getElementById("message");

const addForm = document.getElementById("add-form");

const updateForm = document.getElementById("update-form");

const updateGame = document.getElementById("update-game");

const updateField = document.getElementById("update-field");

const updateValue = document.getElementById("update-value");

function showMessage(text) {

  messageBox.textContent = text;

}

function clearDetails() {

  detailsBox.textContent = "Click Details on a game to see it here.";

}

function renderList() {

  gameList.textContent = "";

  updateGame.textContent = "";

  games.forEach(function (game) {

    const item = document.createElement("li");

    const name = document.createElement("span");

    name.textContent = game.title + " (" + game.platform + ", " + game.hours + " hours)";

    const buttons = document.createElement("span");

    const detailsButton = document.createElement("button");

    detailsButton.type = "button";

    detailsButton.textContent = "Details";

    detailsButton.setAttribute("aria-label", "Show details for " + game.title);

    detailsButton.addEventListener("click", function () {

      showDetails(game.id);

    });

    const deleteButton = document.createElement("button");

    deleteButton.type = "button";

    deleteButton.textContent = "Delete";

    deleteButton.setAttribute("aria-label", "Delete " + game.title);

    deleteButton.addEventListener("click", function () {

      deleteGame(game.id);

    });

    buttons.appendChild(detailsButton);

    buttons.appendChild(deleteButton);

    item.appendChild(name);

    item.appendChild(buttons);

    gameList.appendChild(item);

    const option = document.createElement("option");

    option.value = game.id;

    option.textContent = game.title;

    updateGame.appendChild(option);

  });

  countText.textContent = games.length + " of " + MAX_GAMES + " games";

}

function showDetails(id) {

  const game = games.find(function (item) {

    return item.id === id;

  });

  if (game === undefined) {

    clearDetails();

    return;

  }

  detailsBox.textContent = "";

  const lines = [

    "Title: " + game.title,

    "Platform: " + game.platform,

    "Genre: " + game.genre,

    "Hours played: " + game.hours

  ];

  lines.forEach(function (line) {

    const paragraph = document.createElement("p");

    paragraph.textContent = line;

    detailsBox.appendChild(paragraph);

  });

}

function deleteGame(id) {

  const game = games.find(function (item) {

    return item.id === id;

  });

  if (game === undefined) {

    return;

  }

  const index = games.indexOf(game);

  games.splice(index, 1);

  renderList();

  clearDetails();

  showMessage(game.title + " was deleted.");

}

addForm.addEventListener("submit", function (event) {

  event.preventDefault();

  const title = document.getElementById("add-title").value.trim();

  const platform = document.getElementById("add-platform").value.trim();

  const genre = document.getElementById("add-genre").value.trim();

  const hoursText = document.getElementById("add-hours").value.trim();

  if (title === "" || platform === "" || genre === "" || hoursText === "") {

    showMessage("Fill in every box before adding a game.");

    return;

  }

  const hours = Number(hoursText);

  if (isNaN(hours) || hours < 0) {

    showMessage("Hours played must be a number, 0 or more.");

    return;

  }

  if (games.length >= MAX_GAMES) {

    showMessage("The list is full (" + MAX_GAMES + " games). Delete one before adding another.");

    return;

  }

  const newGame = createGame(title, platform, genre, hours);

  games.push(newGame);

  renderList();

  showDetails(newGame.id);

  showMessage(newGame.title + " was added.");

  addForm.reset();

});

updateForm.addEventListener("submit", function (event) {

  event.preventDefault();

  const id = Number(updateGame.value);

  const field = updateField.value;

  const newValue = updateValue.value.trim();

  const game = games.find(function (item) {

    return item.id === id;

  });

  if (game === undefined) {

    showMessage("There is no game to update. Add one first.");

    return;

  }

  if (newValue === "") {

    showMessage("Type the new value first.");

    return;

  }

  if (field === "hours") {

    const hours = Number(newValue);

    if (isNaN(hours) || hours < 0) {

      showMessage("Hours played must be a number, 0 or more.");

      return;

    }

    game.hours = hours;

  } else {

    game[field] = newValue;

  }

  renderList();

  updateGame.value = String(game.id);

  showDetails(game.id);

  showMessage(game.title + " was updated.");

  updateValue.value = "";

});

renderList();

clearDetails();