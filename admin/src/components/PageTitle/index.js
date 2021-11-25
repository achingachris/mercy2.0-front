import React, { memo } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

import favicon from "../../assets/images/logo-strapi.png";

const PageTitle = () => (
  <Helmet
    title="M.E.R.C.Y Admin"
    link={[{ rel: "icon", type: "image/png", href: favicon }]}
  />
);

export default memo(PageTitle);
