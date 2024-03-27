import { usePage } from "@inertiajs/react";
import { Chip } from "@nextui-org/react";

const RequestorDetail = ({ mustVerifyEmail, status, className = "" }) => {
  // const userAth = usePage().props.auth.user;
  const user = usePage().props.obj;

  return (
    <section className={className}>
      <header>
        <h2 className="text-lg font-medium text-gray-900">
          Profile Information
        </h2>
      </header>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 pt-4">
        <div className="flex justify-start items-start space-x-4">
          <div>
            Name:{" "}
            <Chip color="success" size="xs">
              {user.name}
            </Chip>
          </div>
          <div>
            Emp ID.:{" "}
            {user.emp_code != null ? (
              <Chip color="success" size="xs">
                {user.emp_code}
              </Chip>
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 pt-4">
        <div className="flex justify-start items-start space-x-4">
          <div>
            Company:{" "}
            {user.companies_ids != null ? (
              <Chip color="success" size="xs">
                {user.companies_ids?.name}{" "}
              </Chip>
            ) : (
              "-"
            )}
          </div>
          <div>
            Position:{" "}
            {user.position_ids != null ? (
              <Chip color="success" size="xs">
                {user.position_ids?.name}
              </Chip>
            ) : (
              "-"
            )}
          </div>
          <div>
            Department/Section:{" "}
            {user.depart_ids != null ? (
              <Chip color="success" size="xs">
                {user.depart_ids?.name}
              </Chip>
            ) : (
              "-"
            )}
          </div>
          <div>
            Telephone/Mobile No.:{" "}
            {user.telephone_no != null ? (
              <Chip color="success" size="xs">
                {user.telephone_no}
              </Chip>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestorDetail;
