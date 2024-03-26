import {
  Dropdown,
  NavbarItem,
  DropdownTrigger,
  Link,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { ChevronDown } from "./Icons";

const CustomDropdownMenu = ({ title, menus }) => {
  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Link
            isBlock
            isExternal
            showAnchorIcon
            anchorIcon={<ChevronDown fill="currentColor" size={16} />}
            color="foreground"
          >
            {title}
          </Link>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="ACME features"
        className="w-[340px]"
        itemClasses={{
          base: "gap-4",
        }}
      >
        {menus.length > 0 ? (
          menus.map((i, x) => (
            <DropdownItem
              key={x}
              description={i.description}
              startContent={i.startContent}
            >
              <Link href={route(i.href)}>
                {x + 1}.{i.title}
              </Link>
            </DropdownItem>
          ))
        ) : (
          <></>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default CustomDropdownMenu;
