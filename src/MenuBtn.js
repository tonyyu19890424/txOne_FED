import React, { useState } from 'react';
import {
  Button,
  Icon,
  Text,
  Flex,
  MenuItem,
  Modal,
  MenuDivider,
} from '@tonic-ui/react';

function MenuBtn() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Button onClick={toggleMenu} style={{ marginTop: '5px' }}>
        <Icon icon='user'></Icon>
        Open Menu
      </Button>
      {isMenuOpen && (
        <Modal data-testid='modal' isOpen={isMenuOpen} onClose={toggleMenu} style={{ marginTop: '40px', backgroundColor: '#3f3f3f', width: '200px', height: '300px' }}>
          <Flex
            display="inline-flex"
            flexDirection="column"
          >
            <MenuItem value="settings">
              <Icon icon="settings" mr="2x" />
              <Text>Settings</Text>
            </MenuItem>
            <MenuItem value="accounts">
              <Icon icon="user-team" mr="2x" />
              <Text>Accounts</Text>
            </MenuItem>
            <MenuItem value="privacy-control">
              <Icon icon="lock" mr="2x" />
              <Text>Privacy control</Text>
            </MenuItem>
            <MenuDivider />
          </Flex>
        </Modal>
      )}
    </div>
  );
}

export default MenuBtn;
