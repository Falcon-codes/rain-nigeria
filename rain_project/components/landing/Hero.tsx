"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight, TrendingUp, Calendar, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
       <div className="absolute inset-0 z-0 bg-background">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
       </div>

      <div className="container px-4 md:px-6 z-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl leading-tight animate-fade-in-down">
            ROBOTICS & AI NIGERIA
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 md:text-xl animate-fade-in-up [animation-delay:0.3s]">
            World-Class Training for the Next Generation of AI Engineers. Step into the future and build what's next.
          </p>
          <div className="mt-8 flex justify-center animate-fade-in-up [animation-delay:0.6s]">
            <Button asChild size="lg" className="font-bold text-lg group">
              <Link href="#courses">
                Explore Programs
                <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 z-20 animate-fade-in-up [animation-delay:0.9s]">
          <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-white max-w-4xl mx-auto">
                  <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                      <TrendingUp className="mx-auto h-8 w-8 text-primary mb-2"/>
                      <p className="font-bold text-xl sm:text-2xl">500+</p>
                      <p className="text-xs sm:text-sm text-gray-400">Graduates</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                      <Calendar className="mx-auto h-8 w-8 text-primary mb-2"/>
                      <p className="font-bold text-xl sm:text-2xl">12 Months</p>
                      <p className="text-xs sm:text-sm text-gray-400">Intensive Program</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                      <Zap className="mx-auto h-8 w-8 text-primary mb-2"/>
                      <p className="font-bold text-xl sm:text-2xl">70%</p>
                      <p className="text-xs sm:text-sm text-gray-400">Practical</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                      <Zap className="mx-auto h-8 w-8 text-accent mb-2"/>
                      <p className="font-bold text-xl sm:text-2xl">100%</p>
                      <p className="text-xs sm:text-sm text-gray-400">Future-Proof</p>
                  </div>
              </div>
          </div>
      </div>
      <style jsx>{`
        .bg-grid-pattern {
            background-image: linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px);
            background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}