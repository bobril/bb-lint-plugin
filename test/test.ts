// no-console
console.log("test");

// interface-name-prefix
export interface Test {
  name: string;
}

// explicit-function-return-type
[].map(() => undefined); // arrow function without return type

export function functionWithoutReturnType() {
  console.log("test");
}
