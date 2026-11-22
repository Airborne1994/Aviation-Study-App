/* Flight Deck Study — King Air 200 / B200 PWA */
(() => {
  "use strict";

  const STORAGE_KEY = "flightdeck-progress-v1";

  // ---------- Progress ----------
  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  }

  function saveProgress(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function getProgress() {
    const p = loadProgress();
    if (!p.quizzes) p.quizzes = {};
    if (!p.sections) p.sections = {};
    return p;
  }

  function quizKey(aircraftId, systemId) {
    return `${aircraftId}:${systemId}`;
  }

  function sectionKey(aircraftId, systemId, sectionId) {
    return `${aircraftId}:${systemId}:${sectionId}`;
  }

  function markSection(aircraftId, systemId, sectionId) {
    const p = getProgress();
    p.sections[sectionKey(aircraftId, systemId, sectionId)] = true;
    saveProgress(p);
  }

  function saveQuiz(aircraftId, systemId, score, total) {
    const p = getProgress();
    const key = quizKey(aircraftId, systemId);
    const prev = p.quizzes[key] || { best: 0, attempts: 0 };
    p.quizzes[key] = {
      best: Math.max(prev.best || 0, score),
      last: score,
      total,
      attempts: (prev.attempts || 0) + 1,
    };
    saveProgress(p);
  }

  function resetAircraft(aircraftId) {
    const p = getProgress();
    const prefix = `${aircraftId}:`;
    p.quizzes = Object.fromEntries(Object.entries(p.quizzes).filter(([k]) => !k.startsWith(prefix)));
    p.sections = Object.fromEntries(Object.entries(p.sections).filter(([k]) => !k.startsWith(prefix)));
    saveProgress(p);
  }

  // ---------- Content ----------
  const emergencyFlows = window.FDS_CONTENT.emergencyFlows;
  const aircraft = window.FDS_CONTENT.aircraft;

  // ---------- Router / state ----------
  let route = parseHash();
  let uiState = {};

  function parseHash() {
    const raw = (location.hash || "#/").replace(/^#/, "") || "/";
    const parts = raw.split("/").filter(Boolean);
    if (parts[0] === "aircraft" && parts[1]) {
      if (parts[2] === "quiz" && parts[3]) {
        return { name: "quiz", aircraftId: parts[1], systemId: parts[3] };
      }
      if (parts[2]) {
        return { name: "system", aircraftId: parts[1], systemId: parts[2] };
      }
      return { name: "aircraft", aircraftId: parts[1] };
    }
    return { name: "home" };
  }

  function go(hash) {
    location.hash = hash;
  }

  window.addEventListener("hashchange", () => {
    route = parseHash();
    uiState = {};
    render();
  });

  function getAircraft(id) {
    return aircraft.find((a) => a.id === id);
  }

  function getSystem(aircraftId, systemId) {
    return getAircraft(aircraftId)?.systems.find((s) => s.id === systemId);
  }

  // ---------- Render helpers ----------
  const appEl = () => document.getElementById("app");

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function shell({ back, kicker, title, body }) {
    return `
      <div class="shell">
        <header class="shell-header">
          <div class="shell-header-inner">
            ${
              back
                ? `<a class="shell-back" href="${escapeHtml(back.href)}">← ${escapeHtml(back.label)}</a>`
                : `<a class="shell-brand" href="#/">FLIGHT DECK</a>`
            }
            <div class="shell-titles">
              ${kicker ? `<p class="shell-kicker">${escapeHtml(kicker)}</p>` : ""}
              ${title ? `<p class="shell-title">${escapeHtml(title)}</p>` : ""}
            </div>
          </div>
        </header>
        <main class="shell-main">${body}</main>
      </div>
    `;
  }

  function disclaimer() {
    return `<p class="disclaimer">Training aid only. Confirm every number and memory item in the AFM for your serial number.</p>`;
  }

  function renderBlocks(blocks) {
    return `<div class="blocks">${blocks
      .map((b) => {
        if (b.t === "p") return `<p>${escapeHtml(b.text)}</p>`;
        if (b.t === "h") return `<h3>${escapeHtml(b.text)}</h3>`;
        if (b.t === "ul")
          return `<ul>${b.items.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}</ul>`;
        if (b.t === "note") return `<p class="note">${escapeHtml(b.text)}</p>`;
        if (b.t === "table") {
          return `<div class="table-wrap"><table>
            <thead><tr>${b.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join("")}</tr></thead>
            <tbody>${b.rows
              .map((row) => `<tr>${row.map((c) => `<td>${escapeHtml(c)}</td>`).join("")}</tr>`)
              .join("")}</tbody>
          </table></div>`;
        }
        return "";
      })
      .join("")}</div>`;
  }

  // ---------- Pages ----------
  function renderHome() {
    const progress = getProgress();
    const cards = aircraft
      .map((plane) => {
        const done = plane.systems.filter((s) => progress.quizzes[quizKey(plane.id, s.id)]).length;
        return `
          <a class="card" href="#/aircraft/${escapeHtml(plane.id)}">
            <div class="card-row">
              <div class="card-icon">✈</div>
              <div>
                <h2 class="card-title">${escapeHtml(plane.name)}</h2>
                <p class="card-sub">${escapeHtml(plane.family)} · ${done}/${plane.systems.length} quizzes tried</p>
              </div>
            </div>
          </a>`;
      })
      .join("");

    appEl().innerHTML = shell({
      kicker: "Study platform",
      title: "Aircraft",
      body: `
        <div class="stack">
          <p class="muted">Pick an airplane, open a system, then quiz yourself. Guides and emergency memory drills are loaded for the King Air 200 / B200.</p>
          ${cards}
        </div>`,
    });
  }

  function renderAircraft() {
    const plane = getAircraft(route.aircraftId);
    if (!plane) {
      appEl().innerHTML = shell({
        back: { href: "#/", label: "Aircraft" },
        body: `<p>That airplane is not in the library.</p>`,
      });
      return;
    }
    const progress = getProgress();
    const list = plane.systems
      .map((system) => {
        const record = progress.quizzes[quizKey(plane.id, system.id)];
        const read = system.sections.filter(
          (sec) => progress.sections[sectionKey(plane.id, system.id, sec.id)]
        ).length;
        const score = record ? `best ${record.best}/${record.total}` : `${system.questions.length} quiz items`;
        return `
          <a class="card" href="#/aircraft/${escapeHtml(plane.id)}/${escapeHtml(system.id)}">
            <h2 class="card-title">${escapeHtml(system.title)}</h2>
            <p class="card-sub">${escapeHtml(system.short)}</p>
            <p class="card-sub">${read}/${system.sections.length} sections · ${escapeHtml(score)}</p>
          </a>`;
      })
      .join("");

    appEl().innerHTML = shell({
      back: { href: "#/", label: "Aircraft" },
      kicker: plane.family,
      title: plane.name,
      body: `
        <div class="stack">
          <p class="muted">${escapeHtml(plane.blurb)}</p>
          ${disclaimer()}
          ${list}
          <button type="button" class="btn-linkish" id="reset-progress">Clear progress for this airplane</button>
        </div>`,
    });

    document.getElementById("reset-progress")?.addEventListener("click", () => {
      if (confirm("Clear all progress for this airplane?")) {
        resetAircraft(plane.id);
        render();
      }
    });
  }

  function shuffle(items, seed) {
    const arr = [...items];
    let s = seed || 1;
    for (let i = arr.length - 1; i > 0; i--) {
      s = (s * 16807) % 2147483647;
      const j = s % (i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function renderMemoryDrill() {
    if (!uiState.drill) {
      uiState.drill = {
        round: 0,
        picked: [],
        miss: null,
        streak: 0,
        best: 0,
      };
    }
    const d = uiState.drill;
    const item = emergencyFlows[d.round % emergencyFlows.length];
    const pool = shuffle(item.answer, d.round + item.answer.length * 17);
    const done = d.picked.length === item.answer.length;

    const slots = item.answer
      .map((step, i) => {
        const shown = d.picked[i];
        return `<li class="slot"><span class="slot-num">${i + 1}</span><span class="${
          shown ? "" : "muted"
        }">${escapeHtml(shown || "—")}</span></li>`;
      })
      .join("");

    const poolBtns = pool
      .map((step) => {
        const used = d.picked.includes(step);
        const bad = d.miss === step;
        return `<button type="button" data-step="${escapeHtml(step)}" class="${
          used ? "used" : bad ? "bad" : ""
        }" ${used || done ? "disabled" : ""}>${escapeHtml(step)}</button>`;
      })
      .join("");

    return `
      <section class="drill" id="memory-drill">
        <div class="drill-head">
          <h2>Memory drill</h2>
          <p class="muted" style="margin:0;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.1em">
            Streak ${d.streak} · best ${d.best}
          </p>
        </div>
        <p class="muted" style="margin:0.35rem 0 0;font-size:0.9rem">
          Tap the steps in order. A wrong tap does not count. ${
            (d.round % emergencyFlows.length) + 1
          } of ${emergencyFlows.length} flows.
        </p>
        <p style="margin:1rem 0 0;font-weight:600">${escapeHtml(item.prompt)}</p>
        <ol class="slot-list">${slots}</ol>
        <div class="pool" id="drill-pool">${poolBtns}</div>
        ${d.miss ? `<p class="muted" style="margin:0.75rem 0 0;font-size:0.9rem">Not yet. Next step is still open.</p>` : ""}
        ${
          done
            ? `<div class="stack" style="margin-top:1rem">
                <p style="margin:0;font-weight:600;color:var(--primary)">Sequence locked in.</p>
                <div class="grid-2">
                  <button type="button" class="btn btn-ghost" id="drill-again">Repeat</button>
                  <button type="button" class="btn btn-primary" id="drill-next">Next flow</button>
                </div>
              </div>`
            : ""
        }
      </section>`;
  }

  function bindMemoryDrill() {
    const d = uiState.drill;
    if (!d) return;
    const item = emergencyFlows[d.round % emergencyFlows.length];
    const done = d.picked.length === item.answer.length;

    document.querySelectorAll("#drill-pool button[data-step]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (done) return;
        const step = btn.getAttribute("data-step");
        const expected = item.answer[d.picked.length];
        if (step !== expected) {
          d.miss = step;
          d.streak = 0;
          render();
          return;
        }
        d.miss = null;
        d.picked = [...d.picked, step];
        if (d.picked.length === item.answer.length) {
          d.streak += 1;
          d.best = Math.max(d.best, d.streak);
        }
        render();
      });
    });

    document.getElementById("drill-again")?.addEventListener("click", () => {
      d.picked = [];
      d.miss = null;
      render();
    });

    document.getElementById("drill-next")?.addEventListener("click", () => {
      d.round += 1;
      d.picked = [];
      d.miss = null;
      render();
    });
  }

  function renderSystem() {
    const plane = getAircraft(route.aircraftId);
    const system = getSystem(route.aircraftId, route.systemId);
    if (!plane || !system) {
      appEl().innerHTML = shell({
        back: { href: "#/", label: "Home" },
        body: `<p>That system is not in the library.</p>`,
      });
      return;
    }

    const progress = getProgress();
    if (uiState.openSection === undefined) {
      uiState.openSection = system.sections[0]?.id || "";
    }

    const sections = system.sections
      .map((section) => {
        const isOpen = uiState.openSection === section.id;
        const key = sectionKey(plane.id, system.id, section.id);
        const opened = progress.sections[key];
        return `
          <section class="accordion">
            <button type="button" class="accordion-btn" data-section="${escapeHtml(section.id)}" aria-expanded="${isOpen}">
              <span class="accordion-title">${escapeHtml(section.title)}</span>
              <span class="accordion-meta">${opened ? "Opened" : "New"} ${isOpen ? "▲" : "▼"}</span>
            </button>
            ${
              isOpen
                ? `<div class="accordion-body">${renderBlocks(section.blocks)}</div>`
                : ""
            }
          </section>`;
      })
      .join("");

    appEl().innerHTML = shell({
      back: { href: `#/aircraft/${plane.id}`, label: plane.name },
      kicker: "Study guide",
      title: system.title,
      body: `
        <div class="stack">
          ${disclaimer()}
          ${
            system.questions.length
              ? `<a class="btn btn-primary" href="#/aircraft/${escapeHtml(plane.id)}/quiz/${escapeHtml(
                  system.id
                )}">Start quiz · ${system.questions.length} items</a>`
              : `<p class="muted" style="margin:0">Study guide only — no quiz file was provided for this system.</p>`
          }
          ${system.hasDrill ? renderMemoryDrill() : ""}
          <div class="section-list">${sections}</div>
        </div>`,
    });

    document.querySelectorAll("[data-section]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-section");
        uiState.openSection = uiState.openSection === id ? "" : id;
        markSection(plane.id, system.id, id);
        render();
      });
    });

    if (system.hasDrill) bindMemoryDrill();
  }

  function renderQuiz() {
    const plane = getAircraft(route.aircraftId);
    const system = getSystem(route.aircraftId, route.systemId);
    if (!plane || !system) {
      appEl().innerHTML = shell({
        back: { href: "#/", label: "Home" },
        body: `<p>That quiz is not in the library.</p>`,
      });
      return;
    }

    if (!uiState.quiz) {
      uiState.quiz = {
        index: 0,
        picked: null,
        results: [],
        done: false,
      };
    }

    const qstate = uiState.quiz;
    const questions = system.questions;

    if (qstate.done) {
      const score = qstate.results.filter(Boolean).length;
      const missed = questions
        .map((q, i) => ({ q, ok: qstate.results[i] }))
        .filter((row) => row.ok === false);

      appEl().innerHTML = shell({
        back: {
          href: `#/aircraft/${plane.id}/${system.id}`,
          label: "Guide",
        },
        kicker: "Quiz",
        title: system.title,
        body: `
          <div class="stack">
            ${disclaimer()}
            <div class="card">
              <p class="muted" style="margin:0;text-transform:uppercase;letter-spacing:0.1em;font-size:0.8rem">Score</p>
              <p class="score-num">${score}<span class="muted" style="font-size:1.4rem"> / ${
                questions.length
              }</span></p>
              <p class="muted" style="margin:0.5rem 0 0">
                ${
                  score === questions.length
                    ? "Clean run. Confirm AFM before treating any item as signed off."
                    : "Review the misses, then run it again."
                }
              </p>
            </div>
            ${missed
              .map(
                ({ q }) => `
              <div class="card">
                <p style="margin:0;font-weight:600">${escapeHtml(q.prompt)}</p>
                <p style="margin:0.5rem 0 0;color:var(--primary)">${escapeHtml(
                  q.choices[q.correct]
                )}</p>
              </div>`
              )
              .join("")}
            <button type="button" class="btn btn-primary" id="quiz-restart">Try again</button>
          </div>`,
      });

      document.getElementById("quiz-restart")?.addEventListener("click", () => {
        uiState.quiz = { index: 0, picked: null, results: [], done: false };
        render();
      });
      // Also expose restart for inline use
      window.__fdsQuizRestart = () => {
        uiState.quiz = { index: 0, picked: null, results: [], done: false };
        render();
      };
      return;
    }

    const q = questions[qstate.index];
    const locked = qstate.picked != null;
    const scoreSoFar = qstate.results.filter(Boolean).length;
    const isCorrect = locked && Number(qstate.picked) === Number(q.correct);

    const choices = q.choices
      .map((choice, i) => {
        let cls = "choice";
        if (locked) {
          if (i === Number(q.correct)) cls += " correct";
          else if (i === Number(qstate.picked)) cls += " wrong";
          else cls += " dim";
        }
        const letter = String.fromCharCode(65 + i);
        // Use a div + inline handler so taps always register (mobile-safe).
        return `<div class="${cls}" role="button" tabindex="${locked ? -1 : 0}"
          data-choice="${i}"
          aria-disabled="${locked ? "true" : "false"}"
          onclick="window.__fdsSelectChoice(${i})"
          onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();window.__fdsSelectChoice(${i});}">
          <span class="letter">${letter}</span> ${escapeHtml(choice)}
        </div>`;
      })
      .join("");

    const feedback = locked
      ? isCorrect
        ? `<p class="quiz-feedback ok">Correct</p>`
        : `<p class="quiz-feedback bad">Incorrect — your answer is marked red; the correct answer is green.</p>`
      : `<p class="muted" style="margin:0;font-size:0.9rem">Tap any answer A–D.</p>`;

    appEl().innerHTML = shell({
      back: {
        href: `#/aircraft/${plane.id}/${system.id}`,
        label: "Guide",
      },
      kicker: "Quiz",
      title: system.title,
      body: `
        <div class="stack">
          ${disclaimer()}
          <div class="quiz-progress">
            <span>Question ${qstate.index + 1} of ${questions.length}</span>
            <span>${scoreSoFar} correct</span>
          </div>
          <div class="bar"><span style="width:${(qstate.index / questions.length) * 100}%"></span></div>
          <h2 style="margin:0;font-size:1.25rem;line-height:1.35">${escapeHtml(q.prompt)}</h2>
          <div class="choice-grid" id="choice-grid" role="group" aria-label="Answer choices">${choices}</div>
          ${feedback}
          ${
            locked && qstate.index + 1 < questions.length
              ? `<button type="button" class="btn btn-primary" id="quiz-next" onclick="window.__fdsQuizNext()">Next</button>`
              : ""
          }
          ${
            locked && qstate.index + 1 >= questions.length
              ? `<button type="button" class="btn btn-primary" id="quiz-finish" onclick="window.__fdsQuizFinish()">See score</button>`
              : ""
          }
        </div>`,
    });
  }

  function selectChoice(index) {
    if (route.name !== "quiz") return;
    if (!uiState.quiz) return;
    if (uiState.quiz.picked != null) return;

    const plane = getAircraft(route.aircraftId);
    const system = getSystem(route.aircraftId, route.systemId);
    if (!plane || !system) return;

    const q = system.questions[uiState.quiz.index];
    if (!q) return;

    const i = Number(index);
    if (Number.isNaN(i) || i < 0 || i >= q.choices.length) return;

    uiState.quiz.picked = i;
    uiState.quiz.results.push(i === Number(q.correct));

    if (uiState.quiz.index + 1 >= system.questions.length) {
      saveQuiz(
        plane.id,
        system.id,
        uiState.quiz.results.filter(Boolean).length,
        system.questions.length
      );
    }
    render();
  }

  function quizNext() {
    if (!uiState.quiz) return;
    uiState.quiz.index += 1;
    uiState.quiz.picked = null;
    render();
  }

  function quizFinish() {
    if (!uiState.quiz) return;
    uiState.quiz.done = true;
    render();
  }

  // Expose for inline handlers (most reliable on mobile WebViews).
  window.__fdsSelectChoice = selectChoice;
  window.__fdsQuizNext = quizNext;
  window.__fdsQuizFinish = quizFinish;

  function render() {
    route = parseHash();
    if (route.name === "home") renderHome();
    else if (route.name === "aircraft") renderAircraft();
    else if (route.name === "system") renderSystem();
    else if (route.name === "quiz") renderQuiz();
    else renderHome();
  }

  render();
})();
