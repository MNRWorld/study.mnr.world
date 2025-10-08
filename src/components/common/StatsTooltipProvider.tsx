"use client";

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface StatsTooltipProviderProps {
  stats: {
    value: string;
    label: string;
    tooltip?: string;
  }[];
}

const StatsTooltipProvider: React.FC<StatsTooltipProviderProps> = ({
  stats,
}) => {
  return (
    <div className="flex justify-around items-center mb-6 text-sm max-w-md mx-auto">
      <TooltipProvider>
        {stats.map((stat, index) => (
          <div key={index} className="text-center px-2">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground flex items-center justify-center">
              {stat.value}
              {stat.tooltip && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="ml-1.5 cursor-help">
                      <Info className="text-muted-foreground h-3 w-3" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p dangerouslySetInnerHTML={{ __html: stat.tooltip }} />
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
              {stat.label}
            </div>
          </div>
        ))}
      </TooltipProvider>
    </div>
  );
};

export default StatsTooltipProvider;
