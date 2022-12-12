import React from "react";
import "./Alphabet.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import AlphabetList from "./AlphabetList";

function Alphabet() {
  return (
    <>
      <DropdownMenu.Root className="container-dropdown">
        <DropdownMenu.Trigger className="button-click">
          <FaBars />
          Ordem Alfabetica
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className="portal-menu">
            <DropdownMenu.Item className="menu-item">
              <Link to={"/breeds"} className="link">
                ALL
              </Link>
            </DropdownMenu.Item>
            {AlphabetList.map((item) => (
              <DropdownMenu.Item className="menu-item" key={item}>
                <Link to={`/filtred/${item}`} className="link">
                  {item}
                </Link>
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  );
}

export default Alphabet;
