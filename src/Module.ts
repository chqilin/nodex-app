import { error } from "nodex-libs";
import { Class } from "./libs/Class"

export class Module {
    public name(): string {
        return '';
    }

    public async init(): Promise<void> {

    }

    public async ready(): Promise<void> {

    }

    public async quit(): Promise<void> {

    }
}

export class ModuleManager {
    private modules: Map<string, Module> = new Map<string, Module>();

    constructor() {

    }

    public async init(): Promise<void> {
        for(let entry of this.modules) {
            await entry[1].init();
        }
    }

    public async ready(): Promise<void> {
        for(let entry of this.modules) {
            await entry[1].ready();
        }
    }

    public async quit(): Promise<void> {
        for(let entry of this.modules) {
            await entry[1].quit();
        }
    }

    public install(m: Module) {
        const mod = this.modules.get(m.name());
        if(mod) {
            throw error(
                `ERR_INSTALL_MODULE_FAILED`,
                `Install module failed.`
            );
        }

        this.modules.set(m.name(), m);
    }

    public select<T extends Module>(name: string): T {
        const m = this.modules.get(name);

        return m as T;
    }


}

export let ModuleInstaller = {
    install(module: Module):void{}
};

export function Install() {
    return function<T extends Class>(target: T) {
        if(ModuleInstaller) {
            const module = new target();
            ModuleInstaller.install(module);
        }
    }
}
