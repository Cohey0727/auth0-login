export interface QuestionListItem {
  id: number;
  answers: string[];
  title: string;
  description: string;
}

export interface AnswerItem {
  answer: string;
}

export interface QuestionDetailItem {
  id: number;
  answers: AnswerItem[];
  title: string;
  description: string;
}
