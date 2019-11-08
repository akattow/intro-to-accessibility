import React from "react";
import theme from "./theme";

export default ({ children }) => (
  <>
    <div
      style={{
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        backgroundColor: theme.colors.dark,
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative"
      }}
    >
      {children}
    </div>
  </>
);
