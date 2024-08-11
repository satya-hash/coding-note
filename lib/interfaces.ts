export interface Problem {
  id: string;
  title: string;
  statement: string;
  examples: Array<{
    input: string;
    output: string;
    explanation: string;
  }>;
  approach: string[];
  code: {
    javascript: string;
    python: string;
    java: string;
  };
  timeComplexity: string;
  spaceComplexity: string;
  difficulty: string;
  link: string;
  dateOfSolved: string;
}
