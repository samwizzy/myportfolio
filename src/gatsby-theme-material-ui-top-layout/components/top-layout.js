import React from "react";
// import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout";

// export default function Layout({ children, theme }) {
//   return <ThemeTopLayout theme={theme}>{children}</ThemeTopLayout>;
// }

export default function Layout({ children, theme }) {
  return <div theme={theme}>{children}</div>;
}
