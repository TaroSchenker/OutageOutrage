"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_TIME_TO_COMPLETE = exports.MIN_TIME_TO_COMPLETE = exports.MAX_COMPLEXITY = exports.MIN_COMPLEXITY = exports.MAX_MORALE = exports.MIN_MORALE = exports.MAX_SKILL_LEVEL = exports.MIN_SKILL_LEVEL = exports.TIME_PERIOD = exports.STARTING_BUDGET = exports.TaskStatus = exports.BusinessImpact = exports.Expertise = exports.EventType = exports.TaskType = exports.Role = void 0;
//Enums
var Role;
(function (Role) {
    Role["FRONTEND_DEV"] = "Frontend Developer";
    Role["BACKEND_DEV"] = "Backend Developer";
    Role["QA"] = "Quality Assurance";
    Role["PROJECT_MANAGER"] = "Project Manager";
    Role["UX_UI_DESIGNER"] = "UX/UI Designer";
    Role["SECURITY_SPECIALIST"] = "Security Specialist";
    Role["DEVOPS_ENGINEER"] = "DevOps Engineer";
    Role["DATA_SCIENTIST"] = "Data Scientist";
    Role["PRODUCT_OWNER"] = "Product Owner";
})(Role = exports.Role || (exports.Role = {}));
var TaskType;
(function (TaskType) {
    TaskType["BUG_FIX"] = "Bug Fix";
    TaskType["NEW_FEATURE"] = "New Feature";
    TaskType["SECURITY_PATCH"] = "Security Patch";
    TaskType["PERFORMANCE_IMPROVEMENT"] = "Performance Improvement";
    TaskType["UI_IMPROVEMENT"] = "UI Improvement";
    TaskType["DEVOPS_SETUP"] = "DevOps Setup";
    TaskType["DATA_ANALYSIS"] = "Data Analysis";
    TaskType["PRODUCT_BACKLOG_PRIORITIZATION"] = "Product Backlog Prioritization";
    TaskType["FEATURE_VALIDATION"] = "Feature Validation";
    TaskType["USER_RESEARCH"] = "User Research";
    TaskType["CUSTOMER_JOURNEY_MAPPING"] = "Customer Journey Mapping";
    TaskType["INFRASTRUCTURE_MONITORING"] = "Infrastructure Monitoring";
    TaskType["SECURITY_AUDIT"] = "Security Audit";
    TaskType["A_B_TESTING"] = "A/B Testing";
    TaskType["CODE_REVIEW"] = "Code Review";
    TaskType["STRESS_TESTING"] = "Stress Testing";
})(TaskType = exports.TaskType || (exports.TaskType = {}));
var EventType;
(function (EventType) {
    EventType["SERVER_CRASH"] = "Server Crash";
    EventType["SECURITY_BREACH"] = "Security Breach";
    EventType["JOB_OFFER"] = "Job Offer";
    EventType["BUDGET_CUT"] = "Budget Cut";
    EventType["PRODUCT_LAUNCH"] = "Product Launch";
    EventType["MAJOR_OUTAGE"] = "Major Outage";
    EventType["STAFF_RETENTION_ISSUE"] = "Staff Retention Issue";
    EventType["LEGAL_ISSUE"] = "Legal Issue";
    EventType["DATA_BREACH"] = "Data Breach";
})(EventType = exports.EventType || (exports.EventType = {}));
var Expertise;
(function (Expertise) {
    Expertise["JAVASCRIPT"] = "JavaScript";
    Expertise["PYTHON"] = "Python";
    Expertise["JAVA"] = "Java";
    Expertise["CYBER_SECURITY"] = "Cyber Security";
    Expertise["SOFTWARE_TESTING"] = "Software Testing";
    Expertise["PROJECT_MANAGEMENT"] = "Project Management";
    Expertise["UX_DESIGN"] = "UX Design";
    Expertise["C_SHARP"] = "C#";
    Expertise["SQL"] = "SQL";
    Expertise["MACHINE_LEARNING"] = "Machine Learning";
})(Expertise = exports.Expertise || (exports.Expertise = {}));
var BusinessImpact;
(function (BusinessImpact) {
    BusinessImpact["LOW"] = "Low";
    BusinessImpact["MEDIUM"] = "Medium";
    BusinessImpact["HIGH"] = "High";
    BusinessImpact["CRITICAL"] = "Critical";
})(BusinessImpact = exports.BusinessImpact || (exports.BusinessImpact = {}));
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["NOT_STARTED"] = "Not Started";
    TaskStatus["IN_PROGRESS"] = "In Progress";
    TaskStatus["COMPLETED"] = "Completed";
    TaskStatus["BLOCKED"] = "Blocked";
})(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));
exports.STARTING_BUDGET = 1000000;
exports.TIME_PERIOD = 180; // 6 months
exports.MIN_SKILL_LEVEL = 0;
exports.MAX_SKILL_LEVEL = 100;
exports.MIN_MORALE = 0;
exports.MAX_MORALE = 100;
exports.MIN_COMPLEXITY = 0;
exports.MAX_COMPLEXITY = 100;
exports.MIN_TIME_TO_COMPLETE = 0;
exports.MAX_TIME_TO_COMPLETE = 100;
