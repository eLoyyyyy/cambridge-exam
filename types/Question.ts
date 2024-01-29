import { QuestionType } from "./QuestionType";

export interface Question {
    id: number,
    questionText: string,
    questionType: QuestionType,
    weight: number,
    answers?: Array<{
        id: number,
        text: string
    }>
}