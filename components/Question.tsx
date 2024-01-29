import { Question } from "../types/Question";
import { QUESTION_TYPE } from "../types/QuestionType";
import FillInTheBlanksQuestion from "./FillInTheBlanksQuestion";

export default function Question (props: Question) {
    switch(props.questionType) {
        case QUESTION_TYPE.MULTIPLE_CHOICE:
        case QUESTION_TYPE.FILL_IN_THE_BLANKS:
        case QUESTION_TYPE.TRUE_OR_FALSE:
        case QUESTION_TYPE.SHORT_ANSWER:
            return <FillInTheBlanksQuestion {...props}/>
    }
}