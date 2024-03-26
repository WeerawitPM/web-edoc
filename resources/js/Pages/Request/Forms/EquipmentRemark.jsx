import { AddIcon } from "@chakra-ui/icons";
import { Button, Text, Textarea } from "@chakra-ui/react";

const EquipmentRemark = ({ mustVerifyEmail, status, className = "" }) => {
  return (
    <section className={className}>
      <>
        <Text mb="8px">Purpose Of Usage</Text>
        <Textarea placeholder="Please write in detail." size="md" />
      </>
      <div className="pt-4">
        <Text mb="8px">Device Specification/Software version</Text>
        <Textarea
          placeholder="Device Specification/Software version"
          size="md"
        />
      </div>
      <div className="flex justify-between pt-4">
        <div></div>
        <div className="justify-end">
          <Button colorScheme="blue" leftIcon={<AddIcon />} variant="solid">
            Save
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EquipmentRemark;
