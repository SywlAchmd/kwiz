'use client';

import QuestionCard from '@/components/QuestionCard';
import { QuestionProps, QuizProps } from '@/firebase/quiz/quiz';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import useLeaveConfirmation from '@/hook/useLeaveConfirmation';
import ResultModal from '@/components/ResultModal';
import updatePoints from '@/firebase/auth/updatePoints';
import { useAuth } from '@/firebase/auth/AuthUserProvider';

type QuestionsProps = {
  question: string;
  second: string;
  send: string;
  submit: string;
};

export default function Questions({
  quiz,
  questions,
  props,
}: {
  quiz: QuizProps;
  questions: QuestionProps[];
  props: QuestionsProps;
}) {
  const auth = useAuth();
  const router = useRouter();
  const { confirmationModal } = useLeaveConfirmation(true);
  const userData = auth.user;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => {
      if (prevIndex < questions.length - 1) {
        return prevIndex + 1;
      } else {
        setQuizCompleted(true);
        return prevIndex;
      }
    });
  };

  useEffect(() => {
    if (quizCompleted && userData) {
      updatePoints(userData.id!, score);
    }
  }, [quizCompleted, score, userData]);

  const handleScoreUpdate = () => {
    setScore((prevScore) => prevScore + quiz.scorePerQuestion);
  };

  const handleFinishQuiz = () => {
    router.push('/dashboard');
    router.refresh();
  };

  const handleTryAgain = () => {
    router.refresh();
    setQuizCompleted(false);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  return (
    <main className="mb-3 mt-2 flex h-fit w-full flex-col gap-10 rounded-large bg-white px-6 py-6 shadow-custom1 sm:mt-3 md:mb-5 lg:px-9 lg:py-10">
      {quiz && questions.length > 0 && (
        <QuestionCard
          key={currentQuestionIndex}
          quiz={quiz}
          question={questions[currentQuestionIndex]}
          handleNextQuestion={handleNextQuestion}
          onCorrectAnswer={handleScoreUpdate}
          indexQuestion={currentQuestionIndex}
          isLastQuestion={currentQuestionIndex === questions.length - 1}
          props={props}
          isPaused={quizCompleted}
        />
      )}
      {confirmationModal}
      {quizCompleted && (
        <ResultModal
          score={score}
          onTryAgain={handleTryAgain}
          onFinish={handleFinishQuiz}
        />
      )}
    </main>
  );
}
