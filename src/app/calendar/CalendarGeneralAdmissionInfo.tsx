"use client";
import GeneralAdmissionInfoTable from "@/components/common/GeneralAdmissionInfoTable";

const CalendarGeneralAdmissionInfo = () => {
  return (
    <div
      id="Info"
      className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg relative text-left"
    >
      <GeneralAdmissionInfoTable />
    </div>
  );
};

export default CalendarGeneralAdmissionInfo;
