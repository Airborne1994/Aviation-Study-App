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
  const emergencyFlows = [
    {
      prompt: "1. Emergency engine shutdown (fire, failure, chip, or unscheduled torque)",
      answer: [
        "Condition lever — FUEL CUTOFF",
        "Propeller lever — FEATHER",
        "Fuel firewall valve — CLOSE",
        "Fire extinguisher — ACTUATE if fire warning persists or fire is confirmed",
      ],
    },
    {
      prompt: "2. Engine failure on takeoff at or below V1 — abort (then full shutdown if runway is insufficient)",
      answer: [
        "Power levers — IDLE",
        "Brakes — AS REQUIRED",
        "Operating engine — MAXIMUM REVERSE",
        "Condition levers — CUT-OFF",
        "Fuel firewall valves — CLOSED",
        "Master switch — OFF (gang bar down)",
      ],
    },
    {
      prompt: "3. Engine failure after lift-off / above V1 — continue. Do not retard the failed power lever until the propeller has stopped.",
      answer: [
        "Power — MAXIMUM ALLOWABLE",
        "Airspeed — MAINTAIN (takeoff speed or above)",
        "Landing gear — UP",
        "Propeller (inoperative) — CONFIRM AUTOFEATHER or FEATHER",
        "Airspeed — best rate of climb, 121 KIAS, after obstacles",
        "Flaps — UP",
        "Condition lever — CUT-OFF",
        "Fuel firewall valve — CLOSED",
        "Engine auto ignition — OFF",
        "Autofeather switch — OFF",
        "Generator — OFF",
        "Electrical load — MONITOR",
      ],
    },
    {
      prompt: "4. Engine failure in flight below VMCA (about 86 KIAS)",
      answer: [
        "Power (operating engine) — REDUCE to keep directional control",
        "Nose — LOWER to accelerate above VMCA",
        "Power — ADJUST as required",
        "Failed engine — SECURE (emergency engine shutdown)",
      ],
    },
    {
      prompt: "5. Engine fire on the ground",
      answer: [
        "Condition lever — FUEL CUT-OFF",
        "Fuel firewall valve — CLOSE",
        "Ignition and engine start — STARTER ONLY",
        "Fire extinguisher — ACTUATE if the fire persists",
      ],
    },
    {
      prompt: "6. Emergency descent",
      answer: [
        "Power levers — IDLE",
        "Propeller levers — FULL FORWARD",
        "Flaps — APPROACH",
        "Landing gear — EXTEND (when within limits)",
        "Airspeed — 182 KIAS maximum",
      ],
    },
    {
      prompt: "7. Glide — both engines inoperative",
      answer: [
        "Landing gear — UP",
        "Flaps — UP",
        "Propellers — FEATHERED",
        "Airspeed — 135 KIAS",
      ],
    },
    {
      prompt: "8. Electrical smoke or fire",
      answer: [
        "Crew — DON MASKS (100%)",
        "Microphone selector — OXYGEN MASK",
        "Passenger manual override — PULL ON",
        "Passengers — PULL LANYARD PIN, DON MASK",
        "Cabin temperature mode — OFF",
        "Vent blower — AUTO",
        "Aft blower — OFF",
        "Radiant heat — OFF",
        "Avionics master — OFF",
        "Nonessential electrical equipment — OFF",
      ],
    },
    {
      prompt: "9. Environmental system smoke or fumes",
      answer: [
        "Crew — DON MASKS (100%)",
        "Microphone selector — OXYGEN MASK",
        "Passenger manual override — PULL ON",
        "Passengers — PULL LANYARD PIN, DON MASK",
        "Cabin temperature mode — OFF",
        "Vent blower — HI",
        "Left bleed air valve — ENVIR OFF",
      ],
    },
    {
      prompt: "10. Unscheduled electric elevator trim",
      answer: [
        "Airplane attitude — MAINTAIN with elevator control",
        "Control-wheel disconnect — DEPRESS FULLY (second level)",
        "Manually retrim the airplane",
        "Elevator trim switch (pedestal) — OFF",
      ],
    },
    {
      prompt: "11. Unscheduled rudder boost",
      answer: [
        "Rudder boost switch — OFF",
        "Rudder trim — ADJUST if it persists",
        "Bleed air valves — INSTR & ENVIR OFF (approach, landing assured)",
        "Conduct a normal landing",
      ],
    },
    {
      prompt: "12. One-engine-inoperative landing",
      answer: [
        "Flaps — APPROACH (when the field is assured)",
        "Landing gear — DOWN",
        "Propeller control — FULL FORWARD",
        "Airspeed — 10 knots above landing approach speed",
        "Flaps — DOWN (when a go-around is no longer possible)",
        "Airspeed — normal landing approach speed",
        "Execute a normal landing",
      ],
    },
    {
      prompt: "13. One-engine-inoperative go-around",
      answer: [
        "Power — MAXIMUM ALLOWABLE",
        "Flaps — UP",
        "Airspeed — VYSE, 121 KIAS",
        "Positive rate of climb — landing gear UP",
      ],
    },
    {
      prompt: "14. Loss of cabin pressure",
      answer: [
        "Oxygen (crew and passengers) — AS REQUIRED",
        "Descend — AS REQUIRED",
      ],
    },
  ];

  function mcq(prompt, choices, correct) {
    return { kind: "mcq", prompt, choices, correct };
  }

  const aircraft = [
    {
      id: "king-air-200",
      name: "King Air 200 / B200",
      family: "Beechcraft Super King Air",
      blurb:
        "Systems, limitations, and memory-item drills for the 200 and B200. Values vary by serial and engine — always confirm the AFM.",
      systems: [
        {
          id: "limitations",
          title: "Aircraft Limitations",
          short: "Airspeeds, engine, propeller, pressurization, and operating limits.",
          sections: [
            {
              id: "airspeed",
              title: "Airspeed limitations",
              blocks: [
                {
                  t: "p",
                  text: "Typical later King Air 200 / B200 values. Early 200s may differ. Confirm the AFM for the serial you fly.",
                },
                {
                  t: "table",
                  headers: ["Limit", "Typical value", "Notes"],
                  rows: [
                    ["VMO / MMO (later / B200)", "260 KCAS / .52 Mach", "Do not exceed"],
                    ["VA at 12,500 lb", "182 KCAS / 181 KIAS", "No full/abrupt controls above"],
                    ["VLO extend / VLE", "182 KCAS / 181 KIAS", "Extend / gear extended"],
                    ["VLO retract", "164 KCAS / 163 KIAS", "Max to retract"],
                    ["VFE Approach", "200 KCAS", "Approach flaps"],
                    ["VFE Full (200)", "≈ 144–146 KCAS", "B200 often higher — confirm AFM"],
                    ["VMCA", "91 KCAS / 86 KIAS", "One engine inop, takeoff power"],
                  ],
                },
              ],
            },
            {
              id: "engine",
              title: "Engine limits (PT6A-41 / -42)",
              blocks: [
                {
                  t: "ul",
                  items: [
                    "Takeoff / max continuous torque: 2,230 ft-lb at 1,600–2,000 Np. Below 1,600 Np: 1,100 ft-lb.",
                    "ITT takeoff / max continuous: 800 °C (-42) / 750 °C (-41).",
                    "Starting ITT: 1,000 °C (typically 5 seconds).",
                    "Starter duty: 40 s ON / 60 s OFF / 40 s ON / 60 s OFF / 40 s ON / then 30 min OFF.",
                    "Np max continuous 2,000; reverse 1,900; transient 2,200 for 5 seconds.",
                  ],
                },
              ],
            },
            {
              id: "other",
              title: "Pressurization, electrical, ice",
              blocks: [
                {
                  t: "ul",
                  items: [
                    "Max cabin differential ≈ 6.0–6.6 psi.",
                    "Yaw damper inoperative: do not exceed 17,000 ft.",
                    "Generator load: 100% in flight SL–31,000 ft; 85% on the ground.",
                    "Never take off or land with surface boots inflated; do not operate below −40 °C.",
                    "Do not operate propeller deice with props static.",
                    "Category: Normal — spins and aerobatics prohibited.",
                  ],
                },
                {
                  t: "note",
                  text: "Training aid only. Confirm exact numbers in the AFM for your airplane.",
                },
              ],
            },
          ],
          questions: [
            mcq("Typical VMO / MMO for later King Air 200 / B200?", ["200 KCAS / .40 Mach", "260 KCAS / .52 Mach", "300 KCAS / .60 Mach", "182 KCAS / .45 Mach"], 1),
            mcq("VA at 12,500 lb?", ["144 KCAS", "182 KCAS / 181 KIAS", "200 KCAS", "260 KCAS"], 1),
            mcq("VLO extend?", ["164 KCAS / 163 KIAS", "182 KCAS / 181 KIAS", "200 KCAS", "144 KCAS"], 1),
            mcq("VLO retract?", ["182 KCAS / 181 KIAS", "164 KCAS / 163 KIAS", "200 KCAS", "91 KCAS"], 1),
            mcq("VMCA approximate?", ["60 KCAS", "91 KCAS / 86 KIAS", "120 KCAS", "182 KCAS"], 1),
            mcq("Max continuous torque (typical)?", ["1,100 ft-lb", "2,230 ft-lb", "2,750 ft-lb", "850 ft-lb"], 1),
            mcq("PT6A-42 takeoff / max cont ITT?", ["750 °C", "800 °C", "850 °C", "1,000 °C"], 1),
            mcq("Starting ITT limit?", ["750 °C", "800 °C", "1,000 °C (typically 5 s)", "1,200 °C"], 2),
            mcq("Below what Np is torque limited to 1,100 ft-lb?", ["1,000 rpm", "1,600 rpm", "1,900 rpm", "2,000 rpm"], 1),
            mcq("Max continuous propeller rpm?", ["1,900", "2,000", "2,200", "2,750"], 1),
            mcq("Max reverse propeller rpm?", ["1,600", "1,900", "2,000", "2,200"], 1),
            mcq("Yaw damper inop max altitude?", ["10,000 ft", "17,000 ft", "25,000 ft", "35,000 ft"], 1),
            mcq("Ground sustained generator load?", ["100%", "85%", "50%", "No limit"], 1),
            mcq("Surface boots critical limit?", ["Only above FL200", "Never takeoff/land inflated; no ops below −40 °C", "Must inflate every takeoff", "Need both engines"], 1),
            mcq("Aircraft category?", ["Utility", "Normal (spins prohibited)", "Aerobatic", "Transport"], 1),
          ],
        },
        {
          id: "emergency",
          title: "Emergency Procedures",
          short: "Memory items, emergency speeds, and immediate actions.",
          hasDrill: true,
          sections: [
            {
              id: "speeds",
              title: "Key emergency speeds",
              blocks: [
                {
                  t: "ul",
                  items: [
                    "VMCA ≈ 86 KIAS",
                    "VXSE ≈ 115 KIAS · VYSE / VENR ≈ 121 KIAS",
                    "VSSE ≈ 104 KIAS",
                    "Emergency descent ≈ 182 KIAS",
                    "Max-range glide ≈ 135 KIAS",
                    "One-engine final (flaps down) ≈ 103 KIAS",
                  ],
                },
              ],
            },
            {
              id: "shutdown",
              title: "Emergency engine shutdown",
              blocks: [
                {
                  t: "ul",
                  items: [
                    "Condition lever — FUEL CUTOFF",
                    "Propeller lever — FEATHER",
                    "Fuel firewall valve — CLOSE",
                    "Fire extinguisher — ACTUATE if required",
                    "Follow-up: generator OFF, auto ignition OFF, autofeather OFF, monitor electrical load.",
                  ],
                },
              ],
            },
            {
              id: "takeoff",
              title: "Engine failure on takeoff",
              blocks: [
                {
                  t: "h",
                  text: "Abort ≤ V1",
                },
                {
                  t: "ul",
                  items: [
                    "Power levers IDLE · Brakes as required · Operating engine MAXIMUM REVERSE",
                    "If runway insufficient: condition levers CUT-OFF, firewall valves CLOSED, master OFF",
                  ],
                },
                {
                  t: "h",
                  text: "Continue after lift-off / above V1",
                },
                {
                  t: "ul",
                  items: [
                    "Power MAXIMUM ALLOWABLE · Maintain takeoff speed or above · Gear UP",
                    "Do not retard the failed power lever until autofeather has stopped the propeller",
                    "After obstacles: VYSE ≈ 121 KIAS, flaps UP, then secure the failed engine",
                  ],
                },
              ],
            },
            {
              id: "other-mem",
              title: "Fire, descent, smoke, OEI, pressurization",
              blocks: [
                {
                  t: "p",
                  text: "Use the Memory drill above for all 14 flows. Study tip: practice until the sequence is automatic under stress. Confirm AFM / company SOPs.",
                },
              ],
            },
          ],
          questions: [
            mcq("Approximate VMCA at 12,500 lb?", ["76 KIAS", "86 KIAS", "96 KIAS", "104 KIAS"], 1),
            mcq("Approximate VYSE?", ["115 KIAS", "121 KIAS", "135 KIAS", "182 KIAS"], 1),
            mcq("Max-range glide speed?", ["103 KIAS", "121 KIAS", "135 KIAS", "182 KIAS"], 2),
            mcq("Emergency descent airspeed?", ["121 KIAS", "135 KIAS", "182 KIAS", "200 KIAS"], 2),
            mcq("Why not retard failed power lever early with autofeather armed?", ["Causes overspeed", "Deactivates autofeather / prevents auto feathering", "Damages the governor", "Ground-only AFM note"], 1),
            mcq("First action if engine fails below VMCA?", ["Feather immediately", "Reduce operating-engine power for directional control", "Raise the gear", "Max power both engines"], 1),
            mcq("First electrical smoke action?", ["Battery OFF", "Don masks at 100% and select oxygen-mask mic", "Dump cabin", "Shut down both engines"], 1),
            mcq("Primary loss-of-pressurization actions?", ["Dump and declare", "Oxygen as required and descend as required", "Both bleeds OFF", "Cabin temp OFF only"], 1),
            mcq("OEI approach when field is assured?", ["Flaps UP, gear UP", "Flaps APPROACH, gear DOWN", "Full flaps and gear immediately", "Flaps APPROACH, gear UP"], 1),
            mcq("Unscheduled rudder boost — first action?", ["Rudder boost OFF", "Bleeds OFF", "Full opposite trim", "Land immediately"], 0),
          ],
        },
        {
          id: "electrical",
          title: "Electrical System",
          short: "28 VDC split bus, generators, inverters, and abnormal actions.",
          sections: [
            {
              id: "overview",
              title: "Overview and buses",
              blocks: [
                {
                  t: "ul",
                  items: [
                    "28 VDC primary system. Two 250 A starter-generators, battery, external power.",
                    "Inverters supply 400 Hz AC (115 V and 26 V).",
                    "Hot Battery Bus stays powered with battery switch OFF.",
                    "Major buses: Hot Battery, Main Battery, Left Gen, Right Gen, Isolation; dual-fed buses improve single-failure reliability.",
                    "Loadmeter 1.0 = 100% rated capacity. Continuous operation above 1.0 is not permitted.",
                  ],
                },
              ],
            },
            {
              id: "abnormal",
              title: "Abnormal actions",
              blocks: [
                {
                  t: "ul",
                  items: [
                    "DC GEN: OFF → RESET (~1 s) → ON. If no reset, leave OFF; do not exceed 1.0 on operating generator.",
                    "Loadmeter > 1.0: battery OFF, monitor, shed nonessentials.",
                    "Non-essential breaker: do not reset in flight. Essential: cool ≥ 10 s, reset once.",
                    "Inverter failure: select opposite inverter.",
                    "Both generators failed: battery is remaining source — minimize load and land promptly.",
                  ],
                },
              ],
            },
          ],
          questions: [
            mcq("Primary system voltage?", ["14 VDC", "24 VDC", "28 VDC", "115 VAC"], 2),
            mcq("Starter-generator continuous rating?", ["100 A", "150 A", "250 A", "300 A"], 2),
            mcq("Bus powered with battery switch OFF?", ["Main Battery Bus", "Hot Battery Bus", "Left Generator Bus", "Isolation Bus"], 1),
            mcq("Inverters provide?", ["28 VDC only", "400 Hz AC (115 V and 26 V)", "60 Hz AC", "Battery charging"], 1),
            mcq("Loadmeter 1.0 means?", ["Zero load", "50% capacity", "100% of rated capacity", "Battery voltage"], 2),
            mcq("DC GEN first action?", ["Shut down engine", "OFF → RESET → ON", "Battery OFF", "Opposite inverter"], 1),
            mcq("Loadmeter > 1.0 first action?", ["Both generators OFF", "Battery switch OFF", "Pull all breakers", "Declare emergency"], 1),
            mcq("Non-essential CB trips in flight?", ["Reset immediately", "Do not reset in flight", "Reset after 30 s", "Replace in flight"], 1),
            mcq("Both generators failed — remaining source?", ["Inverters", "Battery", "External power in flight", "None"], 1),
          ],
        },
        {
          id: "fuel",
          title: "Fuel System",
          short: "Main and aux tanks, transfer, boost pumps, and crossfeed.",
          sections: [
            {
              id: "capacity",
              title: "Capacities and transfer",
              blocks: [
                {
                  t: "ul",
                  items: [
                    "Main ≈ 193 usable gal each side; aux ≈ 79 gal each side; total ≈ 544 gal (≈ 3,644 lb).",
                    "Do not fuel aux unless mains are full. Use aux fuel first.",
                    "Aux transfers by jet pump (motive flow from boost pressure).",
                    "AUTO opens motive-flow valve when aux fuel present and engine running. NO TRANSFER → OVERRIDE.",
                    "Engine-driven boost runs with the engine (~25–30 psi). FUEL PRESS → standby pump ON.",
                    "Crossfeed is for single-engine operation only.",
                  ],
                },
              ],
            },
          ],
          questions: [
            mcq("Usable gallons each main system?", ["79", "193", "272", "544"], 1),
            mcq("Usable gallons each aux?", ["79", "193", "272", "544"], 0),
            mcq("Total usable fuel?", ["386 gal", "544 gal (≈ 3,644 lb)", "600 gal", "193 gal"], 1),
            mcq("Aux transfer method?", ["Gravity only", "Jet pump via boost motive flow", "High-pressure pump", "Electric transfer only"], 1),
            mcq("NO TRANSFER action?", ["Ignore", "AUX TRANSFER to OVERRIDE", "Standby OFF", "Close firewall"], 1),
            mcq("Normal boost pressure?", ["5–10 psi", "25–30 psi", "80–100 psi", "500–850 psi"], 1),
            mcq("FUEL PRESS immediate action?", ["Close firewall", "Standby pump ON", "Select crossfeed", "Shut down"], 1),
            mcq("Crossfeed is for?", ["Normal cruise", "Single-engine operation only", "Ground only", "Any imbalance"], 1),
            mcq("Loss of high-pressure pump typically causes?", ["Gradual power loss", "Engine flame-out", "Only FUEL PRESS light", "Auto transfer"], 1),
          ],
        },
        {
          id: "powerplant",
          title: "Powerplant",
          short: "PT6A-41 / -42, levers, instruments, start, and oil.",
          sections: [
            {
              id: "engine",
              title: "Engine and controls",
              blocks: [
                {
                  t: "ul",
                  items: [
                    "B200 typically PT6A-42; 200 uses PT6A-41. Free-turbine, reverse-flow, ~850 SHP class.",
                    "Power lever: N1 / power (Beta/reverse on ground aft of idle).",
                    "Prop lever: Np governor and feather.",
                    "Condition lever: FCU fuel cutoff (LOW IDLE / HIGH IDLE / CUT-OFF).",
                    "ITT is the critical temperature limit. Oil pressure holds blades out of feather.",
                    "Autofeather arms above ~90% N1 with power levers advanced — do not retard failed lever until prop stops.",
                  ],
                },
              ],
            },
          ],
          questions: [
            mcq("Typical B200 engine?", ["PT6A-41", "PT6A-42", "PT6A-67", "TPE331"], 1),
            mcq("Free-turbine means?", ["Prop locked to compressor", "Np only aerodynamically coupled to N1", "No reduction gearbox", "Compressor independent of turbines"], 1),
            mcq("Which lever controls N1 / power in flight?", ["Prop", "Condition", "Power", "Mixture"], 2),
            mcq("Most critical temperature limit?", ["Oil temp", "ITT", "OAT", "Cabin temp"], 1),
            mcq("What holds blades out of feather?", ["Electricity", "Oil pressure", "Springs only", "Nitrogen"], 1),
            mcq("With autofeather armed, do not?", ["Advance operating engine", "Retard failed power lever before prop stops", "Raise gear", "Turn generator OFF"], 1),
            mcq("Sustained oil pressure below ~60 psi is?", ["Normal cruise", "Unsafe — secure or land per AFM", "Add power", "Ground only"], 1),
          ],
        },
        {
          id: "propeller",
          title: "Propeller & Autofeather",
          short: "Governing, feather, Beta/reverse, and autofeather sequence.",
          sections: [
            {
              id: "gov",
              title: "Governing and autofeather",
              blocks: [
                {
                  t: "ul",
                  items: [
                    "Oil pressure decreases blade angle (finer / higher RPM). Counterweights and springs increase toward feather.",
                    "Normal governing ≈ 1,600–2,000 RPM. Max continuous 2,000; reverse ≈ 1,900.",
                    "Autofeather armed: ARM + ~90% N1 + both engines > ~400 ft-lb → both green lights.",
                    "Near 400 ft-lb failing: operating side light extinguishes. Near 200 ft-lb: dump solenoid feathers failed prop.",
                    "Flameout alone does not feather — need prop lever or autofeather.",
                  ],
                },
              ],
            },
          ],
          questions: [
            mcq("What decreases blade angle?", ["Counterweights", "Oil pressure to servo", "Electrical power", "Nitrogen"], 1),
            mcq("Loss of prop oil pressure?", ["Fine pitch", "Tend to feather", "Hold last angle forever", "Reverse"], 1),
            mcq("Autofeather fully armed indication?", ["Red FIRE lights", "Both green AUTO FEATHER lights", "Master caution only", "No indication"], 1),
            mcq("Dump solenoid / feather begins near?", ["1,000 ft-lb", "About 200 ft-lb", "500 ft-lb", "Only after retarding power"], 1),
            mcq("Max continuous Np?", ["1,600", "2,000", "2,200", "1,900"], 1),
          ],
        },
        {
          id: "fire",
          title: "Fire Protection",
          short: "Detection, Halon bottles, switchlights, and testing.",
          sections: [
            {
              id: "sys",
              title: "Detection and extinguishing",
              blocks: [
                {
                  t: "ul",
                  items: [
                    "Later aircraft: temperature-sensing cable. Earlier: photoconductive flame detectors.",
                    "One independent Halon 1301 bottle per engine (one-shot), powered from hot battery bus.",
                    "Red lens: fire / push to extinguish. Amber D: discharged. Green OK: test continuity.",
                    "Typical response: confirm, shut down per AFM, then push ENG FIRE PUSH TO EXT.",
                  ],
                },
              ],
            },
          ],
          questions: [
            mcq("Later aircraft engine fire detection?", ["Three flame detectors", "Temperature-sensing cable", "Smoke detector", "Oil temperature"], 1),
            mcq("Extinguisher agent?", ["Water", "Halon 1301 with dry nitrogen", "CO₂ only", "Dry chemical"], 1),
            mcq("Bottle power source?", ["Right gen bus", "Hot battery bus", "Essential bus", "None"], 1),
            mcq("Amber D means?", ["Detection fault", "Bottle discharged", "Door open", "Deice"], 1),
            mcq("Bottles reusable between recharges?", ["True", "False — one-shot"], 1),
          ],
        },
        {
          id: "environmental",
          title: "Environmental & Pressurization",
          short: "Bleed air, heat, air conditioning, and cabin altitude control.",
          sections: [
            {
              id: "press",
              title: "Bleed air and pressurization",
              blocks: [
                {
                  t: "ul",
                  items: [
                    "Bleed valve: OPEN / ENVIR OFF (instruments only — good for ground cooling) / INSTR & ENVIR OFF.",
                    "B200 differential typically ≈ 6.5 psi. ALT WARN near 12,500 ft cabin.",
                    "Before takeoff: cabin alt ≥ 500 ft above field; set aircraft alt ~1,000 ft above planned cruise.",
                    "Loss of pressurization: oxygen as required, descend as required.",
                  ],
                },
              ],
            },
          ],
          questions: [
            mcq("Best ground cooling bleed selection?", ["OPEN", "ENVIR OFF", "INSTR & ENVIR OFF", "Either engine feathered"], 1),
            mcq("Typical B200 max differential?", ["4.0 psi", "≈ 6.5 psi", "8.5 psi", "10 psi"], 1),
            mcq("ALT WARN near?", ["8,000 ft cabin", "10,000 ft cabin", "12,500 ft cabin", "FL350"], 2),
            mcq("Loss of pressurization memory actions?", ["Both bleeds off", "Oxygen and descend as required", "Cabin temp OFF only", "Land without oxygen"], 1),
          ],
        },
        {
          id: "ice",
          title: "Ice & Rain Protection",
          short: "Boots, prop heat, windshields, pitot, and ice vanes.",
          sections: [
            {
              id: "systems",
              title: "Protection systems",
              blocks: [
                {
                  t: "ul",
                  items: [
                    "Pneumatic: wing and horizontal-stabilizer boots; optional brake deice.",
                    "Electrical: props, windshields, pitot, stall vane, fuel vents.",
                    "Cycle boots at ≈ ½–1 in ice. Never takeoff/land with boots inflated; no ops below −40 °C.",
                    "Prop deice: never with props static; treat as anti-ice.",
                    "Ice vanes: extend before icing; green L/R ICE VANE EXT confirms.",
                  ],
                },
              ],
            },
          ],
          questions: [
            mcq("When to cycle surface boots?", ["First visible ice", "≈ ½ to 1 inch of ice", "Ground only", "Continuously below 0 °C"], 1),
            mcq("Critical boot limitation?", ["Only above 10,000 ft", "Never takeoff/land inflated; no ops below −40 °C", "Always inflated for takeoff", "Needs both engines"], 1),
            mcq("Prop deice restriction?", ["Only above FL200", "Do not operate with props static", "Requires ice vanes", "MANUAL only"], 1),
            mcq("Ice vane purpose?", ["Heat inlet lips", "Deflect ice/water overboard before compressor screen", "Increase N1", "Inflate boots"], 1),
          ],
        },
        {
          id: "gear",
          title: "Landing Gear & Brakes",
          short: "Electric/hydraulic gear, warnings, emergency extension, brakes.",
          sections: [
            {
              id: "gear",
              title: "Gear and limits",
              blocks: [
                {
                  t: "ul",
                  items: [
                    "Electric (earlier) or hydraulic (later) actuation.",
                    "Down-lock prevents UP on ground; DN LOCK REL or airborne releases.",
                    "Three greens: down and locked.",
                    "VLO extend / VLE: 182 KCAS / 181 KIAS. VLO retract: 164 KCAS / 163 KIAS.",
                    "After real emergency extension: leave controls/breakers alone until on jacks. Alternate system is extension only.",
                  ],
                },
              ],
            },
          ],
          questions: [
            mcq("What blocks gear UP on the ground?", ["Spring only", "Solenoid down-lock (“J” hook)", "Parking brake", "Nothing"], 1),
            mcq("Three green lights mean?", ["In transit", "Each gear down and locked", "Hydraulic pressure normal", "Steering engaged"], 1),
            mcq("After real emergency extension?", ["Retract immediately", "Do not reset controls/breakers until on jacks", "Reset and continue", "Select UP to test"], 1),
            mcq("VLO extend typical?", ["144 KCAS", "164 KCAS / 163 KIAS", "182 KCAS / 181 KIAS", "200 KCAS"], 2),
            mcq("VLO retract typical?", ["182 KCAS / 181 KIAS", "164 KCAS / 163 KIAS", "200 KCAS", "91 KCAS"], 1),
          ],
        },
      ],
    },
  ];

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
          <a class="btn btn-primary" href="#/aircraft/${escapeHtml(plane.id)}/quiz/${escapeHtml(
            system.id
          )}">Start quiz · ${system.questions.length} items</a>
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
