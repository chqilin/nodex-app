
import { ModuleManager } from "./Module"

export class Engine {
    private _modules: ModuleManager = new ModuleManager();

    constructor() {

    }

    public async run(): Promise<void> {
        console.log("Engine init.");
        await this._modules.init();

        await this._modules.ready();

        console.log("Engine quit.");
        await this._modules.quit();
    }

    public get modules(): ModuleManager {
        return this._modules;
    }
}
