
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
        const { id, value } = e.target;
        setConfig(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const startTest = (e: React.FormEvent) => {
        e.preventDefault();
        testState.current.testName = config.testName;
        testState.current.mcqNumber = parseInt(config.mcqNumber) || 0;
        testState.current.timeLimit = parseInt(config.timeLimit) || 0;
        testState.current.negativeMarking = config.negativeMarking;

        if (testState.current.mcqNumber <= 0 || testState.current.timeLimit <= 0) {
            alert('Please provide valid numbers for MCQs and Time Limit.');
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
                setTimeLeft("Time's up!");
                alert("Time's up! The test will be auto-submitted.");
                submitTest();
            } else {
                 const minutes = Math.floor(timeRemaining / 60);
                 const seconds = timeRemaining % 60;
                 setTimeLeft(`Time Remaining: ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`);
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
                <Card key={`q-${i}`} id={`mcq-${i}`} className='mb-4'>
                    <CardContent className='flex flex-col sm:flex-row items-center justify-between p-4'>
                        <p className='font-semibold text-lg mb-2 sm:mb-0 sm:mr-4'>Q. {i}:</p>
                        <div className='flex items-center justify-end flex-wrap gap-x-4'>
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
                        <p className='font-semibold text-lg mb-2 sm:mb-0 sm:mr-4'>Correct for Q. {i}:</p>
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
            alert('Please select all correct answers.');
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
                 <p><strong>Total Questions:</strong> {testState.current.mcqNumber}</p>
                 <p><strong>Correct Answers:</strong> {correctCount}</p>
                 <p><strong>Incorrect Answers:</strong> {incorrectCount}</p>
                 <p><strong>Skipped Questions:</strong> {skippedCount}</p>
                 <p><strong>Negative Marking:</strong> {(incorrectCount * negMarkValue).toFixed(2)}</p>
                 <p className='text-xl font-bold'><strong>Total Score:</strong> {totalScore.toFixed(2)}</p>
                 <div className='border-2 border-amber-500 bg-amber-100 dark:bg-amber-900/20 p-4 rounded-lg mt-4'>
                    <p className='text-2xl font-bold text-amber-600 dark:text-amber-400'>
                        Percentage: {percentage.toFixed(2)}%
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
                <h1 className='text-4xl font-bold gradient-text'>Be Examiner</h1>
                <p className='text-muted-foreground mt-2'>Create and manage your OMR-based tests easily!</p>
            </header>

            {view === 'config' && (
                <Card>
                    <CardHeader>
                        <CardTitle className='flex items-center gap-2'><FilePenLine /> Test Configuration</CardTitle>
                        <CardDescription>Set up your new test here.</CardDescription>
                    </CardHeader>
                    <form onSubmit={startTest}>
                        <CardContent className='space-y-6'>
                            <div className='space-y-2'>
                                <Label htmlFor='testName'>Test Name:</Label>
                                <Input id='testName' value={config.testName} onChange={handleConfigChange} required />
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor='mcqNumber'>Number of MCQs:</Label>
                                <Input id='mcqNumber' type='number' value={config.mcqNumber} onChange={handleConfigChange} required min="1" />
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor='timeLimit'>Time Limit (in minutes):</Label>
                                <Input id='timeLimit' type='number' value={config.timeLimit} onChange={handleConfigChange} required min="1" />
                            </div>
                            <div className='flex items-center space-x-2'>
                                <Checkbox id='negativeMarking' checked={config.negativeMarking} onCheckedChange={(checked) => setConfig(prev => ({ ...prev, negativeMarking: !!checked }))} />
                                <Label htmlFor='negativeMarking' className='cursor-pointer'>Enable Negative Marking (0.25 per wrong answer)</Label>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type='submit' className='w-full' size="lg">Start Test</Button>
                        </CardFooter>
                    </form>
                </Card>
            )}

            {view === 'test' && (
                <div className='relative'>
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
                                    <CardTitle className="text-base">Question Summary</CardTitle>
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
                              Total Questions: {testState.current.mcqNumber} | Time Limit: {testState.current.timeLimit} minutes | Negative Marking: {testState.current.negativeMarking ? 'Yes' : 'No'}
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
                    <Button onClick={submitTest} className='w-full mt-6' size="lg">Submit Test</Button>
                </div>
            )}
            
            {view === 'answers' && (
                 <Card>
                    <CardHeader>
                        <CardTitle className='flex items-center gap-2'><CheckCircle /> Select Correct Answers</CardTitle>
                        <CardDescription>Provide the correct answers to generate the result.</CardDescription>
                    </CardHeader>
                    <CardContent ref={correctAnswersContainerRef}>
                        {correctAnswerInputs}
                        <p className="text-red-500 mt-4 text-center">
                            Please select the correct answer for all questions before submitting.
                        </p>
                    </CardContent>
                    <CardFooter>
                         <Button onClick={submitCorrectAnswers} className='w-full' size="lg">Submit Correct Answers</Button>
                    </CardFooter>
                 </Card>
            )}

            {view === 'result' && (
                 <Card>
                     <CardHeader className='text-center'>
                         <CardTitle className='flex items-center justify-center gap-2'><BarChart /> Test Result</CardTitle>
                         <CardDescription>Here is the summary of your test performance.</CardDescription>
                     </CardHeader>
                     <CardContent>
                        {resultDetails}
                     </CardContent>
                     <CardFooter className='flex-col gap-4'>
                        <Button onClick={restartTest} className='w-full' size="lg"><RotateCcw /> Start Another Test</Button>
                        <div className="text-center mt-4 p-4 bg-primary/10 rounded-lg w-full">
                           <a href="https://t.me/admissionnewscorner" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
                              Join with us on Telegram
                           </a>
                        </div>
                     </CardFooter>
                 </Card>
            )}

             <footer className='text-center mt-12 text-sm text-muted-foreground'>
                <p>Be Examiner &copy; 2024. All rights reserved.</p>
            </footer>
		</div>
	);
}
