"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eraser } from "lucide-react";

const CalculatorPage = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        // Avoid using eval, but for a simple calculator it's a quick solution.
        // For a production app, a proper parser should be implemented.
        const evalResult = eval(input.replace(/×/g, "*").replace(/÷/g, "/"));
        setResult(String(evalResult));
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "C", "DEL", "÷", "×",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "0", ".",
  ];

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] font-bengali">
      <Card className="w-full max-w-xs shadow-2xl">
        <CardHeader>
          <CardTitle className="text-center">ক্যালকুলেটর</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted rounded-lg p-4 mb-4 text-right">
            <div className="text-muted-foreground text-sm h-6 truncate">{input}</div>
            <div className="text-3xl font-bold h-10 truncate">{result || (input || "0")}</div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {buttons.map((btn) => (
              <Button
                key={btn}
                onClick={() => handleButtonClick(btn)}
                variant={
                  ["=", "+", "-", "×", "÷"].includes(btn) ? "default" : "outline"
                }
                className={`text-xl h-14 ${
                  btn === "C" ? "col-span-1 text-destructive" : ""
                } ${btn === "DEL" ? "col-span-1" : ""}
                ${btn === "=" ? "col-span-2" : ""}
                ${btn === "0" ? "col-span-2" : ""}`}
              >
                {btn === "DEL" ? <Eraser /> : btn}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalculatorPage;
