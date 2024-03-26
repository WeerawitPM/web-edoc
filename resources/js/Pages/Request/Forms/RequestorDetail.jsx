import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { usePage } from "@inertiajs/react";

const RequestorDetail = ({ mustVerifyEmail, status, className = "" }) => {
  // const userAth = usePage().props.auth.user;
  const user = usePage().props.obj;

  console.dir(user)

  return (
    <section className={className}>
      <header>
        <h2 className="text-lg font-medium text-gray-900">
          Profile Information
        </h2>
      </header>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 pt-4">
        <>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" readOnly value={user.name}/>
          </FormControl>
        </>
        <>
          <FormControl>
            <FormLabel>Emp ID.</FormLabel>
            <Input type="text" readOnly value={user.emp_code}/>
          </FormControl>
        </>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 pt-4">
        <>
          <FormControl>
            <FormLabel>Company</FormLabel>
            <Input type="text" readOnly value={user.companies_ids.name}/>
          </FormControl>
        </>
        <>
          <FormControl>
            <FormLabel>Position</FormLabel>
            <Input type="text" readOnly value={user.position_ids.name}/>
          </FormControl>
        </>
        <>
          <FormControl>
            <FormLabel>Department/Section</FormLabel>
            <Input type="text" readOnly value={user.depart_ids.name}/>
          </FormControl>
        </>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 pt-4">
        <>
          <FormControl>
            <FormLabel>Telephone/Mobile No.</FormLabel>
            <Input htmlSize={50} width={"auto"} type="text" readOnly value={user.telephone_no}/>
          </FormControl>
        </>
      </div>
    </section>
  );
};

export default RequestorDetail;
