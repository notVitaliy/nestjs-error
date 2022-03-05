/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/tasks/src/tasks.module.ts":
/*!****************************************!*\
  !*** ./apps/tasks/src/tasks.module.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TasksModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const tasks_service_1 = __webpack_require__(/*! ./tasks.service */ "./apps/tasks/src/tasks.service.ts");
let TasksModule = class TasksModule {
};
TasksModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'SUM_SERVICE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: 'localhost',
                        port: 8888,
                    },
                },
            ]),
            schedule_1.ScheduleModule.forRoot(),
        ],
        providers: [tasks_service_1.TasksService],
    })
], TasksModule);
exports.TasksModule = TasksModule;


/***/ }),

/***/ "./apps/tasks/src/tasks.service.ts":
/*!*****************************************!*\
  !*** ./apps/tasks/src/tasks.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TasksService = void 0;
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const cron_1 = __webpack_require__(/*! cron */ "cron");
let TasksService = class TasksService {
    constructor(client, schedulerRegistry) {
        this.client = client;
        this.schedulerRegistry = schedulerRegistry;
    }
    onModuleInit() {
        const doSums = new cron_1.CronJob('*/5 * * * * *', () => this.doSums());
        this.schedulerRegistry.addCronJob('getOsCreatedEvents', doSums);
        doSums.start();
    }
    async doSums() {
        const numbers = [];
        for (let i = 0; i < 20; i++) {
            const a = Math.random();
            const b = Math.random();
            numbers.push([a, b]);
        }
        const sums = await Promise.all(numbers.map((n) => (0, rxjs_1.firstValueFrom)(this.client.send('sum', n))));
        console.log({ sums });
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SUM_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof schedule_1.SchedulerRegistry !== "undefined" && schedule_1.SchedulerRegistry) === "function" ? _b : Object])
], TasksService);
exports.TasksService = TasksService;


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/schedule":
/*!***********************************!*\
  !*** external "@nestjs/schedule" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),

/***/ "cron":
/*!***********************!*\
  !*** external "cron" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cron");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************************!*\
  !*** ./apps/tasks/src/main.ts ***!
  \********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const tasks_module_1 = __webpack_require__(/*! ./tasks.module */ "./apps/tasks/src/tasks.module.ts");
async function bootstrap() {
    await core_1.NestFactory.createApplicationContext(tasks_module_1.TasksModule);
}
bootstrap();

})();

/******/ })()
;