import { ModuleManager } from "./Module";
export declare class Engine {
    private _modules;
    constructor();
    run(): Promise<void>;
    get modules(): ModuleManager;
}
