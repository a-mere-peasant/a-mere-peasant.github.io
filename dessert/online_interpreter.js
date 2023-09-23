import * as interpreter from "./src/interpreter.js"

const handler = {
  get: function(target, property) {
    console.log(`Getting property ${property}`);
    return target[property];
  },
  set: function(target, property, value) {
    console.log(`Setting property ${property} to ${value}`);
    target[property] = value;
    return true; // indicates that the setting has been done successfully
  }
};

const visual_env = new Proxy(interpreter.env,handler);
console.log(visual_env.opr);

