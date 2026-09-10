function addPaintAndSupplies(totalCost, callback) {

    let cost = prompt("Enter the cost for the paint and supplies:");

    cost = parseFloat(cost);

    if (cost > 100)

        cost *= 1.1;

    let paintArea = document.querySelector(".paint");

    paintArea.innerHTML = `Paint $ ${cost.toFixed(2)}`;

    callback(totalCost + cost);

    return totalCost + cost;

}

const addFloorCoverings = function(totalCost, callback) {

    let cost = prompt("Enter the cost for floor coverings:");

    cost = parseFloat(cost);

    if (cost < 500)

        cost *= 0.85;

    let floorArea = document.querySelector(".floorCoverings");

    floorArea.innerHTML = `Floor Coverings $ ${cost.toFixed(2)}`;

    callback(totalCost + cost);

    return totalCost + cost;

};

const addFurniture = (totalCost, callback) => {

    let cost = prompt("Enter the cost for furniture:");

    cost = parseFloat(cost);

    if (cost < 500)

        cost *= 0.9;

    let furnitureArea = document.querySelector(".furniture");

    furnitureArea.innerHTML = `Furniture $ ${cost.toFixed(2)}`;

    callback(totalCost + cost);

    return totalCost + cost;

};

const updateTotals = (cost) => {

    let totalsArea = document.querySelector(".totalCost");

    totalsArea.innerHTML = `Total $ ${cost.toFixed(2)}`;

}

let totalCost = 0;

totalCost = addPaintAndSupplies(totalCost, updateTotals);

totalCost = addFloorCoverings(totalCost, updateTotals);

totalCost = addFurniture(totalCost, updateTotals);