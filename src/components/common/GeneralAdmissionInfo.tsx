"use client";
import { Info } from "lucide-react";
import GeneralAdmissionInfoTable from "./GeneralAdmissionInfoTable";

const GeneralAdmissionInfo = () => {
  return (
    <div
      id="Info"
      className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative text-left"
    >
      <div className="flex justify-center">
        <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">
          <Info className="inline-block mr-2" />
          সাধারণ তথ্য
        </div>
      </div>
      <GeneralAdmissionInfoTable />
    </div>
  );
};

export default GeneralAdmissionInfo;
