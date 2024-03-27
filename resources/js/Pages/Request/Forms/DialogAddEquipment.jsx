import { AddIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  IconButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { Divider } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/Store/equipmentSlice'

const DialogAddEquipment = ({
  id = null,
  title = "Add Item",
  description = "Are you sure? You can't undo this action afterwards.",
  purpose_text = "",
  remark = "",
  problem = [],
  asset = [],
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const user = usePage().props.auth.user;
  const dispatch = useDispatch()

  const { data, setData, post, errors, processing, recentlySuccessful } =
    useForm({
      id: id,
      purpose: purpose_text,
      remark: remark,
      user_id: user.id,
      problem: "0",
      asset: "0",
      qty: 1,
    });

  const handleSave = (e) => {
    e.preventDefault();
    post(route("request.equipment_store"));
    onClose();
  };

  return (
    <>
      <IconButton color={"blue"} icon={<AddIcon />} onClick={onOpen} />
      <form onSubmit={handleSave}>
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
              <AlertDialogBody>
                <Divider />
                <div className="pt-4 flex flex-wrap gap-0">
                  <>
                    <FormControl>
                      <FormLabel>Select Type</FormLabel>
                      <Select
                        placeholder="Select"
                        value={data.problem}
                        onChange={(e) => setData("problem", e.target.value)}
                      >
                        {problem?.map((i) => (
                          <option key={i.id} value={i.id}>
                            {i.name}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                  </>
                  <>
                    <FormControl className="pt-4">
                      <FormLabel>Select Asset</FormLabel>
                      <Select
                        placeholder="Select"
                        value={data.asset}
                        onChange={(e) => setData("asset", e.target.value)}
                      >
                        {asset?.map((i) => (
                          <option key={i.id} value={i.id}>
                            {i.name}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                  </>
                  <>
                    <FormControl className="pt-4">
                      <FormLabel>Quality</FormLabel>
                      <Input
                        type="number"
                        value={data.qty}
                        onChange={(e) => setData("qty", e.target.value)}
                      />
                    </FormControl>
                  </>
                </div>
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                {/* <Button type="submit" colorScheme="blue" onClick={handleSave} ml={3}>
                  Save
                </Button> */}
                <Button colorScheme="blue" onClick={() => dispatch(increment({
                  problem_id: 0,
                  problem_name: "python",
                  asset_id: 0,
                  asset_name: "-0-",
                  qty: 100,
                }))} ml={3}>
                  Save
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </form>
    </>
  );
};

export default DialogAddEquipment;
