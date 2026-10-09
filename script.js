
const $ = (id) => document.getElementById(id);

const screens = [
  "homeScreen",
  "quizScreen",
  "resultScreen",
  "collectionScreen"
];

const questions = [
  {
    q: "You find a mysterious glowing door. What do you do?",
    a: [
      ["Open it immediately 🚪", "brave"],
      ["Study its magic 🔮", "magic"],
      ["Listen for sounds 👂", "wise"],
      ["Sneak around it 🐈", "shadow"]
    ]
  },
  {
    q: "Choose your perfect home.",
    a: [
      ["A cozy forest 🌳", "nature"],
      ["A floating castle ☁️", "sky"],
      ["A secret cave 🌑", "shadow"],
      ["A magical library 📚", "magic"]
    ]
  },
  {
    q: "Your friend is having a bad day. You...",
    a: [
      ["Make them laugh 😂", "joy"],
      ["Listen and comfort them 💗", "kind"],
      ["Help solve the problem 🧠", "wise"],
      ["Take them on an adventure 🗺️", "brave"]
    ]
  },
  {
    q: "Pick a magical ability.",
    a: [
      ["Control plants 🌿", "nature"],
      ["Fly through clouds 🪽", "sky"],
      ["Disappear in shadows 🌘", "shadow"],
      ["Cast powerful spells ✨", "magic"]
    ]
  },
  {
    q: "What describes you best?",
    a: [
      ["Curious and clever 🦉", "wise"],
      ["Playful and cheerful 🐣", "joy"],
      ["Gentle and caring 🐰", "kind"],
      ["Bold and fearless 🐯", "brave"]
    ]
  },
  {
    q: "Choose a magical companion.",
    a: [
      ["A tiny forest spirit 🍄", "nature"],
      ["A star-winged bird ⭐", "sky"],
      ["A mysterious black cat 🐈‍⬛", "shadow"],
      ["A baby dragon 🐉", "magic"]
    ]
  },
  {
    q: "Which place would you explore first?",
    a: [
      ["An enchanted garden 🌷", "nature"],
      ["A mountain above the clouds 🏔️", "sky"],
      ["An abandoned moon temple 🌙", "shadow"],
      ["A wizard's hidden tower 🗼", "magic"]
    ]
  },
  {
    q: "Choose your ideal weekend.",
    a: [
      ["Explore somewhere new 🧭", "brave"],
      ["Relax with loved ones 🫶", "kind"],
      ["Play games and have fun 🎮", "joy"],
      ["Read or learn something 📖", "wise"]
    ]
  },
  {
    q: "What would your friends call you?",
    a: [
      ["The protector 🛡️", "brave"],
      ["The sunshine ☀️", "joy"],
      ["The quiet mystery 🌌", "shadow"],
      ["The dreamer 💭", "magic"]
    ]
  },
  {
    q: "Pick a special treasure.",
    a: [
      ["A living crystal 💎", "magic"],
      ["A feather from the sky 🪶", "sky"],
      ["An ancient key 🗝️", "wise"],
      ["A flower that never fades 🌼", "nature"]
    ]
  },
  {
    q: "When facing a challenge, you...",
    a: [
      ["Face it head-on 💪", "brave"],
      ["Think of a clever plan 🧩", "wise"],
      ["Trust your instincts 🌙", "shadow"],
      ["Ask others to work together 🤝", "kind"]
    ]
  },
  {
    q: "Choose a magical weather effect.",
    a: [
      ["Sparkling stardust 🌠", "sky"],
      ["A warm golden sunrise 🌅", "joy"],
      ["A mysterious purple mist 🌫️", "shadow"],
      ["Glowing petals in the wind 🌸", "nature"]
    ]
  }
];

