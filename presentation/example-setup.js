import { AppRegistry, StyleSheet, View, Text, Image } from "react-native-web";
import { ListProvider } from "react-listpath";
import { Fragments, MonoQuery } from "react-monoquery";
import gql from "graphql-path";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from "apollo-link-state";

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
    name: { first: "John", middle: "Deer", last: "Doe" },
    dob: "03/24/85",
    avatar: "https://placekitten.com/50/50"
  },
  {
    name: { first: "Jim", middle: "Caserole", last: "Bean" },
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
        middle: "Mo",
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

export const scope = {
  styles,
  AddressListData,
  ListProvider,
  gql,
  MonoQuery,
  Fragments,
  ApolloProvider,
  client,
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image
};
