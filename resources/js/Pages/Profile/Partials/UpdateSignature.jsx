import { Image } from "@chakra-ui/react";
import { Tooltip } from "@nextui-org/react";
import { useRef } from "react";
import { useForm, usePage } from "@inertiajs/react";

const UpdateSignature = ({ mustVerifyEmail, status, className }) => {
  const inputFileRef = useRef();
  const user = usePage().props.auth.user;
  const { data, setData, patch, errors, processing, recentlySuccessful } =
    useForm({
      user_id: user.id,
      signature_img: "https://via.placeholder.com/150",
    });

  return (
    <section className={className}>
      <Tooltip content="คลิกที่นี้เพื่อเปลี่ยนลายเซนต์">
        <Image
          src="gibbresh.png"
          fallbackSrc={data.signature_img}
          className="w-36 h-36 text-large hover:cursor-pointer"
          onClick={(e) => inputFileRef.current.click()}
        />
      </Tooltip>
      <input
        type="file"
        ref={inputFileRef}
        onChange={(e) => setData("signature_img", e.target.files[0])}
        style={{ display: "none" }}
        id="avatar_id"
      />
    </section>
  );
};

export default UpdateSignature;
