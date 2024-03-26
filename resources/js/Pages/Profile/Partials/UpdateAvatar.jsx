import { useRef } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { Avatar, Tooltip } from "@nextui-org/react";

const UserAvatar = ({ mustVerifyEmail, status, className }) => {
  const inputFileRef = useRef();
  const user = usePage().props.auth.user;

  const { data, setData, patch, errors, processing, recentlySuccessful } =
    useForm({
      user_id: user.id,
      avatar_img: "https://i.pravatar.cc/150?u=a04258114e29026708c",
    });

  return (
    <section className={className}>
      <div className="pt-4 flex justify-center items-center">
        <Tooltip content="คลิกที่รูปโปรไฟล์เพื่อเปลี่ยนใหม่">
          <Avatar
            src={data.avatar_img}
            className="w-36 h-36 text-large hover:cursor-pointer"
            onClick={(e) => inputFileRef.current.click()}
          />
        </Tooltip>
        <input
          type="file"
          ref={inputFileRef}
          onChange={(e) => setData("avatar_img", e.target.files[0])}
          style={{ display: "none" }}
          id="avatar_id"
        />
      </div>
    </section>
  );
};

export default UserAvatar;
