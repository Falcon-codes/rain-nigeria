"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const graduates = [
  { name: 'Ada Lovelace', position: 'AI Engineer @ Google', story: 'RAIN transformed my passion for logic into a career in AI. The hands-on projects were invaluable.', image: 'https://picsum.photos/100/100?random=1', dataAiHint: 'woman portrait' },
  { name: 'Charles Babbage', position: 'Robotics Lead @ Tesla', story: 'I went from theory to building real-world robots. The incubation support helped me launch my own startup.', image: 'https://picsum.photos/100/100?random=2', dataAiHint: 'man portrait' },
  { name: 'Grace Hopper', position: 'ML Ops @ Amazon Web Services', story: 'The curriculum is intense but incredibly rewarding. I felt more than prepared for my role at AWS.', image: 'https://picsum.photos/100/100?random=3', dataAiHint: 'woman portrait smiling' },
  { name: 'Alan Turing', position: 'Data Scientist @ OpenAI', story: 'The focus on both theory and practical application is what sets RAIN apart. A truly world-class education.', image: 'https://picsum.photos/100/100?random=4', dataAiHint: 'man portrait smiling' },
  { name: 'Timnit Gebru', position: 'AI Ethicist @ DAIR', story: 'RAIN provided the foundation I needed to pursue research in ethical AI and make a real impact.', image: 'https://picsum.photos/100/100?random=5', dataAiHint: 'professional woman smiling' },
];

export function SuccessStories() {
  return (
    <section id="success-stories" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">Meet Our Graduates</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Our alumni are shaping the future at top tech companies and innovative startups worldwide.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {graduates.map((grad, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full bg-secondary/30 flex flex-col">
                    <CardContent className="flex flex-col items-center text-center p-6 flex-grow">
                       <Avatar className="w-24 h-24 mb-4 border-4 border-primary">
                          <AvatarImage src={grad.image} alt={grad.name} data-ai-hint={grad.dataAiHint} />
                          <AvatarFallback>{grad.name.charAt(0)}</AvatarFallback>
                       </Avatar>
                      <h3 className="text-lg font-semibold">{grad.name}</h3>
                      <p className="text-sm text-primary font-medium">{grad.position}</p>
                      <p className="mt-4 text-muted-foreground text-sm italic flex-grow">"{grad.story}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
         <div className="mt-16 text-center">
            <h3 className="text-2xl font-headline tracking-tight mb-4">Our Global Reach</h3>
            <div className="max-w-3xl mx-auto">
                <Image src="https://picsum.photos/1200/600" alt="World map showing graduate locations" width={1200} height={600} className="rounded-lg opacity-70" data-ai-hint="world map" />
            </div>
        </div>
      </div>
    </section>
  );
}
