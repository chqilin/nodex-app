import { Class } from "./libs/Class";
export declare class Module {
    name(): string;
    init(): Promise<void>;
    ready(): Promise<void>;
    quit(): Promise<void>;
}
export declare class ModuleManager {
    private modules;
    constructor();
    init(): Promise<void>;
    ready(): Promise<void>;
    quit(): Promise<void>;
    install(m: Module): void;
    select<T extends Module>(name: string): T;
}
export declare let ModuleInstaller: {
    install(module: Module): void;
};
export declare function Install(): <T extends Class>(target: T) => void;
