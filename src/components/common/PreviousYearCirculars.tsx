
'use client';

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import ExternalLink from "./ExternalLink";

const PreviousYearCirculars = () => {
    const [infoBoxVisible, setInfoBoxVisible] = useState(false);
    const toggleInfoBox = () => setInfoBoxVisible(!infoBoxVisible);

    const circulars = [
        { href: "https://t.me/Study_on_Telegram/2036", text: "DU Circular 2021-22 (All Unit)" },
        { href: "https://t.me/Study_on_Telegram/8022?single", text: "DU Circular 2022-23 (All Unit)" },
        { href: "https://t.me/Study_on_Telegram/11073?single", text: "DU Circular 2023-24 (All Unit)" }
    ];

    return (
        <>
            <Button variant="outline" className="text-primary border-primary flex-1 min-w-[150px] hover:bg-primary hover:text-primary-foreground" onClick={toggleInfoBox}>
                    পূর্ববর্তী বছরের সার্কুলার <ChevronRight size={16} className="ml-2"/>
            </Button>
            {infoBoxVisible && (
                <div className="mt-[15px] p-[15px] border border-border border-l-4 border-l-primary bg-accent rounded-md text-left w-full text-sm sm:text-base animate-accordion-down">
                     {circulars.map((circular, index) => (
                        <React.Fragment key={index}>
                            ● <ExternalLink href={circular.href} text={circular.text} />
                            {index < circulars.length - 1 && <br/>}
                        </React.Fragment>
                     ))}
                </div>
            )}
        </>
    );
}

export default PreviousYearCirculars;
