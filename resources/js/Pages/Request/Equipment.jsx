import Layout from "@/Layouts/Layout";
import { AddIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { Head } from "@inertiajs/react";
import {
  Divider,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Link,
  Tooltip,
} from "@nextui-org/react";

const Equipment = ({ auth, mustVerifyEmail, status }) => {
  return (
    <Layout
      user={auth.user}
      header={
        <div className="flex justify-between">
          <div className="justify-start">
            <span className="font-semibold text-md text-gray-800 leading-tight">
              1.QF-TC-0001 ใบร้องขออุปกรณ์สารสนเทศ
            </span>
          </div>
          <div className="justify-end">
            <Link href={route("request.equipment_add")}>
              <Button
                leftIcon={<AddIcon />}
                colorScheme="teal"
                variant="solid"
                size="sm"
              >
                เพิ่มรายการร้องขอ
              </Button>
            </Link>
          </div>
        </div>
      }
    >
      <Head title="1.QF-ITC-0001 ใบร้องขออุปกรณ์สารสนเทศ" />
      <Divider />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>#</TableColumn>
              <TableColumn>Doc No.</TableColumn>
              <TableColumn>Request Date</TableColumn>
              <TableColumn>Request By</TableColumn>
              <TableColumn>Title</TableColumn>
              <TableColumn>Description</TableColumn>
              <TableColumn>Status</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="0">
                <TableCell>1</TableCell>
                <TableCell>
                  <Tooltip content="QFXXXX">
                    <Link href="#">QF4030001</Link>
                  </Tooltip>
                </TableCell>
                <TableCell>21/03/2024</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>
                  Adipisicing adipisicing incididunt voluptate...
                </TableCell>
                <TableCell>
                  <span className="text-success">Approved</span>
                </TableCell>
              </TableRow>
              <TableRow key="1">
                <TableCell>2</TableCell>
                <TableCell>
                  <Link href="#">QF4030002</Link>
                </TableCell>
                <TableCell>21/03/2024</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>
                  Adipisicing adipisicing incididunt voluptate...
                </TableCell>
                <TableCell>
                  <span className="text-warning">Wait Approved</span>
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>3</TableCell>
                <TableCell>
                  <Link href="#">QF4030003</Link>
                </TableCell>
                <TableCell>21/03/2024</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>
                  Adipisicing adipisicing incididunt voluptate...
                </TableCell>
                <TableCell>
                  <span className="text-danger">Reject</span>
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>4</TableCell>
                <TableCell>
                  <Link href="#">QF4030004</Link>
                </TableCell>
                <TableCell>21/03/2024</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>
                  Adipisicing adipisicing incididunt voluptate...
                </TableCell>
                <TableCell>
                  <span className="text-info">Draff</span>
                </TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>5</TableCell>
                <TableCell>
                  <Link href="#">QF4030005</Link>
                </TableCell>
                <TableCell>21/03/2024</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>
                  Adipisicing adipisicing incididunt voluptate...
                </TableCell>
                <TableCell>
                  <span className="text-secondary">Accepted</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  );
};

export default Equipment;
