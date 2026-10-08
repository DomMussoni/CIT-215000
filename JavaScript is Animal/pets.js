const petsData = [

    {

        petName: "Stella",

        age: 7,

        weightInKilos: 24,

        breed: "Dalmation",

        pic: "images\\stella.png"

    },

    {

        petName: "Cody",

        age: 8,

        weightInKilos: 22,

        breed: "Corgi",

        pic: "images\\cody.png"

    },

    {

        petName: "Mango",

        age: 2,

        weightInKilos: 11,

        breed: "Persian",

        pic: "images\\mango.png"

    },

    {

        petName: "Lucy",

        age: 4,

        weightInKilos: 35,

        breed: "Ball Python",

        pic: "images\\lucy.png"

    },

    {

        petName: "Buhmie",

        age: 1,

        weightInKilos: 28,

        breed: "Bull-dog",

        pic: "images\\buhmie.png"

    }

];

const linearListPets = (petsArray, separater) => {

    let str = "";

    petsArray.forEach((pet) => {

        str += pet.petName + " the " + pet.breed + separater;

    });

    console.log(str);

}

linearListPets(petsData, ", ");

const linearlistpetsWithWhile = (petsArray) => {

    let index = 0;

    while (index < petsArray.length) {

        console.log(petsArray[index].petName + " the " + petsArray[index].breed);

        index++;

    }

}

linearlistpetsWithWhile(petsData);