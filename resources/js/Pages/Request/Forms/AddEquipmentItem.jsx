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
import { useSelector } from "react-redux";
import ConfirmDeleteEquipment from "./ConfirmDeleteEquipment";
import DialogAddEquipment from "./DialogAddEquipment";

const AddEquipmentItem = ({
  mustVerifyEmail,
  status,
  className = "",
  problem = [],
  asset = [],
}) => {
  const equipmentListData = useSelector((state) => state.equipment.data);
  console.dir(equipmentListData);

  return (
    <section className={className}>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>IT equipment Request List {equipmentListData?.length}</TableCaption>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Asset</Th>
              <Th>Description</Th>
              <Th isNumeric>Qty</Th>
              <Th>
                <DialogAddEquipment problem={problem} asset={asset} />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {equipmentListData?.map((i, x) => (
              <Tr key={i.id}>
                <Td>{x + 1}</Td>
                <Td>{i.asset.name}</Td>
                <Td>{i.remark}</Td>
                <Td isNumeric>{i.qty}</Td>
                <Td>
                  <ConfirmDeleteEquipment obj={i} title={`Confirm Delete ${i.name}!`}/>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>#</Th>
              <Th>Asset</Th>
              <Th>Description</Th>
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
