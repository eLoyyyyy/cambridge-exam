export const QUESTION_TYPE = {
    MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
    FILL_IN_THE_BLANKS: 'FILL_IN_THE_BLANKS',
    TRUE_OR_FALSE: 'TRUE_OR_FALSE',
    SHORT_ANSWER: 'SHORT_ANSWER'
} as const

type EnumValues<T> = T[keyof T]

export type QuestionType = EnumValues<typeof QUESTION_TYPE>