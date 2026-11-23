// One object per color (plus colorless). theme is an accent color used
// for that color's panel border/background when it's the active one.
const mtgColors = [
  {
    name: "White",
    key: "W",
    theme: "#8a6d1f",
    philosophy: "Order, community, and law. White believes the best outcomes come from structure, cooperation, and sacrificing for the greater good.",
    strengths: "Efficient small creatures, going wide with tokens, lifegain, and removal that exiles or neutralizes a threat instead of destroying it outright.",
    iconicCard: "Everybody Lives - a cheap card that can save anyone's life at the table.",
  },
  {
    name: "Blue",
    key: "U",
    theme: "#2f6690",
    philosophy: "Knowledge and control through information. Blue believes the best plan is the one you already made, and that knowing more beats forcing more.",
    strengths: "Card draw, bounce and counterspells, and locking opponents out of their own turn instead of racing them.",
    iconicCard: "Time Stop - ends the turn immediately. A mean card to play on someone, since it just skips their turn.",
  },
  {
    name: "Black",
    key: "B",
    theme: "#5b2a73",
    philosophy: "Power by any means, and ambition that doesn't apologize for the cost. Black believes nothing matters more than getting what you want.",
    strengths: "Removal that just says 'destroy,' reanimation, and card advantage through sacrifice and paying life as a resource.",
    iconicCard: "Torment of Hailfire - don't play black much, but it's a really good finisher.",
  },
  {
    name: "Red",
    key: "R",
    theme: "#a4312a",
    philosophy: "Freedom, impulse, and living in the moment. Red believes planning too far ahead is its own kind of failure.",
    strengths: "Direct damage to anything, the fastest aggressive starts, and creatures built to trade or burn out fast.",
    iconicCard: "REPLACE ME - Lightning Bolt (1 mana, 3 damage to anything) is a safe placeholder; swap in your actual favorite Red card before you submit.",
  },
  {
    name: "Green",
    key: "G",
    theme: "#2f6b3f",
    philosophy: "Growth, nature, and accepting the world as it already is. Green believes the biggest creature on the best land eventually wins.",
    strengths: "Mana ramp, the biggest creatures for the cost, and card advantage through sheer size.",
    iconicCard: "Primeval Titan - gets you 2 lands when it attacks and when it enters the battlefield. So much value, and extra lands are great.",
  },
  {
    name: "Colorless",
    key: "C",
    theme: "#6e6e6e",
    philosophy: "Outside the five-color pie entirely - no allegiance, no restriction, playable in any deck regardless of color.",
    strengths: "Fits in any deck no matter the colors, and at the top end (the Eldrazi titans) just ends games through sheer size.",
    iconicCard: "Emrakul, the Aeons Torn - my overall favorite card in the game. Got attached to her through a D&D campaign, ended up owning a real copy worth around $3k, and cast her enough in games that she just naturally became my favorite.",
  },
];

// Given one color object, show it in #display.
const showColor = (color) => {
  const html = `
    <h2>${color.name}</h2>
    <p>${color.philosophy}</p>
    <p><strong>Strengths:</strong> ${color.strengths}</p>
    <p><strong>Iconic card:</strong> ${color.iconicCard}</p>
  `;
  $("#display").html(html);
  $("#display").css("background-color", color.theme);
  $("#display").css("border-color", color.theme);
};

// Wire up the 6 buttons so clicking one calls showColor with the matching object.
$(document).ready(() => {
  $(".color-btn").on("click", function () {
    const key = $(this).data("key");
    const color = mtgColors.find((c) => c.key === key);
    showColor(color);
  });
});
