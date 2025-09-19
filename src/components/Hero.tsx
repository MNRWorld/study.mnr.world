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
      boxShadow: '0px 10px 30px -5px hsl(var(--primary) / 0.2)',
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
        <span className="text-muted-foreground">Start your journey</span>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 relative bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
      >
        Your Adventure
        <br />
        Starts Here
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
      >
        We are here to make your educational journey easier and more effective.
        Start the new chapter of your preparation now.
      </motion.p>

      <motion.div variants={itemVariants}>
        <Button
          size="lg"
          className="font-bold py-3 px-8 h-12 rounded-full text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105"
        >
          Get Started <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-20"
      >
        {heroCards.map((card) => (
          <motion.div
            key={card.label}
            variants={itemVariants}
            whileHover="hover"
          >
            <Link
              href="#"
              className="card bg-secondary rounded-xl p-6 flex flex-col items-center justify-center gap-4 font-semibold text-base h-full transition-colors border-2 border-transparent hover:border-primary/50"
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