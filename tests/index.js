import assert from "assert";
import { add } from "../build/debug.js";
import * as myModule from "myModule";
assert.strictEqual(add(1, 2), 3);
console.log("ok");
