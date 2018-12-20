import React from "react";
import App, { Container } from "next/app";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import JssProvider from "react-jss/lib/JssProvider";
import getPageContext from "../src/getPageContext";
import NProgress from "nprogress";
import Router from "next/router";
import Master from "../components/Master";

NProgress.configure({
  showSpinner: false,
  parent: "#AppBar",
  speed: 500
});

Router.events.on("hashChangeStart", (url) => {
  console.log("Carregando a pagina: ", url);
  NProgress.start();
});

Router.events.on("hashChangeComplete", (url) => {
  console.log("Carregou a pagina: ", url);
  NProgress.done();
});

Router.events.on("routeChangeStart", (url) => {
  console.log("Carregando a pagina: ", url);
  NProgress.start();
});
Router.events.on("routeChangeComplete", (url) => {
  console.log("Carregou a rota: ", url);
  NProgress.done();
});
Router.events.on("routeChangeError", (url) => {
  console.log("Carregou a rota: ", url);
  NProgress.done();
});

class MyApp extends App {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        {/* Wrap every page in Jss and Theme providers */}
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            <Master />
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server side. */}
            <Component pageContext={this.pageContext} {...pageProps} />
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}

export default MyApp;
