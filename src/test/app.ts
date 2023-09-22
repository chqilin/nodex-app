
import {Application, Module} from "../"

class HelloModule extends Module {
    async ready() {
        console.log(`Hello ${this.name}`)

        // const hello = app.modules.select(HelloModule);
        // console.log(`Hello ${hello.name}`);

        Reflect
    }
}

const main = async()=> {
    console.log("startup")
    const app = new Application("nodex-app-test");
    app.modules.install(new HelloModule());
    await app.run();
    console.log("all shutdown")
}

main();
