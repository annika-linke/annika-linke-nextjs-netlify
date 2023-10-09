"use client";

import { Theme } from "@/types/Theme";
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { FunctionComponent as FC, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./layout.scss";
import { MediaContextProvider } from "@/styles/media";

interface Props {
  children: React.ReactNode;
  theme?: Theme;
  siteTitle: string;
}

const Layout: FC<Props> = ({
  children,
  theme = Theme["Default"],
  siteTitle,
}: Props) => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <MediaContextProvider disableDynamicMediaQueries>
      <div
        className={classNames(
          "layout",
          theme && `layout--${theme.toLocaleLowerCase()}`
        )}
      >
        <Header className="layout__header" siteTitle={siteTitle} />
        <main className="layout__content">{children}</main>
        <Footer className="layout__footer" />
      </div>
    </MediaContextProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
