"use client";

import { Check, Edit, Send, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'Submit Application',
    description: 'Fill out our online form with your details and educational background.',
  },
  {
    icon: <Edit className="h-8 w-8 text-primary" />,
    title: 'Assessment Test',
    description: 'Take our online assessment to gauge your foundational knowledge and problem-solving skills.',
  },
  {
    icon: <Send className="h-8 w-8 text-primary" />,
    title: 'Interview',
    description: 'A one-on-one interview with our admissions team to discuss your goals and fit for the program.',
  },
  {
    icon: <Check className="h-8 w-8 text-primary" />,
    title: 'Admission Offer',
    description: 'Receive your admission offer and information on how to secure your spot.',
  },
];

export function ApplicationProcess() {
  return (
    <section id="apply" className="w-full py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">Start Your Journey</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Our application process is straightforward and designed to identify passionate, driven individuals.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid gap-10">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                    <div className="z-10 flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary text-primary">
                        {step.icon}
                    </div>
                    {index < steps.length - 1 && <div className="w-px h-20 bg-border/50"></div>}
                </div>
                <div className="bg-card p-6 rounded-lg shadow-lg flex-1 mt-2">
                    <h3 className="text-2xl font-bold font-headline mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
            <Button size="lg" className="font-bold text-lg">Apply Now</Button>
        </div>
      </div>
    </section>
  );
}
