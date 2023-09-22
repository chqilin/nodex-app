
import "reflect-metadata";
import fs from "fs";

const CLASS_ANNOTAION: string = 'class:annotation';
const FIELD_ANNOTATION: string = 'field:annotation';

export function ModuleClass(identifier: string, args?: Array<any>) {
    return function (target: any) {
        Reflect.defineMetadata(CLASS_ANNOTAION, {
                id: identifier,
                args: args || []
            },
            target
        );
        return target;
    };
}

export function Inject(name: string) {
    return function (target: any, targetKey: string) {
        const annotationTarget = target.constructor;

        let fields = {};
        if (Reflect.hasOwnMetadata(FIELD_ANNOTATION, annotationTarget)) {
            fields = Reflect.getMetadata(FIELD_ANNOTATION, annotationTarget);
        }

        fields[targetKey] = {
            value: targetKey
        };

        Reflect.defineMetadata(FIELD_ANNOTATION, fields, annotationTarget);
    };
}

export class Container {
    objects: Map<string, any> = new Map<string, any>();

    bind(name: string, clazz: any, args?: Array<any>) {
        this.objects.set(name, {
            clazz: clazz,
            args: args || []
        });
    }

    get<T>(name: string) : T {
        const target = this.objects.get(name);
        const { clazz, args } = target;

        const fields = Reflect.getMetadata(FIELD_ANNOTATION, clazz);
        const inst = Reflect.construct(clazz, args);

        for (let f in fields) {
            const fieldName = fields[f].value;
            // get injected object recursively
            inst[f] = this.get(fieldName);
        }

        return inst as T;
    }

    load(home: string) {
        const fileList = fs.readdirSync(home);
        for (const file of fileList) {
            if (!(/\.ts$/.test(file))) {
                continue;
            }

            const exports = require(`${home}${file}`);
            for (const key in exports) {
                const module = exports[key];
                if (typeof module === 'function') {
                    const metadata = Reflect.getMetadata(CLASS_ANNOTAION, module);
                    if (metadata) {
                        this.bind(metadata.id, module, metadata.args);
                    }
                }
            }
        }
    }
}
