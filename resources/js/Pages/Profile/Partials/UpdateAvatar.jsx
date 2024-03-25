import { useRef } from "react";

const UserAvatar = () => {
  const inputFileRef = useRef()
  return (
    <>
      <Avatar
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        className="w-36 h-36 text-large hover:cursor-pointer"
        onClick={(e) => inputFileRef.current.click()}
      />
      <input
        type="file"
        ref={inputFileRef}
        onChange={(e) => setData("avatar_img", e.target.files[0])}
        style={{ display: "none" }}
        id="avatar_id"
      />
    </>
  );
};

export default UserAvatar;
