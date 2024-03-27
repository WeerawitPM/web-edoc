import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useSelector } from "react-redux"
import ConfirmDeleteEquipment from "./ConfirmDeleteEquipment";
import DialogAddEquipment from "./DialogAddEquipment";

const AddEquipmentItem = ({
  mustVerifyEmail,
  status,
  className = "",
  id = "",
  purpose_text,
  remark,
  problem = [],
  asset = [],
}) => {
  const count = useSelector((state) => state.equipment.qty)
  const equipmentListData = useSelector((state) => state.equipment)
  console.dir(equipmentListData)

  return (
    <section className={className}>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>IT equipment Request List {count}</TableCaption>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Type</Th>
              <Th>Title</Th>
              <Th isNumeric>Qty</Th>
              <Th>
                <DialogAddEquipment
                  purpose_text={purpose_text}
                  remark={remark}
                  problem={problem}
                  asset={asset}
                />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>
                <ConfirmDeleteEquipment />
              </Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
              <Td>
                <ConfirmDeleteEquipment />
              </Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>914</Td>
              <Td>
                <ConfirmDeleteEquipment />
              </Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>#</Th>
              <Th>Type</Th>
              <Th>Title</Th>
              <Th isNumeric>Sum</Th>
              <Th></Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </section>
  );
};

export default AddEquipmentItem;
