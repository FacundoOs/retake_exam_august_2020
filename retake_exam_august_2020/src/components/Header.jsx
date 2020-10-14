import React from "react";
import { Menu, Segment } from "semantic-ui-react";

const Header = () => {
  return (
    <Segment inverted>
      <Menu inverted secondary>
        <img src="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg" alt="logo" data-cy="logo"/>
      </Menu>
    </Segment>
  );
};

export default Header;
