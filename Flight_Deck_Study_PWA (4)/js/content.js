/* Auto-generated from King Air 200 study guides and quizzes */
window.FDS_CONTENT = {
  emergencyFlows: [
  {
    "prompt": "1. Emergency engine shutdown (fire, failure, chip, or unscheduled torque)",
    "answer": [
      "Condition lever — FUEL CUTOFF",
      "Propeller lever — FEATHER",
      "Fuel firewall valve — CLOSE",
      "Fire extinguisher — ACTUATE if fire warning persists or fire is confirmed"
    ]
  },
  {
    "prompt": "2. Engine failure on takeoff at or below V1 — abort (then full shutdown if runway is insufficient)",
    "answer": [
      "Power levers — IDLE",
      "Brakes — AS REQUIRED",
      "Operating engine — MAXIMUM REVERSE",
      "Condition levers — CUT-OFF",
      "Fuel firewall valves — CLOSED",
      "Master switch — OFF (gang bar down)"
    ]
  },
  {
    "prompt": "3. Engine failure after lift-off / above V1 — continue. Do not retard the failed power lever until the propeller has stopped.",
    "answer": [
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
      "Electrical load — MONITOR"
    ]
  },
  {
    "prompt": "4. Engine failure in flight below VMCA (about 86 KIAS)",
    "answer": [
      "Power (operating engine) — REDUCE to keep directional control",
      "Nose — LOWER to accelerate above VMCA",
      "Power — ADJUST as required",
      "Failed engine — SECURE (emergency engine shutdown)"
    ]
  },
  {
    "prompt": "5. Engine fire on the ground",
    "answer": [
      "Condition lever — FUEL CUT-OFF",
      "Fuel firewall valve — CLOSE",
      "Ignition and engine start — STARTER ONLY",
      "Fire extinguisher — ACTUATE if the fire persists"
    ]
  },
  {
    "prompt": "6. Emergency descent",
    "answer": [
      "Power levers — IDLE",
      "Propeller levers — FULL FORWARD",
      "Flaps — APPROACH",
      "Landing gear — EXTEND (when within limits)",
      "Airspeed — 182 KIAS maximum"
    ]
  },
  {
    "prompt": "7. Glide — both engines inoperative",
    "answer": [
      "Landing gear — UP",
      "Flaps — UP",
      "Propellers — FEATHERED",
      "Airspeed — 135 KIAS"
    ]
  },
  {
    "prompt": "8. Electrical smoke or fire",
    "answer": [
      "Crew — DON MASKS (100%)",
      "Microphone selector — OXYGEN MASK",
      "Passenger manual override — PULL ON",
      "Passengers — PULL LANYARD PIN, DON MASK",
      "Cabin temperature mode — OFF",
      "Vent blower — AUTO",
      "Aft blower — OFF",
      "Radiant heat — OFF",
      "Avionics master — OFF",
      "Nonessential electrical equipment — OFF"
    ]
  },
  {
    "prompt": "9. Environmental system smoke or fumes",
    "answer": [
      "Crew — DON MASKS (100%)",
      "Microphone selector — OXYGEN MASK",
      "Passenger manual override — PULL ON",
      "Passengers — PULL LANYARD PIN, DON MASK",
      "Cabin temperature mode — OFF",
      "Vent blower — HI",
      "Left bleed air valve — ENVIR OFF"
    ]
  },
  {
    "prompt": "10. Unscheduled electric elevator trim",
    "answer": [
      "Airplane attitude — MAINTAIN with elevator control",
      "Control-wheel disconnect — DEPRESS FULLY (second level)",
      "Manually retrim the airplane",
      "Elevator trim switch (pedestal) — OFF"
    ]
  },
  {
    "prompt": "11. Unscheduled rudder boost",
    "answer": [
      "Rudder boost switch — OFF",
      "Rudder trim — ADJUST if it persists",
      "Bleed air valves — INSTR & ENVIR OFF (approach, landing assured)",
      "Conduct a normal landing"
    ]
  },
  {
    "prompt": "12. One-engine-inoperative landing",
    "answer": [
      "Flaps — APPROACH (when the field is assured)",
      "Landing gear — DOWN",
      "Propeller control — FULL FORWARD",
      "Airspeed — 10 knots above landing approach speed",
      "Flaps — DOWN (when a go-around is no longer possible)",
      "Airspeed — normal landing approach speed",
      "Execute a normal landing"
    ]
  },
  {
    "prompt": "13. One-engine-inoperative go-around",
    "answer": [
      "Power — MAXIMUM ALLOWABLE",
      "Flaps — UP",
      "Airspeed — VYSE, 121 KIAS",
      "Positive rate of climb — landing gear UP"
    ]
  },
  {
    "prompt": "14. Loss of cabin pressure",
    "answer": [
      "Oxygen (crew and passengers) — AS REQUIRED",
      "Descend — AS REQUIRED"
    ]
  }
],
  aircraft: [
  {
    "id": "king-air-200",
    "name": "King Air 200 / B200",
    "family": "Beechcraft Super King Air",
    "blurb": "Systems, limitations, and memory-item drills for the 200 and B200. Values vary by serial and engine — always confirm the AFM.",
    "systems": [
      {
        "id": "limitations",
        "title": "Aircraft Limitations",
        "short": "Airspeeds, engine, propeller, pressurization, and operating limits.",
        "hasDrill": false,
        "sections": [
          {
            "id": "airspeed",
            "title": "Airspeed Limitations",
            "blocks": [
              {
                "t": "p",
                "text": "Typical values (confirm AFM). Values can vary by serial number and engine installation (PT6A-41 vs -42)."
              },
              {
                "t": "table",
                "headers": [
                  "Limit",
                  "Value (typical)",
                  "Notes"
                ],
                "rows": [
                  [
                    "VMO / MMO (later / B200)",
                    "260 KCAS / .52 Mach",
                    "Do not exceed in any operation"
                  ],
                  [
                    "VMO / MMO (early 200)",
                    "270 KCAS / .48 Mach",
                    "BB-2 through BB-198 (unless modified)"
                  ],
                  [
                    "VA (maneuvering)",
                    "182 KCAS / 181 KIAS",
                    "At 12,500 lb — no full/abrupt controls above"
                  ],
                  [
                    "VLO (extend)",
                    "182 KCAS / 181 KIAS",
                    "Max speed to extend gear"
                  ],
                  [
                    "VLO (retract)",
                    "164 KCAS / 163 KIAS",
                    "Max speed to retract gear"
                  ],
                  [
                    "VLE",
                    "182 KCAS / 181 KIAS",
                    "Max speed with gear extended"
                  ],
                  [
                    "VFE — Approach (40%)",
                    "200 KCAS / KIAS",
                    "Max with flaps at Approach"
                  ],
                  [
                    "VFE — Full (100%)",
                    "144/146 (200) or 155/157 (B200)",
                    "Max with full flaps"
                  ],
                  [
                    "VMCA",
                    "91 KCAS / 86 KIAS",
                    "One engine inop, takeoff power"
                  ]
                ]
              }
            ]
          },
          {
            "id": "engine",
            "title": "Engine Operating Limits (PT6A-41 / -42)",
            "blocks": [
              {
                "t": "table",
                "headers": [
                  "Condition",
                  "Torque (ft-lb)",
                  "ITT (°C)",
                  "Np / N1"
                ],
                "rows": [
                  [
                    "Takeoff / Max Cont",
                    "2,230",
                    "800 (-42) / 750 (-41)",
                    "2,000 / 101.5%"
                  ],
                  [
                    "Max Cruise",
                    "2,230",
                    "800 (-42) / 750 (-41)",
                    "2,000 / 101.5%"
                  ],
                  [
                    "Cruise Climb / Normal Cruise",
                    "2,230",
                    "770 (-42) / 725 (-41)",
                    "2,000 / 101.5%"
                  ],
                  [
                    "Max Reverse (1 min)",
                    "—",
                    "750",
                    "1,900 / 88%"
                  ],
                  [
                    "Starting (5 sec)",
                    "—",
                    "1,000",
                    "—"
                  ],
                  [
                    "Transient (5–10 sec)",
                    "2,750 (5 s)",
                    "850",
                    "2,200 / 102.6%"
                  ]
                ]
              },
              {
                "t": "ul",
                "items": [
                  "Torque limit of 2,230 ft-lb applies at 1,600–2,000 Np. Below 1,600 Np, torque limited to 1,100 ft-lb.",
                  "Oil pressure: normal 100–135 psi (or 105–135 on -41). Below 60 psi is unsafe.",
                  "Oil temperature: −40 to 99 °C normal; up to 104 °C for max 10 minutes.",
                  "Starter duty cycle: 40 s ON / 60 s OFF / 40 s ON / 60 s OFF / 40 s ON / then 30 min OFF."
                ]
              }
            ]
          },
          {
            "id": "propeller-limits",
            "title": "Propeller Limitations",
            "blocks": [
              {
                "t": "ul",
                "items": [
                  "Np max continuous: 2,000 rpm",
                  "Max reverse: 1,900 rpm",
                  "Transient overspeed: 2,200 rpm (max 5 seconds)",
                  "Sustained overspeed > 2,000 rpm indicates primary governor failure. Limited continued flight possible up to ~2,120 rpm with torque limited (confirm AFM).",
                  "Prop deice: Do not operate with propellers static."
                ]
              }
            ]
          },
          {
            "id": "weights",
            "title": "Weights & Category",
            "blocks": [
              {
                "t": "ul",
                "items": [
                  "Category: Normal. Acrobatic maneuvers including spins are prohibited.",
                  "Maximum weight: Confirm AFM (typically 12,500 lb for many configurations).",
                  "Load factor limits at 12,500 lb — flaps up: +3.17 / −1.27 G",
                  "Flaps down: +2.00 / 0 G (B200) or −1.27 G (200)"
                ]
              }
            ]
          },
          {
            "id": "pressurization",
            "title": "Pressurization Limitations",
            "blocks": [
              {
                "t": "ul",
                "items": [
                  "Max differential (typical): ≈ 6.0–6.6 psi depending on serial (B200 often 6.6 psi green arc).",
                  "Max operating altitude: 35,000 ft (confirm AFM).",
                  "Yaw damper inoperative: maximum altitude 17,000 ft."
                ]
              }
            ]
          },
          {
            "id": "electrical-limits",
            "title": "Electrical / Generator Limits",
            "blocks": [
              {
                "t": "ul",
                "items": [
                  "Generator load in flight (SL–31,000 ft): 100% sustained.",
                  "Generator load on the ground: 85% sustained.",
                  "Above 31,000 ft: reduced continuous load — confirm AFM table."
                ]
              }
            ]
          },
          {
            "id": "ice-limits",
            "title": "Ice Protection Limitations",
            "blocks": [
              {
                "t": "ul",
                "items": [
                  "Never take off or land with surface deice boots inflated.",
                  "Do not operate surface deice boots below −40 °C.",
                  "Do not operate propeller deice with propellers static."
                ]
              }
            ]
          },
          {
            "id": "pneumatic",
            "title": "Pneumatic System",
            "blocks": [
              {
                "t": "p",
                "text": "Bleed air supplies pneumatic systems including surface deice, door seals (where installed), and related services. Confirm serial-specific equipment and limitations in the AFM."
              }
            ]
          },
          {
            "id": "study-tips",
            "title": "Study Tips",
            "blocks": [
              {
                "t": "ul",
                "items": [
                  "Memorize VMO/MMO, VA, gear and flap speeds, and VMCA for the serial you fly.",
                  "Know torque / ITT / Np limits for takeoff, continuous, reverse, start, and transient.",
                  "Link limitations to systems: ice, electrical load, pressurization, and category restrictions.",
                  "Always confirm numbers in the AFM for your airplane — this is a study aid only."
                ]
              }
            ]
          }
        ],
        "questions": [
          {
            "kind": "mcq",
            "prompt": "What is maneuvering speed (VA) at 12,500 lb?",
            "choices": [
              "144 KCAS",
              "182 KCAS / 181 KIAS",
              "200 KCAS",
              "260 KCAS"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the maximum speed to extend the landing gear (VLO extend)?",
            "choices": [
              "164 KCAS / 163 KIAS",
              "182 KCAS / 181 KIAS",
              "200 KCAS",
              "144 KCAS"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the maximum speed to retract the landing gear (VLO retract)?",
            "choices": [
              "182 KCAS / 181 KIAS",
              "164 KCAS / 163 KIAS",
              "200 KCAS",
              "91 KCAS"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is VFE for full (100%) flaps on a typical King Air 200?",
            "choices": [
              "200 KCAS",
              "182 KCAS",
              "Approximately 144–146 KCAS (confirm AFM; B200 often higher)",
              "91 KCAS"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the approximate air minimum control speed (VMCA)?",
            "choices": [
              "60 KCAS",
              "91 KCAS / 86 KIAS",
              "120 KCAS",
              "182 KCAS"
            ],
            "correct": 2
          },
          {
            "kind": "mcq",
            "prompt": "What is the maximum continuous torque limit (typical)?",
            "choices": [
              "1,100 ft-lb",
              "2,230 ft-lb",
              "2,750 ft-lb",
              "850 ft-lb"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the maximum observed ITT for takeoff / max continuous on a PT6A-42?",
            "choices": [
              "750 °C",
              "800 °C",
              "850 °C",
              "1,000 °C"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the starting ITT limit (time-limited)?",
            "choices": [
              "750 °C",
              "800 °C",
              "1,000 °C (typically 5 seconds)",
              "1,200 °C"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Below what propeller rpm is torque limited to 1,100 ft-lb?",
            "choices": [
              "1,000 rpm",
              "1,600 rpm",
              "1,900 rpm",
              "2,000 rpm"
            ],
            "correct": 2
          },
          {
            "kind": "mcq",
            "prompt": "What is the starter duty cycle?",
            "choices": [
              "60 s ON / 30 s OFF continuously",
              "40 s ON / 60 s OFF / 40 s ON / 60 s OFF / 40 s ON / then 30 min OFF",
              "10 s ON / 10 s OFF",
              "No restriction"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the maximum continuous propeller rpm (Np)?",
            "choices": [
              "1,900 rpm",
              "2,000 rpm",
              "2,200 rpm",
              "2,750 rpm"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the maximum reverse propeller rpm?",
            "choices": [
              "1,600 rpm",
              "1,900 rpm",
              "2,000 rpm",
              "2,200 rpm"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the transient propeller overspeed limit?",
            "choices": [
              "2,000 rpm continuous",
              "2,200 rpm (max 5 seconds)",
              "2,500 rpm",
              "No limit"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is a typical maximum cabin differential pressure (B200)?",
            "choices": [
              "3.0 psi",
              "Approximately 6.0–6.6 psi (green arc)",
              "10 psi",
              "15 psi"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the maximum altitude with the yaw damper inoperative?",
            "choices": [
              "10,000 ft",
              "17,000 ft",
              "25,000 ft",
              "35,000 ft"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the maximum sustained generator load in flight from sea level to 31,000 ft?",
            "choices": [
              "85%",
              "88%",
              "100%",
              "50%"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the maximum sustained generator load on the ground?",
            "choices": [
              "100%",
              "85%",
              "50%",
              "No limit"
            ],
            "correct": 2
          },
          {
            "kind": "mcq",
            "prompt": "What is a critical limitation for the surface deice boots?",
            "choices": [
              "They may only be used above FL200",
              "Never take off or land with boots inflated; do not operate below −40 °C",
              "They must be inflated for every takeoff",
              "They require both engines"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is prohibited regarding propeller deice?",
            "choices": [
              "Use above 10,000 ft",
              "Operating propeller deice with the propeller’s static",
              "Use in AUTO mode",
              "Use with ice vanes extended"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What category is the Super King Air 200/B200?",
            "choices": [
              "Utility",
              "Normal (acrobatic maneuvers including spins are prohibited)",
              "Aerobatic",
              "Transport"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What are the approximate flight load factor limits at 12,500 lb with flaps up?",
            "choices": [
              "+2.0 / −1.0 G",
              "+3.17 / −1.27 G",
              "+6.0 / −3.0 G",
              "No limit"
            ],
            "correct": 1
          }
        ]
      },
      {
        "id": "emergency",
        "title": "Emergency Procedures",
        "short": "Memory items, emergency speeds, and immediate actions.",
        "hasDrill": true,
        "sections": [
          {
            "id": "intro",
            "title": "Overview",
            "blocks": [
              {
                "t": "p",
                "text": "This training aid lists the immediate-action (memory) items from the emergency procedures contained in the source materials you provided. All wording has been rewritten for study purposes. It is not a substitute for the FAA-approved Airplane Flight Manual or company checklists. Commit the bold red items to memory from the official source for your airplane."
              },
              {
                "t": "p",
                "text": "Key Emergency Speeds (approx. 12,500 lb — confirm AFM)"
              },
              {
                "t": "p",
                "text": "VMCA ≈ 86 KIAS"
              },
              {
                "t": "p",
                "text": "VXSEVYSE ≈ 115 KIAS"
              },
              {
                "t": "p",
                "text": "VYSE ≈ 121 KIAS"
              },
              {
                "t": "p",
                "text": "VENR ≈ 121 KIAS"
              },
              {
                "t": "p",
                "text": "VSSE ≈ 104 KIAS"
              },
              {
                "t": "p",
                "text": "Emergency Descent ≈ 182 KIAS"
              }
            ]
          },
          {
            "id": "speeds",
            "title": "Key Emergency Speeds",
            "blocks": [
              {
                "t": "ul",
                "items": [
                  "VMCA ≈ 86 KIAS",
                  "VXSE ≈ 115 KIAS",
                  "VYSE ≈ 121 KIAS",
                  "VENR ≈ 121 KIAS",
                  "VSSE ≈ 104 KIAS",
                  "Emergency Descent ≈ 182 KIAS",
                  "Max Range Glide ≈ 135 KIAS",
                  "One-engine final (flaps down) ≈ 103 KIAS"
                ]
              },
              {
                "t": "note",
                "text": "Approximate values near 12,500 lb — confirm AFM for your airplane."
              }
            ]
          },
          {
            "id": "emergency-engine-shutdown-fire-failure-chip-unsc",
            "title": "Emergency Engine Shutdown (Fire / Failure / Chip / Unscheduled Torque)",
            "blocks": [
              {
                "t": "h",
                "text": "MEMORY ITEMS — Affected engine"
              },
              {
                "t": "p",
                "text": "Condition Lever — FUEL CUTOFF / CUT-OFF"
              },
              {
                "t": "p",
                "text": "Propeller Lever — FEATHER"
              },
              {
                "t": "p",
                "text": "Fuel Firewall Valve / Firewall Shutoff Valve — CLOSE"
              },
              {
                "t": "p",
                "text": "Fire Extinguisher — ACTUATE if fire warning persists or fire is confirmed"
              },
              {
                "t": "h",
                "text": "Follow-up (checklist)"
              },
              {
                "t": "p",
                "text": "Generator — OFF"
              },
              {
                "t": "p",
                "text": "Auto Ignition — OFF"
              },
              {
                "t": "p",
                "text": "Autofeather — OFF"
              },
              {
                "t": "p",
                "text": "Brake Deice (if installed) — OFF"
              },
              {
                "t": "p",
                "text": "Electrical Load — MONITOR"
              },
              {
                "t": "p",
                "text": "Synchrophaser — OFF"
              }
            ]
          },
          {
            "id": "engine-failure-during-takeoff-at-or-below-v1-abo",
            "title": "Engine Failure During Takeoff (at or below V1) — Abort",
            "blocks": [
              {
                "t": "h",
                "text": "MEMORY ITEMS"
              },
              {
                "t": "p",
                "text": "Power Levers — IDLE"
              },
              {
                "t": "p",
                "text": "Brakes — AS REQUIRED"
              },
              {
                "t": "p",
                "text": "Operating Engine — MAXIMUM REVERSE (caution on low-traction surfaces)"
              },
              {
                "t": "p",
                "text": "If runway remaining is insufficient: execute full Emergency Engine Shutdown"
              },
              {
                "t": "p",
                "text": "Condition Levers – CUT-OFF"
              },
              {
                "t": "p",
                "text": "Fuel Firewall Valves – CLOSED"
              },
              {
                "t": "p",
                "text": "Master Switch – OFF (Gang Bar Down)"
              }
            ]
          },
          {
            "id": "engine-failure-after-lift-off-above-v1-takeoff-c",
            "title": "Engine Failure After Lift-Off / Above V1 (Takeoff Continued)",
            "blocks": [
              {
                "t": "h",
                "text": "MEMORY ITEMS"
              },
              {
                "t": "p",
                "text": "Power — MAXIMUM ALLOWABLE"
              },
              {
                "t": "p",
                "text": "Airspeed — MAINTAIN (takeoff speed or above)"
              },
              {
                "t": "p",
                "text": "Landing Gear — UP"
              },
              {
                "t": "p",
                "text": "Critical note: Do not retard the failed-engine power lever until autofeather has completely stopped the propeller. To do so will deactivate the autofeather circuit and prevent automatic feathering."
              },
              {
                "t": "p",
                "text": "Propeller (inoperative) — CONFIRM AUTOFEATHER or FEATHER"
              },
              {
                "t": "p",
                "text": "Airspeed – BEST RATE-OF-CLIMB SPEED (121 KIAS) (after obstacle clearance altitude is reached)"
              },
              {
                "t": "p",
                "text": "Flaps – UP"
              },
              {
                "t": "h",
                "text": "Clean-up (inoperative engine)"
              },
              {
                "t": "p",
                "text": "Condition Lever – CUT-OFF"
              },
              {
                "t": "p",
                "text": "Fuel Firewall Valve – CLOSED"
              },
              {
                "t": "p",
                "text": "Engine Auto Ignition – OFF"
              },
              {
                "t": "p",
                "text": "Autofeather Switch – OFF"
              },
              {
                "t": "p",
                "text": "Generator – OFF"
              },
              {
                "t": "p",
                "text": "Electrical Load – MONITOR"
              }
            ]
          },
          {
            "id": "engine-failure-in-flight-below-vmca-86-kias",
            "title": "Engine Failure in Flight Below VMCA – 86 KIAS",
            "blocks": [
              {
                "t": "h",
                "text": "MEMORY ITEMS"
              },
              {
                "t": "p",
                "text": "Power (operating engine) — REDUCE as required to maintain directional control"
              },
              {
                "t": "p",
                "text": "Nose — LOWER to accelerate above VMCA"
              },
              {
                "t": "p",
                "text": "Power — ADJUST as required"
              },
              {
                "t": "p",
                "text": "Failed engine — SECURE (Emergency Engine Shutdown)"
              }
            ]
          },
          {
            "id": "engine-fire-on-ground",
            "title": "Engine Fire on Ground",
            "blocks": [
              {
                "t": "h",
                "text": "MEMORY ITEMS — Affected engine"
              },
              {
                "t": "p",
                "text": "Condition Lever — FUEL CUT-OFF"
              },
              {
                "t": "p",
                "text": "Fuel Firewall Valve — CLOSE"
              },
              {
                "t": "p",
                "text": "Ignition and Engine Start Switch — STARTER ONLY"
              },
              {
                "t": "p",
                "text": "Fire Extinguisher — ACTUATE if fire persists"
              }
            ]
          },
          {
            "id": "emergency-descent",
            "title": "Emergency Descent",
            "blocks": [
              {
                "t": "h",
                "text": "MEMORY ITEMS"
              },
              {
                "t": "p",
                "text": "Power Levers — IDLE"
              },
              {
                "t": "p",
                "text": "Propeller Levers / Controls — FULL FORWARD"
              },
              {
                "t": "p",
                "text": "Flaps — APPROACH"
              },
              {
                "t": "p",
                "text": "Landing Gear — EXTEND (when within limits)"
              },
              {
                "t": "p",
                "text": "Airspeed — 182 KIAS maximum"
              }
            ]
          },
          {
            "id": "glide-both-engines-inoperative",
            "title": "Glide (Both Engines Inoperative)",
            "blocks": [
              {
                "t": "h",
                "text": "MEMORY ITEMS / Critical steps"
              },
              {
                "t": "p",
                "text": "Landing Gear — UP"
              },
              {
                "t": "p",
                "text": "Flaps — UP"
              },
              {
                "t": "p",
                "text": "Propellers — FEATHERED"
              },
              {
                "t": "p",
                "text": "Airspeed – 135 KIAS"
              }
            ]
          },
          {
            "id": "electrical-smoke-or-fire",
            "title": "Electrical Smoke or Fire",
            "blocks": [
              {
                "t": "h",
                "text": "MEMORY ITEMS"
              },
              {
                "t": "p",
                "text": "Crew – DON MASKS (100% position)"
              },
              {
                "t": "p",
                "text": "Microphone Selector Switch – OXYGEN MASK"
              },
              {
                "t": "p",
                "text": "Passenger Manual Override – PULL ON"
              },
              {
                "t": "p",
                "text": "Passengers – PULL LANYARD PIN, DON MASK"
              },
              {
                "t": "p",
                "text": "Cabin Temperature Mode — OFF"
              },
              {
                "t": "p",
                "text": "Vent Blower — AUTO"
              },
              {
                "t": "p",
                "text": "Aft Blower – OFF"
              },
              {
                "t": "p",
                "text": "Radiant Heat – OFF"
              },
              {
                "t": "p",
                "text": "Avionics Master – OFF"
              },
              {
                "t": "p",
                "text": "Nonessential Electrical Equipment – OFF"
              }
            ]
          },
          {
            "id": "environmental-system-smoke-or-fumes",
            "title": "Environmental System Smoke or Fumes",
            "blocks": [
              {
                "t": "h",
                "text": "MEMORY ITEMS"
              },
              {
                "t": "p",
                "text": "Crew – DON MASKS (100% position)"
              },
              {
                "t": "p",
                "text": "Microphone Selector Switch – OXYGEN MASK"
              },
              {
                "t": "p",
                "text": "Passenger Manual Override – PULL ON"
              },
              {
                "t": "p",
                "text": "Passengers – PULL LANYARD PIN, DON MASK"
              },
              {
                "t": "p",
                "text": "Cabin Temperature Mode — OFF"
              },
              {
                "t": "p",
                "text": "Vent Blower – HI"
              },
              {
                "t": "p",
                "text": "Left Bleed Air Valve – ENVIR OFF"
              }
            ]
          },
          {
            "id": "unscheduled-electric-elevator-trim",
            "title": "Unscheduled Electric Elevator Trim",
            "blocks": [
              {
                "t": "h",
                "text": "MEMORY ITEMS"
              },
              {
                "t": "p",
                "text": "Airplane Attitude — MAINTAIN with elevator control"
              },
              {
                "t": "p",
                "text": "Control Wheel Disconnect Switch — DEPRESS FULLY (second level)"
              },
              {
                "t": "h",
                "text": "Manually Retrim Airplane"
              },
              {
                "t": "p",
                "text": "Elev Tab Control Switch (Pedestal) – OFF"
              }
            ]
          },
          {
            "id": "unscheduled-rudder-boost-activation",
            "title": "Unscheduled Rudder Boost Activation",
            "blocks": [
              {
                "t": "h",
                "text": "MEMORY ITEMS"
              },
              {
                "t": "p",
                "text": "Rudder Boost Switch — OFF"
              },
              {
                "t": "h",
                "text": "If condition persists"
              },
              {
                "t": "p",
                "text": "Rudder Trim – ADJUST"
              },
              {
                "t": "p",
                "text": "Bleed Air Valves (2) – INSTR & ENVIR OFF (during approach, landing assured)"
              },
              {
                "t": "h",
                "text": "Conduct Normal Landing"
              }
            ]
          },
          {
            "id": "one-engine-inoperative-landing",
            "title": "One-Engine-Inoperative Landing",
            "blocks": [
              {
                "t": "h",
                "text": "MEMORY ITEMS"
              },
              {
                "t": "h",
                "text": "When it is certain the field can be reached"
              },
              {
                "t": "p",
                "text": "Flaps – APPROACH"
              },
              {
                "t": "p",
                "text": "Landing Gear – DOWN"
              },
              {
                "t": "p",
                "text": "Propeller Control – FULL FORWARD"
              },
              {
                "t": "p",
                "text": "Airspeed – 10 KNOTS ABOVE LANDING APPROACH SPEED"
              },
              {
                "t": "p",
                "text": "When it is certain there is no possibility of a go-around"
              },
              {
                "t": "p",
                "text": "Flaps – DOWN"
              },
              {
                "t": "p",
                "text": "Airspeed – NORMAL LANDING APPROACH SPEED"
              },
              {
                "t": "h",
                "text": "Execute Normal Landing"
              }
            ]
          },
          {
            "id": "one-engine-inoperative-go-around",
            "title": "One-Engine-Inoperative Go-Around",
            "blocks": [
              {
                "t": "p",
                "text": "Power – MAXIMUM ALLOWABLE"
              },
              {
                "t": "p",
                "text": "Flaps – UP"
              },
              {
                "t": "p",
                "text": "Airspeed – ONE-ENGINE-INOPERATIVE BEST RATE-OF-CLIMB SPEED (121 KIAS)"
              },
              {
                "t": "p",
                "text": "Positive Rate-Of-Climb – LANDING GEAR UP"
              }
            ]
          },
          {
            "id": "pressurization-abnormal-loss-of-cabin-pressure",
            "title": "Pressurization Abnormal / Loss of Cabin Pressure",
            "blocks": [
              {
                "t": "h",
                "text": "MEMORY ITEMS"
              },
              {
                "t": "p",
                "text": "Oxygen (crew and passengers) — AS REQUIRED"
              },
              {
                "t": "p",
                "text": "Descend — AS REQUIRED"
              },
              {
                "t": "h",
                "text": "Study Guidance"
              },
              {
                "t": "p",
                "text": "Practice every bold red sequence until it is automatic under stress."
              },
              {
                "t": "p",
                "text": "Serial-number differences exist (especially gear extension, fire detection, EFIS airstart). Always cross-check the AFM for your airplane."
              },
              {
                "t": "p",
                "text": "Company SOPs may add or modify steps — follow the most restrictive applicable procedure."
              },
              {
                "t": "p",
                "text": "This document is a study aid only and does not replace official checklists."
              }
            ]
          }
        ],
        "questions": [
          {
            "kind": "mcq",
            "prompt": "What is the approximate air minimum control speed (VMCA) at 12,500 lb?",
            "choices": [
              "76 KIAS",
              "86 KIAS",
              "96 KIAS",
              "104 KIAS"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the approximate one-engine-inoperative best rate-of-climb speed (VYSE)?",
            "choices": [
              "115 KIAS",
              "121 KIAS",
              "135 KIAS",
              "182 KIAS"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What airspeed is used for maximum-range glide?",
            "choices": [
              "103 KIAS",
              "121 KIAS",
              "135 KIAS",
              "182 KIAS"
            ],
            "correct": 2
          },
          {
            "kind": "mcq",
            "prompt": "What is the approximate emergency-descent airspeed?",
            "choices": [
              "121 KIAS",
              "135 KIAS",
              "182 KIAS",
              "200 KIAS"
            ],
            "correct": 2
          },
          {
            "kind": "mcq",
            "prompt": "After the memory items, which of the following is a required follow-up action?",
            "choices": [
              "Generator — ON",
              "Generator — OFF",
              "Autofeather — ARM",
              "Synchrophaser — ON"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "If insufficient runway remains after the initial abort actions, what additional memory items are required?",
            "choices": [
              "Condition Levers CUT-OFF, Fuel Firewall Valves CLOSED, Master Switch OFF",
              "Landing Gear UP, Flaps UP, Propellers FEATHER",
              "Power MAXIMUM, Airspeed VYSE, Gear UP",
              "Oxygen ON, Cabin Temp OFF, Bleed Air OFF"
            ],
            "correct": 0
          },
          {
            "kind": "mcq",
            "prompt": "Why must you not retard the failed-engine power lever until the propeller has stopped rotating when autofeather is armed?",
            "choices": [
              "It will cause an overspeed",
              "It deactivates the autofeather circuit and prevents automatic feathering",
              "It will damage the propeller governor",
              "It is required by the AFM only on the ground"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "After obstacle clearance, what airspeed should you accelerate to?",
            "choices": [
              "VMCA",
              "VXSE",
              "Best rate-of-climb speed (VYSE ≈ 121 KIAS)",
              "Emergency descent speed"
            ],
            "correct": 2
          },
          {
            "kind": "mcq",
            "prompt": "What is the correct first action if an engine fails below VMCA?",
            "choices": [
              "Immediately feather the failed engine",
              "Reduce power on the operating engine as required to maintain directional control",
              "Raise the landing gear",
              "Apply maximum power on both engines"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the first memory action for electrical smoke or fire?",
            "choices": [
              "Turn off the battery",
              "Don crew oxygen masks at 100 % and select oxygen-mask microphone",
              "Dump cabin pressure immediately",
              "Shut down both engines"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "After donning oxygen, which two cabin-environment items are turned OFF as memory items?",
            "choices": [
              "Cabin Temp Mode and Vent Blower",
              "Cabin Temp Mode OFF and Vent Blower AUTO",
              "Bleed Air and Pressurization",
              "Avionics Master and Generators"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "After oxygen is established, what is the next memory action specific to environmental smoke?",
            "choices": [
              "Both bleed-air valves OFF",
              "Cabin Temp Mode OFF, Vent Blower HI, Left Bleed Air Valve ENVIR OFF",
              "Dump the cabin immediately",
              "Shut down the left engine"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "For unscheduled electric elevator trim, what are the first two memory actions?",
            "choices": [
              "Pull the circuit breaker, then turn the switch off",
              "Maintain attitude with elevator control and fully depress the control-wheel disconnect switch",
              "Reduce power and declare an emergency",
              "Turn the autopilot on"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the first memory action for unscheduled rudder-boost activation?",
            "choices": [
              "Rudder Boost Switch — OFF",
              "Bleed Air Valves — OFF",
              "Rudder Trim — full opposite",
              "Land immediately"
            ],
            "correct": 0
          },
          {
            "kind": "mcq",
            "prompt": "When certain the field can be reached on a single-engine approach, what flap and gear configuration is used?",
            "choices": [
              "Flaps UP, Gear UP",
              "Flaps APPROACH, Landing Gear DOWN",
              "Flaps DOWN, Gear DOWN immediately",
              "Flaps APPROACH, Gear UP"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What are the two primary memory actions for loss of cabin pressure?",
            "choices": [
              "Dump the cabin and declare an emergency",
              "Oxygen as required and descend as required",
              "Both bleed-air valves OFF and land immediately",
              "Cabin Temp Mode OFF and Vent Blower HI"
            ],
            "correct": 1
          }
        ]
      },
      {
        "id": "electrical",
        "title": "Electrical System",
        "short": "28 VDC split bus, generators, inverters, and abnormal actions.",
        "hasDrill": false,
        "sections": [
          {
            "id": "intro",
            "title": "Overview",
            "blocks": [
              {
                "t": "p",
                "text": "This study guide summarizes the primary electrical system for recurrent training, personal knowledge, and instruction. All content is rewritten in original language from the reference materials. Always confirm exact configuration, bus loads, and procedures in the AFM and maintenance data for your specific serial number."
              }
            ]
          },
          {
            "id": "system-overview",
            "title": "System Overview",
            "blocks": [
              {
                "t": "p",
                "text": "The King Air 200/B200 uses a 28-volt DC primary electrical system with negative ground. Power sources are:"
              },
              {
                "t": "p",
                "text": "One battery (typically 24 V, 42 Ah lead-acid gel-cell on later aircraft; earlier aircraft used 34/36 Ah nickel-cadmium)"
              },
              {
                "t": "p",
                "text": "Two 250-ampere starter-generators (one on each engine)"
              },
              {
                "t": "p",
                "text": "External power receptacle (GPU)"
              },
              {
                "t": "p",
                "text": "DC power also feeds two solid-state inverters that supply 400 Hz AC power (115 V and 26 V) for avionics and selected instruments."
              }
            ]
          },
          {
            "id": "power-sources",
            "title": "Power Sources",
            "blocks": [
              {
                "t": "h",
                "text": "Battery"
              },
              {
                "t": "p",
                "text": "Connected to the Hot Battery Bus at all times (certain items remain powered even with the battery switch OFF)."
              },
              {
                "t": "p",
                "text": "Battery switch controls the battery relay that connects the battery to the Main Battery Bus."
              },
              {
                "t": "p",
                "text": "Battery is the primary source for engine starting and for emergency power if both generators fail."
              },
              {
                "t": "h",
                "text": "Starter-Generators"
              },
              {
                "t": "p",
                "text": "Each engine-driven starter-generator provides up to 250 A continuous."
              },
              {
                "t": "p",
                "text": "Generators are paralleled automatically once online."
              },
              {
                "t": "p",
                "text": "Generator Control Units (GCUs) regulate voltage, provide paralleling, reverse-current protection, and overvoltage protection."
              },
              {
                "t": "p",
                "text": "Generator switches have three positions: OFF – RESET – ON (or similar). Reset is momentary."
              },
              {
                "t": "h",
                "text": "External Power"
              },
              {
                "t": "p",
                "text": "GPU connects through the external power receptacle and is controlled by a cockpit switch."
              },
              {
                "t": "p",
                "text": "Proper GPU voltage and polarity must be verified before connecting."
              }
            ]
          },
          {
            "id": "bus-architecture",
            "title": "Bus Architecture",
            "blocks": [
              {
                "t": "p",
                "text": "The system is arranged as a split-bus architecture with the following major buses:"
              },
              {
                "t": "p",
                "text": "Hot Battery Bus — Always powered by the battery. Typical loads: battery relay coil, entry lights, clock, fire extinguisher circuits, firewall shutoff valves, certain memory functions."
              },
              {
                "t": "p",
                "text": "Main Battery Bus — Powered when the battery switch is ON."
              },
              {
                "t": "p",
                "text": "Left Generator Bus / Right Generator Bus — Each fed by its respective generator. Many essential and non-essential loads are distributed between them."
              },
              {
                "t": "p",
                "text": "Isolation Bus — Ties the left and right sides together through current limiters."
              },
              {
                "t": "p",
                "text": "Dual-Fed Buses (#1–#4) — Fed from both generator sides through diodes or limiters so that a single generator or bus failure does not remove power from critical dual-fed loads."
              },
              {
                "t": "p",
                "text": "Avionics buses are typically controlled by the Avionics Master switch(es) and are fed from the dual-fed or generator buses."
              }
            ]
          },
          {
            "id": "cockpit-indicators-controls",
            "title": "Cockpit Indicators & Controls",
            "blocks": [
              {
                "t": "p",
                "text": "Loadmeters — Show generator output as a fraction of rated load (1.0 = 100 %). A push-to-test or select feature allows reading battery voltage or the opposite generator."
              },
              {
                "t": "p",
                "text": "Voltmeters — Display system or individual bus voltage."
              },
              {
                "t": "p",
                "text": "Generator switches — OFF / RESET / ON."
              },
              {
                "t": "p",
                "text": "Battery switch — Controls the main battery relay."
              },
              {
                "t": "p",
                "text": "Avionics Master — Applies or removes power to the avionics buses."
              },
              {
                "t": "p",
                "text": "Inverter select / control — Selects which inverter is primary; some aircraft have automatic transfer."
              },
              {
                "t": "p",
                "text": "Annunciators — DC GEN (L/R), INVERTER, BATTERY, etc."
              }
            ]
          },
          {
            "id": "normal-operation",
            "title": "Normal Operation",
            "blocks": [
              {
                "t": "p",
                "text": "Battery switch ON before engine start."
              },
              {
                "t": "p",
                "text": "After engines are stabilized and generators come online, both generator switches ON."
              },
              {
                "t": "p",
                "text": "Generators automatically parallel; loadmeters should indicate roughly equal sharing."
              },
              {
                "t": "p",
                "text": "Monitor loadmeters — continuous operation above 1.0 is not permitted."
              },
              {
                "t": "p",
                "text": "Avionics Master ON after generators are online (or per company SOP)."
              },
              {
                "t": "p",
                "text": "Before shutdown, reduce electrical load and turn generators OFF, then battery OFF (or use the master gang bar as required)."
              }
            ]
          },
          {
            "id": "abnormal-emergency-procedures-study-summary",
            "title": "Abnormal & Emergency Procedures (Study Summary)",
            "blocks": [
              {
                "t": "p",
                "text": "Generator Inoperative (DC GEN annunciator)"
              },
              {
                "t": "p",
                "text": "Generator switch — OFF, then RESET (hold ≈ 1 second), then ON."
              },
              {
                "t": "p",
                "text": "If the generator will not reset: leave switch OFF."
              },
              {
                "t": "p",
                "text": "Operating generator — do not exceed 1.0 load. Reduce non-essential loads as required."
              },
              {
                "t": "p",
                "text": "Land as soon as practicable if both generators are lost."
              },
              {
                "t": "p",
                "text": "Excessive Loadmeter Indication (> 1.0)"
              },
              {
                "t": "p",
                "text": "Battery switch — OFF (monitor loadmeter)."
              },
              {
                "t": "p",
                "text": "If load still > 1.0: turn non-essential electrical equipment OFF."
              },
              {
                "t": "p",
                "text": "If load returns to ≤ 1.0: battery switch may be returned ON."
              },
              {
                "t": "h",
                "text": "Circuit Breaker Tripped"
              },
              {
                "t": "p",
                "text": "Non-essential circuit — do not reset in flight."
              },
              {
                "t": "p",
                "text": "Essential circuit — allow to cool (≥ 10 s), then push to reset once. If it trips again, do not reset."
              },
              {
                "t": "p",
                "text": "Bus feeder circuit breakers (fuel panel / right CB panel feeders) — do not reset in flight; a short is indicated."
              },
              {
                "t": "h",
                "text": "Inverter Inoperative"
              },
              {
                "t": "p",
                "text": "Select the opposite inverter. Monitor AC instruments and annunciators."
              },
              {
                "t": "p",
                "text": "Current Limiter Check (study method)"
              },
              {
                "t": "p",
                "text": "With one generator offline, press the loadmeter button for the offline side and observe the voltmeter reading. A battery-voltage reading or zero indicates a failed limiter on that side. Reduce load on the affected bus accordingly."
              }
            ]
          },
          {
            "id": "key-limitations-operating-notes",
            "title": "Key Limitations & Operating Notes",
            "blocks": [
              {
                "t": "p",
                "text": "Do not operate continuously with loadmeter > 1.0."
              },
              {
                "t": "p",
                "text": "Single-generator operation requires careful load management."
              },
              {
                "t": "p",
                "text": "Battery is the only source if both generators fail — minimize load and land promptly."
              },
              {
                "t": "p",
                "text": "After emergency engine shutdown, the associated generator is turned OFF as part of the clean-up."
              },
              {
                "t": "p",
                "text": "Starter-assisted airstarts require significant electrical load reduction and may momentarily affect EFIS attitude displays on some installations."
              },
              {
                "t": "p",
                "text": "Serial-number differences exist in bus architecture, current-limiter values, inverter control, and EFIS power sources — always use the wiring diagrams and AFM for your airplane."
              }
            ]
          },
          {
            "id": "study-tips",
            "title": "Study Tips",
            "blocks": [
              {
                "t": "p",
                "text": "Draw the simplified bus diagram from memory (Hot Battery → Main Battery → Generator Buses → Isolation Bus → Dual-Fed Buses)."
              },
              {
                "t": "p",
                "text": "Know which items remain powered on the Hot Battery Bus."
              },
              {
                "t": "p",
                "text": "Practice the generator-reset and excessive-load memory actions until automatic."
              },
              {
                "t": "p",
                "text": "Understand why dual-fed buses and current limiters improve single-generator dispatch reliability."
              },
              {
                "t": "p",
                "text": "Cross-reference the electrical-smoke memory items from the Emergency Procedures checklist."
              },
              {
                "t": "p",
                "text": "Next suggested systems: Fuel System → Powerplant / Propellers → Environmental & Pressurization → Ice Protection → Landing Gear."
              }
            ]
          }
        ],
        "questions": [
          {
            "kind": "mcq",
            "prompt": "What is the continuous rating of each starter-generator?",
            "choices": [
              "100 A",
              "150 A",
              "250 A",
              "300 A"
            ],
            "correct": 2
          },
          {
            "kind": "mcq",
            "prompt": "Which bus remains powered even when the battery switch is OFF?",
            "choices": [
              "Main Battery Bus",
              "Hot Battery Bus",
              "Left Generator Bus",
              "Isolation Bus"
            ],
            "correct": 2
          },
          {
            "kind": "mcq",
            "prompt": "What do the inverters provide?",
            "choices": [
              "28 VDC only",
              "400 Hz AC power (115 V and 26 V)",
              "60 Hz AC power",
              "Battery charging current"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Why do dual-fed buses improve reliability?",
            "choices": [
              "They only operate on the ground",
              "They are fed from both generator sides, so a single failure does not remove power from critical loads",
              "They isolate the battery completely",
              "They increase generator output"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "In what order are the power sources typically brought online for flight?",
            "choices": [
              "Generators first, then battery",
              "Battery ON, then generators ON after engines stabilize",
              "External power only",
              "Inverters first"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What does a loadmeter reading of 1.0 represent?",
            "choices": [
              "Zero load",
              "50 % of rated generator capacity",
              "100 % of rated generator capacity",
              "Battery voltage"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the correct first action when a DC GEN annunciator illuminates?",
            "choices": [
              "Immediately shut down the associated engine",
              "Generator switch OFF → RESET (≈1 s) → ON",
              "Turn the battery switch OFF",
              "Select the opposite inverter"
            ],
            "correct": 2
          },
          {
            "kind": "mcq",
            "prompt": "If a generator will not reset, what is the next requirement?",
            "choices": [
              "Continue with that generator ON",
              "Leave the switch OFF and do not exceed 1.0 load on the operating generator",
              "Reset the circuit breakers",
              "Land immediately regardless of conditions"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "For an excessive loadmeter indication (> 1.0), what is the first memory action?",
            "choices": [
              "Turn both generators OFF",
              "Battery switch — OFF (monitor loadmeter)",
              "Pull all non-essential circuit breakers",
              "Declare an emergency"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "A non-essential circuit breaker trips in flight. What is the correct action?",
            "choices": [
              "Reset it immediately",
              "Do not reset in flight",
              "Reset after 30 seconds",
              "Replace it in flight if possible"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "An essential circuit breaker trips. What is the correct procedure?",
            "choices": [
              "Do not attempt any reset",
              "Allow to cool (≥ 10 s), reset once; if it trips again, do not reset",
              "Reset repeatedly until it holds",
              "Turn the battery OFF"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What should you do if an inverter fails?",
            "choices": [
              "Shut down both engines",
              "Select the opposite inverter",
              "Turn the avionics master OFF permanently",
              "No action is required"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Continuous operation with loadmeter above 1.0 is:",
            "choices": [
              "Permitted for short periods only",
              "Not permitted",
              "Required for generator cooling",
              "Only a problem on the ground"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "If both generators fail, what is the primary remaining power source?",
            "choices": [
              "The inverters",
              "The battery",
              "External power (in flight)",
              "There is no remaining power"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "After an emergency engine shutdown, what electrical action is part of the clean-up?",
            "choices": [
              "Leave the generator ON to supply power",
              "Generator — OFF",
              "Reset the generator",
              "Turn the battery OFF immediately"
            ],
            "correct": 1
          }
        ]
      },
      {
        "id": "fuel",
        "title": "Fuel System",
        "short": "Main and aux tanks, transfer, boost pumps, and crossfeed.",
        "hasDrill": false,
        "sections": [
          {
            "id": "intro",
            "title": "Overview",
            "blocks": [
              {
                "t": "p",
                "text": "This study guide summarizes the fuel system for recurrent training, personal knowledge, and instruction. Content is rewritten in original language from the reference materials. Confirm exact capacities, procedures, and limitations in the AFM for your airplane."
              }
            ]
          },
          {
            "id": "system-overview",
            "title": "System Overview",
            "blocks": [
              {
                "t": "p",
                "text": "Each engine is supplied by an independent left or right fuel system. Each side consists of a MAIN tank group and an AUXILIARY tank. The two sides can be crossfed during single-engine operation."
              },
              {
                "t": "p",
                "text": "Main system (each side): Approximately 193 usable gallons. Multiple interconnected cells in the outer wing that gravity-feed into the nacelle tank."
              },
              {
                "t": "p",
                "text": "Auxiliary system (each side): Approximately 79 usable gallons in a center-section bladder cell."
              },
              {
                "t": "p",
                "text": "Total usable fuel: Approximately 544 gallons (≈ 3,644 lb)."
              },
              {
                "t": "p",
                "text": "Important operating note: Do not put fuel in the auxiliary tanks unless the main tanks are full (wing-bending considerations). Use auxiliary fuel first."
              }
            ]
          },
          {
            "id": "auxiliary-fuel-transfer",
            "title": "Auxiliary Fuel Transfer",
            "blocks": [
              {
                "t": "p",
                "text": "Auxiliary fuel is transferred to the nacelle tank by a jet pump. Motive flow for the jet pump is supplied by boost-pump pressure through an electrically operated motive-flow valve."
              },
              {
                "t": "p",
                "text": "AUTO mode: An automatic transfer module senses aux fuel present and engine running, then opens the motive-flow valve. Transfer continues until the aux tank is empty."
              },
              {
                "t": "p",
                "text": "OVERRIDE: Bypasses the automatic module and applies power directly to the motive-flow valve. Used if the NO TRANSFER light illuminates (module or valve failure)."
              },
              {
                "t": "p",
                "text": "NO TRANSFER light: Illuminates if the motive-flow valve does not open when it should. Move the AUX TRANSFER switch to OVERRIDE."
              }
            ]
          },
          {
            "id": "fuel-boost-pumps",
            "title": "Fuel Boost Pumps",
            "blocks": [
              {
                "t": "p",
                "text": "Main (engine-driven) boost pump: Runs whenever the engine is turning. Provides normal 25–30 psi boost pressure."
              },
              {
                "t": "p",
                "text": "Standby (electric) boost pump: Submerged in the nacelle tank. Controlled by STANDBY PUMP switches. Used as backup if the main pump fails and for crossfeed."
              },
              {
                "t": "p",
                "text": "FUEL PRESS annunciator: Illuminates if boost pressure is lost. Turn the standby pump ON; the light should extinguish."
              },
              {
                "t": "p",
                "text": "Boost pressure is required to keep a positive head on the engine-driven high-pressure pump. Prolonged operation without boost pressure requires high-pressure pump inspection/overhaul."
              }
            ]
          },
          {
            "id": "crossfeed",
            "title": "Crossfeed",
            "blocks": [
              {
                "t": "p",
                "text": "Crossfeed is limited to single-engine operation. It allows the operating engine to draw fuel from the opposite wing system."
              },
              {
                "t": "p",
                "text": "Crossfeed switch positions: LEFT / OFF / RIGHT (arrows indicate direction of flow)."
              },
              {
                "t": "p",
                "text": "When selected, the automatic module opens the crossfeed valve, illuminates the CROSSFEED annunciator, activates the appropriate standby boost pump, and locks out the motive-flow valve on the receiving side."
              },
              {
                "t": "p",
                "text": "To discontinue: return the switch to OFF (centered)."
              },
              {
                "t": "p",
                "text": "Confirm crossfeed by monitoring fuel-quantity gauges and fuel-pressure lights."
              },
              {
                "t": "p",
                "text": "Note: Aux transfer switch on the side being crossfed must be in AUTO. If the firewall valve is closed, auxiliary fuel on that side is unavailable."
              }
            ]
          },
          {
            "id": "firewall-shutoff-valves",
            "title": "Firewall Shutoff Valves",
            "blocks": [
              {
                "t": "p",
                "text": "Motor-driven valves located just aft of each firewall. Controlled by guarded switches. Used in emergency engine shutdown / fire procedures to isolate fuel from the engine. They are dual-fed and remain available on essential power."
              }
            ]
          },
          {
            "id": "fuel-quantity-indication",
            "title": "Fuel Quantity Indication",
            "blocks": [
              {
                "t": "p",
                "text": "Capacitance-type system compensated for fuel density/temperature. Reads in pounds. A selector allows display of MAIN or AUXILIARY quantity on each side. Multiple probes (nacelle, main cells, aux) feed the system."
              }
            ]
          },
          {
            "id": "engine-fuel-system-high-level",
            "title": "Engine Fuel System (High Level)",
            "blocks": [
              {
                "t": "h",
                "text": "Oil-to-fuel heat exchanger"
              },
              {
                "t": "p",
                "text": "Engine-driven high-pressure pump (gear-type, positive displacement)"
              },
              {
                "t": "p",
                "text": "Fuel Control Unit (FCU)"
              },
              {
                "t": "h",
                "text": "Fuel nozzles"
              },
              {
                "t": "p",
                "text": "Loss of the high-pressure pump results in engine flame-out. Minimum pressurizing valve in the FCU shuts off fuel to the nozzles if pressure falls below approximately 80 psi."
              }
            ]
          },
          {
            "id": "abnormal-emergency-related-actions",
            "title": "Abnormal / Emergency Related Actions",
            "blocks": [
              {
                "t": "h",
                "text": "Engine-Driven Boost Pump Failure"
              },
              {
                "t": "p",
                "text": "Standby Boost Pump (failed side) — ON; confirm FUEL PRESS annunciator extinguishes."
              },
              {
                "t": "p",
                "text": "Crossfeed (one-engine-inoperative)"
              },
              {
                "t": "p",
                "text": "Standby Boost Pumps — OFF; Crossfeed Flow Switch — LEFT or RIGHT as required; confirm CROSSFEED light ON and both FUEL PRESS lights OUT."
              },
              {
                "t": "h",
                "text": "Emergency Engine Shutdown"
              },
              {
                "t": "p",
                "text": "Fuel Firewall Valve — CLOSE (memory item)."
              }
            ]
          },
          {
            "id": "key-operating-notes-limitations",
            "title": "Key Operating Notes & Limitations",
            "blocks": [
              {
                "t": "p",
                "text": "Fill main tanks before auxiliary tanks."
              },
              {
                "t": "p",
                "text": "Use auxiliary fuel first."
              },
              {
                "t": "p",
                "text": "Crossfeed is intended for single-engine operation only."
              },
              {
                "t": "p",
                "text": "Aviation gasoline is an emergency fuel only (limit ≈ 150 hours per TBO)."
              },
              {
                "t": "p",
                "text": "Allow adequate settling time after refueling before draining sumps."
              },
              {
                "t": "p",
                "text": "Serial-number differences exist in quantity probes, transfer logic, and exact capacities — always verify with the AFM."
              }
            ]
          },
          {
            "id": "study-tips",
            "title": "Study Tips",
            "blocks": [
              {
                "t": "p",
                "text": "Draw the flow path: Aux tank → jet pump → nacelle tank → boost pumps → firewall valve → engine."
              },
              {
                "t": "p",
                "text": "Know the difference between AUTO and OVERRIDE auxiliary transfer."
              },
              {
                "t": "p",
                "text": "Memorize the crossfeed sequence and what the module does automatically."
              },
              {
                "t": "p",
                "text": "Link the FUEL PRESS light and firewall-valve actions to the emergency-engine-shutdown checklist."
              },
              {
                "t": "p",
                "text": "Next suggested systems: Powerplant / Propellers → Environmental & Pressurization → Ice Protection → Landing Gear."
              }
            ]
          }
        ],
        "questions": [
          {
            "kind": "mcq",
            "prompt": "Approximately how many usable gallons are in each main fuel system?",
            "choices": [
              "79 gallons",
              "193 gallons",
              "272 gallons",
              "544 gallons"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Approximately how many usable gallons are in each auxiliary tank?",
            "choices": [
              "79 gallons",
              "193 gallons",
              "272 gallons",
              "544 gallons"
            ],
            "correct": 0
          },
          {
            "kind": "mcq",
            "prompt": "What is the approximate total usable fuel capacity?",
            "choices": [
              "386 gallons",
              "544 gallons (≈ 3,644 lb)",
              "600 gallons",
              "193 gallons"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Which statement about auxiliary fuel is correct?",
            "choices": [
              "Fill auxiliary tanks first, then mains",
              "Do not put fuel in the auxiliary tanks unless the main tanks are full; use auxiliary fuel first",
              "Auxiliary fuel can only be used on the ground",
              "Auxiliary tanks must always be empty for takeoff"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "How is auxiliary fuel normally transferred to the nacelle tank?",
            "choices": [
              "Gravity only",
              "By a jet pump using motive flow from boost-pump pressure",
              "By the engine-driven high-pressure pump",
              "By an electric transfer pump only"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What does the AUTO position of the AUX TRANSFER switch do?",
            "choices": [
              "Applies power directly to the motive-flow valve at all times",
              "Allows the automatic module to open the motive-flow valve when aux fuel is present and the engine is running",
              "Shuts off all transfer",
              "Activates crossfeed"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "If the NO TRANSFER light illuminates, what is the correct pilot action?",
            "choices": [
              "Ignore it; transfer will resume automatically",
              "Move the AUX TRANSFER switch to OVERRIDE",
              "Turn the standby boost pump OFF",
              "Close the firewall shutoff valve"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What does the OVERRIDE position do?",
            "choices": [
              "Bypasses the automatic module and applies power directly to the motive-flow valve",
              "Disables the jet pump permanently",
              "Opens the crossfeed valve",
              "Turns on both standby pumps"
            ],
            "correct": 0
          },
          {
            "kind": "mcq",
            "prompt": "When does the main (engine-driven) boost pump operate?",
            "choices": [
              "Only when the standby switch is ON",
              "Whenever the engine is turning",
              "Only during crossfeed",
              "Only on the ground"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the normal boost pressure range provided by the boost pumps?",
            "choices": [
              "5–10 psi",
              "25–30 psi",
              "80–100 psi",
              "500–850 psi"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "If a FUEL PRESS annunciator illuminates, what is the immediate corrective action?",
            "choices": [
              "Close the firewall valve",
              "Turn the respective STANDBY PUMP switch ON",
              "Select crossfeed",
              "Shut down the engine"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Why is continuous boost pressure important for the engine-driven high-pressure pump?",
            "choices": [
              "It cools the generator",
              "It keeps a positive head on the high-pressure pump inlet for proper lubrication",
              "It powers the FCU",
              "It is only required for starting"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Crossfeed is intended for use during:",
            "choices": [
              "Normal two-engine cruise",
              "Single-engine operation only",
              "Ground operations only",
              "Any time fuel imbalance exceeds 200 lb"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "When the crossfeed switch is selected, which of the following does the automatic module typically do?",
            "choices": [
              "Closes both firewall valves",
              "Opens the crossfeed valve, illuminates the CROSSFEED light, activates the appropriate standby pump, and locks out the motive-flow valve on the receiving side",
              "Turns both generators OFF",
              "Transfers all auxiliary fuel immediately"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "How do you discontinue crossfeed?",
            "choices": [
              "Pull the crossfeed circuit breaker",
              "Return the crossfeed switch to OFF (centered)",
              "Turn both standby pumps OFF",
              "Close the firewall valves"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Where are the firewall shutoff valves located and what is their primary purpose?",
            "choices": [
              "In the wing tips; they control auxiliary transfer",
              "Just aft of each firewall; they isolate fuel from the engine in an emergency",
              "In the cockpit; they select main or aux quantity",
              "On the engine accessory case; they regulate boost pressure"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "The fuel quantity system is:",
            "choices": [
              "A float-type system that reads in gallons only",
              "A capacitance-type system compensated for density/temperature that reads in pounds",
              "A pressure-based system",
              "Only accurate on the ground"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Loss of the engine-driven high-pressure fuel pump will typically result in:",
            "choices": [
              "A gradual power reduction that can be managed",
              "Engine flame-out",
              "Illumination of the FUEL PRESS light only",
              "Automatic transfer to the opposite tank"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Aviation gasoline may be used as an emergency fuel, but is limited to approximately how many hours per TBO?",
            "choices": [
              "50 hours",
              "150 hours",
              "500 hours",
              "No limit"
            ],
            "correct": 1
          }
        ]
      },
      {
        "id": "powerplant",
        "title": "Powerplant",
        "short": "PT6A-41 / -42, levers, instruments, start, and oil.",
        "hasDrill": false,
        "sections": [
          {
            "id": "intro",
            "title": "Overview",
            "blocks": [
              {
                "t": "p",
                "text": "This study guide covers the engines, propellers, controls, instrumentation, and key operating principles. All values and procedures are rewritten for study purposes. Always confirm exact limits, serial-number differences, and procedures in the current AFM."
              }
            ]
          },
          {
            "id": "engine-overview",
            "title": "Engine Overview",
            "blocks": [
              {
                "t": "p",
                "text": "The King Air 200 uses Pratt & Whitney Canada PT6A-41 engines; the B200 uses the higher-rated PT6A-42. Both are free-turbine, reverse-flow turboprop engines rated in the 850 SHP class (approximately 903 ESHP)."
              },
              {
                "t": "p",
                "text": "Free turbine: The power turbine (Np) is only aerodynamically coupled to the gas-generator (N1) section — there is no mechanical shaft connecting them."
              },
              {
                "t": "p",
                "text": "Reverse flow: Air enters at the rear, flows forward through the compressor, turns 180° into the combustor, then turns again through the turbines and exits forward through the exhaust ports."
              },
              {
                "t": "p",
                "text": "Major sections: Air intake → Compressor (3 axial + 1 centrifugal) → Combustion (annular) → Turbine (1 compressor turbine + 2-stage free power turbine) → Exhaust → Reduction gearbox → Accessory gearbox."
              }
            ]
          },
          {
            "id": "powerplant-controls",
            "title": "Powerplant Controls",
            "blocks": [
              {
                "t": "h",
                "text": "Three levers per engine"
              },
              {
                "t": "p",
                "text": "Power Lever: Controls gas-generator speed (N1) / power in flight. On the ground it also controls Beta / reverse blade angle."
              },
              {
                "t": "p",
                "text": "Propeller Lever: Sets propeller RPM (Np) governor. Full forward = high RPM; aft = lower RPM / feather range."
              },
              {
                "t": "p",
                "text": "Condition Lever: Controls the fuel cutoff valve in the FCU (LOW IDLE / HIGH IDLE / CUT-OFF). Also used for fuel cutoff in emergency shutdown."
              }
            ]
          },
          {
            "id": "primary-engine-instruments",
            "title": "Primary Engine Instruments",
            "blocks": [
              {
                "t": "p",
                "text": "ITT (Interstage Turbine Temperature): Most critical temperature limit. Redline must never be exceeded."
              },
              {
                "t": "p",
                "text": "Torque: Primary power indication. Redline varies by model and conditions; confirm AFM."
              },
              {
                "t": "p",
                "text": "N1 (Ng / Gas Generator RPM): Compressor / gas-generator speed."
              },
              {
                "t": "p",
                "text": "Np (Propeller RPM): Propeller speed."
              },
              {
                "t": "p",
                "text": "Oil Pressure / Temperature: Combined gauge. Low oil pressure has specific action thresholds."
              },
              {
                "t": "p",
                "text": "Fuel Flow: Indicated in pounds per hour."
              },
              {
                "t": "p",
                "text": "Chip Detect: Magnetic detector in the reduction gearbox. Illumination requires monitoring or shutdown per AFM."
              }
            ]
          },
          {
            "id": "propeller",
            "title": "Propeller",
            "blocks": [
              {
                "t": "p",
                "text": "Constant-speed, full-feathering, reversible propellers (typically 3- or 4-blade Hartzell). Controlled by a primary propeller governor, overspeed governor, and fuel-topping (power-turbine) governor."
              },
              {
                "t": "p",
                "text": "Feather: Propeller lever full aft or autofeather system. Oil pressure holds blades out of feather; loss of oil pressure allows blades to feather."
              },
              {
                "t": "p",
                "text": "Beta / Reverse: Ground range selected by moving the power lever aft of the idle detent. Used for ground handling and landing rollout."
              },
              {
                "t": "p",
                "text": "Overspeed protection: Primary governor + overspeed governor + fuel-topping governor (reduces fuel if Np exceeds limit)."
              }
            ]
          },
          {
            "id": "autofeather-system",
            "title": "Autofeather System",
            "blocks": [
              {
                "t": "p",
                "text": "Arms above a high N1 threshold (approximately 90 %). When armed and both power levers are advanced, the system monitors torque. If torque on one engine drops below a low threshold while the other remains high, the low-torque propeller is automatically feathered."
              },
              {
                "t": "p",
                "text": "Critical operating note: Do not retard the failed-engine power lever until the propeller has stopped rotating. Moving the power lever early deactivates the autofeather circuit and prevents automatic feathering."
              },
              {
                "t": "p",
                "text": "Autofeather should be armed for takeoff and landing as required by AFM / company policy."
              },
              {
                "t": "p",
                "text": "Test procedure is performed before takeoff per checklist."
              }
            ]
          },
          {
            "id": "ignition-starting",
            "title": "Ignition & Starting",
            "blocks": [
              {
                "t": "p",
                "text": "Ignition & Engine Start switch: Energizes starter, ignition, and purge valve."
              },
              {
                "t": "p",
                "text": "Auto-ignition: Arms continuous ignition when torque falls below a low threshold (protection against flameout in icing, heavy rain, etc.)."
              },
              {
                "t": "p",
                "text": "Starter limits: Typically 40 s on / 60 s off, 40 s on / 60 s off, 40 s on / 30 min off (confirm AFM)."
              },
              {
                "t": "p",
                "text": "Condition lever remains in CUT-OFF until light-off criteria are met, then moved to LOW IDLE."
              }
            ]
          },
          {
            "id": "lubrication-system",
            "title": "Lubrication System",
            "blocks": [
              {
                "t": "p",
                "text": "Self-contained dry-sump system. Provides lubrication, cooling, propeller control oil, torquemeter operation, and oil-to-fuel heating."
              },
              {
                "t": "p",
                "text": "Oil cooler is automatic (thermostatically controlled door)."
              },
              {
                "t": "p",
                "text": "Chip detector is located in the reduction gearbox."
              },
              {
                "t": "p",
                "text": "Low oil pressure (especially below ~60 psi) generally requires securing the engine or landing as soon as practicable — follow AFM guidance."
              }
            ]
          },
          {
            "id": "key-limitations-operating-notes-study-summary",
            "title": "Key Limitations & Operating Notes (Study Summary)",
            "blocks": [
              {
                "t": "p",
                "text": "Always use the AFM tables for the exact serial-number configuration. Typical study points:"
              },
              {
                "t": "p",
                "text": "Never exceed ITT redline."
              },
              {
                "t": "p",
                "text": "Torque redline must be observed; some models have different limits above/below certain altitudes or temperatures."
              },
              {
                "t": "p",
                "text": "Np and N1 have both continuous and transient limits."
              },
              {
                "t": "p",
                "text": "Oil pressure and temperature have defined operating ranges; sustained low oil pressure is unsafe."
              },
              {
                "t": "p",
                "text": "Starter duty cycle must be respected."
              },
              {
                "t": "p",
                "text": "Autofeather must be armed when required; do not interfere with its operation during an engine failure."
              },
              {
                "t": "p",
                "text": "Compressor bleed valves are open at low N1 and close above approximately 90 % N1. Stuck-closed valves at low N1 can cause compressor stall; stuck-open valves raise ITT and reduce torque."
              }
            ]
          },
          {
            "id": "study-tips",
            "title": "Study Tips",
            "blocks": [
              {
                "t": "p",
                "text": "Be able to explain free-turbine vs fixed-shaft and why the propeller can be feathered independently of N1."
              },
              {
                "t": "p",
                "text": "Know the function of each of the three control levers and what happens when each is moved."
              },
              {
                "t": "p",
                "text": "Memorize the autofeather critical note (do not retard power lever early)."
              },
              {
                "t": "p",
                "text": "Link chip-detect and low-oil-pressure indications to the emergency-engine-shutdown checklist."
              },
              {
                "t": "p",
                "text": "Practice calling out the primary instruments in order during a simulated engine failure: power, airspeed, gear, propeller (confirm feather), then clean-up."
              },
              {
                "t": "p",
                "text": "Next suggested systems: Environmental & Pressurization → Ice Protection → Landing Gear / Hydraulics → Flight Controls / Avionics overview."
              }
            ]
          }
        ],
        "questions": [
          {
            "kind": "mcq",
            "prompt": "What does “free-turbine” mean on the PT6?",
            "choices": [
              "The propeller is locked to the compressor shaft",
              "The power turbine (Np) is only aerodynamically coupled to the gas generator (N1); there is no mechanical shaft connecting them",
              "The engine has no reduction gearbox",
              "The compressor is free to rotate independently of the turbines"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the approximate shaft-horsepower class of the PT6A-41/42 used on the 200/B200?",
            "choices": [
              "450 SHP",
              "650 SHP",
              "850 SHP class (≈ 903 ESHP)",
              "1,200 SHP"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "The PT6 uses which airflow arrangement?",
            "choices": [
              "Straight-through axial flow only",
              "Reverse flow (air enters aft, turns 180°, exits forward)",
              "Centrifugal flow only",
              "Ram recovery only"
            ],
            "correct": 2
          },
          {
            "kind": "mcq",
            "prompt": "Which lever primarily controls gas-generator speed (N1) / power in flight?",
            "choices": [
              "Propeller lever",
              "Condition lever",
              "Power lever",
              "Mixture lever"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Which lever sets the propeller RPM governor and is used to feather the propeller?",
            "choices": [
              "Power lever",
              "Propeller lever",
              "Condition lever",
              "Friction knob"
            ],
            "correct": 2
          },
          {
            "kind": "mcq",
            "prompt": "What does the Condition Lever primarily control?",
            "choices": [
              "Propeller blade angle only",
              "The fuel cutoff valve in the FCU (LOW IDLE / HIGH IDLE / CUT-OFF)",
              "Generator output",
              "Oil cooler door position"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Which instrument is generally considered the most critical temperature limit that must never be exceeded?",
            "choices": [
              "Oil temperature",
              "ITT (Interstage Turbine Temperature)",
              "Outside air temperature",
              "Cabin temperature"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What does N1 (or Ng) represent?",
            "choices": [
              "Propeller RPM",
              "Gas-generator / compressor RPM",
              "Torque in percent",
              "Fuel flow"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What does Np represent?",
            "choices": [
              "Gas-generator RPM",
              "Propeller RPM",
              "Oil pressure",
              "ITT"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "A CHIP DETECT light indicates:",
            "choices": [
              "Low fuel pressure",
              "Ferrous metal particles attracted to the magnetic detector in the reduction gearbox",
              "Generator failure",
              "High ITT"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "In the PT6 installation, what primarily holds the propeller blades out of the feathered position?",
            "choices": [
              "Electrical power",
              "Oil pressure",
              "Spring force only",
              "Nitrogen charge"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "When is the autofeather system typically armed?",
            "choices": [
              "Only on the ground",
              "Above a high N1 threshold (approximately 90 %) with both power levers advanced",
              "Anytime the condition levers are in HIGH IDLE",
              "Only after landing"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Critical autofeather operating note: What must you NOT do if an engine fails with autofeather armed?",
            "choices": [
              "Advance the operating engine power lever",
              "Retard the failed-engine power lever before the propeller has stopped rotating (this deactivates autofeather)",
              "Raise the landing gear",
              "Turn the generator OFF"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Beta and reverse ranges are selected by:",
            "choices": [
              "Moving the propeller lever full aft",
              "Moving the power lever aft of the idle detent (ground range)",
              "Selecting AUTO on the condition lever",
              "Pulling the firewall shutoff"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Typical starter duty cycle (confirm AFM) is approximately:",
            "choices": [
              "Continuous",
              "40s on / 60 s off, 40s on / 60 s off, 40s on / 30 min off",
              "10s on / 10 s off only",
              "No limit if oil temperature is normal"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Auto-ignition is normally used to:",
            "choices": [
              "Start the engine on the ground only",
              "Provide continuous ignition protection against flameout when torque is low (icing, heavy rain, etc.)",
              "Feather the propeller",
              "Control the oil cooler"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Compressor bleed valves are normally:",
            "choices": [
              "Closed at low N1 and open above 90 % N1",
              "Open at low N1 and closed above approximately 90 % N1",
              "Always open",
              "Controlled only by the pilot"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "If both compressor bleed valves stick closed at low N1, the likely result is:",
            "choices": [
              "Higher torque",
              "Compressor stall",
              "Lower ITT",
              "Automatic feather"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Sustained oil pressure below approximately 60 psi is generally considered:",
            "choices": [
              "Normal for cruise",
              "Unsafe — secure the engine or land as soon as practicable per AFM",
              "A reason to increase power",
              "Only a problem on the ground"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Sustained oil pressure below approximately 60 psi is considered:",
            "choices": [
              "Normal cruise cruise",
              "Unsafe — secure the engine or land as soon as practicable per the AFM",
              "Acceptable if ITT is normal",
              "A ground-only limitation"
            ],
            "correct": 1
          }
        ]
      },
      {
        "id": "propeller",
        "title": "Propeller & Autofeather",
        "short": "Governing, feather, Beta/reverse, and autofeather sequence.",
        "hasDrill": false,
        "sections": [
          {
            "id": "intro",
            "title": "Overview",
            "blocks": [
              {
                "t": "p",
                "text": "Focused study of constant-speed propeller operation, governing, Beta/reverse, feathering, and the autofeather system. Content is rewritten for study purposes from the reference materials. Confirm exact blade angles, RPM limits, and serial-number differences in the AFM for your airplane."
              }
            ]
          },
          {
            "id": "propeller-overview",
            "title": "Propeller Overview",
            "blocks": [
              {
                "t": "p",
                "text": "The King Air 200/B200 uses oil-operated, constant-speed, full-feathering, reversible propellers (3-blade or 4-blade Hartzell or McCauley, depending on serial number). The propeller is driven by the free power turbine through a two-stage planetary reduction gearbox (approximately 15:1 overall ratio)."
              },
              {
                "t": "p",
                "text": "Oil pressure decreases blade angle (toward fine/low pitch / higher RPM)."
              },
              {
                "t": "p",
                "text": "Counterweights + feathering springs increase blade angle (toward coarse pitch / feather). Loss of oil pressure therefore allows the blades to feather."
              },
              {
                "t": "p",
                "text": "Typical blade-angle ranges (approximate; confirm AFM): feather ≈ +87° to +90°; reverse ≈ −9° to −11°."
              },
              {
                "t": "p",
                "text": "Normal governing range: approximately 1,600–2,000 RPM (100 % Np = 2,000 RPM)."
              }
            ]
          },
          {
            "id": "propeller-governing-system",
            "title": "Propeller Governing System",
            "blocks": [
              {
                "t": "h",
                "text": "Three layers of protection work together"
              },
              {
                "t": "h",
                "text": "Primary Propeller Governor"
              },
              {
                "t": "p",
                "text": "Engine-driven governor that maintains selected RPM by balancing speeder-spring force (set by the propeller lever) against flyweight force (a function of actual propeller RPM)."
              },
              {
                "t": "p",
                "text": "Onspeed: Speeder spring force = flyweight force → pilot valve holds oil in the servo → blade angle remains essentially constant."
              },
              {
                "t": "p",
                "text": "Overspeed: Flyweight force > speeder spring → pilot valve dumps oil → counterweights/springs increase blade angle → RPM decreases."
              },
              {
                "t": "p",
                "text": "Underspeed: Speeder spring > flyweight force → pilot valve directs oil to the servo piston → blade angle decreases → RPM increases."
              },
              {
                "t": "p",
                "text": "Propeller lever full forward ≈ 2,000 RPM; retarding the lever lowers the selected RPM (down to ≈ 1,600 RPM before the feather detent)."
              },
              {
                "t": "h",
                "text": "Overspeed Governor"
              },
              {
                "t": "p",
                "text": "Hydraulic backup governor driven by the reduction gearbox. If the primary governor fails to limit RPM, the overspeed governor takes over at a preset value (typically ≈ 2,080–2,120 RPM / 104–106 % of max primary setting, depending on serial number)."
              },
              {
                "t": "p",
                "text": "PROP GOV TEST: A cockpit switch energizes a solenoid that temporarily lowers the overspeed-governor setting to approximately 1,830–1,910 RPM so the system can be functionally checked without actually overspeeding the propeller."
              },
              {
                "t": "p",
                "text": "Fuel-Topping (Power-Turbine) Governor"
              },
              {
                "t": "p",
                "text": "Integral with the primary governor. If the propeller blades stick or respond too slowly and oil-pressure governing cannot control RPM, the fuel-topping governor vents pneumatic pressure from the FCU, reducing fuel flow and therefore N1 / power-turbine speed. Activation is typically around 106 % of the selected propeller RPM. In reverse, the fuel-topping governor is rescheduled to approximately 95 % of selected RPM (max reverse Np ≈ 1,900 RPM)."
              }
            ]
          },
          {
            "id": "feathering",
            "title": "Feathering",
            "blocks": [
              {
                "t": "p",
                "text": "Feathering is produced by the counterweights and feathering springs once oil pressure is removed from the propeller servo piston."
              },
              {
                "t": "p",
                "text": "Manual feather: Move the propeller lever full aft into the feather detent. This mechanically raises the primary-governor pilot valve, dumps oil from the servo, and allows the blades to feather."
              },
              {
                "t": "p",
                "text": "Autofeather: Opens a dump solenoid on the overspeed governor, rapidly dumping oil and feathering the propeller (see Section 6)."
              },
              {
                "t": "p",
                "text": "Important: If an engine flames out in flight, the propeller will not automatically feather from windmilling / residual governor action alone. Manual selection of feather (or autofeather if armed and conditions are met) is required."
              },
              {
                "t": "p",
                "text": "On the ground after shutdown, the propeller will eventually feather as residual oil pressure decays, but the preferred technique is to feather with the propeller lever."
              }
            ]
          },
          {
            "id": "unfeathering",
            "title": "Unfeathering",
            "blocks": [
              {
                "t": "p",
                "text": "There is no separate unfeathering pump. With the propeller lever full forward, oil pressure generated as the engine starts moves the blades out of feather toward the low-pitch stop (approximately 18°). The engine must be operating to unfeather the propeller."
              }
            ]
          },
          {
            "id": "beta-mode-reverse",
            "title": "Beta Mode & Reverse",
            "blocks": [
              {
                "t": "p",
                "text": "The power lever controls blade angle in the ground range via a Beta valve that is part of the propeller governor."
              },
              {
                "t": "p",
                "text": "Alpha (flight) range: Power lever controls N1 / power only. Blade angle is governed by the propeller governor."
              },
              {
                "t": "p",
                "text": "Beta / ground-fine range: Power lever is lifted over the idle detent into the ground range. The Beta valve is positioned to reduce blade angle (and therefore residual thrust) while the engine remains at low power."
              },
              {
                "t": "p",
                "text": "Reverse: Further aft travel of the power lever commands negative blade angles, increases fuel flow to a scheduled reverse power setting, and resets the fuel-topping governor to ≈ 95 % of selected Np."
              },
              {
                "t": "p",
                "text": "A mechanical low-pitch stop prevents the propeller from entering Beta/reverse blade angles in flight."
              },
              {
                "t": "p",
                "text": "RVS NOT READY light: illuminates if a propeller lever is not full forward when the landing gear is down (reverse not fully available)."
              }
            ]
          },
          {
            "id": "autofeather-system-detailed",
            "title": "Autofeather System — Detailed",
            "blocks": [
              {
                "t": "p",
                "text": "The autofeather system rapidly feathers the propeller of a failed engine during critical phases of flight (takeoff, approach, landing) by dumping propeller oil pressure through a solenoid valve on the overspeed governor."
              },
              {
                "t": "h",
                "text": "Arming Logic"
              },
              {
                "t": "p",
                "text": "Autofeather switch selected to ARM."
              },
              {
                "t": "p",
                "text": "Power levers advanced past a microswitch that closes at approximately 90 % N1."
              },
              {
                "t": "p",
                "text": "Both engines producing torque above approximately 400 ft-lb."
              },
              {
                "t": "p",
                "text": "When all conditions are satisfied, both green L and R AUTO FEATHER annunciators illuminate, indicating the system is fully armed."
              },
              {
                "t": "p",
                "text": "Failure Sequence (example: right engine fails)"
              },
              {
                "t": "p",
                "text": "Right-engine torque decays. At ≈ 400 ft-lb the right torque switch closes; the left (operating) engine’s autofeather light extinguishes (its circuit is disarmed so it cannot feather)."
              },
              {
                "t": "p",
                "text": "As right-engine torque continues to fall to ≈ 200 ft-lb, a second torque switch closes, energizing the arming relay and opening the dump solenoid on the right overspeed governor."
              },
              {
                "t": "p",
                "text": "Oil is dumped from the right propeller servo; counterweights and springs rapidly feather the right propeller. The right autofeather light extinguishes."
              },
              {
                "t": "h",
                "text": "Critical Operating Note"
              },
              {
                "t": "p",
                "text": "Do not retard the failed-engine power lever until the propeller has completely stopped rotating. Retarding the power lever early opens the power-lever microswitch and deactivates the autofeather circuit, preventing automatic feathering. Confirm the propeller is feathered (or fully stopped) before moving the power lever to idle."
              },
              {
                "t": "h",
                "text": "TEST Position"
              },
              {
                "t": "p",
                "text": "The TEST position bypasses the 90 % N1 power-lever microswitches so the system can be checked at low power (typically ≈ 500 ft-lb torque)."
              },
              {
                "t": "p",
                "text": "Both autofeather lights illuminate when TEST is selected at the test torque."
              },
              {
                "t": "p",
                "text": "Retarding one power lever: opposite light extinguishes near 400 ft-lb; continued reduction causes the affected light to extinguish near 200 ft-lb and the propeller to begin a feather/unfeather cycle (it will not fully feather while the engine is still producing torque)."
              },
              {
                "t": "p",
                "text": "Condition levers should be at LOW IDLE for a valid test; otherwise torque may not fall low enough for the cycle to occur."
              },
              {
                "t": "h",
                "text": "When to Use Autofeather"
              },
              {
                "t": "p",
                "text": "Armed for takeoff and for approach/landing as required by AFM or company policy."
              },
              {
                "t": "p",
                "text": "Normally turned OFF after takeoff / in cruise and after landing."
              },
              {
                "t": "p",
                "text": "Both green lights must be illuminated for the system to be considered fully armed."
              }
            ]
          },
          {
            "id": "propeller-synchrophaser-brief",
            "title": "Propeller Synchrophaser (Brief)",
            "blocks": [
              {
                "t": "h",
                "text": "Two systems exist depending on serial number"
              },
              {
                "t": "p",
                "text": "Type II (later aircraft): Electronic system that matches RPM and blade phase. Can be used for takeoff and landing. Does not reduce RPM below the propeller-lever datum."
              },
              {
                "t": "p",
                "text": "Type I (earlier aircraft): Master–slave (left master). Should be OFF for ground, takeoff, and landing because failure of the master can cause a limited RPM reduction on the slave."
              },
              {
                "t": "p",
                "text": "A synchroscope (rotating disk) aids manual synchronization when the automatic system is off or not used."
              }
            ]
          },
          {
            "id": "key-operating-notes-limitations",
            "title": "Key Operating Notes & Limitations",
            "blocks": [
              {
                "t": "p",
                "text": "Normal Np: 1,600–2,000 RPM. Max continuous 2,000 RPM. Transient overspeed limit typically 2,200 RPM (time-limited)."
              },
              {
                "t": "p",
                "text": "Max reverse Np ≈ 1,900 RPM (fuel-topping limited)."
              },
              {
                "t": "p",
                "text": "Torque limits apply within the 1,600–2,000 RPM range; below 1,600 RPM torque is significantly reduced (confirm AFM)."
              },
              {
                "t": "p",
                "text": "Never select reverse in flight (no in-flight lock-out on some early configurations — pilot discipline is required)."
              },
              {
                "t": "p",
                "text": "During engine failure with autofeather armed: confirm autofeather has completed (propeller stopped) before retarding the failed power lever."
              },
              {
                "t": "p",
                "text": "Manual feather is always available via the propeller lever regardless of autofeather status."
              }
            ]
          },
          {
            "id": "study-tips",
            "title": "Study Tips",
            "blocks": [
              {
                "t": "p",
                "text": "Be able to explain the three-governor hierarchy: primary → overspeed → fuel topping."
              },
              {
                "t": "p",
                "text": "Draw the onspeed / overspeed / underspeed pilot-valve logic from memory."
              },
              {
                "t": "p",
                "text": "Memorize the autofeather arming requirements and the 400 / 200 ft-lb torque switch sequence."
              },
              {
                "t": "p",
                "text": "Practice the critical note until it is automatic: “Do not retard the failed power lever until the propeller has stopped.”"
              },
              {
                "t": "p",
                "text": "Know the difference between Alpha, Beta, and Reverse ranges and how the power lever interacts with the Beta valve."
              },
              {
                "t": "p",
                "text": "Link propeller actions to the emergency-engine-shutdown checklist (condition lever → propeller lever → firewall valve, etc.)."
              }
            ]
          }
        ],
        "questions": [
          {
            "kind": "mcq",
            "prompt": "What force decreases propeller blade angle (toward fine pitch / higher RPM)?",
            "choices": [
              "Counterweights and springs",
              "Oil pressure to the servo piston",
              "Electrical power",
              "Nitrogen charge"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What force increases propeller blade angle (toward coarse pitch / feather)?",
            "choices": [
              "Oil pressure",
              "Counterweights and feathering springs",
              "Generator output",
              "Fuel pressure"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the normal propeller RPM governing range?",
            "choices": [
              "1,000–1,500 RPM",
              "Approximately 1,600–2,000 RPM",
              "2,200–2,500 RPM",
              "Only 2,000 RPM"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "If oil pressure is lost to the propeller servo, the blades will:",
            "choices": [
              "Move to fine pitch",
              "Tend to feather (counterweights and springs increase blade angle)",
              "Remain at the last selected angle indefinitely",
              "Go into reverse"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "In an on speed condition, what is true of the primary governor?",
            "choices": [
              "Flyweight force is much greater than speeder-spring force",
              "Speeder-spring force equals flyweight force; the pilot valve holds oil, so blade angle remains essentially constant",
              "The overspeed governor is controlling",
              "Oil is continuously dumped"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "In an overspeed condition the primary governor:",
            "choices": [
              "Directs more oil to the servo to decrease blade angle",
              "Dumps oil from the servo so counterweights/springs increase blade angle and reduce RPM",
              "Opens the fuel cutoff valve",
              "Turns the generator offline"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the purpose of the overspeed governor?",
            "choices": [
              "To control N1",
              "Hydraulic backup that limits propeller RPM if the primary governor fails (typically ≈ 2,080–2,120 RPM)",
              "To feather the propeller automatically on the ground",
              "To select Beta mode"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What does the PROP GOV TEST switch do?",
            "choices": [
              "Feathers both propellers",
              "Temporarily lowers the overspeed-governor setting (≈ 1,830–1,910 RPM) so the system can be checked without actual overspeed",
              "Arms the autofeather system",
              "Selects reverse"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "If the propeller blades stick and oil-pressure governing cannot control RPM, what provides the next layer of protection?",
            "choices": [
              "The battery",
              "The fuel-topping (power-turbine) governor, which vents FCU pressure and reduces fuel flow",
              "The condition lever",
              "The synchrophaser"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "How is the propeller manually feathered?",
            "choices": [
              "By retarding the power lever to idle",
              "By moving the propeller lever full aft into the feather detent (dumps oil so counterweights/springs feather the blades)",
              "By turning the generator OFF",
              "By selecting HIGH IDLE on the condition lever"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "If an engine flames out in flight, will the propeller automatically feather from windmilling alone?",
            "choices": [
              "Yes, always",
              "No — manual feather selection (or autofeather if armed and conditions met) is required",
              "Only if the condition lever is in CUT-OFF",
              "Only below 10,000 feet"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "How is the propeller unfeathered on the King Air 200/B200?",
            "choices": [
              "With a separate electric unfeathering pump",
              "By oil pressure generated as the engine starts (prop lever full forward); the engine must be operating",
              "By selecting reverse",
              "Automatically after 30 seconds"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "In the Alpha (flight) range the power lever primarily controls:",
            "choices": [
              "Propeller blade angle directly",
              "N1 / engine power (blade angle is governed by the propeller governor)",
              "Fuel cutoff only",
              "Oil temperature"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Beta / reverse ranges are selected by:",
            "choices": [
              "Moving the propeller lever full aft",
              "Lifting the power lever over the idle detent into the ground range",
              "Selecting ARM on the autofeather switch",
              "Retarding the condition lever"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What does the RVS NOT READY light indicate?",
            "choices": [
              "Autofeather is not armed",
              "A propeller lever is not full forward with the landing gear down (full reverse not available)",
              "Low oil pressure",
              "High ITT"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Which conditions are required for the autofeather system to be fully armed?",
            "choices": [
              "Switch OFF and power levers at idle",
              "Switch ARM + power levers advanced past ≈ 90 % N1 microswitches + both engines > ≈ 400 ft-lb torque",
              "Only the TEST position",
              "Landing gear down"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "When autofeather is fully armed, what indication is present?",
            "choices": [
              "Both red FIRE lights",
              "Both green L and R AUTO FEATHER annunciators illuminated",
              "Master caution only",
              "No cockpit indication"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "In a typical engine-failure sequence with autofeather armed, what happens near 400 ft-lb torque on the failing engine?",
            "choices": [
              "The failed propeller immediately feathers",
              "The operating engine’s autofeather light extinguishes (its circuit is disarmed)",
              "Both engines shut down",
              "The overspeed governor test activates"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "At approximately what torque on the failing engine does the dump solenoid open and the propeller begin to feather?",
            "choices": [
              "1,000 ft-lb",
              "Approximately 200 ft-lb",
              "500 ft-lb",
              "Only after the power lever is retarded"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "CRITICAL: What must you NOT do if an engine fails with autofeather armed?",
            "choices": [
              "Advance the operating engine",
              "Retard the failed-engine power lever before the propeller has completely stopped rotating (this deactivates autofeather)",
              "Raise the landing gear",
              "Turn the autofeather switch OFF immediately"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What does the TEST position of the autofeather switch do?",
            "choices": [
              "Feathers both propellers on the ground",
              "Bypasses the 90 % N1 power-lever microswitches so the system can be checked at low torque (≈ 500 ft-lb)",
              "Disables the overspeed governor",
              "Selects reverse"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "When is autofeather normally used?",
            "choices": [
              "Throughout the entire flight",
              "Armed for takeoff and for approach/landing as required; normally OFF in cruise and after landing",
              "Only on the ground",
              "Only above FL200"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the typical maximum continuous propeller RPM?",
            "choices": [
              "1,600 RPM",
              "2,000 RPM",
              "2,200 RPM",
              "1,900 RPM"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Maximum propeller RPM in reverse is limited to approximately:",
            "choices": [
              "2,000 RPM",
              "1,900 RPM (fuel-topping limited)",
              "1,600 RPM",
              "2,200 RPM"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Which statement about the Type II synchrophaser is correct?",
            "choices": [
              "It must be OFF for takeoff and landing",
              "It is an electronic system that matches RPM and blade phase and is certified for takeoff and landing",
              "It uses a master–slave arrangement with the left propeller as master",
              "It feathers the propeller on engine failure"
            ],
            "correct": 1
          }
        ]
      },
      {
        "id": "fire",
        "title": "Fire Protection",
        "short": "Detection, Halon bottles, switchlights, and testing.",
        "hasDrill": false,
        "sections": [
          {
            "id": "intro",
            "title": "Overview",
            "blocks": [
              {
                "t": "p",
                "text": "Covers engine fire detection, optional extinguishing system, testing, and portable extinguishers. Confirm serial-number differences in the AFM."
              }
            ]
          },
          {
            "id": "overview",
            "title": "Overview",
            "blocks": [
              {
                "t": "p",
                "text": "Each engine has an independent fire-detection system. An optional fire-extinguishing system can discharge a chemical agent into the nacelle. Detection is automatic; extinguishing requires deliberate pilot action."
              }
            ]
          },
          {
            "id": "fire-detection",
            "title": "Fire Detection",
            "blocks": [
              {
                "t": "p",
                "text": "Later aircraft (BB-1439, 1444 and subsequent)"
              },
              {
                "t": "p",
                "text": "Temperature-sensing cable in each nacelle."
              },
              {
                "t": "p",
                "text": "Red annunciators: L ENG FIRE and R ENG FIRE."
              },
              {
                "t": "p",
                "text": "Test switch on the copilot’s left subpanel."
              },
              {
                "t": "p",
                "text": "Power from No. 1 dual-fed bus via FIRE DET circuit breaker."
              },
              {
                "t": "p",
                "text": "Earlier aircraft (prior to BB-1444 except 1439)"
              },
              {
                "t": "p",
                "text": "Three photoconductive (flame) detectors per engine feeding a control amplifier."
              },
              {
                "t": "p",
                "text": "Red lights: FIRE L ENG and FIRE R ENG."
              },
              {
                "t": "p",
                "text": "May occasionally false-trigger from sunlight entering the nacelle at certain angles."
              },
              {
                "t": "h",
                "text": "Common behavior"
              },
              {
                "t": "p",
                "text": "When a fire is detected, the corresponding red warning light illuminates."
              },
              {
                "t": "p",
                "text": "If the fire goes out and system integrity is intact, the light extinguishes and the system can detect a new fire."
              },
              {
                "t": "p",
                "text": "With the extinguishing option installed, fire is also indicated by the red L / R ENG FIRE PUSH TO EXT switchlights on the glareshield."
              }
            ]
          },
          {
            "id": "fire-extinguishing-optional",
            "title": "Fire Extinguishing (Optional)",
            "blocks": [
              {
                "t": "p",
                "text": "Each engine has its own independent extinguishing system. Agent is bromotrifluoromethane (CBrF₃ / Halon 1301) pressurized with dry nitrogen, discharged through three spray bars in the nacelle."
              },
              {
                "t": "p",
                "text": "One bottle per engine. One-shot use between recharging. Cannot be used on the opposite engine."
              },
              {
                "t": "p",
                "text": "Squib: Pyrotechnic cartridge fired by pressing the glareshield switchlight."
              },
              {
                "t": "p",
                "text": "Power: Hot battery bus — system can be discharged even with engines off and airplane parked."
              },
              {
                "t": "p",
                "text": "Glareshield switchlights (three-lens)"
              },
              {
                "t": "p",
                "text": "Red — L (or R) ENG FIRE PUSH TO EXT: Fire detected; push to discharge."
              },
              {
                "t": "p",
                "text": "Amber — D: Bottle has been discharged (empty)."
              },
              {
                "t": "p",
                "text": "Green — OK: Circuit continuity confirmed during test."
              },
              {
                "t": "h",
                "text": "Typical response to engine fire"
              },
              {
                "t": "p",
                "text": "Confirm fire indication."
              },
              {
                "t": "p",
                "text": "Shut down the affected engine (condition lever, fuel, etc. — follow AFM memory items)."
              },
              {
                "t": "p",
                "text": "Push the corresponding ENG FIRE PUSH TO EXT switchlight to discharge the bottle."
              },
              {
                "t": "p",
                "text": "Amber D light illuminates when the bottle is empty."
              }
            ]
          },
          {
            "id": "bottle-pressure-gages",
            "title": "Bottle Pressure Gages",
            "blocks": [
              {
                "t": "p",
                "text": "Each extinguisher cylinder has a pressure gage located in the wheel well (readable only on the ground). Pressure varies with temperature — consult the AFM temperature-vs-pressure table for acceptable ranges."
              }
            ]
          },
          {
            "id": "testing-the-systems",
            "title": "Testing the Systems",
            "blocks": [
              {
                "t": "h",
                "text": "Detection test"
              },
              {
                "t": "p",
                "text": "Rotary test switch (DET L / DET R or individual detector positions on earlier aircraft)."
              },
              {
                "t": "p",
                "text": "Corresponding ENG FIRE light(s) should illuminate."
              },
              {
                "t": "p",
                "text": "Master Warning lights typically flash."
              },
              {
                "t": "p",
                "text": "Failure of lights to illuminate indicates a system malfunction (no-go)."
              },
              {
                "t": "p",
                "text": "Extinguisher test (when installed)"
              },
              {
                "t": "p",
                "text": "Rotate test switch through LEFT and RIGHT EXT positions."
              },
              {
                "t": "p",
                "text": "Amber D and green OK lights should illuminate, confirming squib and charge-detector circuitry."
              }
            ]
          },
          {
            "id": "portable-fire-extinguishers",
            "title": "Portable Fire Extinguishers",
            "blocks": [
              {
                "t": "h",
                "text": "Two portable extinguishers are normally installed"
              },
              {
                "t": "p",
                "text": "One in the cockpit (typically under the copilot’s seat)."
              },
              {
                "t": "p",
                "text": "One in the cabin (typically on the floor left side, forward of the airstair)."
              }
            ]
          },
          {
            "id": "key-operating-points-limitations",
            "title": "Key Operating Points & Limitations",
            "blocks": [
              {
                "t": "p",
                "text": "Detection requires electrical power; extinguishing is powered from the hot battery bus and can be discharged anytime."
              },
              {
                "t": "p",
                "text": "Each bottle is one-shot and engine-specific."
              },
              {
                "t": "p",
                "text": "Always confirm the fire indication and shut down the engine before (or as directed by AFM while) discharging."
              },
              {
                "t": "p",
                "text": "Check bottle pressures on the ground against the temperature chart."
              },
              {
                "t": "p",
                "text": "Know the test switch positions for both detection and extinguishing."
              }
            ]
          },
          {
            "id": "study-tips",
            "title": "Study Tips",
            "blocks": [
              {
                "t": "p",
                "text": "Separate detection (automatic) from extinguishing (pilot-activated)."
              },
              {
                "t": "p",
                "text": "Memorize the three-lens meanings: Red = fire / push to extinguish; Amber D = discharged; Green OK = test good."
              },
              {
                "t": "p",
                "text": "Know that extinguishing works from the hot battery bus even with the airplane powered down."
              },
              {
                "t": "p",
                "text": "Link the system to the emergency procedures checklist for engine fire."
              }
            ]
          }
        ],
        "questions": [
          {
            "kind": "mcq",
            "prompt": "On earlier aircraft (prior to BB-1444 except 1439), what detects an engine fire?",
            "choices": [
              "A temperature-sensing cable",
              "Three photoconductive (flame) detectors per engine feeding a control amplifier",
              "A single heat sensor",
              "The ITT gauge"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What happens if a detected fire goes out and system integrity is intact?",
            "choices": [
              "The warning light stays on permanently",
              "The light extinguishes and the system can detect a new fire",
              "The bottle automatically discharges",
              "The Master Warning stays on"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What agent is used in the engine fire-extinguishing bottles?",
            "choices": [
              "Water",
              "Bromotrifluoromethane (CBrF₃ / Halon 1301) pressurized with dry nitrogen",
              "CO₂ only",
              "Dry chemical powder"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "How many extinguisher bottles does each engine have, and can they be shared?",
            "choices": [
              "One shared bottle for both engines",
              "One independent bottle per engine; cannot be used on the opposite engine",
              "Two bottles per engine",
              "No bottles — detection only"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "From which electrical source is the extinguishing system powered?",
            "choices": [
              "Right generator bus only",
              "Hot battery bus (can be discharged even with engines off / airplane parked)",
              "Essential bus",
              "No electrical power required"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "How is the extinguisher bottle discharged?",
            "choices": [
              "Automatically when the detection light comes on",
              "By the pilot pressing the red ENG FIRE PUSH TO EXT switchlight on the glareshield",
              "By pulling a T-handle on the pedestal",
              "By selecting the condition lever to cut-off"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What does the red lens on the glareshield switchlight mean?",
            "choices": [
              "Bottle is empty",
              "Fire detected — push to extinguish",
              "System is armed",
              "Test is complete"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What does the amber “D” lens indicate?",
            "choices": [
              "Detection system fault",
              "Bottle has been discharged (empty)",
              "Door open",
              "Deice selected"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What does the green “OK” lens indicate?",
            "choices": [
              "Fire is out",
              "Circuit continuity confirmed during test",
              "Bottle is full",
              "Engine is shut down"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "During a detection system test, what should illuminate?",
            "choices": [
              "Only the green OK light",
              "The corresponding ENG FIRE light(s) (and typically Master Warning)",
              "Nothing — the test is silent",
              "Only the amber D light"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "During an extinguisher system test (EXT positions), what should illuminate?",
            "choices": [
              "Only the red FIRE light",
              "Amber D and green OK lights",
              "Only the Master Caution",
              "Nothing"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Typical correct response to a confirmed engine fire indication includes:",
            "choices": [
              "Immediately push the extinguisher without shutting down the engine",
              "Confirm the indication, shut down the affected engine per AFM, then push the ENG FIRE PUSH TO EXT switchlight",
              "Continue to destination and land",
              "Only silence the Master Warning"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Where are the extinguisher bottle pressure gages located?",
            "choices": [
              "On the glareshield",
              "In the wheel wells (readable on the ground)",
              "On the overhead panel",
              "In the nose compartment"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "How many portable fire extinguishers are normally installed, and where?",
            "choices": [
              "One only, in the cabin",
              "Two — one in the cockpit (often under copilot’s seat) and one in the cabin",
              "Four — one in each nacelle and two in the cabin",
              "None — only the engine bottles"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "True or False: The engine fire-extinguisher bottles can be reused after discharge without servicing.",
            "choices": [
              "True",
              "False — one-shot; must be recharged/replaced after discharge"
            ],
            "correct": 1
          }
        ]
      },
      {
        "id": "environmental",
        "title": "Environmental & Pressurization",
        "short": "Bleed air, heat, air conditioning, and cabin altitude control.",
        "hasDrill": false,
        "sections": [
          {
            "id": "intro",
            "title": "Overview",
            "blocks": [
              {
                "t": "p",
                "text": "This study guide covers cabin environmental control (heating, cooling, ventilation) and the pressurization system. Content is rewritten for study purposes. Confirm exact differentials, serial-number differences, and procedures in the AFM."
              }
            ]
          },
          {
            "id": "system-overview",
            "title": "System Overview",
            "blocks": [
              {
                "t": "p",
                "text": "Cabin comfort and pressurization both depend on engine bleed air. Bleed air is conditioned (heated or cooled, mixed with ambient air as required) and delivered into the pressure vessel. Excess air leaves through the outflow valve, which is modulated by the pressurization controller."
              },
              {
                "t": "p",
                "text": "Bleed-air source: Compressor section of each engine."
              },
              {
                "t": "p",
                "text": "Flow control units: One per nacelle; regulate bleed-air volume and mix ambient air."
              },
              {
                "t": "p",
                "text": "Environmental functions: Heating, cooling, ventilation, and pressurization share the same air supply."
              }
            ]
          },
          {
            "id": "bleed-air-control",
            "title": "Bleed-Air Control",
            "blocks": [
              {
                "t": "p",
                "text": "Each engine has a three-position BLEED AIR VALVE switch (OPEN / ENVIR OFF / INSTR & ENVIR OFF):"
              },
              {
                "t": "p",
                "text": "OPEN: Environmental flow-control unit and pneumatic instrument-air valve both open. Cabin receives conditioned bleed air; instruments receive pneumatic pressure."
              },
              {
                "t": "p",
                "text": "ENVIR OFF: Environmental flow shut off; pneumatic/instrument air remains available."
              },
              {
                "t": "p",
                "text": "INSTR & ENVIR OFF: Both environmental and pneumatic bleed air shut off at the firewall."
              },
              {
                "t": "p",
                "text": "Note: For maximum cooling on the ground, select ENVIR OFF (removes hot bleed air from the cabin). One engine can supply sufficient bleed air for the associated systems."
              }
            ]
          },
          {
            "id": "heating",
            "title": "Heating",
            "blocks": [
              {
                "t": "p",
                "text": "Compressed bleed air is hot. It is delivered to the cabin through air-to-air heat exchangers (wing center section) that can be bypassed to control temperature."
              },
              {
                "t": "p",
                "text": "On the ground the ambient-air valves in the flow-control units are closed (only bleed air). In flight ambient air is mixed."
              },
              {
                "t": "p",
                "text": "Cabin heat control valves / bypass valves determine how much air goes through the heat exchangers versus around them."
              },
              {
                "t": "p",
                "text": "Warm air is mixed with recirculated cabin air in the mixing plenum and delivered primarily through the floor registers."
              },
              {
                "t": "p",
                "text": "Pilot / Copilot / Defrost air knobs control cockpit and windshield outlets."
              },
              {
                "t": "p",
                "text": "DUCT OVERTEMP: Yellow caution if duct temperature is excessive — follow AFM procedure."
              },
              {
                "t": "p",
                "text": "Radiant heat: Optional electric panels; use only with manual temperature mode."
              }
            ]
          },
          {
            "id": "air-conditioning",
            "title": "Air Conditioning",
            "blocks": [
              {
                "t": "p",
                "text": "Vapor-cycle system driven by a belt-driven compressor on the right engine."
              },
              {
                "t": "p",
                "text": "Compressor will not engage below approximately 62 % N1 (AIR COND N1 LOW advisory)."
              },
              {
                "t": "p",
                "text": "High/low Freon pressure protection can trip the system; a reset switch is located in the nose-gear wheel well."
              },
              {
                "t": "p",
                "text": "Forward evaporator cools air that is then delivered to ceiling eyeball outlets (cool) and mixed into the floor duct (warmer when bleed air is present)."
              },
              {
                "t": "p",
                "text": "Optional aft evaporator/blower provides additional cooling when selected."
              },
              {
                "t": "p",
                "text": "Air-conditioner compressor operates only when the cabin-heat bypass valves are closed."
              }
            ]
          },
          {
            "id": "temperature-control-modes",
            "title": "Temperature Control Modes",
            "blocks": [
              {
                "t": "p",
                "text": "AUTO: System automatically modulates heating and cooling to the selected cabin temperature."
              },
              {
                "t": "p",
                "text": "MAN HEAT / MAN COOL: Pilot uses the MANUAL TEMP switch (INCR/DECR) to drive the heat-control valves. Allow ≈ 30 s per valve (≈ 1 min total) for full travel."
              },
              {
                "t": "p",
                "text": "OFF: No automatic heating/cooling demand."
              },
              {
                "t": "p",
                "text": "Vent blower (HI / LO / AUTO) controls the forward recirculation blower."
              }
            ]
          },
          {
            "id": "pressurization-system",
            "title": "Pressurization System",
            "blocks": [
              {
                "t": "h",
                "text": "Design Differential"
              },
              {
                "t": "p",
                "text": "B200 normal working differential is typically 6.5 ± 0.1 psi (earlier 200s may be 6.0 or 6.1 psi — confirm AFM). This yields approximate cabin altitudes of:"
              },
              {
                "t": "p",
                "text": "≈ 2,800 ft cabin at 20,000 ft airplane"
              },
              {
                "t": "p",
                "text": "≈ 8,600 ft cabin at 31,000 ft airplane"
              },
              {
                "t": "p",
                "text": "≈ 10,400 ft cabin at 35,000 ft airplane"
              },
              {
                "t": "h",
                "text": "Key Components"
              },
              {
                "t": "p",
                "text": "Outflow valve: Modulated by the pressurization controller to control cabin altitude and rate of change."
              },
              {
                "t": "p",
                "text": "Safety / dump valve: Provides over-pressure relief, dump capability, and keeps the cabin unpressurized on the ground (landing-gear safety switch). Also provides negative-pressure relief."
              },
              {
                "t": "p",
                "text": "Pressurization controller: Sets selected cabin altitude (CABIN ALT) and rate (RATE). Dual-scale dial also shows the maximum airplane altitude (ACFT ALT) that can be flown without exceeding the selected cabin altitude."
              },
              {
                "t": "p",
                "text": "Cabin altimeter & CABIN CLIMB: Show actual cabin altitude and rate of change."
              },
              {
                "t": "p",
                "text": "CABIN PRESS switch: DUMP (opens safety valve) / PRESS (normal) / TEST (holds safety valve closed for ground test)."
              },
              {
                "t": "h",
                "text": "Normal Operation Notes"
              },
              {
                "t": "p",
                "text": "Before takeoff: set CABIN ALT at least 500 ft above field elevation; set ACFT ALT ≈ 1,000 ft above planned cruise; rate as desired (12 o’clock often most comfortable)."
              },
              {
                "t": "p",
                "text": "On takeoff, ambient-air valves open in stages (left first, then right after a short delay) to avoid pressure bumps."
              },
              {
                "t": "p",
                "text": "For landing: set cabin altitude ≈ 500 ft above destination field elevation and adjust rate for a comfortable descent."
              },
              {
                "t": "p",
                "text": "If cabin altitude reaches ≈ 12,500 ft, ALT WARN illuminates (oxygen required). Auto-deploy passenger masks may also activate if installed."
              },
              {
                "t": "p",
                "text": "Maximum differential is limited by the outflow and safety valves (≈ 6.5 psi on B200)."
              }
            ]
          },
          {
            "id": "abnormal-emergency-related",
            "title": "Abnormal / Emergency Related",
            "blocks": [
              {
                "t": "p",
                "text": "BL AIR FAIL: Bleed-air line rupture detected by melting of sensing tubing. Select INSTR & ENVIR OFF on the affected side."
              },
              {
                "t": "p",
                "text": "DUCT OVERTEMP: Follow AFM checklist (typically reduce heat demand / select appropriate bleed-air position)."
              },
              {
                "t": "p",
                "text": "Loss of pressurization / rapid depressurization: Oxygen, emergency descent as required by AFM; DUMP if needed."
              },
              {
                "t": "p",
                "text": "Cabin altitude high: Confirm controller setting, bleed-air valves OPEN, rate control, and outflow/safety valve operation."
              }
            ]
          },
          {
            "id": "study-tips",
            "title": "Study Tips",
            "blocks": [
              {
                "t": "p",
                "text": "Know the three positions of the BLEED AIR VALVE switches and what each supplies."
              },
              {
                "t": "p",
                "text": "Be able to set the pressurization controller for takeoff and for landing."
              },
              {
                "t": "p",
                "text": "Understand that floor air is warmer (bleed + recirculated) while ceiling eyeballs are cooler when the air conditioner is running."
              },
              {
                "t": "p",
                "text": "Link ALT WARN (≈ 12,500 ft cabin) to oxygen procedures."
              },
              {
                "t": "p",
                "text": "Know the difference between AUTO and MANUAL temperature control and when the air-conditioner compressor will run."
              }
            ]
          }
        ],
        "questions": [
          {
            "kind": "mcq",
            "prompt": "What is the primary source of air for cabin heating, cooling, ventilation, and pressurization?",
            "choices": [
              "Cabin recirculation fans only",
              "Ram air only",
              "Engine bleed air (compressor section)",
              "APU bleed air only"
            ],
            "correct": 2
          },
          {
            "kind": "mcq",
            "prompt": "What are the three positions of each BLEED AIR VALVE switch?",
            "choices": [
              "ON / OFF / AUTO",
              "OPEN / ENVIR OFF / INSTR & ENVIR OFF",
              "HIGH / LOW / OFF",
              "LEFT / RIGHT / BOTH"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What does the ENVIR OFF position do?",
            "choices": [
              "Shuts off environmental (cabin) flow; pneumatic/instrument air remains available",
              "Shuts off all bleed air including instruments",
              "Opens ambient air only",
              "Activates the air conditioner"
            ],
            "correct": 0
          },
          {
            "kind": "mcq",
            "prompt": "What does INSTR & ENVIR OFF do?",
            "choices": [
              "Only turns off the instruments",
              "Shuts off both environmental and pneumatic bleed air at the firewall",
              "Selects instrument air from the opposite engine",
              "Resets the duct overtemp"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "For maximum cooling on the ground, what is often recommended?",
            "choices": [
              "Select OPEN on both bleed valves",
              "Select ENVIR OFF (removes hot bleed air from the cabin)",
              "Select INSTR & ENVIR OFF",
              "Turn off the air conditioner"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "How is cabin heat primarily controlled?",
            "choices": [
              "By electric heating elements only",
              "By opening the outflow valve",
              "By modulating how much hot bleed air bypasses the air-to-air heat exchangers",
              "By increasing N1 only"
            ],
            "correct": 2
          },
          {
            "kind": "mcq",
            "prompt": "What does a DUCT OVERTEMP caution typically indicate?",
            "choices": [
              "Cabin altitude is too high",
              "Duct temperature is excessive — follow AFM procedure",
              "The air conditioner has failed",
              "Bleed air is off"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What drives the vapor-cycle air-conditioning compressor?",
            "choices": [
              "Left engine only",
              "Bleed air turbine",
              "An electric motor",
              "A belt-driven compressor on the right engine"
            ],
            "correct": 3
          },
          {
            "kind": "mcq",
            "prompt": "Approximately what N1 is required before the air-conditioner compressor will engage?",
            "choices": [
              "40 %",
              "Approximately 62 % N1 (AIR COND N1 LOW advisory if too low)",
              "100 %",
              "No minimum"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the primary component that controls cabin altitude and rate of change?",
            "choices": [
              "The safety valve alone",
              "The outflow valve, modulated by the pressurization controller",
              "The bleed-air valves",
              "The cabin temperature controller"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What functions does the safety / dump valve provide?",
            "choices": [
              "Only negative-pressure relief",
              "Cabin heating only",
              "Over-pressure relief, dump capability, keeps cabin unpressurized on the ground, and negative-pressure relief",
              "Nothing — it is a backup only"
            ],
            "correct": 2
          },
          {
            "kind": "mcq",
            "prompt": "What does the CABIN PRESS switch TEST position do?",
            "choices": [
              "Holds the safety valve closed (bypasses the landing-gear safety switch) for ground pressurization tests",
              "Dumps cabin pressure",
              "Selects automatic mode",
              "Turns off the outflow valve"
            ],
            "correct": 0
          },
          {
            "kind": "mcq",
            "prompt": "Approximately what cabin altitude triggers the ALT WARN light?",
            "choices": [
              "5,000 ft",
              "25,000 ft",
              "35,000 ft",
              "Approximately 12,500 ft (oxygen required)"
            ],
            "correct": 3
          },
          {
            "kind": "mcq",
            "prompt": "What is a typical maximum cabin differential pressure on the B200?",
            "choices": [
              "3.0 psi",
              "Approximately 6.0–6.6 psi (green arc / limited by outflow and safety valves)",
              "10 psi",
              "15 psi"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Before takeoff, how should the pressurization controller typically be set?",
            "choices": [
              "CABIN ALT at field elevation; ACFT ALT at zero",
              "CABIN ALT at 12,500 ft",
              "Leave at previous landing setting",
              "CABIN ALT at least 500 ft above field elevation; ACFT ALT ≈ 1,000 ft above planned cruise; rate as desired"
            ],
            "correct": 3
          },
          {
            "kind": "mcq",
            "prompt": "For landing, how should cabin altitude typically be set?",
            "choices": [
              "At cruise altitude",
              "Approximately 500 ft above destination field elevation",
              "At 12,500 ft",
              "It does not matter"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What does a BL AIR FAIL indication typically mean?",
            "choices": [
              "A bleed-air line rupture has been detected (sensing tubing melted) — select INSTR & ENVIR OFF on the affected side",
              "The air conditioner has failed",
              "Cabin altitude is high",
              "The outflow valve is stuck"
            ],
            "correct": 0
          },
          {
            "kind": "mcq",
            "prompt": "On the ground, what keeps the cabin from pressurizing?",
            "choices": [
              "The temperature controller",
              "The pilot must manually dump",
              "The landing-gear safety switch holding the safety valve open (or equivalent logic)",
              "Nothing — the cabin pressurizes on the ground"
            ],
            "correct": 2
          }
        ]
      },
      {
        "id": "ice",
        "title": "Ice & Rain Protection",
        "short": "Boots, prop heat, windshields, pitot, and ice vanes.",
        "hasDrill": false,
        "sections": [
          {
            "id": "overview",
            "title": "Overview",
            "blocks": [
              {
                "t": "h",
                "text": "Three energy sources protect the airplane from ice and rain"
              },
              {
                "t": "p",
                "text": "Pneumatic (bleed air): Wing and horizontal-stabilizer leading-edge boots; optional brake deice."
              },
              {
                "t": "p",
                "text": "Electrical: Propeller boots, windshield heat, pitot heat, stall-warning vane heat, fuel-vent heat."
              },
              {
                "t": "p",
                "text": "Engine exhaust: Engine inlet-lip heat (automatic)."
              },
              {
                "t": "p",
                "text": "In addition, inertial ice vanes protect the compressor inlet screen."
              }
            ]
          },
          {
            "id": "wing-horizontal-stabilizer-deice-boots-pneumatic",
            "title": "Wing & Horizontal Stabilizer Deice Boots (Pneumatic)",
            "blocks": [
              {
                "t": "p",
                "text": "Inflatable boots on the wing leading edges (inboard and outboard) and the horizontal stabilizer break ice when inflated by regulated bleed air and are held down by vacuum when not in use. The vertical stabilizer is not deiced."
              },
              {
                "t": "h",
                "text": "Operation"
              },
              {
                "t": "p",
                "text": "SINGLE cycle: Select the spring-loaded switch to SINGLE and release. Wings inflate ≈ 6 s, then horizontal stabilizer ≈ 4 s; then all return to vacuum hold-down. Select again for another cycle."
              },
              {
                "t": "p",
                "text": "MANUAL: Hold switch down to inflate all boots simultaneously; release to deflate and hold by vacuum. Do not leave inflated longer than necessary."
              },
              {
                "t": "p",
                "text": "Operate when approximately ½ to 1 inch of ice has accumulated. Very thin ice may crack and re-adhere or move aft."
              },
              {
                "t": "p",
                "text": "Critical cautions: Never take off or land with boots inflated. Do not operate boots when OAT is below −40 °C (−40 °F)."
              },
              {
                "t": "p",
                "text": "One engine can supply the system (check valves prevent reverse flow)."
              }
            ]
          },
          {
            "id": "brake-deice-optional-pneumatic",
            "title": "Brake Deice (Optional, Pneumatic)",
            "blocks": [
              {
                "t": "p",
                "text": "Engine P3 bleed air is directed onto the brake assemblies through solenoid valves and manifolds."
              },
              {
                "t": "p",
                "text": "Controlled by BRAKE DEICE switch; green BRAKE DEICE ON light illuminates when solenoids are commanded open."
              },
              {
                "t": "p",
                "text": "Can be used on the ground or in flight with gear extended (observe AFM time/temperature limits)."
              },
              {
                "t": "p",
                "text": "A 10-minute timer runs after gear retraction to allow brakes to dry."
              },
              {
                "t": "p",
                "text": "Largest single user of pneumatic air; simultaneous use with surface boots on the ground can cause momentary BL AIR FAIL light flashes (normal if brief)."
              },
              {
                "t": "p",
                "text": "Minimum ≈ 85 % power may be needed to maintain proper boot inflation if brake deice is on."
              }
            ]
          },
          {
            "id": "propeller-deice-electrical",
            "title": "Propeller Deice (Electrical)",
            "blocks": [
              {
                "t": "p",
                "text": "Electrically heated boots on each blade. Timer sequences heating automatically."
              },
              {
                "t": "p",
                "text": "AUTO: Select AUTO; system cycles continuously (typical later aircraft: 90 s right prop, then 90 s left prop; earlier aircraft may cycle outer/inner elements)."
              },
              {
                "t": "p",
                "text": "MANUAL: Bypass timer; apply heat as required (procedure depends on boot configuration)."
              },
              {
                "t": "p",
                "text": "Monitor PROP AMPS (normal green arc approximately 14–18 A for 3-blade or 18–24 A for 4-blade — confirm AFM)."
              },
              {
                "t": "p",
                "text": "Critical: Do not operate propeller deice with propellers static."
              },
              {
                "t": "p",
                "text": "Treat the system operationally as anti-ice (activate before significant ice accumulates)."
              }
            ]
          },
          {
            "id": "windshield-heat",
            "title": "Windshield Heat",
            "blocks": [
              {
                "t": "p",
                "text": "Resistance heat embedded in the glass; thermal sensors and controllers regulate temperature (normally ≈ 95–105 °F)."
              },
              {
                "t": "p",
                "text": "Each windshield has its own switch: OFF / NORMAL / HI. HI heats a smaller, more critical viewing area at higher intensity."
              },
              {
                "t": "p",
                "text": "May be used anytime; can cause compass errors and visual distortion."
              }
            ]
          },
          {
            "id": "pitot-stall-warning-fuel-vent-heat",
            "title": "Pitot, Stall Warning & Fuel Vent Heat",
            "blocks": [
              {
                "t": "p",
                "text": "Pitot heat: Individual circuit-breaker switches for left and right. Leave on in flight when icing is possible. Avoid prolonged ground use."
              },
              {
                "t": "p",
                "text": "Stall warning vane: Heats vane and mounting plate. Ground current is reduced by the squat switch; full heat in flight."
              },
              {
                "t": "p",
                "text": "Fuel vent heat: Individual switches; use whenever icing is anticipated or encountered."
              },
              {
                "t": "p",
                "text": "Caution: Prolonged ground use of pitot and stall-warning heat can damage the elements."
              }
            ]
          },
          {
            "id": "engine-inlet-ice-protection",
            "title": "Engine Inlet Ice Protection",
            "blocks": [
              {
                "t": "h",
                "text": "Inlet Lip Heat"
              },
              {
                "t": "p",
                "text": "Engine exhaust gases heat the inlet lips automatically. No pilot action required."
              },
              {
                "t": "h",
                "text": "Inertial Ice Vanes"
              },
              {
                "t": "p",
                "text": "When extended, the vanes and associated bypass doors deflect ice particles and water droplets so they exit overboard instead of entering the compressor screen."
              },
              {
                "t": "p",
                "text": "Extend before entering icing conditions (typical guidance: +5 °C and below in visible moisture — confirm AFM)."
              },
              {
                "t": "p",
                "text": "Green L / R ICE VANE EXT lights confirm extension."
              },
              {
                "t": "p",
                "text": "Retract for normal non-icing flight to restore full inlet efficiency."
              }
            ]
          },
          {
            "id": "key-operating-notes-limitations",
            "title": "Key Operating Notes & Limitations",
            "blocks": [
              {
                "t": "p",
                "text": "Activate anti-ice systems before entering icing conditions when possible."
              },
              {
                "t": "p",
                "text": "Surface boots: wait for ½–1 in ice; do not cycle continuously at very thin ice."
              },
              {
                "t": "p",
                "text": "Never take off or land with boots inflated."
              },
              {
                "t": "p",
                "text": "Prop deice: never with props static; monitor ammeter."
              },
              {
                "t": "p",
                "text": "Pitot / stall heat: minimal ground use."
              },
              {
                "t": "p",
                "text": "Ice vanes: extend in icing; note performance effects (confirm AFM)."
              },
              {
                "t": "p",
                "text": "Windshield wipers available for rain (do not operate on dry glass)."
              },
              {
                "t": "p",
                "text": "Wing ice inspection lights aid night ice checks."
              }
            ]
          },
          {
            "id": "study-tips",
            "title": "Study Tips",
            "blocks": [
              {
                "t": "p",
                "text": "Separate anti-ice (prevent) from deice (remove after accumulation)."
              },
              {
                "t": "p",
                "text": "Know which systems are pneumatic vs. electrical vs. exhaust."
              },
              {
                "t": "p",
                "text": "Memorize the critical cautions: boots inflated for takeoff/landing, prop heat with static props, OAT −40 °C boot limit."
              },
              {
                "t": "p",
                "text": "Link ice-vane extension to engine performance and AFM guidance."
              },
              {
                "t": "p",
                "text": "Practice the SINGLE vs. MANUAL boot cycle procedure."
              }
            ]
          }
        ],
        "questions": [
          {
            "kind": "mcq",
            "prompt": "Which surfaces are protected by pneumatic (bleed-air) systems?",
            "choices": [
              "Propellers and windshields",
              "Wing and horizontal-stabilizer leading-edge boots; optional brake deice",
              "Pitot tubes and fuel vents",
              "Engine inlet lips only"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Which surfaces are protected primarily by electrical heat?",
            "choices": [
              "Wing boots and brake assemblies",
              "Propellers, windshields, pitot tubes, stall-warning vane, and fuel vents",
              "Only the horizontal stabilizer",
              "Engine inlet lips"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "How are the engine inlet lips protected from ice?",
            "choices": [
              "Electrical heating elements controlled by the pilot",
              "Automatically by engine exhaust gases (no pilot action required)",
              "Pneumatic boots",
              "They are not protected"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "When should the surface deice boots normally be cycled?",
            "choices": [
              "As soon as any ice is visible",
              "When approximately ½ to 1 inch of ice has accumulated",
              "Only on the ground",
              "Continuously whenever OAT is below 0 °C"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What does the SINGLE cycle position of the DEICE CYCLE switch do?",
            "choices": [
              "Inflates all boots continuously until released",
              "Inflates the wing boots (~6 s), then the horizontal-stabilizer boots (~4 s), then returns all to vacuum hold-down",
              "Deflates the boots only",
              "Activates propeller deice"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is a critical limitation regarding the surface deice boots?",
            "choices": [
              "They may only be used above 10,000 feet",
              "Never take off or land with the boots inflated; do not operate when OAT is below −40 °C (−40 °F)",
              "They must be inflated for every takeoff",
              "They require both engines operating"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "If one engine is inoperative, can the surface deice boots still be used?",
            "choices": [
              "No",
              "Yes — check valves prevent reverse flow; one engine can supply the system",
              "Only the wing boots on the operating side",
              "Only in MANUAL mode"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is a critical restriction on propeller deice?",
            "choices": [
              "It may only be used above FL200",
              "Do not operate propeller deice when the propellers are static",
              "It requires the ice vanes to be extended",
              "It can only be used in MANUAL mode"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "How should propeller deice normally be managed?",
            "choices": [
              "Only after heavy ice has formed",
              "Operationally as an anti-ice system (activate before significant ice accumulates)",
              "Only on the ground",
              "Only with the condition levers in CUT-OFF"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What does the PROP AMPS ammeter indicate during AUTO propeller deice?",
            "choices": [
              "Oil pressure",
              "Current flow to the propeller heating elements (monitor for normal green-arc values)",
              "Pneumatic pressure",
              "Cabin differential"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What are the two heat levels available for the windshields?",
            "choices": [
              "LOW and HIGH only",
              "OFF, NORMAL (broader area), and HI (higher intensity on a smaller critical viewing area)",
              "AUTO and MANUAL only",
              "Ground and Flight"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the recommended practice for pitot heat on the ground?",
            "choices": [
              "Leave it on continuously",
              "Avoid prolonged use except for testing or short intervals to clear ice/snow",
              "It is automatically disabled on the ground",
              "Use only with ice vanes extended"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "How is stall-warning vane heat affected on the ground?",
            "choices": [
              "It is disabled completely",
              "Current is reduced by the landing-gear squat switch; full heat is available in flight",
              "It runs at maximum power continuously",
              "It requires the surface boots to be cycled first"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What does the green BRAKE DEICE ON light indicate?",
            "choices": [
              "The brakes are actually hot",
              "The solenoids have been commanded open (does not guarantee the valves have opened)",
              "Pneumatic pressure is above 20 psi",
              "The surface boots are inflating"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What happens after landing gear retraction with brake deice selected?",
            "choices": [
              "Brake deice continues indefinitely",
              "A 10-minute timer runs to allow the brakes to dry",
              "The system immediately shuts off",
              "Both ice vanes extend automatically"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the primary purpose of the inertial ice vanes?",
            "choices": [
              "To heat the inlet lips",
              "To deflect ice particles and water droplets so they exit overboard instead of entering the compressor screen",
              "To increase N1",
              "To inflate the surface boots"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "When should the ice vanes normally be extended?",
            "choices": [
              "Only after severe icing is encountered",
              "Before entering icing conditions (typical guidance: +5 °C and below in visible moisture — confirm AFM)",
              "Only on the ground",
              "Whenever the surface boots are used"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "How do you confirm the ice vanes are extended?",
            "choices": [
              "By increased ITT only",
              "Green L and R ICE VANE EXT annunciators",
              "PROP AMPS reading",
              "Cabin altitude change"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the difference between anti-ice and deice systems in this context?",
            "choices": [
              "There is no difference",
              "Anti-ice systems prevent ice from forming; deice systems remove ice after it has accumulated",
              "Anti-ice is pneumatic only; deice is electrical only",
              "Anti-ice is used only on the ground"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Why should very thin ice generally not be cycled with the surface boots?",
            "choices": [
              "It wastes pneumatic pressure",
              "Thin ice may crack, re-adhere, or move aft into unprotected areas",
              "It will damage the timer",
              "It is prohibited by the AFM above 10,000 feet"
            ],
            "correct": 1
          }
        ]
      },
      {
        "id": "gear",
        "title": "Landing Gear & Brakes",
        "short": "Electric/hydraulic gear, warnings, emergency extension, brakes.",
        "hasDrill": false,
        "sections": [
          {
            "id": "intro",
            "title": "Overview",
            "blocks": [
              {
                "t": "p",
                "text": "Covers electric and hydraulic landing gear systems, warning logic, emergency extension, brakes, and nosewheel steering. Confirm serial-number differences in the AFM."
              }
            ]
          },
          {
            "id": "overview",
            "title": "Overview",
            "blocks": [
              {
                "t": "p",
                "text": "The King Air 200/B200 has a retractable tricycle landing gear. Actuation is either:"
              },
              {
                "t": "p",
                "text": "Electric (earlier aircraft): 28 VDC motor drives torque tubes and a chain to mechanical jackscrew actuators."
              },
              {
                "t": "p",
                "text": "Hydraulic (later aircraft — typically BB-1193, BL-73 and subsequent): Electrically driven hydraulic power pack with three actuators (one per gear)."
              },
              {
                "t": "p",
                "text": "Control is via the LDG GEAR CONT switch handle on the pilot’s right subpanel. Position is shown by three green lights and red lights in the handle. A warning horn activates under certain flap/power conditions when the gear is not down and locked."
              }
            ]
          },
          {
            "id": "controls-indications",
            "title": "Controls & Indications",
            "blocks": [
              {
                "t": "p",
                "text": "LDG GEAR CONT handle: Detented UP / DN. Must be pulled out of detent to move."
              },
              {
                "t": "p",
                "text": "Down-lock latch (“J” hook): Prevents moving the handle to UP on the ground. Released automatically when airborne (right main gear safety switch) or by pressing the DN LOCK REL button."
              },
              {
                "t": "p",
                "text": "Green lights: One for each gear — illuminate when that gear is down and locked."
              },
              {
                "t": "p",
                "text": "Red handle lights: Illuminate while gear is in transit or not fully up/down as appropriate."
              },
              {
                "t": "p",
                "text": "HYD FLUID LOW (hydraulic gear): Amber annunciator if reservoir fluid is low."
              }
            ]
          },
          {
            "id": "electric-landing-gear-earlier-aircraft",
            "title": "Electric Landing Gear (Earlier Aircraft)",
            "blocks": [
              {
                "t": "p",
                "text": "A 28 VDC motor (right generator bus) drives torque tubes and a duplex chain to jackscrew actuators at each gear. Friction in the jackscrews holds the gear up. Downlocks are mechanical (over-center drag brace on nose; notched hook/plate on mains)."
              },
              {
                "t": "p",
                "text": "Emergency Extension (Electric)"
              },
              {
                "t": "p",
                "text": "Airspeed — establish ≈ 130 KIAS."
              },
              {
                "t": "p",
                "text": "LDG GEAR CONT handle — DN."
              },
              {
                "t": "p",
                "text": "LANDING GEAR RELAY circuit breaker — PULL."
              },
              {
                "t": "p",
                "text": "Emergency engage handle — pull up and turn clockwise to engage mechanical drive."
              },
              {
                "t": "p",
                "text": "Pump extension handle until three green lights illuminate (or definite resistance is felt)."
              },
              {
                "t": "p",
                "text": "Critical: After a real emergency extension, do not stow the handle, move controls, or reset breakers until the airplane is on jacks — the gear might retract on the ground. Gear cannot be retracted manually."
              }
            ]
          },
          {
            "id": "hydraulic-landing-gear-later-aircraft",
            "title": "Hydraulic Landing Gear (Later Aircraft)",
            "blocks": [
              {
                "t": "p",
                "text": "An electrically driven hydraulic power pack (pump + reservoir pressurized by bleed air) supplies three actuators. Hydraulic pressure holds the gear up; internal mechanical locks hold it down. A HYD FLUID LOW light monitors reservoir level."
              },
              {
                "t": "p",
                "text": "Emergency / Alternate Extension (Hydraulic)"
              },
              {
                "t": "p",
                "text": "Airspeed — establish appropriate speed (confirm AFM)."
              },
              {
                "t": "p",
                "text": "LANDING GEAR RELAY circuit breaker — PULL."
              },
              {
                "t": "p",
                "text": "LDG GEAR CONT handle — DN."
              },
              {
                "t": "p",
                "text": "Use the hand pump (floor-mounted) until three green lights are on and resistance is felt."
              },
              {
                "t": "p",
                "text": "Note: The landing gear cannot be retracted with the alternate system. After a practice extension, the gear can be retracted hydraulically by resetting the breaker and selecting UP."
              },
              {
                "t": "p",
                "text": "Warning: After a real emergency extension, leave controls and breakers alone until the airplane is on jacks."
              }
            ]
          },
          {
            "id": "landing-gear-warning-system",
            "title": "Landing Gear Warning System",
            "blocks": [
              {
                "t": "p",
                "text": "Red handle lights and a warning horn activate when the gear is not down and locked under certain conditions:"
              },
              {
                "t": "p",
                "text": "Flaps UP or APPROACH + power levers retarded: Horn (can usually be silenced) + red handle lights (cannot be cancelled). System rearms when power is advanced."
              },
              {
                "t": "p",
                "text": "Flaps beyond APPROACH: Horn and red lights activate regardless of power setting and typically cannot be cancelled until gear is down."
              },
              {
                "t": "p",
                "text": "Exact logic varies slightly by serial number — confirm AFM."
              },
              {
                "t": "p",
                "text": "On the ground, selecting UP with the down-lock overridden also triggers the horn and red lights."
              }
            ]
          },
          {
            "id": "brake-system",
            "title": "Brake System",
            "blocks": [
              {
                "t": "p",
                "text": "Independent hydraulic brakes on the main wheels, actuated by toe pressure on either pilot’s or copilot’s rudder pedals (master cylinders). Differential braking is available."
              },
              {
                "t": "p",
                "text": "Parking brake: Apply brakes, then pull the PARKING BRAKE handle. Release by applying toe pressure and pushing the handle in."
              },
              {
                "t": "p",
                "text": "Optional brake deice: Uses engine bleed air directed onto the brake assemblies. Controlled by BRAKE DEICE switch; green BRAKE DEICE ON light. Observe AFM time/temperature limits."
              },
              {
                "t": "p",
                "text": "Cold-weather note: Check for frozen brakes/tires before taxi; avoid taxiing in deep snow/slush that can pack into the brakes."
              }
            ]
          },
          {
            "id": "nosewheel-steering",
            "title": "Nosewheel Steering",
            "blocks": [
              {
                "t": "p",
                "text": "Mechanical linkage from the rudder pedals to the nose gear. Steering angle is limited (approximately 14° left / 12° right) but can be increased with differential braking and/or differential power. A shimmy damper on the nose gear reduces nosewheel shimmy."
              }
            ]
          },
          {
            "id": "main-gear-safety-squat-switches",
            "title": "Main Gear Safety (Squat) Switches",
            "blocks": [
              {
                "t": "p",
                "text": "The main gear safety switches sense weight-on-wheels and control multiple systems, including:"
              },
              {
                "t": "h",
                "text": "Landing gear handle down-lock solenoid"
              },
              {
                "t": "h",
                "text": "Pressurization ambient-air valves / door seal"
              },
              {
                "t": "p",
                "text": "Stall-warning heat current (reduced on ground)"
              },
              {
                "t": "h",
                "text": "Flight hourmeter"
              },
              {
                "t": "p",
                "text": "Other system interlocks (confirm AFM)"
              }
            ]
          },
          {
            "id": "key-limitations",
            "title": "Key Limitations",
            "blocks": [
              {
                "t": "p",
                "text": "VLO extend: Do not extend gear above 182 KCAS / 181 KIAS."
              },
              {
                "t": "p",
                "text": "VLO retract: Do not retract gear above 164 KCAS / 163 KIAS."
              },
              {
                "t": "p",
                "text": "VLE: Do not exceed 182 KCAS / 181 KIAS with gear extended."
              },
              {
                "t": "p",
                "text": "Cycle limit (typical): Landing gear cycles limited (e.g., one cycle every five minutes for a period — confirm AFM)."
              },
              {
                "t": "p",
                "text": "Never select gear UP on the ground without overriding the down-lock (and only for maintenance)."
              }
            ]
          },
          {
            "id": "study-tips",
            "title": "Study Tips",
            "blocks": [
              {
                "t": "p",
                "text": "Know whether your airplane has electric or hydraulic gear — emergency extension procedures differ."
              },
              {
                "t": "p",
                "text": "Memorize the “after emergency extension” warning: leave everything alone until on jacks."
              },
              {
                "t": "p",
                "text": "Link warning-horn logic to flap position and power lever position."
              },
              {
                "t": "p",
                "text": "Know VLO extend vs. retract vs. VLE."
              },
              {
                "t": "p",
                "text": "Understand what the squat switches disable or enable on the ground."
              }
            ]
          }
        ],
        "questions": [
          {
            "kind": "mcq",
            "prompt": "What prevents the landing gear handle from being moved to UP on the ground?",
            "choices": [
              "A mechanical spring only",
              "A solenoid-operated down-lock latch (“J” hook) that engages on the ground",
              "The parking brake",
              "Nothing — the handle is free"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "How can the down-lock latch be overridden?",
            "choices": [
              "By pulling the circuit breaker",
              "By pressing the DN LOCK REL button (or when the airplane becomes airborne)",
              "By selecting flaps to full",
              "It cannot be overridden"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What do the three green lights adjacent to the gear handle indicate?",
            "choices": [
              "Gear is in transit",
              "Each gear is down and locked",
              "Hydraulic pressure is normal",
              "Nosewheel steering is engaged"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "With flaps UP or APPROACH and power levers retarded, what typically happens if the gear is not down?",
            "choices": [
              "Only the green lights flash",
              "Warning horn sounds (can usually be silenced) and red handle lights illuminate (cannot be cancelled)",
              "Nothing — no warning",
              "Only the autopilot disconnects"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "With flaps beyond APPROACH and gear not down, what typically happens?",
            "choices": [
              "Horn and red lights activate regardless of power setting and usually cannot be cancelled until gear is down",
              "Only the horn sounds and can be silenced",
              "No warning occurs",
              "Only the stall warning activates"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "After a real emergency landing gear extension, what is the critical rule?",
            "choices": [
              "Immediately retract the gear electrically",
              "Do not stow the handle, move controls, or reset breakers until the airplane is on jacks",
              "Reset the circuit breakers and continue the flight",
              "Select gear UP to test the system"
            ],
            "correct": 0
          },
          {
            "kind": "mcq",
            "prompt": "Can the landing gear be retracted with the alternate/emergency extension system?",
            "choices": [
              "Yes, always",
              "No — the alternate system is for extension only",
              "Only on hydraulic-gear airplanes",
              "Only if both engines are running"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "Typical first steps for electric-gear emergency extension include:",
            "choices": [
              "Select gear UP and increase speed",
              "Establish ≈ 130 KIAS, select DN, pull LANDING GEAR RELAY breaker, engage emergency handle, then pump",
              "Feather both propellers",
              "Dump cabin pressure first"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "How are the main-wheel brakes actuated?",
            "choices": [
              "By a single shared hydraulic pump",
              "By toe pressure on the pilot’s or copilot’s rudder pedals (master cylinders)",
              "Electrically only",
              "By the parking brake handle alone"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "How is the parking brake set?",
            "choices": [
              "Pull the handle first, then apply brakes",
              "Apply brakes, then pull the PARKING BRAKE handle",
              "It sets automatically on shutdown",
              "By selecting gear UP"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "How is nosewheel steering primarily controlled?",
            "choices": [
              "Electrically via a tiller",
              "Mechanically via the rudder pedals (limited angle; can be increased with differential braking/power)",
              "Hydraulically only when the gear is down",
              "It is free-castering with no pilot control"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the typical maximum landing gear operating speed for extension (VLO extend)?",
            "choices": [
              "144 KCAS",
              "164 KCAS / 163 KIAS",
              "182 KCAS / 181 KIAS",
              "200 KCAS"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What is the typical maximum speed to retract the landing gear (VLO retract)?",
            "choices": [
              "182 KCAS / 181 KIAS",
              "164 KCAS / 163 KIAS",
              "200 KCAS",
              "91 KCAS"
            ],
            "correct": 2
          },
          {
            "kind": "mcq",
            "prompt": "What is VLE?",
            "choices": [
              "Maximum flap extension speed",
              "Maximum speed with landing gear extended (typically 182 KCAS / 181 KIAS)",
              "Minimum control speed",
              "Maneuvering speed"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What do the main gear safety (squat) switches typically control or affect?",
            "choices": [
              "Only the landing lights",
              "Gear handle down-lock, pressurization ambient valves/door seal, stall-warning heat, flight hourmeter, and other interlocks",
              "Only the fuel pumps",
              "Nothing — they are for indication only"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "On hydraulic-gear airplanes, what does the amber HYD FLUID LOW light indicate?",
            "choices": [
              "Low engine oil",
              "Low hydraulic fluid in the landing gear system reservoir",
              "Low pneumatic pressure",
              "Brake fluid low"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What holds the gear in the retracted position on hydraulic-gear airplanes?",
            "choices": [
              "Mechanical uplocks only",
              "Hydraulic pressure",
              "Electric brakes",
              "Gravity"
            ],
            "correct": 1
          },
          {
            "kind": "mcq",
            "prompt": "What provides the energy for brake application on a typical King Air 200/B200?",
            "choices": [
              "Electric motors only",
              "Hydraulic pressure",
              "Pneumatic bottles only",
              "Manual cables"
            ],
            "correct": 1
          }
        ]
      }
    ]
  }
]
};