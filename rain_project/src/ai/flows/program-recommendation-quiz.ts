'use server';

/**
 * @fileOverview A program recommendation quiz AI agent.
 *
 * - programRecommendationQuiz - A function that handles the quiz and returns a program recommendation.
 * - ProgramRecommendationQuizInput - The input type for the programRecommendationQuiz function.
 * - ProgramRecommendationQuizOutput - The return type for the programRecommendationQuiz function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProgramRecommendationQuizInputSchema = z.object({
  interestInRobotics: z
    .boolean()
    .describe('Whether the user is interested in robotics.'),
  interestInAi: z.boolean().describe('Whether the user is interested in AI.'),
  programmingExperience: z
    .string()
    .describe(
      'The users programming experience. Can be either beginner, intermediate or advanced.'
    ),
  priorEducation: z
    .string()
    .describe(
      'The users prior education. Can be either high school, bachelors, masters or doctorate.'
    ),
  careerGoals: z
    .string()
    .describe(
      'The users career goals, described in a few sentences.'
    ),
});
export type ProgramRecommendationQuizInput = z.infer<
  typeof ProgramRecommendationQuizInputSchema
>;

const ProgramRecommendationQuizOutputSchema = z.object({
  recommendedProgram: z
    .string()
    .describe(
      'The program recommended to the user, either Robot Development & Automation (RDA) or Artificial Intelligence & Machine Learning (AIML).'
    ),
  reasoning: z
    .string()
    .describe(
      'The reasoning behind the recommendation, explaining how the program aligns with the users interests, experience, education and career goals.'
    ),
});
export type ProgramRecommendationQuizOutput = z.infer<
  typeof ProgramRecommendationQuizOutputSchema
>;

export async function programRecommendationQuiz(
  input: ProgramRecommendationQuizInput
): Promise<ProgramRecommendationQuizOutput> {
  return programRecommendationQuizFlow(input);
}

const programRecommendationQuizPrompt = ai.definePrompt({
  name: 'programRecommendationQuizPrompt',
  input: {schema: ProgramRecommendationQuizInputSchema},
  output: {schema: ProgramRecommendationQuizOutputSchema},
  prompt: `You are an expert career counselor at RAIN Nigeria, specializing in recommending the best program for prospective students. RAIN Nigeria offers two main programs:

1.  Robot Development & Automation (RDA)
2.  Artificial Intelligence & Machine Learning (AIML)

You will analyze the students background, interests, experience, education, and career goals and recommend the program that best fits them. You will also provide a detailed reasoning for your recommendation, explaining how the program aligns with their profile.

Here is the information about the student:

Interested in Robotics: {{interestInRobotics}}
Interested in AI: {{interestInAi}}
Programming Experience: {{programmingExperience}}
Prior Education: {{priorEducation}}
Career Goals: {{careerGoals}}

Based on this information, which program would you recommend and why? Be concise and specific in your reasoning.

{{#if interestInRobotics}}
The student has interest in robotics.
{{/if}}
{{#if interestInAi}}
The student has interest in AI.
{{/if}}
`,
});

const programRecommendationQuizFlow = ai.defineFlow(
  {
    name: 'programRecommendationQuizFlow',
    inputSchema: ProgramRecommendationQuizInputSchema,
    outputSchema: ProgramRecommendationQuizOutputSchema,
  },
  async input => {
    const {output} = await programRecommendationQuizPrompt(input);
    return output!;
  }
);
