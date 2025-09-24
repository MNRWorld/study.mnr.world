
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Info } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const DhakaMainInfoCard = () => {
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

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      className="mt-20 sm:mt-24 w-full border border-border bg-card rounded-2xl p-6 sm:p-8 shadow-lg text-center relative"
    >
      <div className="text-sm text-foreground absolute top-[-20px] sm:top-[-20px] left-1/2 -translate-x-1/2 bg-card border border-border rounded-lg px-3 py-1">
        <b>পাবলিক</b>
      </div>
      <div className="w-24 h-24 absolute -top-12 left-1/2 -translate-x-1/2 bg-card rounded-2xl shadow-xl z-10 flex items-center justify-center">
        <Image
          src="https://study.mnr.world/wp-content/uploads/2025/05/DU-Logo.png"
          alt="DU Logo"
          width={100}
          height={100}
          className="p-1 w-full h-full object-contain rounded-2xl"
        />
      </div>
      <div className="pt-12">
        <div className="text-2xl sm:text-3xl font-bold my-2 text-foreground">
          ঢাকা বিশ্ববিদ্যালয়
        </div>
        <div className="text-sm text-muted-foreground mb-4">
          (University of Dhaka)
        </div>
        <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
          প্রাচ্যের অক্সফোর্ড খ্যাত ঢাকা বিশ্ববিদ্যালয়, বাংলাদেশের স্বপ্নদ্রষ্টাদের সূতিকাগার। এর করিডোরে হেঁটেছে ইতিহাস, জন্মেছে অজস্র জ্ঞানতাপস।
        </p>
      </div>
      <div className="flex justify-around items-center mb-6 text-sm sm:text-base max-w-md mx-auto">
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-foreground">১৩টি</div>
          <div className="text-xs sm:text-sm text-muted-foreground">অনুষদ</div>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-foreground">৮৩টি</div>
          <div className="text-xs sm:text-sm text-muted-foreground">বিষয়</div>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-foreground flex items-center justify-center">
            ৬,১৩০+
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="ml-1 cursor-pointer text-primary">
                    <Info size={16} />
                  </span>
                </TooltipTrigger>
                <TooltipContent className="bg-primary/10 text-primary-foreground border-primary">
                  <b>'ক' ইউনিট:</b> ১৮৯৬
                  <br />
                  <b>'খ' ইউনিট:</b> ২৯৩৪
                  <br />
                  <b>'গ' ইউনিট:</b> ১০৫০
                  <br />
                  <b>'চ' ইউনিট:</b> ১৩০
                  <br />
                  <b>IBA ইউনিট:</b> ১২০
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground">আসন</div>
        </div>
      </div>
      <Button asChild className="transition-transform hover:scale-105">
        <Link href="#Info">
          <Info size={16} /> মূল তথ্য
        </Link>
      </Button>
    </motion.div>
  );
};

export default DhakaMainInfoCard;