const creatures = [
  {
    name: "Moon Fox",
    emoji: "🦊",
    type: "shadow",
    power: "Moonlight Illusion",
    description: "Quietly clever, curious, and full of surprises. You notice details others miss."
  },
  {
    name: "Star Phoenix",
    emoji: "🔥",
    type: "brave",
    power: "Starlight Rebirth",
    description: "You rise after every challenge and inspire others to keep going."
  },
  {
    name: "Cloud Griffin",
    emoji: "🦅",
    type: "sky",
    power: "Wind Riding",
    description: "Independent and adventurous, you always look for a new horizon."
  },
  {
    name: "Forest Sprite",
    emoji: "🧚",
    type: "nature",
    power: "Nature's Whisper",
    description: "You find beauty in little things and bring a calm feeling wherever you go."
  },
  {
    name: "Crystal Dragon",
    emoji: "🐉",
    type: "magic",
    power: "Crystal Shield",
    description: "Imaginative and powerful, you turn unusual ideas into something wonderful."
  },
  {
    name: "Dream Owl",
    emoji: "🦉",
    type: "wise",
    power: "Dream Sight",
    description: "Thoughtful and observant, you love discovering how things work."
  },
  {
    name: "Sun Bunny",
    emoji: "🐰",
    type: "joy",
    power: "Sunshine Burst",
    description: "Your playful energy makes ordinary moments feel special."
  },
  {
    name: "Heart Unicorn",
    emoji: "🦄",
    type: "kind",
    power: "Healing Light",
    description: "You care deeply about others and know how to make people feel welcome."
  },
  {
    name: "Shadow Panther",
    emoji: "🐈‍⬛",
    type: "shadow",
    power: "Silent Step",
    description: "Calm and mysterious, you prefer to watch carefully before making a move."
  },
  {
    name: "Sky Kitsune",
    emoji: "🌟",
    type: "sky",
    power: "Star Dash",
    description: "Quick-thinking and adventurous, you bring a spark of excitement to every journey."
  },
  {
    name: "Moss Golem",
    emoji: "🪨",
    type: "nature",
    power: "Earth Guard",
    description: "Reliable and patient, you give others strength when they need it."
  },
  {
    name: "Spell Cat",
    emoji: "🐈",
    type: "magic",
    power: "Mystic Spark",
    description: "Independent and imaginative, you always have another trick up your sleeve."
  },
  {
    name: "Brave Griffin",
    emoji: "🦁",
    type: "brave",
    power: "Courage Roar",
    description: "You stand up for what matters and aren't afraid to try."
  },
  {
    name: "Golden Owl",
    emoji: "🦉",
    type: "wise",
    power: "Golden Insight",
    description: "You think before you act and often see solutions other people miss."
  },
  {
    name: "Giggle Puff",
    emoji: "☁️",
    type: "joy",
    power: "Happy Bubble",
    description: "Funny and lighthearted, you help people find joy in small things."
  },
  {
    name: "Kindling Deer",
    emoji: "🦌",
    type: "kind",
    power: "Gentle Glow",
    description: "You are considerate and make others feel safe just by being there."
  }
];

const rarities = [
  { name: "Common", chance: 45 },
  { name: "Rare", chance: 30 },
  { name: "Epic", chance: 17 },
  { name: "Legendary", chance: 7 },
  { name: "Mythical", chance: 1 }
];

let currentQuestions = [];
let questionIndex = 0;
let selectedAnswer = null;
let scores = {};
let currentCreature = null;
let currentRarity = null;

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function showScreen(screenId) {
  screens.forEach(id => {
    $(id).classList.toggle("hidden", id !== screenId);
  });
}

