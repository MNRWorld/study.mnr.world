
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Calculator as CalculatorIcon, Eraser } from "lucide-react";

const GpaCalculatorPage = () => {
  const [sscGpa, setSscGpa] = useState("");
  const [hscGpa, setHscGpa] = useState("");
  const [includeSsc4th, setIncludeSsc4th] = useState(true);
  const [includeHsc4th, setIncludeHsc4th] = useState(true);
  const [result, setResult] = useState<{
    ssc: number;
    hsc: number;
    total: number;
  } | null>(null);

  const calculateGpa = () => {
    const ssc = parseFloat(sscGpa);
    const hsc = parseFloat(hscGpa);

    if (isNaN(ssc) || isNaN(hsc) || ssc > 5 || hsc > 5 || ssc < 1 || hsc < 1) {
      alert("অনুগ্রহ করে ১ থেকে ৫ এর মধ্যে সঠিক GPA ইনপুট দিন।");
      return;
    }

    const finalSscGpa = includeSsc4th ? ssc : Math.min(5, ssc);
    const finalHscGpa = includeHsc4th ? hsc : Math.min(5, hsc);

    setResult({
      ssc: finalSscGpa,
      hsc: finalHscGpa,
      total: finalSscGpa + finalHscGpa,
    });
  };

  const clearFields = () => {
    setSscGpa("");
    setHscGpa("");
    setResult(null);
  };

... (remaining file content omitted for brevity) ...
