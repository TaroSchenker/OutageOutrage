"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.events = void 0;
const types_1 = require("../../types/types");
exports.events = [
    {
        type: types_1.EventType.SERVER_CRASH,
        severity: 8,
        effectOnMorale: -20,
        effectOnBudget: -10000,
        effectOnTasks: null,
        duration: 3,
    },
    {
        type: types_1.EventType.SECURITY_BREACH,
        severity: 9,
        effectOnMorale: -30,
        effectOnBudget: -15000,
        effectOnTasks: null,
        duration: 5,
    },
    {
        type: types_1.EventType.JOB_OFFER,
        severity: 6,
        effectOnMorale: 10,
        effectOnBudget: 0,
        effectOnTasks: null,
        duration: 0,
    },
    {
        type: types_1.EventType.BUDGET_CUT,
        severity: 7,
        effectOnMorale: -10,
        effectOnBudget: -20000,
        effectOnTasks: null,
        duration: 0,
    },
    {
        type: types_1.EventType.SERVER_CRASH,
        severity: 8,
        effectOnMorale: -20,
        effectOnBudget: -10000,
        effectOnTasks: null,
        duration: 2,
    },
];
