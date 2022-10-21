import React from "react";
import { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import { Toaster } from "react-hot-toast";

import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster />
    </Layout>
  );
}
export default MyApp;
