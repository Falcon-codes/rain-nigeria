"use client";

import React, { useState, useTransition } from "react";
import { programRecommendationQuiz, ProgramRecommendationQuizInput, ProgramRecommendationQuizOutput } from "@/ai/flows/program-recommendation-quiz";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, Sparkles, Lightbulb } from "lucide-react";

const questions = [
  {
    key: 'interests',
    title: "What are your interests?",
    description: "Select all that apply. This helps us understand your passion.",
    type: 'checkbox',
    options: [
        { id: 'interestInRobotics', label: 'Robotics & Automation' },
        { id: 'interestInAi', label: 'AI & Machine Learning' },
    ]
  },
  {
    key: 'programmingExperience',
    title: "What's your programming experience?",
    description: "Be honest! We have paths for everyone.",
    type: 'radio',
    options: ['Beginner', 'Intermediate', 'Advanced'],
  },
  {
    key: 'priorEducation',
    title: "What's your highest level of education?",
    description: "This helps us tailor the curriculum.",
    type: 'radio',
    options: ['High School', 'Bachelors', 'Masters', 'Doctorate'],
  },
  {
    key: 'careerGoals',
    title: "What are your career goals?",
    description: "In a few sentences, tell us what you hope to achieve after the program.",
    type: 'textarea',
  },
];

const totalQuestions = questions.length;

export function ProgramMatcher() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<ProgramRecommendationQuizInput>>({
    interestInRobotics: false,
    interestInAi: false,
  });
  const [result, setResult] = useState<ProgramRecommendationQuizOutput | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleNext = () => {
    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAnswerChange = (key: string, value: string | boolean) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };
  
  const handleCheckboxChange = (key: 'interestInRobotics' | 'interestInAi') => {
      setAnswers(prev => ({...prev, [key]: !prev[key]}));
  }

  const handleSubmit = () => {
    startTransition(async () => {
      const quizResult = await programRecommendationQuiz(answers as ProgramRecommendationQuizInput);
      setResult(quizResult);
      setCurrentStep(currentStep + 1);
    });
  };
  
  const progress = ((currentStep + 1) / (totalQuestions + 1)) * 100;
  
  if (result) {
    return (
      <section id="quiz-result" className="w-full py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
           <Card className="max-w-2xl mx-auto bg-card/50 border-primary/20 shadow-lg shadow-primary/10">
            <CardHeader className="text-center">
              <Sparkles className="mx-auto h-12 w-12 text-primary" />
              <CardTitle className="text-3xl font-headline mt-4">Your Personalized Recommendation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="p-6 rounded-lg bg-primary/10 border border-primary/30">
                    <h3 className="text-2xl font-bold font-headline text-primary">{result.recommendedProgram}</h3>
                </div>
                <div>
                    <h4 className="text-xl font-semibold font-headline flex items-center gap-2"><Lightbulb className="h-5 w-5 text-accent"/>Reasoning</h4>
                    <p className="text-muted-foreground mt-2">{result.reasoning}</p>
                </div>
            </CardContent>
            <CardFooter>
                 <Button onClick={() => { setResult(null); setCurrentStep(0); setAnswers({ interestInRobotics: false, interestInAi: false }) }} className="w-full">
                    Start Over
                </Button>
            </CardFooter>
           </Card>
        </div>
      </section>
    )
  }

  const currentQuestion = questions[currentStep];

  return (
    <section id="quiz" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">Which Program Suits You?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
                Answer a few questions to get a personalized recommendation for your AI and Robotics journey.
            </p>
        </div>
        <Card className="max-w-2xl mx-auto bg-card/70 backdrop-blur-sm">
          <CardHeader>
             <Progress value={((currentStep) / totalQuestions) * 100} className="w-full mb-4" />
            <CardTitle className="text-2xl font-headline">{currentQuestion.title}</CardTitle>
            <CardDescription>{currentQuestion.description}</CardDescription>
          </CardHeader>
          <CardContent className="min-h-[150px]">
            {currentQuestion.type === 'checkbox' && (
                <div className="space-y-4">
                    {currentQuestion.options.map(option => (
                        <div key={option.id} className="flex items-center space-x-3 p-3 rounded-md hover:bg-secondary/50 transition-colors">
                             <Checkbox 
                                id={option.id} 
                                checked={!!answers[option.id as keyof typeof answers]}
                                onCheckedChange={() => handleCheckboxChange(option.id as 'interestInRobotics' | 'interestInAi')}
                             />
                             <Label htmlFor={option.id} className="text-base cursor-pointer flex-1">{option.label}</Label>
                        </div>
                    ))}
                </div>
            )}
            {currentQuestion.type === 'radio' && (
              <RadioGroup onValueChange={(value) => handleAnswerChange(currentQuestion.key, value)} value={answers[currentQuestion.key as keyof typeof answers] as string}>
                <div className="space-y-2">
                    {currentQuestion.options.map(option => (
                        <div key={option} className="flex items-center space-x-3 p-3 rounded-md hover:bg-secondary/50 transition-colors">
                            <RadioGroupItem value={option} id={option} />
                            <Label htmlFor={option} className="text-base cursor-pointer flex-1">{option}</Label>
                        </div>
                    ))}
                </div>
              </RadioGroup>
            )}
            {currentQuestion.type === 'textarea' && (
              <Textarea 
                placeholder="Tell us about your dreams..." 
                onChange={(e) => handleAnswerChange(currentQuestion.key, e.target.value)}
                value={answers.careerGoals || ''}
                rows={4}
              />
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handlePrev} disabled={currentStep === 0}>Previous</Button>
            {currentStep < totalQuestions - 1 ? (
              <Button onClick={handleNext}>Next</Button>
            ) : (
              <Button onClick={handleSubmit} disabled={isPending}>
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Get Recommendation
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
