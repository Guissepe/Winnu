import Header from "./header";
import Footer from "./footer";
import React from "react";

type layoutProps = {
  children: React.ReactNode;
};
const layout = ({ children }: layoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default layout;