function loadCollection() {
  try {
    const saved = JSON.parse(
      localStorage.getItem("whatCreatureCollection") || "[]"
    );
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

function saveCollection(collection) {
  try {
    localStorage.setItem(
      "whatCreatureCollection",
      JSON.stringify(collection)
    );
    return true;
  } catch (error) {
    alert("Your browser could not save the collection.");
    return false;
  }
}

function updateCollectionCount() {
  $("collectionCount").textContent = loadCollection().length;
}

function startQuiz() {
  currentQuestions = shuffle(questions).slice(0, 6);
  questionIndex = 0;
  selectedAnswer = null;
  scores = {};
  showScreen("quizScreen");
  renderQuestion();
}

function renderQuestion() {
  const question = currentQuestions[questionIndex];
  const number = questionIndex + 1;
  const percent = Math.round((number / currentQuestions.length) * 100);

  selectedAnswer = null;

  $("progressText").textContent =
    `Question ${number} of ${currentQuestions.length}`;
  $("progressPercent").textContent = `${percent}%`;
  $("progressBar").style.width = `${percent}%`;
  $("questionText").textContent = question.q;
  $("nextBtn").disabled = true;
  $("nextBtn").textContent =
    number === currentQuestions.length ? "Reveal My Creature ✨" : "Next ➜";

  const answersBox = $("answers");
  answersBox.innerHTML = "";

  shuffle(question.a).forEach(([label, type]) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.textContent = label;

    button.addEventListener("click", () => {
      selectedAnswer = type;

      answersBox.querySelectorAll(".answer").forEach(item => {
        item.classList.remove("selected");
      });

      button.classList.add("selected");
      $("nextBtn").disabled = false;
    });

    answersBox.appendChild(button);
  });
}

function chooseRarity() {
  const roll = Math.random() * 100;
  let total = 0;

  for (const rarity of rarities) {
    total += rarity.chance;
    if (roll < total) return rarity.name;
  }

  return "Common";
}

function revealCreature() {
  const types = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  const bestType = types[0];

  let matches = creatures.filter(creature => creature.type === bestType);

  if (matches.length === 0) {
    matches = creatures;
  }

  currentCreature = matches[Math.floor(Math.random() * matches.length)];
  currentRarity = chooseRarity();

  $("resultEmoji").textContent = currentCreature.emoji;
  $("resultName").textContent = currentCreature.name;
  $("resultRarity").textContent = `✨ ${currentRarity} Creature ✨`;
  $("resultDescription").textContent = currentCreature.description;
  $("resultPower").textContent = currentCreature.power;
  $("resultMessage").textContent =
    "Your magical journey has just begun. Play again to discover something new!";

  const collection = loadCollection();

  collection.push({
    ...currentCreature,
    rarity: currentRarity,
    discoveredAt: new Date().toISOString()
  });

  saveCollection(collection);
  updateCollectionCount();
  showScreen("resultScreen");
}

function renderCollection() {
  const collection = loadCollection();
  const grid = $("collectionGrid");
  grid.innerHTML = "";

  if (collection.length === 0) {
    const message = document.createElement("p");
    message.textContent =
      "Your collection is empty. Play the quiz to discover your first creature! ✨";
    grid.appendChild(message);
    return;
  }

  collection.slice().reverse().forEach(creature => {
    const card = document.createElement("article");
    card.className = "creature-card";

    const emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.textContent = creature.emoji;

    const name = document.createElement("h3");
    name.textContent = creature.name;

    const rarity = document.createElement("p");
    rarity.textContent = `${creature.rarity} • ${creature.power}`;

    card.append(emoji, name, rarity);
    grid.appendChild(card);
  });
}

$("startBtn").addEventListener("click", startQuiz);
$("againBtn").addEventListener("click", startQuiz);

$("nextBtn").addEventListener("click", () => {
  if (selectedAnswer === null) return;

  scores[selectedAnswer] = (scores[selectedAnswer] || 0) + 1;
  questionIndex++;

  if (questionIndex < currentQuestions.length) {
    renderQuestion();
  } else {
    revealCreature();
  }
});

$("homeBtn").addEventListener("click", () => {
  showScreen("homeScreen");
});

$("collectionBtn").addEventListener("click", () => {
  renderCollection();
  showScreen("collectionScreen");
});

$("viewCollectionBtn").addEventListener("click", () => {
  renderCollection();
  showScreen("collectionScreen");
});

$("backBtn").addEventListener("click", () => {
  showScreen("homeScreen");
});

$("clearCollectionBtn").addEventListener("click", () => {
  if (confirm("Are you sure you want to delete all discovered creatures?")) {
    saveCollection([]);
    updateCollectionCount();
    renderCollection();
  }
});

updateCollectionCount();
showScreen("homeScreen");
