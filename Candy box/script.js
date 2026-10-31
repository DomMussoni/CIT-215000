let chocs = [

  {

    chocName: "Plain Milk",

    description: "Smooth milk chocolate",

    calories: 90,

    ingredients: "Cocoa butter, Milk, Cream",

    img: "assets/plain_milk.jpg",

  },

  {

    chocName: "Plain Dark",

    description: "Dark chocolate",

    calories: 90,

    ingredients: "Cocoa butter, Milk, Cream",

    img: "assets/plain_dark.jpg",

  },

  {

    chocName: "Bailey's Cup",

    description: "Dark chocolate with Bailey's Cream Filling",

    calories: 100,

    ingredients: "Cocoa butter, Milk, Cream, baileys",

    img: "assets/baileys_cup.jpg",

  },

  {

    chocName: "Cappuccino Cup",

    description: "Dark chocolatewith Cappuccino style cream filling",

    calories: 120,

    ingredients: "Cocoa butter, Milk, Cream, Cappuccino fondant",

    img: "assets/cappuccino_cup.jpg",

  },

  {

    chocName: "Nutter Butter",

    description: "Dark chocolate with peanut butter",

    calories: 190,

    ingredients: "Cocoa butter, Milk, Cream, peanut butter",

    img: "assets/nutter_butter.jpg",

  },

  {

    chocName: "Orange Fondant",

    description: "Dark chocolate folded with orange fondant",

    calories: 90,

    ingredients: "Cocoa butter, Milk, Cream, orange peel, orange fondant",

    img: "assets/orange_fondant.jpg",

  },

  {

    chocName: "Pistachio Cup",

    description: "Dark chocolate with nuggets of pistachio",

    calories: 90,

    ingredients: "Cocoa butter, Milk, Cream, chunks of pistachio nut",

    img: "assets/pistachio_diamond.jpg",

  },

  {

    chocName: "Rum Barrel",

    description: "Dark chocolate with a decadent rum filling",

    calories: 90,

    ingredients: "Cocoa butter, Milk, Cream, rum paste and rum flavourings",

    img: "assets/rum_barrel.jpg",

  },

  {

    chocName: "Toffee Crunch",

    description: "Dark chocolate with brittle toffee candy",

    calories: 90,

    ingredients: "Cocoa butter, Milk, Cream, toffee",

    img: "assets/toffee_crunch.jpg",

  },

  {

    chocName: "Plain Supreme",

    description: "Dark chocolate with slivers of milk chocolate",

    calories: 90,

    ingredients: "Cocoa butter, Milk, Cream",

    img: "assets/plain_hybrid.jpg",

  },

];

const CREAM = '#FFFDD0';

const YELLOW = 'yellow';

const BROWN = '#3b1f0e';

let detailsShown = false;

function styleLayout() {

    $('body').css({ 'background-color': BROWN, 'color': CREAM, 'font-family': 'Georgia, serif', 'margin': '0', 'padding': '20px' });

    $('#title').css({ 'text-align': 'center', 'font-size': '40px', 'margin': '10px 0 5px' });

    $('#tagline').css({ 'text-align': 'center', 'font-size': '18px', 'margin': '0 0 20px' });

    $('#controls').css({ 'display': 'flex', 'flex-wrap': 'wrap', 'justify-content': 'center', 'gap': '15px', 'margin-bottom': '25px' });

    $('button').css({ 'background-color': '#e0a458', 'color': BROWN, 'border': 'none', 'border-radius': '24px', 'padding': '12px 24px', 'font-size': '16px', 'font-family': 'inherit', 'font-weight': 'bold', 'cursor': 'pointer' });

    $('#cards').css({ 'display': 'flex', 'flex-wrap': 'wrap', 'justify-content': 'center', 'gap': '20px', 'max-width': '1150px', 'margin': '0 auto' });

}

function buildCard(index, choc) {

    let card = $('<div></div>').addClass('card').attr('id', 'card' + index);

    card.css({ 'background-color': CREAM, 'color': BROWN, 'width': '210px', 'padding': '14px', 'border-radius': '14px', 'text-align': 'center', 'box-shadow': '0 4px 10px rgba(0, 0, 0, 0.5)', 'transition': 'background-color 0.4s' });

    let number = $('<div></div>').text('Card ' + (index + 1)).css({ 'font-size': '12px', 'opacity': '0.7' });

    let img = $('<img>').attr({ 'src': choc.img, 'alt': choc.chocName });

    img.css({ 'width': '160px', 'height': '160px', 'object-fit': 'contain', 'background-color': 'white', 'border-radius': '10px', 'margin': '8px 0' });

    let name = $('<h3></h3>').text(choc.chocName).css({ 'margin': '6px 0', 'font-size': '20px' });

    let details = $('<div></div>').addClass('details');

    details.css({ 'display': 'none', 'text-align': 'left', 'font-size': '14px', 'border-top': '1px dashed ' + BROWN, 'margin-top': '8px', 'padding-top': '8px' });

    details.append($('<p></p>').text(choc.description).css({ 'font-style': 'italic', 'margin': '0 0 6px' }));

    details.append($('<p></p>').html('<strong>Calories:</strong> ' + choc.calories).css('margin', '0 0 6px'));

    details.append($('<p></p>').html('<strong>Ingredients:</strong> ' + choc.ingredients).css('margin', '0'));

    card.append(number, img, name, details);

    $('#cards').append(card);

}

function pickSample() {

    let index = Math.floor(Math.random() * chocs.length);

    let code = Math.floor(Math.random() * 50) + 1;

    $('.card').css('background-color', CREAM);

    $('#card' + index).css('background-color', YELLOW);

    setTimeout(showCode, 100, index, code);

}

function showCode(index, code) {

    alert('Free sample: ' + chocs[index].chocName + ' (Card ' + (index + 1) + ')\n\nYour code is ' + code + '.\nGive this code to the cashier to get your free sample!');

}

function toggleDetails() {

    detailsShown = !detailsShown;

    $('.details').slideToggle(300);

    $('#toggleBtn').text(detailsShown ? 'Hide calories and content' : 'Show calories and content');

}

function buttonOver() {

    $(this).css('background-color', '#f2c078');

}

function buttonOut() {

    $(this).css('background-color', '#e0a458');

}

function init() {

    styleLayout();

    $.each(chocs, buildCard);

    $('#sampleBtn').click(pickSample);

    $('#toggleBtn').click(toggleDetails);

    $('button').hover(buttonOver, buttonOut);

}

$(document).ready(init);