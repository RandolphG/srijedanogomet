import React from "react";
import "./styles/_contextMenuStyles.scss";
import ErrorBoundary from "../../errorBoundary";
import { ContextMenuViewModel } from "./contextMenuViewModel";

/**
 * @description Context Menu
 * @constructor
 */
const ContextMenu = () => {
  const { menuSubList, contextOptions } = ContextMenuViewModel();

  const MenuItem = ({ children }: any) => (
    <li className="menu-item">{children}</li>
  );

  const MenuContainer = ({ children }: any) => (
    <div className="menuContainer">{children}</div>
  );

  const Menu = ({ children }: any) => <div className="menu">{children}</div>;

  const MenuList = ({ children }: any) => (
    <ul className="menu-list">{children}</ul>
  );

  const MenuSubList = ({ children }: any) => (
    <ul className="menu-sub-list">{children}</ul>
  );

  const MenuButton = ({
    classname,
    dataFeather,
    text,
  }: {
    classname?: string;
    dataFeather: string;
    text: string;
  }) => (
    <button className={`menu-button ${classname}`}>
      <i data-feather={`${dataFeather}`} />
      {text}
      <i data-feather="chevron-right" />
    </button>
  );

  return (
    <ErrorBoundary>
      <MenuContainer>
        <Menu>
          <MenuList>
            <MenuItem>
              <MenuButton dataFeather={"corner-up-right"} text={"Share"} />
            </MenuItem>
            <MenuItem>
              <MenuButton dataFeather={"edit-2"} text={"Rename"} />
            </MenuItem>
          </MenuList>
          <MenuList>
            <MenuItem>
              <MenuButton
                classname={"menu-button--black"}
                dataFeather={"circle"}
                text={"Rename"}
              />
              <MenuButton dataFeather={"circle"} text={"No status"} />
              <MenuSubList>
                <MenuItem>
                  {menuSubList.map(({ classname, dataFeather, text }, idx) => (
                    <MenuButton
                      key={idx}
                      classname={classname}
                      dataFeather={dataFeather}
                      text={text}
                    />
                  ))}
                </MenuItem>
              </MenuSubList>
            </MenuItem>
            {contextOptions.map(({ text, dataFeather }, idx) => (
              <MenuItem key={idx}>
                <MenuButton dataFeather={dataFeather} text={text} />
              </MenuItem>
            ))}
          </MenuList>
          <MenuList>
            <MenuItem>
              <MenuButton
                classname={"menu-button--delete"}
                dataFeather={"trash-2"}
                text={"Delete"}
              />
            </MenuItem>
          </MenuList>
        </Menu>
      </MenuContainer>
    </ErrorBoundary>
  );
};

export default ContextMenu;
