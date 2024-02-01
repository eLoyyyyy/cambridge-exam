import { Question } from "../types/Question";
import { QUESTION_TYPE } from "../types/QuestionType";
import FillInTheBlanksQuestion from "./FillInTheBlanksQuestion";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import ShortAnswerQuestion from "./ShortAnswerQuestion";
import TrueOrFalseQuestion from "./TrueOrFalseQuestion";

export default function Question (props: Question) {
    switch(props.questionType) {
        case QUESTION_TYPE.MULTIPLE_CHOICE:
            return <MultipleChoiceQuestion {...props}/>
        case QUESTION_TYPE.FILL_IN_THE_BLANKS:
            return <FillInTheBlanksQuestion {...props}/>
        case QUESTION_TYPE.TRUE_OR_FALSE:
            return <TrueOrFalseQuestion {...props}/>
        case QUESTION_TYPE.SHORT_ANSWER:
            return <ShortAnswerQuestion {...props}/>
    }
}