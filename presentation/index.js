// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default");
require("./index.css");

import { FolderStructure, Folder, File } from "./folders";

import ReactExample from "./react-example";
import WithSlidesLink from "./with-slides-link";

const images = {
  nesting: require("../assets/nesting.gif"),
  laughingguy: require("../assets/laughingguy.png")
};

const logos = {
  facebook: require("../assets/users/facebook.png"),
  github: require("../assets/users/github.png"),
  shopify: require("../assets/users/shopify.png"),
  yelp: require("../assets/users/yelp.svg"),
  walmart: require("../assets/users/walmart.png"),
  nyt: require("../assets/users/nyt.png")
};

preloader(logos);
preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

// Useful links:
// http://www.reactnativeexpress.com/
// https://code.facebook.com/posts/1014532261909640/react-native-bringing-modern-web-techniques-to-mobile/
//  "learn once, write anywhere"
//   Different platforms have different looks, feels, and capabilities, and as such, we should still be developing discrete apps for each platform
export default WithSlidesLink(
  class Presentation extends React.Component {
    render() {
      return (
        <Deck
          transition={["zoom", "slide"]}
          theme={theme}
          transitionDuration={500}
        >
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              GraphQL
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              {"Apollo <> Relay"}
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              and React-Native
            </Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={2} textColor="tertiary">
              ever ask yourself...
            </Heading>
            <List>
              <Appear>
                <ListItem>where is this data coming from?</ListItem>
              </Appear>
              <Appear>
                <ListItem>what uses this data?</ListItem>
              </Appear>
              <Appear>
                <ListItem>why a different API for every app?</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={2} textColor="tertiary">
              instead
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  build these answers into your code
                  <List>
                    <Appear>
                      <ListItem>like comments?</ListItem>
                    </Appear>
                    <Appear>
                      <ListItem>no, comments are unreliable</ListItem>
                    </Appear>
                    <Appear>
                      <ListItem>
                        declarative code, it is like a comment...
                      </ListItem>
                    </Appear>
                    <Appear>
                      <ListItem>that your computer can run</ListItem>
                    </Appear>
                  </List>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  also: build generic APIs
                  <List>
                    <Appear>
                      <ListItem>not coupled app services</ListItem>
                    </Appear>
                  </List>
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={2} textColor="black">
              Example
            </Heading>
          </Slide>

          {[1, 2].map(i => (
            <Slide
              key={i}
              notes={`
            show how confusion builds over time
            in the last slide, think though what is needed to add middle name
          `}
            >
              <ReactExample
                code={require(`./progressive-complexity/${i}-before-graphql.raw`)}
              />
            </Slide>
          ))}

          <Slide
            transition={["zoom", "fade"]}
            bgColor="primary"
            notes={`
            Have audience members talk to eachother about horror stories when
            they were working on a project and had to search around to figure
            out where data was coming from. When they would change some data
            field and you wouldn't know what would break from it. When a central
            blob of data would start to ammass unmanagable ammounts of
            information and it was unclear where, if anywhere it was being used.

            talk about my encapsulation rules:
            1. If a field exists in the query or fragment that isn't being used in the
             immediate component that query or fragment is for, delete it because it 
             isn't being used.
            2. If a variable is being passed in from the great beyond, it is either 
            coming from a query or fragment that you declare right alongside the 
            component, or it is view state coordinated accross a small heirarchy.
          `}
          >
            <Heading size={4} textColor="black">
              PSA: Encapsulation
            </Heading>

            <Image width="75%" src={images.nesting} />
          </Slide>

          <Slide
            notes={`
              show how each component has exactly the data it needs declared
              demonstrate adding middle name, try breaking encapsulation
          `}
          >
            <ReactExample code={require("./fragment-composition.raw")} />
          </Slide>

          <Slide>
            <ReactExample code={require("./fragment-composition-native.raw")} />
          </Slide>

          <Slide>
            <Heading>Configuration?</Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={5} textColor="black">
              {"Apollo Client 2 <> Relay Modern"}
            </Heading>
            <List>
              <ListItem>
                incremental adoption?{" "}
                <Appear>
                  <em>Apollo</em>
                </Appear>
              </ListItem>
              <ListItem>
                consistancy (single 'way')?{" "}
                <Appear>
                  <em>Relay</em>
                </Appear>
              </ListItem>
              <ListItem>
                unix philosophy?{" "}
                <Appear>
                  <em>Apollo</em>
                </Appear>
              </ListItem>
              <ListItem>
                performance optimized?{" "}
                <Appear>
                  <em>Relay</em>
                </Appear>
              </ListItem>
              <ListItem>
                community?{" "}
                <Appear>
                  <em>Apollo</em>
                </Appear>
              </ListItem>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={4} textColor="black">
              Recap
            </Heading>
            <List>
              <Appear>
                <ListItem size={6} textColor="tertiary">
                  encapsulation problems
                </ListItem>
              </Appear>
              <Appear>
                <ListItem size={6} textColor="tertiary">
                  solved with a graphql client
                </ListItem>
              </Appear>
              <Appear>
                <ListItem size={6} textColor="tertiary">
                  using apollo with fragments (like relay)
                </ListItem>
              </Appear>
              <Appear>
                <ListItem size={6} textColor="tertiary">
                  trade offs choosing relay vs apollo
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide>
            <Text>
              You mentioned something about making generic APIs and not tightly
              coupled App Services?
            </Text>
          </Slide>

          <Slide align="flex-start flex-start">
            <Text textAlign="left">
              An app and a website walk into a bar...
            </Text>
            <Appear>
              <Text textAlign="left">[website] I'll have my usual</Text>
            </Appear>
            <Appear>
              <Text textAlign="right">
                one large API response coming up [server]
              </Text>
            </Appear>
            <Appear>
              <Text textAlign="left">
                [app] I'll take the user's names, their recent transactions,
                ooh, and their friends names
              </Text>
            </Appear>
            <Appear>
              <Fill>
                <Text textAlign="right">...[server]</Text>
                <Image width="25%" src={images.laughingguy} />
              </Fill>
            </Appear>
          </Slide>

          <Slide>
            <Text>
              We are working with the same data and permissions, why do I need a
              whole new API just because my views are different?
            </Text>
          </Slide>

          <Slide transition={["slide"]}>
            <Text textColor="tertiary">Who's using GraphQL?</Text>

            <Layout>
              <Fill>
                <Image className="show-case__logo" src={logos.github} />
                <Text textColor="grey">GitHub</Text>
              </Fill>

              <Fill>
                <Image className="show-case__logo" src={logos.facebook} />
                <Text textColor="grey">Facebook</Text>
              </Fill>

              <Fill>
                <Image className="show-case__logo" src={logos.shopify} />
                <Text textColor="grey">Shopify</Text>
              </Fill>
            </Layout>

            <div className="show-case__separator" />

            <Layout>
              <Fill>
                <Image className="show-case__logo" src={logos.yelp} />
                <Text textColor="grey">Yelp</Text>
              </Fill>

              <Fill>
                <Image className="show-case__logo" src={logos.walmart} />
                <Text textColor="grey">Walmart</Text>
              </Fill>

              <Fill>
                <Image className="show-case__logo" src={logos.nyt} />
                <Text textColor="grey">New York Times</Text>
              </Fill>
            </Layout>
            <Cite>
              <Link href="https://www.graphql.com/case-studies/">
                graphql.com case studies
              </Link>
            </Cite>
          </Slide>

          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Questions?
            </Heading>
          </Slide>
        </Deck>
      );
    }
  }
);
