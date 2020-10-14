import React from "react";
import { Menu, Segment, Image, Container } from "semantic-ui-react";

const Header = () => {
  return (
    <Segment inverted id="header">
      <Menu inverted secondary>
        <Container>
          <Image
            src="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg"
            alt="logo"
            data-cy="logo"
            id="image-logo"
            size="medium"
          />
        </Container>
      </Menu>
    </Segment>
  );
};

export default Header;
