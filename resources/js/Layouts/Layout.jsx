import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Badge,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Divider,
  Avatar,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
  NotificationIcon,
} from "@/Components/Icons";
import { AcmeLogo } from "@/Components/AcmeLogo";

const Layout = ({ user, header, children }) => {
  const [isInvisible, setIsInvisible] = React.useState(false);
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  return (
    <div className="min-h-full">
      <Navbar isBordered maxWidth="xl">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">EDM</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive={route().current("dashboard")}>
            <Link color="foreground" href={route("dashboard")}>
              หน้าแรก
            </Link>
          </NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Link
                  isBlock
                  isExternal
                  showAnchorIcon
                  anchorIcon={icons.chevron}
                  color="foreground"
                >
                  แบบฟอร์มร้องขอ
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
              <DropdownItem
                key="autoscaling"
                description="ใบร้องขออุปกรณ์สารสนเทศ"
                startContent={icons.scale}
              >
                1.QF-TC-0001
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="ใบแจ้งซอมอุปกรณ์สารสนเทศ"
                startContent={icons.activity}
              >
                2.QF-TC-0002
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="แบบคำร้องขอเพิ่มระบบและแก้ไขปรับปรุงระบบ"
                startContent={icons.flash}
              >
                3.QF -ITC-0003
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="แบบคำร้องขอใช้งานอีเมล"
                startContent={icons.server}
              >
                4.QF-ITC -0005
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="แบบคำร้องขอใช้งานระบบ Domain"
                startContent={icons.user}
              >
                5.QF-ITC-0006
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="แบบคำร้องขอยกเลิกโดเมน อีเมล"
                startContent={icons.server}
              >
                6.QF-IT C-0007
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="ใบขอยืมใช้อุปกรณ์สารสนเทศของส่วนกลาง"
                startContent={icons.server}
              >
                7.QF-ITC-0009
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="ใบขอเบิกอุปกรณ์ไอที"
                startContent={icons.server}
              >
                8.QF-ITC-0010
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="ใบทะเบียนประวัติอุปกรณ์สารสนเทศ"
                startContent={icons.server}
              >
                9.QF-TC-0004
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>
            <Link color="foreground" href="#">
              แผนการทำงาน
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              รายงาน
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Badge
              color="danger"
              content={5}
              isInvisible={isInvisible}
              shape="circle"
            >
              <Button isIconOnly variant="light">
                <NotificationIcon className="fill-current" size={30} />
              </Button>
            </Badge>
          </NavbarItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name={user.name}
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">สวัสดี</p>
                <p className="font-semibold">{user.name}</p>
              </DropdownItem>
              <DropdownItem key="profile.edit" href={route("profile.edit")}>
                ข้อมูลส่วนตัว
              </DropdownItem>
              <DropdownItem key="logout" href={route("logout")}>
                ออกจากระบบ
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
      {header && (
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {header}
          </div>
        </header>
      )}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
