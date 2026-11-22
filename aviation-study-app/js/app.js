/**
 * Aviation Study App
 * Flashcards • Quizzes • Progress tracking
 * Fully offline-capable PWA
 */

(function () {
  "use strict";

  // ========== DATA ==========
  const CATEGORIES = [
    { id: "aerodynamics", name: "Aerodynamics", icon: "🌬" },
    { id: "weather", name: "Weather", icon: "🌤" },
    { id: "navigation", name: "Navigation", icon: "🧭" },
    { id: "regulations", name: "Regulations", icon: "📜" },
    { id: "systems", name: "Aircraft Systems", icon: "⚙️" },
    { id: "performance", name: "Performance", icon: "📈" }
  ];

  const CARDS = [
    // Aerodynamics
    { id: 1, cat: "aerodynamics", q: "What are the four forces of flight?", a: "Lift, Weight, Thrust, and Drag." },
    { id: 2, cat: "aerodynamics", q: "What is Angle of Attack (AoA)?", a: "The angle between the chord line of the wing and the relative wind." },
    { id: 3, cat: "aerodynamics", q: "What causes a stall?", a: "Exceeding the critical angle of attack, regardless of airspeed." },
    { id: 4, cat: "aerodynamics", q: "What is induced drag?", a: "Drag produced as a byproduct of lift. It decreases as airspeed increases." },
    { id: 5, cat: "aerodynamics", q: "What is parasite drag?", a: "Drag caused by the aircraft moving through the air (form, skin friction, interference). Increases with airspeed." },
    { id: 6, cat: "aerodynamics", q: "What is ground effect?", a: "Increased lift and decreased induced drag when flying close to the ground (within one wingspan)." },
    { id: 7, cat: "aerodynamics", q: "What is the relationship between lift and airspeed?", a: "Lift is proportional to the square of the airspeed (and to air density and wing area)." },

    // Weather
    { id: 8, cat: "weather", q: "What is a METAR?", a: "A routine aviation weather report issued hourly (or more frequently when conditions change)." },
    { id: 9, cat: "weather", q: "What does TAF stand for?", a: "Terminal Aerodrome Forecast – a forecast for a specific airport, usually valid 24–30 hours." },
    { id: 10, cat: "weather", q: "What is the standard atmospheric temperature and pressure at sea level?", a: "15°C (59°F) and 29.92 inHg (1013.25 hPa)." },
    { id: 11, cat: "weather", q: "What is wind shear?", a: "A sudden change in wind speed or direction over a short distance, hazardous during takeoff and landing." },
    { id: 12, cat: "weather", q: "What is density altitude?", a: "Pressure altitude corrected for non-standard temperature. High density altitude reduces aircraft performance." },
    { id: 13, cat: "weather", q: "What are the stages of a thunderstorm?", a: "Cumulus (updraft), Mature (updraft + downdraft), and Dissipating (downdraft)." },
    { id: 14, cat: "weather", q: "What is a microburst?", a: "A localized column of sinking air that produces strong divergent winds at the surface, extremely dangerous to aircraft." },

    // Navigation
    { id: 15, cat: "navigation", q: "What is true north vs magnetic north?", a: "True north is geographic north. Magnetic north is where the compass points. Variation is the difference between them." },
    { id: 16, cat: "navigation", q: "What is magnetic variation?", a: "The angular difference between true north and magnetic north at a given location." },
    { id: 17, cat: "navigation", q: "What is a VOR?", a: "VHF Omnidirectional Range – a ground-based navigation aid that provides radial information to aircraft." },
    { id: 18, cat: "navigation", q: "What does GPS stand for in aviation?", a: "Global Positioning System – a satellite-based navigation system providing precise position information." },
    { id: 19, cat: "navigation", q: "What is dead reckoning?", a: "Navigation by calculating position using a previously known position, speed, time, and course." },
    { id: 20, cat: "navigation", q: "What is a sectional chart?", a: "A VFR navigation chart published by the FAA showing terrain, airspace, airports, and navigational aids." },

    // Regulations
    { id: 21, cat: "regulations", q: "What is the minimum safe altitude over congested areas?", a: "1,000 feet above the highest obstacle within a horizontal radius of 2,000 feet of the aircraft (14 CFR 91.119)." },
    { id: 22, cat: "regulations", q: "What is Class B airspace?", a: "Controlled airspace around the busiest airports. Requires ATC clearance and Mode C transponder." },
    { id: 23, cat: "regulations", q: "What is the basic VFR weather minimum in Class E below 10,000 ft MSL?", a: "3 statute miles visibility and 500 ft below / 1,000 ft above / 2,000 ft horizontal cloud clearance." },
    { id: 24, cat: "regulations", q: "How long is a private pilot medical certificate valid for under 40?", a: "60 months (5 years) for a third-class medical." },
    { id: 25, cat: "regulations", q: "What is required to enter Class C airspace?", a: "Two-way radio communication with ATC and a Mode C transponder." },
    { id: 26, cat: "regulations", q: "What is the purpose of a Special VFR clearance?", a: "Allows flight in controlled airspace under weather less than basic VFR minimums when visibility is at least 1 SM and clear of clouds." },

    // Aircraft Systems
    { id: 27, cat: "systems", q: "What does the pitot-static system measure?", a: "Airspeed (pitot), altitude and vertical speed (static)." },
    { id: 28, cat: "systems", q: "What is the purpose of an alternator or generator?", a: "To produce electrical power and charge the battery while the engine is running." },
    { id: 29, cat: "systems", q: "What does a vacuum system typically power?", a: "Gyroscopic instruments such as the attitude indicator and heading indicator (in many older aircraft)." },
    { id: 30, cat: "systems", q: "What is carburetor ice and when is it most likely?", a: "Ice forming in the carburetor throat. Most likely in temperatures 20–70°F with high humidity, especially at lower power settings." },
    { id: 31, cat: "systems", q: "What is the difference between a fixed-pitch and constant-speed propeller?", a: "Fixed-pitch has one blade angle. Constant-speed (variable-pitch) adjusts blade angle to maintain selected RPM." },
    { id: 32, cat: "systems", q: "What does the ELT do?", a: "Emergency Locator Transmitter – automatically activates on impact and transmits a distress signal on 121.5 / 406 MHz." },

    // Performance
    { id: 33, cat: "performance", q: "How does high density altitude affect takeoff performance?", a: "Longer takeoff roll, reduced climb rate, and reduced engine power." },
    { id: 34, cat: "performance", q: "What is Vx?", a: "Best angle of climb speed – maximum altitude gain over a given horizontal distance." },
    { id: 35, cat: "performance", q: "What is Vy?", a: "Best rate of climb speed – maximum altitude gain over a given time." },
    { id: 36, cat: "performance", q: "What is Va (maneuvering speed)?", a: "The maximum speed at which full or abrupt control inputs can be made without risk of structural damage. Decreases with weight." },
    { id: 37, cat: "performance", q: "What is the effect of a forward CG on stability and performance?", a: "More stable, higher stall speed, requires more elevator force, reduced cruise performance." },
    { id: 38, cat: "performance", q: "What is service ceiling?", a: "The maximum density altitude at which the aircraft can maintain a 100 fpm climb (or the manufacturer’s published value)." }
  ];

  // Quiz questions (multiple choice derived from cards + extras)
  const QUIZ_BANK = [
    { cat: "aerodynamics", q: "What are the four forces of flight?", options: ["Lift, Weight, Thrust, Drag", "Lift, Gravity, Power, Friction", "Up, Down, Forward, Back", "Pressure, Temperature, Density, Humidity"], answer: 0 },
    { cat: "aerodynamics", q: "A stall is caused by:", options: ["Low airspeed only", "Exceeding critical angle of attack", "High bank angle only", "Engine failure"], answer: 1 },
    { cat: "aerodynamics", q: "Induced drag is highest at:", options: ["High airspeeds", "Low airspeeds", "Cruise speed", "Vne"], answer: 1 },
    { cat: "aerodynamics", q: "Ground effect is most noticeable when the aircraft is:", options: ["Above 2,000 ft AGL", "Within one wingspan of the surface", "In the traffic pattern only", "At high altitude"], answer: 1 },
    { cat: "weather", q: "Standard sea-level pressure is:", options: ["30.00 inHg", "29.92 inHg", "28.92 inHg", "1015 hPa only"], answer: 1 },
    { cat: "weather", q: "Density altitude is pressure altitude corrected for:", options: ["Humidity", "Non-standard temperature", "Wind", "Time of day"], answer: 1 },
    { cat: "weather", q: "A microburst is:", options: ["A type of cloud", "A localized strong downdraft", "A high-altitude wind", "A pressure system"], answer: 1 },
    { cat: "navigation", q: "Magnetic variation is the difference between:", options: ["True and magnetic north", "True and grid north", "Compass and magnetic heading", "Track and heading"], answer: 0 },
    { cat: "navigation", q: "A VOR provides:", options: ["Distance only", "Radial information", "Glideslope", "GPS coordinates"], answer: 1 },
    { cat: "regulations", q: "Minimum safe altitude over a congested area is:", options: ["500 ft AGL", "1,000 ft above highest obstacle within 2,000 ft horizontally", "2,000 ft AGL", "Whatever ATC says"], answer: 1 },
    { cat: "regulations", q: "To enter Class B airspace you need:", options: ["Radio only", "ATC clearance and Mode C", "Just a Mode C transponder", "Nothing special"], answer: 1 },
    { cat: "regulations", q: "Basic VFR minimums in Class E below 10,000 ft:", options: ["1 SM clear of clouds", "3 SM and 500/1000/2000 cloud clearance", "5 SM and clear of clouds", "3 SM and clear of clouds"], answer: 1 },
    { cat: "systems", q: "The pitot tube measures:", options: ["Static pressure", "Dynamic (ram) pressure for airspeed", "Cabin pressure", "Oil pressure"], answer: 1 },
    { cat: "systems", q: "Carburetor ice is most likely when:", options: ["Very cold and dry", "20–70°F with high humidity", "Hot and dry", "Only above 10,000 ft"], answer: 1 },
    { cat: "systems", q: "An ELT transmits on:", options: ["122.8 only", "121.5 and 406 MHz", "123.45", "Only when manually activated"], answer: 1 },
    { cat: "performance", q: "Vx is the speed for:", options: ["Best rate of climb", "Best angle of climb", "Maximum endurance", "Never exceed"], answer: 1 },
    { cat: "performance", q: "Vy is the speed for:", options: ["Best angle of climb", "Best rate of climb", "Minimum sink", "Cruise climb"], answer: 1 },
    { cat: "performance", q: "Maneuvering speed (Va):", options: ["Increases with weight", "Decreases with weight", "Is constant", "Only applies to jets"], answer: 1 },
    { cat: "performance", q: "High density altitude causes:", options: ["Shorter takeoff roll", "Longer takeoff roll and reduced climb", "Better climb performance", "No effect on piston aircraft"], answer: 1 }
  ];

  // ========== STATE ==========
  const state = {
    view: "home",
    flashIndex: 0,
    flashDeck: [],
    flashFlipped: false,
    quiz: {
      questions: [],
      current: 0,
      score: 0,
      answered: false
    }
  };

  // ========== STORAGE ==========
  const STORAGE_KEY = "aviation-study-progress";

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : { studied: 0, quizzes: 0, bestScore: null, knownIds: [] };
    } catch {
      return { studied: 0, quizzes: 0, bestScore: null, knownIds: [] };
    }
  }

  function saveProgress(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  let progress = loadProgress();

  // ========== DOM HELPERS ==========
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  function showView(name) {
    state.view = name;
    $$(".view").forEach((el) => (el.hidden = true));
    const view = $(`#view-${name}`);
    if (view) view.hidden = false;

    // Update header
    const titles = {
      home: "Aviation Study",
      categories: "Study Topics",
      flashcards: "Flashcards",
      quiz: "Quiz",
      progress: "Progress"
    };
    $("#headerTitle").textContent = titles[name] || "Aviation Study";
    $("#backBtn").hidden = name === "home";

    // Update bottom nav
    $$(".nav-item").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.nav === name || (name === "progress" && btn.dataset.nav === "home"));
    });

    // Special init
    if (name === "flashcards") initFlashcards();
    if (name === "categories") renderCategories();
    if (name === "quiz") showQuizSetup();
    if (name === "progress" || name === "home") updateStats();
  }

  // ========== HOME / STATS ==========
  function updateStats() {
    progress = loadProgress();
    $("#statStudied").textContent = progress.studied;
    $("#statQuizzes").textContent = progress.quizzes;
    $("#statBest").textContent = progress.bestScore != null ? progress.bestScore + "%" : "—";

    $("#progStudied").textContent = progress.studied;
    $("#progQuizzes").textContent = progress.quizzes;
    $("#progBest").textContent = progress.bestScore != null ? progress.bestScore + "%" : "—";
  }

  // ========== CATEGORIES ==========
  function renderCategories() {
    const list = $("#categoryList");
    list.innerHTML = CATEGORIES.map((cat) => {
      const count = CARDS.filter((c) => c.cat === cat.id).length;
      return `
        <button class="category-item" data-cat="${cat.id}">
          <div class="cat-icon">${cat.icon}</div>
          <div class="cat-info">
            <div class="cat-name">${cat.name}</div>
            <div class="cat-count">${count} cards</div>
          </div>
        </button>
      `;
    }).join("");

    list.querySelectorAll(".category-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        const catId = btn.dataset.cat;
        showView("flashcards");
        $("#flashCategory").value = catId;
        buildFlashDeck(catId);
        showFlashCard();
      });
    });
  }

  // ========== FLASHCARDS ==========
  function buildFlashDeck(catId = "all") {
    let deck = catId === "all" ? [...CARDS] : CARDS.filter((c) => c.cat === catId);
    // Optional: put known cards at the end
    state.flashDeck = deck;
    state.flashIndex = 0;
    state.flashFlipped = false;
  }

  function showFlashCard() {
    const deck = state.flashDeck;
    if (!deck.length) {
      $("#flashQuestion").textContent = "No cards in this category.";
      $("#flashAnswer").textContent = "";
      $("#flashCounter").textContent = "0 / 0";
      return;
    }

    const card = deck[state.flashIndex];
    $("#flashQuestion").textContent = card.q;
    $("#flashAnswer").textContent = card.a;
    $("#flashCounter").textContent = `${state.flashIndex + 1} / ${deck.length}`;

    const flashEl = $("#flashcard");
    flashEl.classList.remove("flipped");
    state.flashFlipped = false;

    // Increment studied count once per unique card view session is simple; we count each flip to answer
  }

  function initFlashcards() {
    // Populate category select
    const select = $("#flashCategory");
    const current = select.value || "all";
    select.innerHTML = `<option value="all">All Categories</option>` +
      CATEGORIES.map((c) => `<option value="${c.id}">${c.name}</option>`).join("");
    select.value = current;

    buildFlashDeck(current);
    showFlashCard();
  }

  function flipCard() {
    state.flashFlipped = !state.flashFlipped;
    $("#flashcard").classList.toggle("flipped", state.flashFlipped);
    if (state.flashFlipped) {
      progress.studied += 1;
      saveProgress(progress);
      updateStats();
    }
  }

  // ========== QUIZ ==========
  function showQuizSetup() {
    $("#quizSetup").hidden = false;
    $("#quizActive").hidden = true;
    $("#quizResults").hidden = true;

    const select = $("#quizCategory");
    select.innerHTML = `<option value="all">All Categories</option>` +
      CATEGORIES.map((c) => `<option value="${c.id}">${c.name}</option>`).join("");
  }

  function startQuiz() {
    const cat = $("#quizCategory").value;
    const count = parseInt($("#quizCount").value, 10);

    let pool = cat === "all" ? [...QUIZ_BANK] : QUIZ_BANK.filter((q) => q.cat === cat);
    // Shuffle
    pool = pool.sort(() => Math.random() - 0.5).slice(0, Math.min(count, pool.length));

    if (!pool.length) {
      alert("No questions available for this category.");
      return;
    }

    state.quiz = {
      questions: pool,
      current: 0,
      score: 0,
      answered: false
    };

    $("#quizSetup").hidden = true;
    $("#quizActive").hidden = false;
    $("#quizResults").hidden = true;
    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    const { questions, current, score } = state.quiz;
    const q = questions[current];

    $("#quizQuestionNum").textContent = `${current + 1} / ${questions.length}`;
    $("#quizScoreLive").textContent = `Score: ${score}`;
    $("#quizProgressFill").style.width = `${((current) / questions.length) * 100}%`;
    $("#quizQuestion").textContent = q.q;

    const optionsEl = $("#quizOptions");
    optionsEl.innerHTML = q.options
      .map((opt, i) => `<button class="option-btn" data-index="${i}">${opt}</button>`)
      .join("");

    $("#nextQuestion").hidden = true;
    state.quiz.answered = false;

    optionsEl.querySelectorAll(".option-btn").forEach((btn) => {
      btn.addEventListener("click", () => handleAnswer(parseInt(btn.dataset.index, 10)));
    });
  }

  function handleAnswer(selected) {
    if (state.quiz.answered) return;
    state.quiz.answered = true;

    const q = state.quiz.questions[state.quiz.current];
    const buttons = $$("#quizOptions .option-btn");

    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.answer) btn.classList.add("correct");
      if (i === selected && selected !== q.answer) btn.classList.add("wrong");
    });

    if (selected === q.answer) {
      state.quiz.score += 1;
      $("#quizScoreLive").textContent = `Score: ${state.quiz.score}`;
    }

    $("#nextQuestion").hidden = false;
    $("#nextQuestion").textContent =
      state.quiz.current + 1 >= state.quiz.questions.length ? "See Results" : "Next Question";
  }

  function nextQuizQuestion() {
    state.quiz.current += 1;
    if (state.quiz.current >= state.quiz.questions.length) {
      finishQuiz();
    } else {
      renderQuizQuestion();
    }
  }

  function finishQuiz() {
    const { score, questions } = state.quiz;
    const pct = Math.round((score / questions.length) * 100);

    progress.quizzes += 1;
    if (progress.bestScore == null || pct > progress.bestScore) {
      progress.bestScore = pct;
    }
    saveProgress(progress);

    $("#quizActive").hidden = true;
    $("#quizResults").hidden = false;
    $("#resultsScore").textContent = pct + "%";
    $("#resultsDetail").textContent = `You got ${score} out of ${questions.length} correct.`;
  }

  // ========== NAVIGATION ==========
  function setupNav() {
    // Bottom nav
    $$(".nav-item").forEach((btn) => {
      btn.addEventListener("click", () => showView(btn.dataset.nav));
    });

    // Action cards on home
    $$(".action-card").forEach((btn) => {
      btn.addEventListener("click", () => showView(btn.dataset.nav));
    });

    // Back button
    $("#backBtn").addEventListener("click", () => showView("home"));
  }

  // ========== EVENT BINDINGS ==========
  function bindEvents() {
    // Flashcard
    $("#flashcard").addEventListener("click", flipCard);
    $("#nextCard").addEventListener("click", () => {
      if (state.flashIndex < state.flashDeck.length - 1) {
        state.flashIndex += 1;
        showFlashCard();
      }
    });
    $("#prevCard").addEventListener("click", () => {
      if (state.flashIndex > 0) {
        state.flashIndex -= 1;
        showFlashCard();
      }
    });
    $("#shuffleCards").addEventListener("click", () => {
      state.flashDeck = state.flashDeck.sort(() => Math.random() - 0.5);
      state.flashIndex = 0;
      showFlashCard();
    });
    $("#markKnown").addEventListener("click", () => {
      // Simple feedback
      const btn = $("#markKnown");
      btn.textContent = "✓ Marked";
      setTimeout(() => (btn.textContent = "Mark Known"), 1000);
    });
    $("#flashCategory").addEventListener("change", (e) => {
      buildFlashDeck(e.target.value);
      showFlashCard();
    });

    // Quiz
    $("#startQuiz").addEventListener("click", startQuiz);
    $("#nextQuestion").addEventListener("click", nextQuizQuestion);
    $("#retryQuiz").addEventListener("click", () => {
      showQuizSetup();
    });
    $("#backFromResults").addEventListener("click", () => showView("home"));

    // Progress
    $("#resetProgress").addEventListener("click", () => {
      if (confirm("Reset all study progress? This cannot be undone.")) {
        progress = { studied: 0, quizzes: 0, bestScore: null, knownIds: [] };
        saveProgress(progress);
        updateStats();
      }
    });
  }

  // ========== SERVICE WORKER (PWA) ==========
  function registerSW() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("./service-worker.js")
        .then((reg) => console.log("SW registered:", reg.scope))
        .catch((err) => console.warn("SW registration failed:", err));
    }
  }

  // ========== INIT ==========
  function init() {
    setupNav();
    bindEvents();
    updateStats();
    showView("home");
    registerSW();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
