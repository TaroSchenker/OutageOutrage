"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTask = exports.updateMorale = exports.assignTask = exports.deleteStaff = exports.updateStaff = exports.createStaff = exports.getStaffById = exports.getAllStaff = void 0;
const staffService_1 = require("../services/staffService");
const staffService = new staffService_1.StaffService();
const getAllStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allStaff = yield staffService.getAllStaff();
    return res.json(allStaff);
});
exports.getAllStaff = getAllStaff;
const getStaffById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const staff = yield staffService.getStaffById(req.params.staffId);
    if (!staff) {
        return res.status(404).json({ message: 'Staff member not found' });
    }
    return res.json(staff);
});
exports.getStaffById = getStaffById;
const createStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const staff = yield staffService.createStaff(req.body);
    return res.status(201).json(staff);
});
exports.createStaff = createStaff;
const updateStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const staff = yield staffService.updateStaff(req.params.staffId, req.body);
    if (!staff) {
        return res.status(404).json({ message: 'Staff member not found' });
    }
    return res.json(staff);
});
exports.updateStaff = updateStaff;
const deleteStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const staff = yield staffService.deleteStaff(req.params.staffId);
    if (!staff) {
        return res.status(404).json({ message: 'Staff member not found' });
    }
    return res.json(staff);
});
exports.deleteStaff = deleteStaff;
const assignTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const staff = yield staffService.assignTask(req.params.staffId, req.body.taskId);
    if (!staff) {
        return res.status(404).json({ message: 'Staff member not found' });
    }
    console.log('assign staff', staff);
    return res.status(201).json(staff);
});
exports.assignTask = assignTask;
const updateMorale = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const staff = yield staffService.updateMorale(req.params.staffId, req.body.newMorale);
    return res.status(201).json(staff);
});
exports.updateMorale = updateMorale;
const removeTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const staff = yield staffService.removeTask(req.params.staffId);
    if (!staff) {
        return res.status(404).json({ message: 'Staff member not found' });
    }
    return res.status(201).json(staff);
});
exports.removeTask = removeTask;
