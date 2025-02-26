
import * as libs from "nodex-libs"
import { IoC } from "../libs/IoC";
import { Constructor } from '../libs/Class';

export interface ApplicationOptions {
    name: string;
    modulePaths: string[];
}

export class Application {
    private _options: ApplicationOptions;
    private _running: boolean;
    private _ioc: IoC;

    constructor(options: ApplicationOptions) {
        this._options = options;
        this._ioc = new IoC();
        this._running = true;

        libs.log.init(options.name);
    }

    public async run(): Promise<void> {
        const options = this._options;

        console.log(`app '${options.name}' init...`);
        for(const p of options.modulePaths) {
            this._ioc.load(`${process.cwd()}/${p}`);
        }

        console.log(`app '${this.name}' quit.`);
    }

    public get name(): string {
        return this._options.name;
    }

    public get running(): boolean {
        return this._running;
    }
    public set running(value: boolean) {
        this._running = value;
    }

    public get<T>(idOrType: string | Constructor<T>): T {
        return this._ioc.get(idOrType);
    }
}
