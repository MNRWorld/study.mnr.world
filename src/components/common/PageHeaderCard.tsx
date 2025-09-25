
'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import React, { useState } from 'react';

interface PageHeaderCardProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description: string;
    stats: {
        value: string;
        label: string;
        tooltip?: string;
    }[];
    button?: {
        href: string;
        label: string;
        icon?: React.ReactNode;
    }
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};

const PageHeaderCard = ({ icon, title, subtitle, description, stats, button }: PageHeaderCardProps) => {
    const [openTooltip, setOpenTooltip] = useState<string | null>(null);
    return (
        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mt-20 w-full border border-border bg-card rounded-2xl p-4 sm:p-8 shadow-lg text-center relative"
        >
            <div className="w-20 h-20 sm:w-24 sm:h-24 absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 bg-card rounded-2xl shadow-xl z-10 flex items-center justify-center p-1">
                {icon}
            </div>
            <div className="pt-10 sm:pt-12">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold my-2 text-foreground">
                    {title}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mb-4">
                    ({subtitle})
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
                    {description}
                </p>
            </div>
            {stats && stats.length > 0 && (
                 <div className="flex justify-around items-center mb-6 text-sm max-w-md mx-auto">
                    <TooltipProvider>
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center px-2">
                            <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground flex items-center justify-center">
                                {stat.value}
                                {stat.tooltip && (
                                    <Tooltip open={openTooltip === stat.label} onOpenChange={(isOpen) => setOpenTooltip(isOpen ? stat.label : null)}>
                                        <TooltipTrigger asChild>
                                            <i 
                                                className="fa-solid fa-circle-info text-muted-foreground text-xs ml-1.5 cursor-help"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setOpenTooltip(openTooltip === stat.label ? null : stat.label);
                                                }}
                                            ></i>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p dangerouslySetInnerHTML={{ __html: stat.tooltip }} />
                                        </TooltipContent>
                                    </Tooltip>
                                )}
                            </div>
                            <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">{stat.label}</div>
                        </div>
                    ))}
                    </TooltipProvider>
                 </div>
            )}
            {button && (
                <Button asChild className="transition-transform hover:scale-105 rounded-[8px]">
                    <Link href={button.href}>
                        {button.icon || <Info size={16} />} {button.label}
                    </Link>
                </Button>
            )}
        </motion.div>
    );
};

export default PageHeaderCard;
