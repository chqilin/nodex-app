"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
const Module_1 = require("./Module");
class Engine {
    _modules = new Module_1.ModuleManager();
    constructor() {
    }
    async run() {
        console.log("Engine init.");
        await this._modules.init();
        await this._modules.ready();
        console.log("Engine quit.");
        await this._modules.quit();
    }
    get modules() {
        return this._modules;
    }
}
exports.Engine = Engine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5naW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0VuZ2luZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxQ0FBd0M7QUFFeEMsTUFBYSxNQUFNO0lBQ1AsUUFBUSxHQUFrQixJQUFJLHNCQUFhLEVBQUUsQ0FBQztJQUV0RDtJQUVBLENBQUM7SUFFTSxLQUFLLENBQUMsR0FBRztRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTNCLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBVyxPQUFPO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Q0FDSjtBQXBCRCx3QkFvQkMifQ==