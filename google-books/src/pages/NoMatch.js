import React from "react";
import Header from "../components/Header";

function NoMatch() {
  return (
    <div>
          <Header>
            <h1>404 Page Not Found</h1>
            <h1>
            <span role="img" aria-label="Face Screaming in Fear">
                😱
              </span>
            </h1>
          </Header>
    </div>
  );
}

export default NoMatch;