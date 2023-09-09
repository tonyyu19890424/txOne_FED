import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import {
  Button,
  Icon,
  Text,
  Flex,
  MenuItem,
  Modal,
  MenuDivider,
  Menu,
} from "@tonic-ui/react";

function MenuBtn() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);
  let resizeTimeout;

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // const calculateModalPosition = () => {
  //   if (buttonRef.current && isMenuOpen) {
  //     const buttonRect = buttonRef.current.getBoundingClientRect();
  //     setModalPosition({
  //       top: buttonRect.bottom + window.scrollY,
  //       left: buttonRect.left + window.scrollX,
  //     });
  //   }
  // };

  // const handleResize = () => {
  //   cancelAnimationFrame(resizeTimeout);
  //   resizeTimeout = requestAnimationFrame(() => {
  //     calculateModalPosition();
  //     setMenuOpen(false);
  //   });
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   calculateModalPosition();
  // }, [isMenuOpen]);

  return (
    <div>
      <Button
        onClick={toggleMenu}
        style={{ marginTop: "5px", color: "white", backgroundColor: "#3d3d3d" }}
        // ref={buttonRef}
        data-testid="menu-btn"
      >
        <Icon style={{ color: "white", fontSize: "10px" }} icon="user" />
        <span style={{ marginLeft: "5px" }}>
          {isMenuOpen === false ? "Open Menu" : "Close Menu"}
        </span>
      </Button>
      {isMenuOpen && (
        <Modal
          data-testid="modal"
          isOpen={isMenuOpen}
          style={{
            position: "absolute",
            // top: `${modalPosition.top}px`,
            // left: `${modalPosition.left}px`,
            backgroundColor: "#3f3f3f",
            width: "200px",
            height: "300px",
          }}
        >
          <Flex display="inline-flex" flexDirection="column">
            <Menu style={{ flexDirection: "column" }}>
              <MenuItem value="settings">
                <Icon
                  style={{ color: "white", fontSize: "10px" }}
                  icon="settings"
                />
                <Text style={{ color: "white", marginLeft: "10px" }}>
                  Settings
                </Text>
              </MenuItem>
              <MenuItem value="accounts">
                <Icon
                  style={{ color: "white", fontSize: "10px" }}
                  icon="user-team"
                />
                <Text style={{ color: "white", marginLeft: "10px" }}>
                  Accounts
                </Text>
              </MenuItem>
              <MenuItem value="privacy-control">
                <Icon
                  style={{ color: "white", fontSize: "10px" }}
                  icon="lock"
                />
                <Text style={{ color: "white", marginLeft: "10px" }}>
                  Privacy control
                </Text>
              </MenuItem>
              <MenuDivider />
            </Menu>
          </Flex>
        </Modal>
      )}
    </div>
  );
}

export default MenuBtn;
