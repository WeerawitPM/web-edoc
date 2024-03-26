import PrimaryButton from "@/Components/PrimaryButton";
import { Divider} from "@nextui-org/react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Stack,
  Select,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

export default function UpdateProfileInformation({
  mustVerifyEmail,
  status,
  className = "",
}) {
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
      <form onSubmit={submit} className="mt-6 space-y-6">
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                required
              />
              <FormHelperText>{errors.name}.</FormHelperText>
            </FormControl>
          </>
          <>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                required
              />
              <FormHelperText>{errors.email}.</FormHelperText>
            </FormControl>
          </>
        </div>
        <Divider />
        <Stack>
          <FormControl>
            <FormLabel>Emp ID</FormLabel>
            <Input
              htmlSize={50}
              width="auto"
              type="text"
              value={data.emp_code}
              onChange={(e) => setData("emp_code", e.target.value)}
            />
            <FormHelperText>{errors.emp_code}.</FormHelperText>
          </FormControl>
        </Stack>
        <Stack>
        <FormControl>
            <FormLabel>Phone/Mobile No.</FormLabel>
            <Input
              htmlSize={50}
              width="auto"
              type="text"
              value={data.telephone_no}
              onChange={(e) => setData("telephone_no", e.target.value)}
            />
            <FormHelperText>{errors.telephone_no}.</FormHelperText>
          </FormControl>
        </Stack>
        <Divider />
        <div className="flex gap-4">
          <>
            <Tooltip content="ข้อมูลตำแหน่ง">
              <Select
                icon={<ChevronDownIcon />}
                placeholder="Select Position"
                size={"md"}
                value={data.position_id}
                onChange={(e) => setData("position_id", e.target.value)}
              >
                {position.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </Select>
            </Tooltip>
          </>
          <>
            <Tooltip content="ข้อมูลแผนก">
              <Select
                icon={<ChevronDownIcon />}
                placeholder="Select Department"
                size={"md"}
                value={data.depart_id}
                onChange={(e) => setData("depart_id", e.target.value)}
              >
                {department.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </Select>
            </Tooltip>
          </>
          <>
            <Tooltip content="ข้อมูลฝ่าย">
              <Select
                icon={<ChevronDownIcon />}
                placeholder="Select Section"
                size={"md"}
                value={data.section_id}
                onChange={(e) => setData("section_id", e.target.value)}
              >
                {section.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </Select>
            </Tooltip>
          </>
          <>
            <Tooltip content="ข้อมูลบริษัท">
              <Select
                icon={<ChevronDownIcon />}
                placeholder="Select Companies"
                size={"md"}
                value={data.companies_id}
                onChange={(e) => setData("companies_id", e.target.value)}
              >
                {companies.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </Select>
            </Tooltip>
          </>
        </div>
        <Divider />
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
      {/* <Divider />
      <>
        <Image
          fill={true}
          placeholder="blur"
          loading="lazy"
          width={200}
          height={200}
          src="/signature_001.png"
          alt="NextUI hero Image"
          onClick={(e) => inputFileSignatureRef.current.click()}
          className="hover:cursor-pointer"
        />
        <input
          type="file"
          ref={inputFileSignatureRef}
          onChange={(e) => setData("signature", e.target.files[0])}
          style={{ display: "none" }}
          id="avatar_id"
        />
      </> */}
    </section>
  );
}
