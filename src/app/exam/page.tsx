'use client';

import { useEffect } from 'react';

export default function ExamPage() {
  useEffect(() => {
    let mcqNumber = 0;
    let testName = '';
    let timeLimit = 0;
    let negativeMarking = false;
    let timer: NodeJS.Timeout;

    const testForm = document.getElementById('test-form');
    const configurationSection = document.getElementById(
      'configuration-section',
    );
    const testSection = document.getElementById('test-section');
    const testDetails = document.getElementById('test-details');
    const timerDisplay = document.getElementById('timer');
    const mcqContainer = document.getElementById('mcq-container');
    const submitTestButton = document.getElementById('submit-test');
    const correctAnswerSection = document.getElementById(
      'correct-answer-section',
    );
    const correctAnswerContainer = document.getElementById(
      'correct-answer-container',
    );
    const submitCorrectAnswersButton = document.getElementById(
      'submit-correct-answers',
    );
    const resultSection = document.getElementById('result-section');
    const resultContainer = document.getElementById('result-container');
    const warningMessage = document.getElementById('warning-message');

    function handleTestFormSubmit(event: Event) {
      event.preventDefault();
      testName = (document.getElementById('test-name') as HTMLInputElement).value;
      mcqNumber = parseInt(
        (document.getElementById('mcq-number') as HTMLInputElement).value,
      );
      timeLimit = parseInt(
        (document.getElementById('time-limit') as HTMLInputElement).value,
      );
      negativeMarking = (
        document.getElementById('negative-marking') as HTMLInputElement
      ).checked;

      if (configurationSection)
        configurationSection.style.display = 'none';
      if (testSection) testSection.style.display = 'block';

      if (testDetails) {
        testDetails.innerHTML = `
          <h3>${testName}</h3>
          <p>Total Questions: ${mcqNumber}</p>
          <p>Time Limit: ${timeLimit} minutes</p>
          <p>Negative Marking: ${
            negativeMarking ? 'Enabled' : 'Disabled'
          }</p>
        `;
      }

      let timeRemaining = timeLimit * 60;
      timer = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        if (timerDisplay)
          timerDisplay.textContent = `Time Remaining: ${minutes}m ${seconds}s`;
        timeRemaining--;

        if (timeRemaining < 0) {
          clearInterval(timer);
          if (timerDisplay) timerDisplay.textContent = "Time's up!";
          alert("Time's up! The test will be auto-submitted.");
          autoSubmitTest();
        }
      }, 1000);

      if (mcqContainer) {
        mcqContainer.innerHTML = '';
        for (let i = 1; i <= mcqNumber; i++) {
          const mcqDiv = document.createElement('div');
          mcqDiv.id = `mcq-${i}`;
          mcqDiv.innerHTML = `
              <p>Q. ${i}:</p>
              <input type="radio" name="q${i}" value="A">
              <input type="radio" name="q${i}" value="B">
              <input type="radio" name="q${i}" value="C">
              <input type="radio" name="q${i}" value="D">
          `;
          mcqContainer.appendChild(mcqDiv);
        }
      }
      updateSummary(document.getElementById('summary-content'));
    }

    function autoSubmitTest() {
      if (testSection) testSection.style.display = 'none';
      if (correctAnswerSection)
        correctAnswerSection.style.display = 'block';

      if (correctAnswerContainer) {
        correctAnswerContainer.innerHTML = '';
        for (let i = 1; i <= mcqNumber; i++) {
          const answerDiv = document.createElement('div');
          answerDiv.innerHTML = `
              <p>Correct Answer for Q. ${i}:</p>
              <input type="radio" name="correct-q${i}" value="A">
              <input type="radio" name="correct-q${i}" value="B">
              <input type="radio" name="correct-q${i}" value="C">
              <input type="radio" name="correct-q${i}" value="D">
          `;
          correctAnswerContainer.appendChild(answerDiv);
        }
        attachCorrectAnswerListeners();
        updateButtonState();
      }
    }

    function handleSubmitTest() {
      clearInterval(timer);
      autoSubmitTest();
    }

    function handleSubmitCorrectAnswers() {
      if (correctAnswerSection)
        correctAnswerSection.style.display = 'none';
      if (resultSection) resultSection.style.display = 'block';

      if (resultContainer) {
        let correctCount = 0;
        let incorrectCount = 0;
        let skippedCount = 0;

        for (let i = 1; i <= mcqNumber; i++) {
          const userAnswer = document.querySelector(
            `input[name="q${i}"]:checked`,
          ) as HTMLInputElement;
          const correctAnswer = document.querySelector(
            `input[name="correct-q${i}"]:checked`,
          ) as HTMLInputElement;
          if (!userAnswer) {
            skippedCount++;
          } else if (userAnswer && correctAnswer) {
            if (userAnswer.value === correctAnswer.value) {
              correctCount++;
            } else {
              incorrectCount++;
            }
          }
        }

        const negMarkingValue = negativeMarking ? 0.25 : 0;
        const totalScore = correctCount - incorrectCount * negMarkingValue;

        resultContainer.innerHTML = `
            <div style="border: 2px solid #4CAF50; padding: 1rem; border-radius: 10px; background-color: #e7f7e7;">
                <h3>Test Result</h3>
                <p><strong>Total Questions:</strong> ${mcqNumber}</p>
                <p><strong>Correct Answers:</strong> ${correctCount}</p>
                <p><strong>Incorrect Answers:</strong> ${incorrectCount}</p>
                <p><strong>Skipped Questions:</strong> ${skippedCount}</p>
                <p><strong>Negative Marking:</strong> ${(
                  incorrectCount * negMarkingValue
                ).toFixed(2)}</p>
                <p><strong>Total Score:</strong> ${totalScore.toFixed(2)}</p>
                <div style="border: 2px solid #ffa07a; margin-top: 10px; padding: 10px; border-radius: 10px; background-color: #ffe4e1;">
                    <p style="text-align: center; font-size: 1.2rem; font-weight: bold; color: #d35400;">
                        Percentage: ${((correctCount / mcqNumber) * 100).toFixed(
                          2,
                        )}%
                    </p>
                </div>
            </div>
        `;
        if (resultSection) {
            const restartButton = document.createElement('div');
            restartButton.style.cssText = 'text-align: center; margin-top: 1rem;';
            restartButton.innerHTML = `
                <button style="padding: 10px 15px; background-color: #4CAF50; color: white; border: none; border-radius: 15px; cursor: pointer;">
                    Start Another Test
                </button>
            `;
            restartButton.addEventListener('click', function() {
                if (resultSection) resultSection.style.display = 'none';
                if (configurationSection) configurationSection.style.display = 'block';
                (testForm as HTMLFormElement)?.reset();
                if (correctAnswerContainer) correctAnswerContainer.innerHTML = '';
                if (mcqContainer) mcqContainer.innerHTML = '';
                if (submitCorrectAnswersButton) (submitCorrectAnswersButton as HTMLButtonElement).disabled = true;
            });
            resultSection.appendChild(restartButton);
        }
      }
    }
    
    function updateButtonState() {
        let allSelected = true;
        for (let i = 1; i <= mcqNumber; i++) {
            const selected = document.querySelector(`input[name="correct-q${i}"]:checked`);
            if (!selected) {
                allSelected = false;
                break;
            }
        }
        if (submitCorrectAnswersButton && warningMessage) {
            (submitCorrectAnswersButton as HTMLButtonElement).style.display = allSelected ? 'block' : 'none';
            warningMessage.style.display = allSelected ? 'none' : 'block';
        }
    }
    
    function attachCorrectAnswerListeners() {
        if(warningMessage) warningMessage.textContent = "উত্তরপত্র থেকে সঠিক উত্তর গুলো সিলেক্ট করুন, এটা আপনার ফলাফল তৈরিতে কাজে লাগবে। অন্যথায় সাবমিট করতে পারবেন না।";

        for (let i = 1; i <= mcqNumber; i++) {
            const radioButtons = document.querySelectorAll(`input[name="correct-q${i}"]`);
            radioButtons.forEach((radio) => {
                radio.addEventListener("change", updateButtonState);
            });
        }
        updateButtonState();
    }


    if (testForm) testForm.addEventListener('submit', handleTestFormSubmit);
    if (submitTestButton) submitTestButton.addEventListener('click', handleSubmitTest);
    if (submitCorrectAnswersButton) submitCorrectAnswersButton.addEventListener('click', handleSubmitCorrectAnswers);

    let summaryVisible = false;
    const floatingSummary = document.getElementById('floating-summary');
    const summaryContent = document.createElement('div');
    summaryContent.id = 'summary-content';
    summaryContent.setAttribute('style', "position: fixed; bottom: 70px; left: 10px; width: 150px; max-height: 200px; padding: 10px; background-color: #f9f9f9; border: 2px solid #4CAF50; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); overflow-y: auto; display: none; z-index: 1000;");
    document.body.appendChild(summaryContent);

    function updateSummary(container: HTMLElement | null) {
      if (!container) return;
      container.innerHTML = ''; // Clear previous content
      for (let i = 1; i <= mcqNumber; i++) {
        const isAnswered = document.querySelector(`input[name="q${i}"]:checked`);
        const color = isAnswered ? 'green' : 'transparent';
        const questionBox = `
            <div style="display: inline-block; width: 25px; height: 25px; margin: 3px; background-color: ${color}; border: 1px solid #ccc; text-align: center; line-height: 25px; cursor: pointer; border-radius: 5px; font-weight: bold;"
                 onclick="document.getElementById('mcq-${i}').scrollIntoView({behavior: 'smooth'});">
                ${i}
            </div>`;
        container.innerHTML += questionBox;
      }
    }

    if (floatingSummary) {
      floatingSummary.addEventListener('click', function () {
        summaryVisible = !summaryVisible;
        summaryContent.style.display = summaryVisible ? 'block' : 'none';
        if (summaryVisible) updateSummary(summaryContent);
      });

      floatingSummary.addEventListener('mouseover', function () {
        floatingSummary.style.transform = 'scale(1.1)';
      });

      floatingSummary.addEventListener('mouseout', function () {
        floatingSummary.style.transform = 'scale(1)';
      });
    }

    return () => {
      // Cleanup event listeners when component unmounts
      if (testForm) testForm.removeEventListener('submit', handleTestFormSubmit);
      if (submitTestButton) submitTestButton.removeEventListener('click', handleSubmitTest);
      if (submitCorrectAnswersButton) submitCorrectAnswersButton.removeEventListener('click', handleSubmitCorrectAnswers);
      clearInterval(timer);
      document.body.removeChild(summaryContent);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }
        header {
            background-color: #4CAF50;
            color: white;
            text-align: center;
            padding: 1rem;
        }
        .section {
            padding: 2rem;
            margin: 0 auto;
            max-width: 800px;
            background: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .option {
            margin: 1rem 0;
        }
        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }
        button:hover {
            background-color: #45a049;
        }
        footer {
            text-align: center;
            padding: 1rem;
            background-color: #f1f1f1;
            margin-top: 2rem;
        }
        .test-details {
            background-color: #e7f7e7;
            padding: 1rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            margin-bottom: 1rem;
        }
        .timer {
            position: sticky;
            top: 0;
            background-color: #fff3cd;
            padding: 0.5rem;
            text-align: center;
            font-size: 1.5rem;
            color: #ff0000;
            z-index: 1000;
            border-bottom: 2px solid #ffa502;
        }
    
        input[type="radio"] {
            width: 25px;
            height: 25px;
            position: relative;
            margin-right: 10px;
            margin-left: 20px;
            margin-top: 10px;
            margin-bottom: 10px;
            cursor: pointer;
            display: inline-block;
        }
        
        .mcq-container div {
            margin-bottom: 20px;
            padding: 15px;
            border: 1px solid #ccc;
            border-radius: 10px;
            background-color: #f9f9f9;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }
        
        .mcq-container p {
            flex: 1;
            margin-right: 30px;
        }
        
        input[type="radio"] {
            margin: 5px 0;
        }
        
        input[type="radio"]::before {
            content: attr(value);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 12px;
            color: #aaa;
            pointer-events: none;
        }
    
        #configuration-section {
            margin: 2rem auto;
            padding: 20px;
            border: 2px solid #4CAF50;
            border-radius: 15px;
            background-color: #e7f7e7;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            max-width: 600px;
        }
        #configuration-section h2 {
            text-align: center;
            color: #333;
        }
        #test-form .option {
            margin-bottom: 15px;
        }
        #test-form label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        #test-form input[type="text"],
        #test-form input[type="number"] {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }
        #test-form button {
            display: block;
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
            text-align: center;
        }
        #test-form button:hover {
            background-color: #45a049;
        }
      `}</style>
      <header>
        <h1>Be Examiner</h1>
        <p>Create and manage your OMR-based tests easily!</p>
      </header>
      <section id="configuration-section" className="section">
        <h2>Test Configuration</h2>
        <form id="test-form">
          <div className="option">
            <label htmlFor="test-name">Test Name:</label>
            <input type="text" id="test-name" name="test-name" required />
          </div>
          <div className="option">
            <label htmlFor="mcq-number">Number of MCQs:</label>
            <input type="number" id="mcq-number" name="mcq-number" required />
          </div>
          <div className="option">
            <label htmlFor="time-limit">Time Limit (in minutes):</label>
            <input type="number" id="time-limit" name="time-limit" required />
          </div>
          <div className="option">
            <label htmlFor="negative-marking">Enable Negative Marking:</label>
            <input
              type="checkbox"
              id="negative-marking"
              name="negative-marking"
            />
          </div>
          <button type="submit">Start Test</button>
        </form>
      </section>
      <section id="test-section" className="section" style={{ display: 'none' }}>
        <div
          id="floating-summary"
          style={{
            position: 'fixed',
            bottom: '10px',
            left: '10px',
            width: '50px',
            height: '50px',
            backgroundColor: '#4CAF50',
            border: '2px solid #ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}
        >
          <p
            style={{
              textAlign: 'center',
              fontSize: '1rem',
              color: 'black',
              margin: 0,
              fontWeight: 'bold',
            }}
          >
            Qs
          </p>
        </div>

        <div className="timer" id="timer"></div>
        <div className="test-details" id="test-details"></div>
        <div className="mcq-container" id="mcq-container"></div>
        <button id="submit-test">Submit Test</button>
      </section>
      <section
        id="correct-answer-section"
        className="section"
        style={{ display: 'none' }}
      >
        <h2>Select Correct Answers</h2>
        <div id="correct-answer-container"></div>
        <p id="warning-message" style={{ color: 'red', display: 'none' }}>
          সবগুলো প্রশ্নের সঠিক উত্তর সিলেক্ট করুন। অন্যথায় সাবমিট করতে পারবেন না।
        </p>

        <button id="submit-correct-answers">Submit Correct Answers</button>
      </section>
      <section id="result-section" className="section" style={{ display: 'none' }}>
        <h2>Test Result</h2>
        <div id="result-container"></div>
      </section>
      <footer>
        <p>Be Examiner &copy; 2024. All rights reserved.</p>

        <div
          className="join-us"
          style={{
            textAlign: 'center',
            margin: '15px auto',
            padding: '8px',
            backgroundColor: '#ffa07a',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            maxWidth: '300px',
          }}
        >
          <a
            href="https://t.me/admissionnewscorner"
            style={{
              fontSize: '1rem',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Join with us
          </a>
        </div>
      </footer>
    </>
  );
}
