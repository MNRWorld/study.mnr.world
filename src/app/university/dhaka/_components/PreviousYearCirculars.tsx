
'use client';

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

const PreviousYearCirculars = () => {
    const [infoBoxVisible, setInfoBoxVisible] = useState(false);
    const toggleInfoBox = () => setInfoBoxVisible(!infoBoxVisible);

    return (
        <>
            <Button variant="outline" className="text-primary border-primary flex-1 min-w-[150px] hover:bg-primary hover:text-primary-foreground" onClick={toggleInfoBox}>
                    পূর্ববর্তী বছরের সার্কুলার <ChevronRight size={16} className="ml-2"/>
            </Button>
            {infoBoxVisible && (
                <div className="mt-[15px] p-[15px] border border-border border-l-4 border-l-primary bg-accent rounded-md text-left w-full">
                     ● <a href="https://t.me/Study_on_Telegram/2036" target="_blank" className="text-primary hover:underline"> DU Circular 2021-22 (All Unit)</a><br/>
                     ● <a href="https.t.me/Study_on_Telegram/8022?single" target="_blank" className="text-primary hover:underline"> DU Circular 2022-23 (All Unit)</a><br/>
                     ● <a href="https.t.me/Study_on_Telegram/11073?single" target="_blank" className="text-primary hover:underline"> DU Circular 2023-24 (All Unit)</a>
                </div>
            )}
        </>
    );
}

export default PreviousYearCirculars;
