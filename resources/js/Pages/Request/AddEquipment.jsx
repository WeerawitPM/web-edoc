import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import RequestorDetail from "./Forms/RequestorDetail";
import EquipmentRemark from "./Forms/EquipmentRemark";
import { Divider } from "@nextui-org/react";
import AddEquipmentItem from "./Forms/AddEquipmentItem";

const AddEquipment = ({ auth, mustVerifyEmail, status }) => {
  return (
    <Layout
      user={auth.user}
      header={
        <div className="flex justify-between">
          <div className="justify-start">
            <span className="font-semibold text-md text-gray-800 leading-tight">
              แบบฟอร์มใบร้องขออุปกรณ์สารสนเทศ
            </span>
          </div>
        </div>
      }
    >
      <Head title="แบบฟอร์มใบร้องขออุปกรณ์สารสนเทศ" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
            <div className="pb-4">
              <RequestorDetail
                mustVerifyEmail={mustVerifyEmail}
                status={status}
              />
            </div>
            <Divider />
            <div className="pt-4">
              <EquipmentRemark
                mustVerifyEmail={mustVerifyEmail}
                status={status}
              />
            </div>
          </div>
          <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
            <AddEquipmentItem
              mustVerifyEmail={mustVerifyEmail}
              status={status}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddEquipment;
