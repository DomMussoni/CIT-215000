const eternalsData = [

    {

        name: "Sersi",

        description: "An Eternal who can reshape matter, turning one object into another. She loves humanity.",

        skills: ["matter transmutation", "empathy", "cosmic energy", "immortality"],

        pic: "images/sersi.png"

    },

    {

        name: "Ikaris",

        description: "One of the strongest Eternals. He can fly and fire cosmic energy from his eyes.",

        skills: ["flight", "super strength", "cosmic energy", "immortality"],

        pic: "images/ikaris.png"

    },

    {

        name: "Thena",

        description: "A fierce warrior who creates weapons out of cosmic energy.",

        skills: ["sword", "spear", "super strength", "cosmic energy"],

        pic: "images/thena.png"

    },

    {

        name: "Phastos",

        description: "The brilliant inventor of the Eternals, who builds advanced technology.",

        skills: ["engineering", "invention", "cosmic energy", "immortality"],

        pic: "images/phastos.png"

    },

    {

        name: "Makkari",

        description: "The fastest Eternal. She is deaf and communicates in sign language.",

        skills: ["super speed", "sign language", "agility", "immortality"],

        pic: "images/makkari.png"

    }

];

const characterList = document.getElementById("characterList");

const powerList = document.getElementById("powerList");

const searchForm = document.getElementById("searchForm");

const skillInput = document.getElementById("skillInput");

const results = document.getElementById("results");

const listCharacters = (charactersArray) => {

    charactersArray.forEach((character) => {

        const li = document.createElement("li");

        li.textContent = character.name + ": " + character.skills.join(", ");

        characterList.append(li);

    });

};

const listPowers = (charactersArray) => {

    const allPowers = [];

    charactersArray.forEach((character) => {

        character.skills.forEach((skill) => {

            if (!allPowers.includes(skill)) {

                allPowers.push(skill);

            }

        });

    });

    allPowers.sort();

    allPowers.forEach((power) => {

        const li = document.createElement("li");

        li.textContent = power;

        powerList.append(li);

    });

};

const hasSkill = (character, term) => {

    const match = character.skills.find((skill) => skill.toLowerCase().includes(term));

    return match !== undefined;

};

const showCharacter = (character) => {

    const card = document.createElement("div");

    card.className = "card";

    const heading = document.createElement("h3");

    heading.textContent = character.name;

    const img = document.createElement("img");

    img.src = character.pic;

    img.alt = character.name;

    img.addEventListener("error", () => {

        console.log("Image failed to load:", img.src);

    });

    const description = document.createElement("p");

    description.textContent = character.description;

    const skillsList = document.createElement("ul");

    character.skills.forEach((skill) => {

        const li = document.createElement("li");

        li.textContent = skill;

        skillsList.append(li);

    });

    card.append(heading, img, description, skillsList);

    results.append(card);

};

const searchBySkill = (term) => {

    results.textContent = "";

    const firstMatch = eternalsData.find((character) => hasSkill(character, term));

    console.log("Searched for:", term, "First match:", firstMatch);

    if (firstMatch === undefined) {

        const message = document.createElement("p");

        message.textContent = "No Eternals found with the attribute: " + term;

        results.append(message);

        return;

    }

    const matches = eternalsData.filter((character) => hasSkill(character, term));

    matches.forEach(showCharacter);

};

searchForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const term = skillInput.value.trim().toLowerCase();

    if (term === "") {

        alert("Please enter an attribute, like sword.");

        return;

    }

    searchBySkill(term);

});

listCharacters(eternalsData);

listPowers(eternalsData);