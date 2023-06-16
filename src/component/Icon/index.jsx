import React from "react";
import { Img } from "./styled";

export default function IconComponent({
  iconName = "React",
  iconsize = 50,
}) {
  const iconSrc = {
    GitHubLogo: "img/icons/GitHub-Logo.png",
    DocLogo: "img/icons/Doc-Logo.png",
    React: "img/icons/React-icon.svg",
    HTML: "img/icons/React-icon.svg",
    CSS: "img/icons/React-icon.svg",
    Node: "img/icons/React-icon.svg",
    ReactNative: "img/icons/React-icon.svg",
    StyledComponents: "img/icons/React-icon.svg",
    Jest: "img/icons/React-icon.svg",
  };
  return <Img src={iconSrc[iconName]} iconsize={iconsize} />;
}
