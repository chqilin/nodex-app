"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Install = exports.ModuleInstaller = exports.ModuleManager = exports.Module = void 0;
const nodex_libs_1 = require("nodex-libs");
class Module {
    name() {
        return '';
    }
    async init() {
    }
    async ready() {
    }
    async quit() {
    }
}
exports.Module = Module;
class ModuleManager {
    modules = new Map();
    constructor() {
    }
    async init() {
        for (let entry of this.modules) {
            await entry[1].init();
        }
    }
    async ready() {
        for (let entry of this.modules) {
            await entry[1].ready();
        }
    }
    async quit() {
        for (let entry of this.modules) {
            await entry[1].quit();
        }
    }
    install(m) {
        const mod = this.modules.get(m.name());
        if (mod) {
            throw (0, nodex_libs_1.error)(`ERR_INSTALL_MODULE_FAILED`, `Install module failed.`);
        }
        this.modules.set(m.name(), m);
    }
    select(name) {
        const m = this.modules.get(name);
        return m;
    }
}
exports.ModuleManager = ModuleManager;
exports.ModuleInstaller = {
    install(module) { }
};
function Install() {
    return function (target) {
        if (exports.ModuleInstaller) {
            const module = new target();
            exports.ModuleInstaller.install(module);
        }
    };
}
exports.Install = Install;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL01vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBbUM7QUFHbkMsTUFBYSxNQUFNO0lBQ1IsSUFBSTtRQUNQLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJO0lBRWpCLENBQUM7SUFFTSxLQUFLLENBQUMsS0FBSztJQUVsQixDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUk7SUFFakIsQ0FBQztDQUNKO0FBaEJELHdCQWdCQztBQUVELE1BQWEsYUFBYTtJQUNkLE9BQU8sR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7SUFFakU7SUFFQSxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUk7UUFDYixLQUFJLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDM0IsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQUs7UUFDZCxLQUFJLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDM0IsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUk7UUFDYixLQUFJLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDM0IsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBRU0sT0FBTyxDQUFDLENBQVM7UUFDcEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdkMsSUFBRyxHQUFHLEVBQUU7WUFDSixNQUFNLElBQUEsa0JBQUssRUFDUCwyQkFBMkIsRUFDM0Isd0JBQXdCLENBQzNCLENBQUM7U0FDTDtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sTUFBTSxDQUFtQixJQUFZO1FBQ3hDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpDLE9BQU8sQ0FBTSxDQUFDO0lBQ2xCLENBQUM7Q0FHSjtBQTVDRCxzQ0E0Q0M7QUFFVSxRQUFBLGVBQWUsR0FBRztJQUN6QixPQUFPLENBQUMsTUFBYyxJQUFPLENBQUM7Q0FDakMsQ0FBQztBQUVGLFNBQWdCLE9BQU87SUFDbkIsT0FBTyxVQUEwQixNQUFTO1FBQ3RDLElBQUcsdUJBQWUsRUFBRTtZQUNoQixNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQzVCLHVCQUFlLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQVBELDBCQU9DIn0=