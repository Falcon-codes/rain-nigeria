import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Courses } from '@/components/landing/Courses';
import { ProgramMatcher } from '@/components/landing/ProgramMatcher';
import { SuccessStories } from '@/components/landing/SuccessStories';
import { Facilities } from '@/components/landing/Facilities';
import { Faculty } from '@/components/landing/Faculty';
import { ApplicationProcess } from '@/components/landing/ApplicationProcess';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Courses />
        <ProgramMatcher />
        <SuccessStories />
        <Facilities />
        <Faculty />
        <ApplicationProcess />
      </main>
      <Footer />
    </div>
  );
}
