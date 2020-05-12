// no-console
console.log("test"); // Unexpected console statement.

// interface-name-prefix
export interface Test {
  // Interface name must be prefixed with "I"
  name: string;
}

// explicit-function-return-type
[].map(() => undefined); // arrow function without return type is allowed

export function functionWithoutReturnType() {
  // Missing return type on function.
  window.open("");
}

// curly
if (1 === 1) window.open(""); // Expected { after 'if' condition.

// no-debugger
debugger; // Unexpected 'debugger' statement.

// no-eval
eval(""); // eval can be harmful.

// no-var
var testVar = ""; // Unexpected var, use let or const instead.
testVar;

// prefer-const
let testLet = ""; // 'test' is never reassigned. Use 'const' instead.
testLet;

// spaced-comment
/// triple-slash is allowed
// comment example
