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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb_memory_server_1 = require("mongodb-memory-server");
const staffService_1 = require("../../src/services/staffService");
const types_1 = require("../../src/types/types");
describe('StaffService', () => {
    // let con: MongoClient;
    let mongoServer;
    let staffService;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        mongoServer = yield mongodb_memory_server_1.MongoMemoryServer.create();
        const uri = mongoServer.getUri();
        yield mongoose_1.default.connect(uri);
        staffService = new staffService_1.StaffService();
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield mongoose_1.default.disconnect();
        yield mongoServer.stop();
    }));
    it('should create a new staff member', () => __awaiter(void 0, void 0, void 0, function* () {
        const staffData = {
            name: 'Test',
            avatarUrl: 'https://test.com',
            role: types_1.Role.BACKEND_DEV,
            expertise: types_1.Expertise.JAVA,
            ambition: 80,
            loyalty: 80,
            skillLevel: 80,
            resilience: 80,
            adaptability: 80,
            morale: 80,
            currentTask: null,
            availability: true,
            salary: 50000,
            satisfaction: 100,
        };
        const staff = yield staffService.createStaff(staffData);
        expect(staff.name).toBe(staffData.name);
        expect(staff.avatarUrl).toBe(staffData.avatarUrl);
        expect(staff.role).toBe(staffData.role);
        expect(staff.expertise).toBe(staffData.expertise);
    }));
    // TODO: Other tests for get, update, delete operations
});
