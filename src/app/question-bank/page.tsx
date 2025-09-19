'use client';
import { useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { questions, questionBankFilters } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export default function QuestionBankPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState<{ [key: number]: boolean }>({});

  const handleAnswerSelect = (questionId: number, answer: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const checkAnswer = (questionId: number) => {
    setShowResults((prev) => ({ ...prev, [questionId]: true }));
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring' } },
  };

  return (
    <div>
      <PageHeader
        title="প্রশ্ন ব্যাংক"
        description="বিভিন্ন বিশ্ববিদ্যালয় এবং ভর্তি পরীক্ষার বিগত বছরের প্রশ্ন থেকে অনুশীলন করুন।"
      />
      <div className="container max-w-7xl mx-auto px-5 pb-24">
        {/* Filters */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          <motion.div variants={itemVariants}>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="বিশ্ববিদ্যালয়" />
              </SelectTrigger>
              <SelectContent>
                {questionBankFilters.universities.map((uni) => (
                  <SelectItem key={uni.value} value={uni.value}>
                    {uni.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="বিষয়" />
              </SelectTrigger>
              <SelectContent>
                {questionBankFilters.subjects.map((sub) => (
                  <SelectItem key={sub.value} value={sub.value}>
                    {sub.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="সাল" />
              </SelectTrigger>
              <SelectContent>
                {questionBankFilters.years.map((year) => (
                  <SelectItem key={year.value} value={year.value}>
                    {year.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>
        </motion.div>

        {/* Questions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {questions.map((q) => (
            <motion.div key={q.id} variants={itemVariants}>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{q.question}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <RadioGroup
                    onValueChange={(value) => handleAnswerSelect(q.id, value)}
                  >
                    {q.options.map((option, index) => {
                      const isSelected = selectedAnswers[q.id] === option;
                      const isCorrect = q.answer === option;
                      const resultShown = showResults[q.id];
                      return (
                        <div
                          key={index}
                          className={cn(
                            'flex items-center space-x-2 p-3 rounded-md transition-colors',
                            resultShown && isCorrect && 'bg-green-500/20 text-green-700 dark:text-green-400',
                            resultShown && isSelected && !isCorrect && 'bg-red-500/20 text-red-700 dark:text-red-400'
                          )}
                        >
                          <RadioGroupItem value={option} id={`${q.id}-${index}`} />
                          <Label htmlFor={`${q.id}-${index}`}>{option}</Label>
                        </div>
                      );
                    })}
                  </RadioGroup>
                </CardContent>
                <CardFooter className="flex-col items-start gap-2">
                  <div className="text-sm text-muted-foreground">
                    <p>{q.university}, {q.year}</p>
                  </div>
                   <Button onClick={() => checkAnswer(q.id)} disabled={!selectedAnswers[q.id]}>
                    উত্তর দেখুন
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
