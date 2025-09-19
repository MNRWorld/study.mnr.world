'use client';
import { heroCards } from '@/lib/data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const cardHover = {
    hover: {
      scale: 1.05,
      boxShadow: '0px 10px 30px -5px rgba(var(--primary-rgb), 0.2)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      className="container max-w-4xl mx-auto px-5 py-24 text-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        variants={itemVariants}
        className="inline-flex items-center gap-2 bg-secondary text-sm font-medium px-4 py-1.5 rounded-full mb-6"
      >
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="text-muted-foreground">নতুন করে শেখা শুরু করুন</span>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="font-bangla text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 relative"
      >
        <span className="relative">
          স্বপ্ন পূরণের পথে
          <motion.span
            className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-primary/50 to-primary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9], delay: 0.5 }}
          />
        </span>
        <br />
        সকল কিছু একসাথে
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
      >
        আপনার শিক্ষাযাত্রাকে আরও সহজ ও কার্যকর করতে আমরা আছি আপনার পাশে। এখনই শুরু করুন আপনার প্রস্তুতির নতুন অধ্যায়।
      </motion.p>
      
      <motion.div variants={itemVariants}>
        <Button
          size="lg"
          className="bg-primary text-primary-foreground font-bold py-3 px-8 h-12 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 font-bangla"
        >
          শুরু করুন <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-20"
      >
        {heroCards.map((card) => (
          <motion.div key={card.label} variants={{ ...itemVariants, ...cardHover }} whileHover="hover">
            <Link
              href="#"
              className="card bg-secondary rounded-xl p-6 flex flex-col items-center justify-center gap-4 font-bangla font-semibold text-base h-full transition-colors border-2 border-transparent hover:border-primary/50"
            >
              <card.icon className="w-8 h-8 text-primary" />
              <span className="text-foreground">{card.label}</span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
