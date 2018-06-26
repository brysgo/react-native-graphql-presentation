import React from "react";
import WebPlayer from "react-native-web-player";

const NativeExample = ({ code }) => (
  <div>
    <WebPlayer
      files={[
        ["index.js", code],
        // ["example-setup.js", require("./example-setup.raw")]
      ]}
      vendorComponents={[
        [
          "apollo-cache-inmemory",
          "https://unpkg.com/apollo-cache-inmemory@1.2.5/lib/bundle.umd.js"
        ],
        [
          "react-listpath",
          "https://unpkg.com/react-listpath@1.0.2/lib/index.js"
        ],
        [
          "react-monoquery",
          "https://unpkg.com/react-monoquery@1.0.7/lib/index.js"
        ],
        ["graphql-path", "https://unpkg.com/graphql-path@3.1.3/lib/index.js"],
        [
          "apollo-client",
          "https://unpkg.com/apollo-client@2.3.5/bundle.umd.js"
        ],
        [
          "react-apollo",
          "https://unpkg.com/react-apollo@2.1.6/react-apollo.browser.umd.js"
        ],
        [
          "apollo-link-state",
          "https://unpkg.com/apollo-link-state@0.4.1/lib/bundle.umd.js"
        ]
      ]}
      style={{
        marginTop: 4,
        border: 0,
        height: 420
      }}
      code={code}
    />
  </div>
);

export default NativeExample;
