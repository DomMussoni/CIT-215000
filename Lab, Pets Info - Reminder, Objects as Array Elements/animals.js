const petsData = [

    {

        petName: "Stella",

        age: 7,

        weightInKilos: 24,

        breed: "Dalmation"

    },

    {

        petName: "Cody",

        age: 8,

        weightInKilos: 22,

        breed: "Corgi"

    },

    {

        petName: "Mango",

        age: 2,

        weightInKilos: 11,

        breed: "Persian"

    },

    {

        petName: "Lucy",

        age: 4,

        weightInKilos: 35,

        breed: "Ball Python"

    },

    {

        petName: "Buhmie",

        age: 1,

        weightInKilos: 28,

        breed: "Bull-dog"

    }

];

document.getElementById("lastPet").textContent = petsData.length;

function showInfo() {

    const display = document.querySelector(".selectedPetInfo");

    const index = Number(document.getElementById("petNum").value) - 1;

    const lastIndex = petsData.length - 1;

    if (!Number.isInteger(index) || index < 0 || index > lastIndex) {

        display.textContent = `Please enter a whole number from 1 to ${petsData.length}.`;

        return;

    }

    const pet = petsData[index];

    const yearWord = pet.age === 1 ? "year" : "years";

    display.textContent = `${pet.petName} the pet is ${pet.age} ${yearWord} old. This pet weighs ${pet.weightInKilos} kilos and is a ${pet.breed} breed.`;

}