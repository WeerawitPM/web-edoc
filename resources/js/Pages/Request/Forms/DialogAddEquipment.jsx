import { addEquipment } from "@/Store/equipmentSlice";
import { AddIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Textarea,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { useForm, usePage } from "@inertiajs/react";
import { Divider } from "@nextui-org/react";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const DialogAddEquipment = ({
  title = "Add Item",
  description = "Are you sure? You can't undo this action afterwards.",
  problem = [],
  asset = [],
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const dispatch = useDispatch();

  const { data, setData, post, errors, processing, recentlySuccessful } =
    useForm({
      // problem: "0",
      asset: "0",
      remark: "-",
      qty: 1,
    });

  const handleSave = (e) => {
    e.preventDefault();
    // post(route("request.equipment_store"));
    // let problemObj = problem.find((i) => i.id === parseInt(data.problem));
    let assetObj = asset.find((i) => i.id === parseInt(data.asset));
    dispatch(
      addEquipment({
        // problem: problemObj,
        asset: assetObj,
        remark: data.remark,
        qty: data.qty,
      })
    );
    onClose();
  };

  return (
    <>
      <IconButton color={"blue"} icon={<AddIcon />} onClick={onOpen} />
      <form>
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
                  {/* <>
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
                  </> */}
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
                      <FormLabel>
                        Device Specification/Software version
                      </FormLabel>
                      <Textarea
                        required
                        placeholder="Device Specification/Software version"
                        size="md"
                        value={data.remark}
                        onChange={e => setData("remark", e.target.value)}
                      />
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
                <Button colorScheme="blue" onClick={handleSave} ml={3}>
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
