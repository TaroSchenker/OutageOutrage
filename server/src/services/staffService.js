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
exports.StaffService = void 0;
const Staff_1 = require("../models/Staff");
class StaffService {
    // Retrieve all staff members
    getAllStaff() {
        return Staff_1.StaffModel.find({});
    }
    // Retrieve a staff member by ID
    getStaffById(id) {
        return Staff_1.StaffModel.findById(id);
    }
    // Create a new staff member
    createStaff(staffData) {
        const staff = new Staff_1.StaffModel(staffData);
        return staff.save();
    }
    // Update a staff member
    updateStaff(id, staffData) {
        return Staff_1.StaffModel.findByIdAndUpdate(id, staffData, { new: true });
    }
    // Delete a staff member
    deleteStaff(id) {
        return Staff_1.StaffModel.findByIdAndDelete(id);
    }
    // Assign a task to a staff member
    assignTask(staffId, taskId) {
        return Staff_1.StaffModel.findByIdAndUpdate(staffId, { currentTask: taskId, availability: false }, { new: true });
    }
    // Delete a task to a staff member
    removeTask(staffId) {
        return Staff_1.StaffModel.findByIdAndUpdate(staffId, {
            currentTask: '',
            availability: true,
        }, { new: true });
    }
    // Update staff morale
    updateMorale(id, newMorale) {
        return Staff_1.StaffModel.findByIdAndUpdate(id, { morale: newMorale }, { new: true });
    }
    calculateTotalStaffCost(staffIds) {
        return __awaiter(this, void 0, void 0, function* () {
            const staffMembers = yield Staff_1.StaffModel.find({
                _id: { $in: staffIds },
            });
            let totalCost = 0;
            staffMembers.forEach((staff) => {
                totalCost += staff.salary;
            });
            return totalCost;
        });
    }
    calculateTotalStaffMorale(staffIds) {
        return __awaiter(this, void 0, void 0, function* () {
            const staffMembers = yield Staff_1.StaffModel.find({
                _id: { $in: staffIds },
            });
            let totalMorale = 0;
            staffMembers.forEach((staff) => {
                totalMorale += staff.morale;
            });
            console.log('totalMorale', totalMorale);
            return totalMorale / staffMembers.length;
        });
    }
}
exports.StaffService = StaffService;
