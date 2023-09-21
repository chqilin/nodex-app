"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
class HelloModule extends __1.Module {
    name() {
        return "Hello";
    }
    async init() {
        console.log("Hello world.");
    }
    async ready() {
        const hello = engine.modules.select("Hello");
        console.log(hello.name());
    }
}
const engine = new __1.Engine();
engine.modules.install(new HelloModule());
engine.run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Rlc3QvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkJBQWtDO0FBRWxDLE1BQU0sV0FBWSxTQUFRLFVBQU07SUFDNUIsSUFBSTtRQUNBLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLO1FBQ1AsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQWMsT0FBTyxDQUFDLENBQUM7UUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7QUFFRCxNQUFNLE1BQU0sR0FBRyxJQUFJLFVBQU0sRUFBRSxDQUFDO0FBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksV0FBVyxFQUFFLENBQUMsQ0FBQztBQUMxQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMifQ==