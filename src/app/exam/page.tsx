
'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Scroll, TimerIcon, FilePenLine, CheckCircle, BarChart, RotateCcw } from 'lucide-react';

export default function ExamPage() {
    const [view, setView] = useState('config'); // 'config', 'test', 'answers', 'result'
    
    const testState = useRef({
        mcqNumber: 0,
        testName: '',
        timeLimit: 0,
        negativeMarking: false,
        timerInterval: null as NodeJS.Timeout | null,
        userAnswers: [] as {q: number, value: string}[],
        correctAnswers: [] as {q: number, value: string}[],
    });

    const [config, setConfig] = useState({
        testName: '',
        mcqNumber: '10',
        timeLimit: '10',
        negativeMarking: false,
    });

    const [timeLeft, setTimeLeft] = useState('');
    const [mcqQuestions, setMcqQuestions] = useState<JSX.Element[]>([]);
    const [correctAnswerInputs, setCorrectAnswerInputs] = useState<JSX.Element[]>([]);
    const [resultDetails, setResultDetails] = useState<JSX.Element | null>(null);
    const [isSummaryVisible, setSummaryVisible] = useState(false);
    const [summaryContent, setSummaryContent] = useState<JSX.Element[]>([]);

    const mcqContainerRef = useRef<HTMLDivElement>(null);
    const correctAnswersContainerRef = useRef<HTMLDivElement>(null);

    const handleConfigChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
        setConfig(prev => ({
            ...prev,
            [id]: type === 'checkbox' ? checked : value
        }));
    };

    const startTest = (e: React.FormEvent) => {
        e.preventDefault();
        testState.current.testName = config.testName;
        testState.current.mcqNumber = parseInt(config.mcqNumber) || 0;
        testState.current.timeLimit = parseInt(config.timeLimit) || 0;
        testState.current.negativeMarking = config.negativeMarking;

        if (testState.current.mcqNumber <= 0 || testState.current.timeLimit <= 0) {
            alert('অনুগ্রহ করে MCQ সংখ্যা এবং সময়সীমার জন্য বৈধ সংখ্যা লিখুন।');
            return;
        }
        
        generateMcqInputs();
        startTimer();
        setView('test');
    };

    const startTimer = () => {
        if (testState.current.timerInterval) clearInterval(testState.current.timerInterval);
        
        let timeRemaining = testState.current.timeLimit * 60;
        
        const updateTimerDisplay = () => {
             if (timeRemaining <= 0) {
                clearInterval(testState.current.timerInterval!);
                setTimeLeft("সময় শেষ!");
                alert("সময় শেষ! পরীক্ষাটি স্বয়ংক্রিয়ভাবে জমা দেওয়া হবে।");
                submitTest();
            } else {
                 const minutes = Math.floor(timeRemaining / 60);
                 const seconds = timeRemaining % 60;
                 setTimeLeft(`অবশিষ্ট সময়: ${String(minutes).padStart(2, '0')}মি ${String(seconds).padStart(2, '0')}সে`);
                 timeRemaining--;
            }
        }

        updateTimerDisplay();
        testState.current.timerInterval = setInterval(updateTimerDisplay, 1000);
    };

    const generateMcqInputs = () => {
        const questions = [];
        for (let i = 1; i <= testState.current.mcqNumber; i++) {
            questions.push(
                <Card key={`q-${i}`} id={`mcq-${i}`} className='mb-4 animate-fade-in-up' style={{ animationDelay: `${i * 50}ms` }}>
                    <CardContent className='flex flex-col sm:flex-row items-center justify-between p-4'>
                        <p className='font-semibold text-lg mb-2 sm:mb-0 sm:mr-4 whitespace-nowrap'>প্রশ্ন. {i}:</p>
                        <div className='flex items-center justify-end flex-wrap gap-x-4 w-full'>
                            {['A', 'B', 'C', 'D'].map(option => (
                                <div key={option} className='flex items-center space-x-2'>
                                    <input type='radio' id={`q${i}-${option}`} name={`q${i}`} value={option} className='h-5 w-5 accent-primary' onChange={updateSummary}/>
                                    <Label htmlFor={`q${i}-${option}`} className='text-lg font-medium cursor-pointer'>{option}</Label>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            );
        }
        setMcqQuestions(questions);
    };

    const updateSummary = () => {
      if (view !== 'test') return;
      const content = [];
      const numMcqs = testState.current.mcqNumber;
      for (let i = 1; i <= numMcqs; i++) {
          const isAnswered = document.querySelector(`input[name="q${i}"]:checked`);
          content.push(
              <div
                  key={`summary-${i}`}
                  className={`w-8 h-8 flex items-center justify-center cursor-pointer rounded font-bold border ${isAnswered ? 'bg-green-500 text-white border-green-600' : 'bg-card border-border'}`}
                  onClick={() => {
                    document.getElementById(`mcq-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    setSummaryVisible(false);
                  }}
              >
                  {i}
              </div>
          );
      }
      setSummaryContent(content);
  };
    
    useEffect(() => {
        if(view === 'test') {
            updateSummary();
        }
    }, [view, mcqQuestions]);


    const submitTest = () => {
        if (testState.current.timerInterval) clearInterval(testState.current.timerInterval);
        
        const userAnswers = [];
        for (let i = 1; i <= testState.current.mcqNumber; i++) {
           const answer = (document.querySelector(`input[name="q${i}"]:checked`) as HTMLInputElement)?.value;
           if(answer) {
             userAnswers.push({ q: i, value: answer });
           }
        }
        testState.current.userAnswers = userAnswers;

        const inputs = [];
        for (let i = 1; i <= testState.current.mcqNumber; i++) {
             inputs.push(
                <Card key={`correct-q-${i}`} className='mb-4'>
                    <CardContent className='flex flex-col sm:flex-row items-center justify-between p-4'>
                        <p className='font-semibold text-lg mb-2 sm:mb-0 sm:mr-4'>প্রশ্ন {i} এর সঠিক উত্তর:</p>
                        <div className='flex items-center justify-end flex-wrap gap-x-4'>
                            {['A', 'B', 'C', 'D'].map(option => (
                                <div key={option} className='flex items-center space-x-2'>
                                    <input type='radio' id={`correct-q${i}-${option}`} name={`correct-q${i}`} value={option} className='h-5 w-5 accent-primary'/>
                                    <Label htmlFor={`correct-q${i}-${option}`} className='text-lg font-medium cursor-pointer'>{option}</Label>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            );
        }
        setCorrectAnswerInputs(inputs);
        setView('answers');
    };

    const submitCorrectAnswers = () => {
        let allSelected = true;
        const correctAnswers = [];
        for (let i = 1; i <= testState.current.mcqNumber; i++) {
            const answer = (document.querySelector(`input[name="correct-q${i}"]:checked`) as HTMLInputElement)?.value;
             if (!answer) {
                allSelected = false;
                break;
            }
            correctAnswers.push({ q: i, value: answer });
        }

        if (!allSelected) {
            alert('অনুগ্রহ করে সকল সঠিক উত্তর নির্বাচন করুন।');
            return;
        }

        testState.current.correctAnswers = correctAnswers;
        calculateResult();
        setView('result');
    };

    const calculateResult = () => {
        let correctCount = 0;
        let incorrectCount = 0;
        
        const userAnswersMap = new Map(testState.current.userAnswers.map(a => [a.q, a.value]));
        const correctAnswersMap = new Map(testState.current.correctAnswers.map(a => [a.q, a.value]));

        for(let i = 1; i <= testState.current.mcqNumber; i++) {
            const userAnswer = userAnswersMap.get(i);
            const correctAnswer = correctAnswersMap.get(i);
            if (userAnswer) {
                if (userAnswer === correctAnswer) {
                    correctCount++;
                } else {
                    incorrectCount++;
                }
            }
        }
        
        const skippedCount = testState.current.mcqNumber - (correctCount + incorrectCount);
        const negMarkValue = testState.current.negativeMarking ? 0.25 : 0;
        const totalScore = correctCount - (incorrectCount * negMarkValue);
        const percentage = (correctCount / testState.current.mcqNumber) * 100;

        setResultDetails(
            <div className='space-y-4 text-center'>
                 <p><strong>মোট প্রশ্ন:</strong> {testState.current.mcqNumber}</p>
                 <p><strong>সঠিক উত্তর:</strong> {correctCount}</p>
                 <p><strong>ভুল উত্তর:</strong> {incorrectCount}</p>
                 <p><strong>উত্তর দেননি:</strong> {skippedCount}</p>
                 <p><strong>নেগেটিভ মার্কিং:</strong> {(incorrectCount * negMarkValue).toFixed(2)}</p>
                 <p className='text-xl font-bold'><strong>মোট স্কোর:</strong> {totalScore.toFixed(2)}</p>
                 <div className='border-2 border-amber-500 bg-amber-100 dark:bg-amber-900/20 p-4 rounded-lg mt-4'>
                    <p className='text-2xl font-bold text-amber-600 dark:text-amber-400'>
                        শতাংশ: {percentage.toFixed(2)}%
                    </p>
                 </div>
            </div>
        );
    };

    const restartTest = () => {
        if(testState.current.timerInterval) clearInterval(testState.current.timerInterval);
        testState.current = {
            mcqNumber: 0,
            testName: '',
            timeLimit: 0,
            negativeMarking: false,
            timerInterval: null,
            userAnswers: [],
            correctAnswers: [],
        };
        setConfig({
            testName: '',
            mcqNumber: '10',
            timeLimit: '10',
            negativeMarking: false,
        });
        setView('config');
    }

	return (
		<div className='container mx-auto px-4 py-8 max-w-4xl font-bengali'>
            <header className='text-center mb-12'>
                <h1 className='text-4xl font-bold gradient-text'>OMR টেস্ট সিমুলেটর</h1>
                <p className='text-muted-foreground mt-2'>সহজেই আপনার OMR-ভিত্তিক পরীক্ষা তৈরি ও পরিচালনা করুন!</p>
            </header>

            {view === 'config' && (
                <Card className='animate-fade-in-up'>
                    <CardHeader>
                        <CardTitle className='flex items-center gap-2'><FilePenLine /> পরীক্ষার কনফিগারেশন</CardTitle>
                        <CardDescription>আপনার নতুন পরীক্ষা এখানে সেট আপ করুন।</CardDescription>
                    </CardHeader>
                    <form onSubmit={startTest}>
                        <CardContent className='space-y-6'>
                            <div className='space-y-2'>
                                <Label htmlFor='testName'>পরীক্ষার নাম:</Label>
                                <Input id='testName' value={config.testName} onChange={handleConfigChange} required />
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor='mcqNumber'>MCQ সংখ্যা:</Label>
                                <Input id='mcqNumber' type='number' value={config.mcqNumber} onChange={handleConfigChange} required min="1" />
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor='timeLimit'>সময়সীমা (মিনিটে):</Label>
                                <Input id='timeLimit' type='number' value={config.timeLimit} onChange={handleConfigChange} required min="1" />
                            </div>
                            <div className='flex items-center space-x-2'>
                                <Checkbox id='negativeMarking' checked={config.negativeMarking} onCheckedChange={(checked) => setConfig(prev => ({ ...prev, negativeMarking: !!checked }))} />
                                <Label htmlFor='negativeMarking' className='cursor-pointer'>নেগেটিভ মার্কিং চালু করুন (প্রতি ভুল উত্তরে ০.২৫)</Label>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type='submit' className='w-full' size="lg">পরীক্ষা শুরু করুন</Button>
                        </CardFooter>
                    </form>
                </Card>
            )}

            {view === 'test' && (
                <div className='relative animate-fade-in-up'>
                     <div 
                        className='fixed bottom-4 left-4 z-50'
                        onMouseEnter={() => setSummaryVisible(true)}
                        onMouseLeave={() => setSummaryVisible(false)}
                      >
                         <Button size="icon" className='rounded-full h-14 w-14 shadow-lg' onClick={() => setSummaryVisible(!isSummaryVisible)}>
                            <Scroll className='h-6 w-6'/>
                         </Button>
                         {isSummaryVisible && (
                             <Card className='absolute bottom-16 left-0 w-64 p-2 shadow-xl'>
                                <CardHeader className="p-2 text-center">
                                    <CardTitle className="text-base">প্রশ্নাবলীর সারাংশ</CardTitle>
                                </CardHeader>
                                <CardContent className='p-2 flex flex-wrap gap-2'>
                                  {summaryContent}
                                </CardContent>
                             </Card>
                         )}
                    </div>
                
                    <Card className='mb-6'>
                        <CardHeader className='text-center'>
                           <CardTitle>{testState.current.testName}</CardTitle>
                           <CardDescription>
                              মোট প্রশ্ন: {testState.current.mcqNumber} | সময়সীমা: {testState.current.timeLimit} মিনিট | নেগেটিভ মার্কিং: {testState.current.negativeMarking ? 'হ্যাঁ' : 'না'}
                           </CardDescription>
                        </CardHeader>
                    </Card>

                    <div className='sticky top-[80px] z-30 mb-6'>
                       <div className='w-full text-center py-2 px-4 rounded-lg bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700'>
                            <p className='text-xl font-bold text-destructive flex items-center justify-center gap-2'>
                               <TimerIcon /> {timeLeft}
                            </p>
                       </div>
                    </div>
                    
                    <div ref={mcqContainerRef}>
                        {mcqQuestions}
                    </div>
                    <Button onClick={submitTest} className='w-full mt-6' size="lg">পরীক্ষা জমা দিন</Button>
                </div>
            )}
            
            {view === 'answers' && (
                 <Card className='animate-fade-in-up'>
                    <CardHeader>
                        <CardTitle className='flex items-center gap-2'><CheckCircle /> সঠিক উত্তর নির্বাচন করুন</CardTitle>
                        <CardDescription>ফলাফল তৈরির জন্য সঠিক উত্তর দিন।</CardDescription>
                    </CardHeader>
                    <CardContent ref={correctAnswersContainerRef}>
                        {correctAnswerInputs}
                        <p className="text-red-500 mt-4 text-center">
                            জমা দেওয়ার আগে অনুগ্রহ করে সমস্ত প্রশ্নের জন্য সঠিক উত্তর নির্বাচন করুন।
                        </p>
                    </CardContent>
                    <CardFooter>
                         <Button onClick={submitCorrectAnswers} className='w-full' size="lg">সঠিক উত্তর জমা দিন</Button>
                    </CardFooter>
                 </Card>
            )}

            {view === 'result' && (
                 <Card className='animate-fade-in-up'>
                     <CardHeader className='text-center'>
                         <CardTitle className='flex items-center justify-center gap-2'><BarChart /> পরীক্ষার ফলাফল</CardTitle>
                         <CardDescription>আপনার পরীক্ষার পারফরম্যান্সের সারসংক্ষেপ এখানে।</CardDescription>
                     </CardHeader>
                     <CardContent>
                        {resultDetails}
                     </CardContent>
                     <CardFooter className='flex-col gap-4'>
                        <Button onClick={restartTest} className='w-full' size="lg"><RotateCcw /> আরেকটি পরীক্ষা শুরু করুন</Button>
                        <div className="text-center mt-4 p-4 bg-primary/10 rounded-lg w-full">
                           <a href="https://t.me/admissionnewscorner" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
                              টেলিগ্রামে আমাদের সাথে যোগ দিন
                           </a>
                        </div>
                     </CardFooter>
                 </Card>
            )}

             <footer className='text-center mt-12 text-sm text-muted-foreground'>
                <p>&copy; ২০২৪। সর্বস্বত্ব সংরক্ষিত।</p>
            </footer>
		</div>
	);

    