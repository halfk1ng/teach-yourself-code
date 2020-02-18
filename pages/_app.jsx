import React from "react";
import { config, library } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import {
  faHome,
  faInfoCircle,
  faUser,
  faBookmark,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

import { faYoutube } from "@fortawesome/free-brands-svg-icons";

library.add(faHome, faInfoCircle, faUser, faYoutube, faBookmark, faSignOutAlt);

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
