
'use client';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Circular = () => {
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
            id="Circular"
            className="mt-8 w-full border border-border bg-card rounded-2xl p-4 sm:p-6 shadow-lg text-center relative"
        >
            <div className="flex justify-center">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-blue-500 text-white rounded-full text-base sm:text-lg mb-4 font-bold shadow-md">সার্কুলার</div>
            </div>
            <div className="text-center">
                <span className="text-lg"><b>বিভিন্ন বিশ্ববিদ্যালয়ের সার্কুলার</b></span><br/>
                <span className="text-muted-foreground text-sm">(⚠ <b>নোট:</b> নিজ নিজ বিশ্ববিদ্যালয়ের ওয়েবসাইটে সর্বশেষ সার্কুলার পাবেন।)</span>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-5 justify-center">
                <Button asChild className="bg-primary text-primary-foreground flex-1 min-w-[150px] hover:bg-primary/90 transition-transform hover:scale-105">
                    <a href="#" target="_blank"><Download size={16} className="mr-2"/> নমুনা ডাউনলোড</a>
                </Button>
            </div>
        </motion.div>
    );
};

export default Circular;
