
import {Application} from "../"
import {A, B} from "./modules";

const main = async()=> {
    console.log("startup")
    const app = new Application({
        name:"nodex-app-test",
        modulePaths: ["lib/test/"]
    });

    await app.run();

    const a = app.get(A);
    console.log(a);

    const b = app.get(B);
    console.log(b);

    console.log("all shutdown")
}

main();
