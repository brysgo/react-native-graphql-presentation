import React from "react";
import { ComponentPlayground } from "spectacle";
import { ListProvider } from "react-listpath";
import { Fragments } from "react-monoquery";
import gql from "graphql-path";

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

const styles = {
  row: {
    display: "flex",
    flexDirection: "row",
    padding: 10
  },
  details: {
    display: "flex",
    flexDirection: "column",
    fontSize: 23,
    paddingLeft: 10
  }
};

const AddressListData = [
  {
    name: { first: "John", last: "Doe" },
    dob: "03/24/85",
    avatar: "https://placekitten.com/50/50"
  },
  {
    name: { first: "Jim", last: "Bean" },
    dob: "06/13/88",
    avatar: "https://placekitten.com/50/50"
  }
];

const scope = { styles, AddressListData, ListProvider, gql, Fragments };

export default ({ code }) => (
  <ComponentPlayground
    theme="dark"
    scope={scope}
    code={code || basicReactExample}
  />
);
