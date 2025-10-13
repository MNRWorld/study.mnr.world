"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { allData } from "@/lib/data/_generated";
import ExternalLink from "./common/ExternalLink";

interface GstUniversity {
  id: string;
  nameBn: string;
  shortName: string;
}

const GstSeatInfo = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const gstUniversities: GstUniversity[] = allData.universities.filter((uni) =>
    uni.category.includes("গুচ্ছ"),
  );

  const filteredUniversities = gstUniversities.filter(
    (uni) =>
      uni.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.shortName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div
      id="Subjects"
      className="mt-4 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg text-center relative"
    >
      <div className="flex justify-center">
        <div className="gradient-background inline-block px-6 py-2 text-primary-foreground rounded-full text-lg mb-4 font-bold shadow-md">
          গুচ্ছভুক্ত বিশ্ববিদ্যালয়ের বিষয় ও আসন সংখ্যা
        </div>
      </div>

      <div className="relative mb-4">
        <Input
          type="text"
          placeholder="🔎 বিশ্ববিদ্যালয় খুঁজুন..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-8"
        />
      </div>

      <Table className="border rounded-md">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center w-1/2">বিশ্ববিদ্যালয়</TableHead>
            <TableHead className="text-center w-1/2">লিংক</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUniversities.map((uni) => (
            <TableRow key={uni.id} className="text-center">
              <TableCell className="font-bold">{uni.nameBn}</TableCell>
              <TableCell>
                <ExternalLink href={`/${uni.id}#Subjects`} text="[দেখুন]" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default GstSeatInfo;
