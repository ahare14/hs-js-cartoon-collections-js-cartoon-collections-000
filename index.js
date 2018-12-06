
function dwarfRollCall(dwarves) {
  var names = []
  for (var i = 0; i < dwarves.length; i++) {
    names.push(`${i + 1}. ${dwarves[i]} `)
    // names.push((i + 1) + ". " + dwarves[i]+ " ");
  }
  return names.join("");
}

function summonCaptainPlanet(planeteerCalls){
  var calls = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    calls.push(planeteerCalls[i].toUpperCase() + "!");
  }
  return calls;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    } else {
        return false;
    }
  }
}

function findTheCheese (foods) {
  var cheese = ['cheddar', 'gouda', 'camembert'];
  var item;
  for (var i = 0; i < foods.length; i++) {
    if ((foods[i] === cheese[0]) || (foods[i] === cheese[1]) || (foods[i] === cheese[2])) {
      return foods[i];
    } else {
      item = 'no cheese!';
    }
  } return item;
}
