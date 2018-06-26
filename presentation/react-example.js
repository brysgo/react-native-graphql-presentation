import React from "react";
import { ComponentPlayground } from "spectacle";
import { scope } from "./example-setup";

const basicReactExample = `
// Everything extends React.Component
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
}

render(<MyComponent />, mountNode);
`;

export default ({ code }) => (
  <ComponentPlayground
    theme="dark"
    scope={scope}
    code={code || basicReactExample}
  />
);
