import React from "react";
import { ComponentPlayground } from "spectacle";
import { ListProvider } from "react-listpath";
import { Fragments, MonoQuery } from "react-monoquery";
import gql from "graphql-path";
import { withClientState } from "apollo-link-state";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";

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

// This is the same cache you pass into new ApolloClient
const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  defaults: {
    currentUser: {
      id: "one",
      __typename: "Person",
      name: {
        __typename: "Name",
        first: "Jo",
        last: "Schmo"
      },
      contacts: AddressListData.map(a => {
        a.__typename = "Person";
        a.name.__typename = "Name";
        return a;
      })
    }
  }
});

const client = new ApolloClient({
  cache,
  link: stateLink
});

const scope = {
  styles,
  AddressListData,
  ListProvider,
  gql,
  MonoQuery,
  Fragments,
  ApolloProvider,
  client
};

export default ({ code }) => (
  <ComponentPlayground
    theme="dark"
    scope={scope}
    code={code || basicReactExample}
  />
);
