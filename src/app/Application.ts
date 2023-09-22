
import * as libs from "nodex-libs"
import { ModuleManager } from "./Module"

export class Application {
    private _name: string;
    private _running: boolean;
    private _modules: ModuleManager;

    constructor(name: string) {
        this._name = name;
        this._modules = new ModuleManager();
        this._running = true;

        libs.log.init(name);
    }

    public async run(): Promise<void> {
        console.log(`app '${this.name}' init...`);
        await this._modules.init();

        await this._modules.ready();

        while(this._running) {
            await libs.util.delay(0.001);
        }

        console.log(`app '${this.name}' quit.`);
        await this._modules.quit();
    }

    public get name(): string {
        return this._name;
    }

    public get running(): boolean {
        return this._running;
    }
    public set running(value: boolean) {
        this._running = value;
    }

    public get modules(): ModuleManager {
        return this._modules;
    }
}
