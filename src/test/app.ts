
import {Engine, Module} from "../"

class HelloModule extends Module {
    name() {
        return "Hello";
    }

    async init(){
        console.log("Hello world.")
    }

    async ready() {
        const hello = engine.modules.select<HelloModule>("Hello");
        console.log(hello.name());
    }
}

const engine = new Engine();
engine.modules.install(new HelloModule());
engine.run();

