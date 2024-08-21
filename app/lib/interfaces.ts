export interface Content {
  id: string;
  title: string;
  type: "problem" | "blog";
  statement: string;
  examples?: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  steps: string[];
  code?: {
    javascript: string;
    python: string;
    java: string;
  };
  complexity?: {
    timeComplexity?: string;
    spaceComplexity?: string;
  };
  difficulty?: string;
  link: string;
  dateOfUpload: string;
  subheadings?: Array<{
    heading: string;
    description: string;
  }>;
  tags: string[];
}

export interface iDefault {
  query?: string | null | undefined;
}
