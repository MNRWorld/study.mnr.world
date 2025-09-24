
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
    return (
        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mt-20 sm:mt-24 w-full border border-border bg-card rounded-2xl p-6 sm:p-8 shadow-lg text-center relative"
        >
            <div className="w-24 h-24 absolute -top-12 left-1/2 -translate-x-1/2 bg-card rounded-2xl shadow-xl z-10 flex items-center justify-center">
                {icon}
            </div>
            <div className="pt-12">
                <div className="text-2xl sm:text-3xl font-bold my-2 text-foreground">
                    {title}
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                    ({subtitle})
                </div>
                <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
                    {description}
                </p>
            </div>
            {stats && stats.length > 0 && (
                 <div className="flex justify-around items-center mb-6 text-sm sm:text-base max-w-md mx-auto">
                    <TooltipProvider>
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            {stat.tooltip ? (
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div className="text-xl sm:text-2xl font-bold text-foreground flex items-center justify-center cursor-help">
                                            {stat.value}
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p dangerouslySetInnerHTML={{ __html: stat.tooltip }} />
                                    </TooltipContent>
                                </Tooltip>
                            ) : (
                                <div className="text-xl sm:text-2xl font-bold text-foreground flex items-center justify-center">
                                    {stat.value}
                                </div>
                            )}
                            <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                    </TooltipProvider>
                 </div>
            )}
            {button && (
                <Button asChild className="transition-transform hover:scale-105">
                    <Link href={button.href}>
                        {button.icon || <Info size={16} />} {button.label}
                    </Link>
                </Button>
            )}
        </motion.div>
    );
};

export default PageHeaderCard;
