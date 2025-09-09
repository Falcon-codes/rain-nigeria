"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const faculty = [
  { name: 'Tijani Alameen Adekilekun', title: 'Founder & Lead Instructor', expertise: 'Cambridge-trained Robotics PhD, Visionary', image: 'https://picsum.photos/120/120?random=10', dataAiHint: 'professional man' },
  { name: 'Prof. Adaobi Nwosu', title: 'Head of AI Research', expertise: 'MIT Post-Doc, NLP Specialist', image: 'https://picsum.photos/120/120?random=11', dataAiHint: 'professional woman' },
  { name: 'Engr. Tunde Adebayo', title: 'Senior Robotics Engineer', expertise: '15+ Years in Industrial Automation', image: 'https://picsum.photos/120/120?random=12', dataAiHint: 'engineer man' },
  { name: 'Chiamaka Eze', title: 'Machine Learning Lead', expertise: 'Deep Learning & Computer Vision', image: 'https://picsum.photos/120/120?random=13', dataAiHint: 'software developer woman' },
];

const partners = [
    { name: 'United Nations', logo: 'https://images.unsplash.com/photo-1660071155921-7204712d7d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxVTiUyMGxvZ298ZW58MHx8fHwxNzU3NDQ0NzA3fDA&ixlib=rb-4.1.0&q=80&w=1080', dataAiHint: 'UN logo' },
    { name: 'MIT', logo: 'https://images.unsplash.com/photo-1755435140567-3c9df5ceffa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxNSVQlMjBsb2dvfGVufDB8fHx8MTc1NzQ0NDcwN3ww&ixlib=rb-4.1.0&q=80&w=1080', dataAiHint: 'MIT logo' },
    { name: 'Cambridge University', logo: 'https://images.unsplash.com/photo-1718789643749-a82f29708e0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxDYW1icmlkZ2UlMjBsb2dvfGVufDB8fHx8MTc1NzQ0NDcwN3ww&ixlib=rb-4.1.0&q=80&w=1080', dataAiHint: 'Cambridge logo' },
    { name: 'Google for Startups', logo: 'https://images.unsplash.com/photo-1572059002053-8cc5ad2f4a38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8R29vZ2xlJTIwbG9nb3xlbnwwfHx8fDE3NTc0NDQ3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080', dataAiHint: 'Google logo' },
]

export function Faculty() {
  return (
    <section id="faculty" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">Learn from the Best</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Our instructors are a blend of world-renowned academics and industry veterans.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member) => (
            <Card key={member.name} className="text-center border-0 bg-transparent shadow-none">
              <CardHeader>
                <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-primary/50">
                  <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.dataAiHint} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium">{member.title}</p>
                <p className="text-sm text-muted-foreground mt-2">{member.expertise}</p>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="mt-24">
            <h3 className="text-center text-2xl font-headline tracking-tight mb-8">Our Global Partners</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                {partners.map(partner => (
                    <Image key={partner.name} src={partner.logo} alt={partner.name} width={150} height={50} className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" data-ai-hint={partner.dataAiHint} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
