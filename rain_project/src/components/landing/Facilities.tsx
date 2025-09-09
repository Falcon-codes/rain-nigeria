"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BedDouble, Wifi, Armchair } from 'lucide-react';

export function Facilities() {
  return (
    <section id="facilities" className="w-full py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">State-of-the-Art Environment</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Learn and innovate in a space designed to foster creativity and collaboration.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
                 <h3 className="text-3xl font-headline mb-4">Our Innovation Hub</h3>
                 <p className="text-muted-foreground mb-6">
                    Our campus is equipped with the latest robotics hardware, high-performance computing labs, and collaborative project spaces. We provide everything you need to turn your ideas into reality. Click through our gallery to see where you'll be learning.
                 </p>
                 <Button size="lg">Take a Virtual Tour</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Image src="https://picsum.photos/400/400?random=5" alt="Robotics Lab" width={400} height={400} className="rounded-lg shadow-lg transform hover:scale-105 transition-transform" data-ai-hint="robotics lab" />
                <Image src="https://picsum.photos/400/400?random=6" alt="Collaboration Space" width={400} height={400} className="rounded-lg shadow-lg transform hover:scale-105 transition-transform mt-8" data-ai-hint="modern office" />
                 <Image src="https://picsum.photos/400/400?random=7" alt="AI Computing Cluster" width={400} height={400} className="rounded-lg shadow-lg transform hover:scale-105 transition-transform" data-ai-hint="server room" />
                <Image src="https://picsum.photos/400/400?random=8" alt="Student Lounge" width={400} height={400} className="rounded-lg shadow-lg transform hover:scale-105 transition-transform mt-8" data-ai-hint="student lounge" />
            </div>
        </div>
        <div className="mt-24">
            <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="text-3xl font-headline">Comfortable Accommodation</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="text-muted-foreground mb-4">Focus on your studies while we take care of the rest. Our on-campus accommodation is designed for comfort and convenience.</p>
                        <p className="text-4xl font-bold mb-2 text-primary">₦1,700,000</p>
                        <p className="text-muted-foreground mb-6">For the entire 12-month program.</p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3"><BedDouble className="h-6 w-6 text-accent" /><span>Private, en-suite rooms</span></div>
                            <div className="flex items-center gap-3"><Wifi className="h-6 w-6 text-accent" /><span>High-speed internet</span></div>
                            <div className="flex items-center gap-3"><Armchair className="h-6 w-6 text-accent" /><span>Fully furnished with all amenities</span></div>
                        </div>
                    </div>
                    <Image src="https://picsum.photos/600/400?random=9" alt="Student Accommodation" width={600} height={400} className="rounded-lg" data-ai-hint="modern bedroom"/>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
