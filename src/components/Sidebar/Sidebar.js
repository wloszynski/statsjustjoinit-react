import React from "react";

import SidebarItems from "./SidebarItems/SidebarItems";
import FullScreen from "../UI/FullScreen/FullScreen";

const sidebar = () => {
  return (
    <FullScreen headerName="Technology" hide>
      <SidebarItems />
    </FullScreen>
  );
};

export default sidebar;
