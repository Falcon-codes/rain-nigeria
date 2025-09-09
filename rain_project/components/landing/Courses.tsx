import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Bot, Cpu } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: "Robot Development & Automation (RDA)",
    description: "Master the skills to design, build, and program intelligent robotic systems for the industries of tomorrow.",
    price: "₦7,700,000",
    priceType: "Full Course",
    features: [
      "Advanced Robotics Programming (C++)",
      "Sensor Integration & Perception",
      "Actuator Control & Kinematics",
      "Industrial Automation & PLC",
    ],
  },
  {
    icon: <Cpu className="h-10 w-10 text-primary" />,
    title: "Artificial Intelligence & Machine Learning (AIML)",
    description: "Dive deep into the world of AI. Learn to create intelligent algorithms that can learn, reason, and act.",
    price: "₦7,700,000",
    priceType: "Full Course",
    features: [
      "Deep Learning with TensorFlow & PyTorch",
      "Computer Vision with OpenCV",
      "Natural Language Processing (NLP)",
      "Reinforcement Learning",
    ],
  },
];

export function Courses() {
  return (
    <section id="courses" className="w-full py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">Choose Your Path</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            We offer two world-class, intensive programs designed to make you an expert in your chosen field.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {courses.map((course) => (
            <Card key={course.title} className="flex flex-col transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-primary/20 bg-card/70 backdrop-blur-sm">
              <CardHeader className="items-center text-center">
                {course.icon}
                <CardTitle className="text-2xl font-headline mt-4">{course.title}</CardTitle>
                <CardDescription className="px-6">{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="border-t border-b border-border/50 py-4 my-4">
                    <p className="text-4xl font-bold text-center">{course.price}</p>
                    <p className="text-sm text-muted-foreground text-center">{course.priceType}</p>
                </div>
                <ul className="space-y-3">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full font-bold" size="lg">Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
         <div className="text-center mt-12">
            <p className="text-muted-foreground">Short courses are also available starting from ₦3,000,000.</p>
            <p className="text-muted-foreground">Flexible payment plans and scholarships are available. <Link href="#apply" className="text-primary hover:underline">Learn more</Link>.</p>
        </div>
      </div>
    </section>
  );
}
