import { DeleteIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  IconButton,
  useDisclosure
} from "@chakra-ui/react";
import { useRef } from "react";
import { deleteEquipment } from "@/Store/equipmentSlice";
import { useDispatch } from "react-redux";

const ConfirmDeleteEquipment = ({
  title = "Confirm Delete",
  description = "Are you sure? You can't undo this action afterwards.",
  obj={}
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const dispatch = useDispatch();

  const handlerDelete = e => {
    e.preventDefault();
    console.dir(obj)
    dispatch(deleteEquipment(obj));
    onClose();
  }
  return (
    <>
      <IconButton color={"red"} icon={<DeleteIcon />} onClick={onOpen} />
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {title}
            </AlertDialogHeader>
            <AlertDialogBody>{description}</AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handlerDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ConfirmDeleteEquipment;
