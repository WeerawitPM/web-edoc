import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import {
  Divider,
  Select,
  SelectItem,
  Button,
  Avatar,
  Image,
} from "@nextui-org/react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { useRef } from "react";

export default function UpdateProfileInformation({
  mustVerifyEmail,
  status,
  className = "",
}) {
  const inputFileRef = useRef(null);
  const inputFileSignatureRef = useRef(null);
  const user = usePage().props.auth.user;

  const { data, setData, patch, errors, processing, recentlySuccessful } =
    useForm({
      name: user.name,
      email: user.email,
      emp_code: user.emp_code,
      position_id: user.position_id,
      depart_id: user.depart_id,
      section_id: user.section_id,
      companies_id: user.companies_id,
      // avatar_img: user.avatar_img,
      // signature: user.signature,
      telephone_no: user.telephone_no,
      is_active: user.is_active,
    });

  const submit = (e) => {
    e.preventDefault();
    patch(route("profile.update"));
  };

  const position = usePage().props.position;
  const department = usePage().props.department;
  const section = usePage().props.section;
  const companies = usePage().props.companies;

  return (
    <section className={className}>
      <header>
        <h2 className="text-lg font-medium text-gray-900">
          Profile Information
        </h2>

        <p className="mt-1 text-sm text-gray-600">
          Update your account's profile information and email address.
        </p>
      </header>

      <form onSubmit={submit} className="mt-6 space-y-6" enctype="multipart/form-data">
        <div className="flex justify-center items-center">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className="w-36 h-36 text-large hover:cursor-pointer"
            onClick={e => inputFileRef.current.click()}
          />
          <input
            type="file"
            ref={inputFileRef}
            onChange={(e) => setData("avatar_img", e.target.files[0])}
            style={{ display: "none" }}
            id="avatar_id"
          />
        </div>
        <>
          <InputLabel htmlFor="name" value="Name" />

          <TextInput
            id="name"
            className="mt-1 block w-full"
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
            required
            isFocused
            autoComplete="name"
          />

          <InputError className="mt-2" message={errors.name} />
        </>

        <>
          <InputLabel htmlFor="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            className="mt-1 block w-full"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
            required
            autoComplete="username"
          />

          <InputError className="mt-2" message={errors.email} />
        </>

        <>
          <InputLabel htmlFor="emp_code" value="Emp. ID" />

          <TextInput
            id="emp_code"
            className="mt-1 block w-full"
            value={data.emp_code}
            onChange={(e) => setData("emp_code", e.target.value)}
            required
          />

          <InputError className="mt-2" message={errors.emp_code} />
        </>
        <Divider />
        <>
          <Select
            label="Position"
            placeholder="Select position"
            selectedKeys={data.position_id}
            onChange={(e) => setData("position_id", e.target.value)}
          >
            {position.map((p) => (
              <SelectItem key={p.id} value={p.id}>
                {p.name}
              </SelectItem>
            ))}
          </Select>
        </>
        <>
          <Select
            label="Department"
            placeholder="Select department"
            selectedKeys={data.depart_id}
            onChange={(e) => setData("depart_id", e.target.value)}
          >
            {department.map((p) => (
              <SelectItem key={p.id} value={p.id}>
                {p.name}
              </SelectItem>
            ))}
          </Select>
        </>
        <>
          <Select
            label="Section"
            placeholder="Select section"
            selectedKeys={data.section_id}
            onChange={(e) => setData("section_id", e.target.value)}
          >
            {section.map((p) => (
              <SelectItem key={p.id} value={p.id}>
                {p.name}
              </SelectItem>
            ))}
          </Select>
        </>
        <>
          <Select
            label="Companies"
            placeholder="Select companies"
            selectedKeys={data.companies_id}
            onChange={(e) => setData("companies_id", e.target.value)}
          >
            {companies.map((p) => (
              <SelectItem key={p.id} value={p.id}>
                {p.name}
              </SelectItem>
            ))}
          </Select>
        </>
        <Divider />
        <>
          <InputLabel htmlFor="telephone_no" value="Phone No." />

          <TextInput
            id="telephone_no"
            className="mt-1 block w-full"
            value={data.telephone_no}
            onChange={(e) => setData("telephone_no", e.target.value)}
          />

          <InputError className="mt-2" message={errors.telephone_no} />
        </>
        <Divider />
        <>
          <Image
            fill={true}
            placeholder="blur"
            loading="lazy"
            width={200}
            height={200}
            src="/signature_001.png"
            alt="NextUI hero Image"
            onClick={e => inputFileSignatureRef.current.click()}
            className="hover:cursor-pointer"
          />
          <input
            type="file"
            ref={inputFileSignatureRef}
            onChange={(e) => setData("signature", e.target.files[0])}
            style={{ display: "none" }}
            id="avatar_id"
          />
        </>
        <>{/* <Checkbox isDisabled defaultSelected>Is Active</Checkbox> */}</>

        {mustVerifyEmail && user.email_verified_at === null && (
          <div>
            <p className="text-sm mt-2 text-gray-800">
              Your email address is unverified.
              <Link
                href={route("verification.send")}
                method="post"
                as="button"
                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Click here to re-send the verification email.
              </Link>
            </p>

            {status === "verification-link-sent" && (
              <div className="mt-2 font-medium text-sm text-green-600">
                A new verification link has been sent to your email address.
              </div>
            )}
          </div>
        )}

        <div className="flex items-center gap-4">
          <PrimaryButton disabled={processing}>Save</PrimaryButton>

          <Transition
            show={recentlySuccessful}
            enter="transition ease-in-out"
            enterFrom="opacity-0"
            leave="transition ease-in-out"
            leaveTo="opacity-0"
          >
            <p className="text-sm text-gray-600">Saved.</p>
          </Transition>
        </div>
      </form>
    </section>
  );
}
