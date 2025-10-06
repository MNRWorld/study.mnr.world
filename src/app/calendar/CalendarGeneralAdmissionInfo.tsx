
"use client";
import GeneralAdmissionInfoTable from "@/components/common/GeneralAdmissionInfoTable";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const CalendarGeneralAdmissionInfo = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div
      id="Info"
      className="mt-4 w-full"
    >
      <div className="relative my-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="বিশ্ববিদ্যালয় খুঁজুন..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 h-12 text-base bg-card border"
        />
      </div>
      <GeneralAdmissionInfoTable searchTerm={searchTerm} />
    </div>
  );
};

export default CalendarGeneralAdmissionInfo;
