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
  Edit,
  Email,
  DomainName,
  Cancel,
  Stack,
  FolderDownload,
  AddPlus,
  Chat,
  TimeHistory,
  NetworkWifi,
  QRCodeScanner,
  Printer,
  Firewall,
  CameraCCTV,
  FingerPrinter,
  RollBack,
  CheckList,
} from "@/Components/Icons";
import { AcmeLogo } from "@/Components/AcmeLogo";
import CustomDropdownMenu from "@/Components/CustomDropdownMenu";
import { SearchIcon } from "@/Components/SearchIcon";

const Layout = ({ user, header, children }) => {
  const [isInvisible, setIsInvisible] = React.useState(false);
  // const icons = {
  //   chevron: <ChevronDown fill="currentColor" size={16} />,
  //   scale: <Scale className="text-warning" fill="currentColor" size={30} />,
  //   edit: <Edit className="text-primary" fill="currentColor" size={30} />,
  //   lock: <Lock className="text-success" fill="currentColor" size={30} />,
  //   activity: (
  //     <Activity className="text-secondary" fill="currentColor" size={30} />
  //   ),
  //   flash: <Flash className="text-primary" fill="currentColor" size={30} />,
  //   server: <Server className="text-success" fill="currentColor" size={30} />,
  //   user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  //   email: <Email className="text-secondary" fill="currentColor" size={30} />,
  //   domain: (
  //     <DomainName className="text-warning" fill="currentColor" size={30} />
  //   ),
  //   cancel_mail: (
  //     <Server className="text-danger" fill="currentColor" size={30} />
  //   ),
  //   history: <Stack className="text-secondary" fill="currentColor" size={30} />,
  //   withdraw: (
  //     <FolderDownload className="text-warning" fill="currentColor" size={30} />
  //   ),
  //   add: <AddPlus className="text-warning" fill="currentColor" size={30} />,
  //   chat: <Chat className="text-success" fill="currentColor" size={30} />,
  // };

  const menuRequest = [
    {
      description: "ใบร้องขออุปกรณ์สารสนเทศ",
      startContent: (
        <Edit className="text-primary" fill="currentColor" size={30} />
      ),
      title: "QF-ITC-0001",
    },
    {
      description: "ใบแจ้งซอมอุปกรณ์สารสนเทศ",
      startContent: (
        <Chat className="text-secondary" fill="currentColor" size={30} />
      ),
      title: "QF-ITC-0002",
    },
    {
      description: "แบบคำร้องขอเพิ่มระบบและแก้ไขปรับปรุงระบบ",
      startContent: (
        <AddPlus className="text-success" fill="currentColor" size={30} />
      ),
      title: "QF-ITC-0003",
    },
    {
      description: "แบบคำร้องขอใช้งานอีเมล",
      startContent: (
        <Email className="text-warning" fill="currentColor" size={30} />
      ),
      title: "QF-ITC-0005",
    },
    {
      description: "แบบคำร้องขอใช้งานระบบ Domain",
      startContent: (
        <DomainName className="text-secondary" fill="currentColor" size={30} />
      ),
      title: "QF-ITC-0006",
    },
    {
      description: "แบบคำร้องขอยกเลิกโดเมน อีเมล",
      startContent: (
        <DomainName className="text-danger" fill="currentColor" size={30} />
      ),
      title: "QF-ITC-0007",
    },
    {
      description: "ใบขอยืมใช้อุปกรณ์สารสนเทศของส่วนกลาง",
      startContent: (
        <Server className="text-success" fill="currentColor" size={30} />
      ),
      title: "QF-ITC-0009",
    },
    {
      description: "ใบขอเบิกอุปกรณ์ไอที",
      startContent: (
        <FolderDownload className="text-primary" fill="currentColor" size={30} />
      ),
      title: "QF-ITC-0010",
    },
  ];

  const menuRegister = [
    {
      description: "ใบทะเบียนประวัติอุปกรณ์สารสนเทศ",
      startContent: (
        <Stack className="text-primary" fill="currentColor" size={30} />
      ),
      title: "QF-ITC-0004",
    },
    {
      description: "ใบทะเบียนประวัติ MA",
      startContent: (
        <TimeHistory className="text-success" fill="currentColor" size={30} />
      ),
      title: "QF-ITC-0004",
    },
  ]

  const menuPlan = [
    {
      description: "Weekly Check Sheet Backup",
      startContent: (
        <Stack className="text-primary" fill="currentColor" size={30} />
      ),
      title: "QF-ITC-0008",
    },
    {
      description: "แบบฟอร์มการตรวจสอบด้านเครื่องคอมพิวเตอร์แม่ข่าย (SERVER)",
      startContent: (
        <Server className="text-success" fill="currentColor" size={30} />
      ),
      title: "QF-ITC-0011",
    },
    {
      description: "Check List อุปกรณ์สำรองข้อมูล",
      startContent: (
        <Stack className="text-secondary" fill="currentColor" size={30} />
      ),
      title: "QF-ITC-0012",
    },// QF-ITC-0012 Check List อุปกรณ์สำรองข้อมูล
    {
      description: "แบบฟอร์มการตรวจสอบด้านระบบเครื่อข่าย (Network)",
      startContent: (
        <NetworkWifi className="text-danger" fill="currentColor" size={30} />
      ),
      title: "QF-ITC-0013",
    },// QF-ITC-0013 แบบฟอร์มการตรวจสอบด้านระบบเครื่อข่าย (Network)
    {
      description: "HANHELD & SCANNER MAINTENANCE CHECK LIST",
      startContent: (
        <QRCodeScanner className="text-info" fill="currentColor" size={30} />
      ),
      title: "QF-ITC-0014",
    },// QF-ITC-0014 HANHELD & SCANNER MAINTENANCE CHECK LIST
    {
      description: "UPS SERVER MAINTENANCE CHECK LIST",
      startContent: (
        <Stack className="text-success" fill="currentColor" size={30} />
      ),
      title: "QF-ITC-0015",
    },// QF-ITC-0015 UPS SERVER MAINTENANCE CHECK LIST
    {
      description: "PRINTTER DOT MATRIX MAINTENANCE CHECK LIST",
      startContent: (
        <Printer className="text-warning" fill="currentColor" size={30} />
      ),
      title: "QF-ITC-0016",
    },// QF-ITC-0016 PRINTTER DOT MATRIX MAINTENANCE CHECK LIST
    {
      description: "แบบฟอร์มการตรวจสอบตำนอุปกรณ์ป้องกันการโจมตีผ่านระบบเคร็อขาย (Firewall)",
      startContent: (
        <FingerPrinter className="text-danger" fill="currentColor" size={30} />
      ),
      title: "QF-ITC-0017",
    },// QF-ITC-0017 แบบฟอร์มการตรวจสอบตำนอุปกรณ์ป้องกันการโจมตีผ่านระบบเคร็อขาย (Firewall)
    {
      description: "CCTV MAINTENANCE CHECK LIST",
      startContent: (
        <CameraCCTV className="text-secondary" fill="currentColor" size={30} />
      ),
      title: "QF-ITC-0018",
    },// QF-ITC-0018 CCTV MAINTENANCE CHECK LIST
    {
      description: "Data Backup Plan",
      startContent: (
        <Stack className="text-primary" fill="currentColor" size={30} />
      ),
      title: "QF-ITC-0019",
    },// QF-ITC-0019 Data Backup Plan
    {
      description: "แบบฟอมบันทึกผลการสำรองข้อมูล",
      startContent: (
        <CheckList className="text-success" fill="currentColor" size={30} />
      ),
      title: "QF-ITC-0020",
    },// QF-ITC-0020 แบบฟอมบันทึกผลการสำรองข้อมูล
    {
      description: "Checklist ของการกู้คืนบริการระบบสารสนเทศ",
      startContent: (
        <RollBack className="text-secondary" fill="currentColor" size={30} />
      ),
      title: "QF-ITC-0021",
    },// QF-ITC -0021 Checklist ของการกู้คืนบริการระบบสารสนเทศ
  ]

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
          <CustomDropdownMenu
            title="แบบฟอร์มร้องขอ"
            menus={menuRequest}
          />
          <CustomDropdownMenu
            title="แบบฟอร์มลงทะเบียน"
            menus={menuRegister}
          />
          <CustomDropdownMenu
            title="แผนการทำงาน"
            menus={menuPlan}
          />
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
