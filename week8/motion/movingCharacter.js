const imageFolder = "";

const park = document.querySelector("#park");

const runFrames = ["runninge0000.png", "runninge0001.png", "runninge0002.png", "runninge0003.png", "runninge0004.png", "runninge0005.png", "runninge0006.png", "runninge0007.png"];

const characters = [

    {

        elem: document.querySelector("#boy"),

        arrImgs: runFrames,

        poseNumber: 0,

        size: 0.2,

        x: 0.62,

        y: 0.62,

        startX: 1,

        stepX: -0.012

    },

    {

        elem: document.querySelector("#friend"),

        arrImgs: runFrames,

        poseNumber: 3,

        size: 0.15,

        x: 0.3,

        y: 0.5,

        startX: 1,

        stepX: -0.008

    }

];

let timerId = null;

function preload() {

    characters.forEach(function(character) {

        character.arrImgs.forEach(function(fileName) {

            const img = new Image();

            img.src = imageFolder + fileName;

        });

    });

}

function draw(character) {

    character.elem.style.left = character.x * park.clientWidth + "px";

    character.elem.style.top = character.y * park.clientHeight + "px";

}

function nextPose(character) {

    character.poseNumber = (character.poseNumber + 1) % character.arrImgs.length;

    character.elem.src = imageFolder + character.arrImgs[character.poseNumber];

}

function nextPosition(character) {

    character.x += character.stepX;

    if (character.x * park.clientWidth + character.elem.clientWidth < 0) {

        character.x = character.startX;

    }

}

function frame() {

    characters.forEach(function(character) {

        nextPose(character);

        nextPosition(character);

        draw(character);

    });

}

function move() {

    if (timerId === null) {

        timerId = setInterval(frame, 100);

    }

}

function stopMoving() {

    clearInterval(timerId);

    timerId = null;

}

function setup() {

    park.style.backgroundImage = `url("${imageFolder}park.png")`;

    preload();

    characters.forEach(function(character) {

        character.elem.style.width = character.size * 100 + "%";

        character.elem.src = imageFolder + character.arrImgs[character.poseNumber];

        draw(character);

    });

}

setup();

window.addEventListener("resize", function() {

    characters.forEach(draw);

});