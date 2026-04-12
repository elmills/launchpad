/**
 * Financial Launchpad — Configuration
 * ─────────────────────────────────────────────────────────────────────────────
 * Edit this file to change slider defaults, ranges, and steps.
 * All values flow automatically into the app — no other files need editing.
 *
 * Structure per key:
 *   min   — slider minimum value
 *   max   — slider maximum value
 *   step  — increment per tick
 *   value — default starting value
 * ─────────────────────────────────────────────────────────────────────────────
 */

const CONFIG = {

  // ── GLOBAL HEADER: Salary & contribution controls ─────────────────────────
  'g-sal': { min: 40000,  max: 200000, step: 1000,  value: 100000 }, // Annual salary
  'g-k4':  { min: 0,      max: 23500,  step: 500,   value: 23500  }, // 401(k) annual contribution
  'g-hsa': { min: 0,      max: 4300,   step: 100,   value: 4300   }, // HSA annual contribution
  'g-ri':  { min: 0,      max: 7000,   step: 500,   value: 0      }, // Roth IRA annual contribution

  // ── BUDGET TAB: Monthly spending plan ─────────────────────────────────────
  'b-rent':     { min: 0,   max: 3000, step: 50,  value: 900  }, // Rent / mortgage
  'b-food':     { min: 100, max: 1200, step: 25,  value: 400  }, // Groceries + dining out
  'b-util':     { min: 0,   max: 600,  step: 10,  value: 150  }, // Utilities
  'b-phone':    { min: 0,   max: 200,  step: 5,   value: 60   }, // Phone
  'b-subs':     { min: 0,   max: 200,  step: 5,   value: 35   }, // Subscriptions
  'b-pers':     { min: 0,   max: 500,  step: 25,  value: 100  }, // Personal care + clothing
  'b-give':     { min: 0,   max: 2000, step: 25,  value: 200  }, // Giving / charity / church
  'b-misc':     { min: 0,   max: 500,  step: 25,  value: 100  }, // Misc / buffer

  // ── BUDGET TAB: Car costs ─────────────────────────────────────────────────
  'b-carpay':   { min: 0,   max: 1000, step: 25,  value: 300  }, // Payment to yourself (save/mo)
  'b-fuel':     { min: 0,   max: 600,  step: 10,  value: 150  }, // Fuel
  'b-carins':   { min: 0,   max: 500,  step: 10,  value: 120  }, // Auto insurance
  'b-carmaint': { min: 0,   max: 300,  step: 10,  value: 75   }, // Maintenance / repairs

  // ── BUDGET TAB: Sinking funds ─────────────────────────────────────────────
  'b-emerg':    { min: 0,   max: 1000, step: 25,  value: 200  }, // Emergency fund build
  'b-travel':   { min: 0,   max: 1000, step: 25,  value: 150  }, // Travel / vacation
  'b-xmas':     { min: 0,   max: 500,  step: 25,  value: 100  }, // Christmas / gifts
  'b-college':  { min: 0,   max: 1000, step: 25,  value: 0    }, // Future college / school

  // ── COAST FIRE TAB ────────────────────────────────────────────────────────
  'c-cage':  { min: 16,    max: 40,     step: 1,    value: 19    }, // Current age
  'c-ret':   { min: 40,    max: 70,     step: 1,    value: 50    }, // Target retirement age
  'c-spend': { min: 20000, max: 200000, step: 2500, value: 60000 }, // Desired annual spending
  'c-inf':   { min: 1,     max: 5,      step: 0.25, value: 2.5   }, // Inflation assumption (%)
  'c-rate':  { min: 4,     max: 12,     step: 0.5,  value: 7     }, // Expected annual return (%)

  // ── RETIRE AT 50 TAB ──────────────────────────────────────────────────────
  'r-cage':  { min: 16,    max: 40,     step: 1,    value: 19    }, // Current age
  'r-spend': { min: 20000, max: 200000, step: 2500, value: 60000 }, // Desired spending (today's $)
  'r-inf':   { min: 1,     max: 5,      step: 0.25, value: 2.5   }, // Inflation assumption (%)
  'r-swr':   { min: 2,     max: 6,      step: 0.25, value: 3.5   }, // Safe withdrawal rate (%)
  'r-rate':  { min: 4,     max: 12,     step: 0.5,  value: 7     }, // Expected annual return (%)

};
