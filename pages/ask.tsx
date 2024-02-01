import { useGetQuestions } from "../hooks/hooks"
import { Heading, StackDivider, VStack } from "@chakra-ui/react"
import Question from "../components/Question";

export default function Page () {
    const {
        isLoading,
        isError,
        data,
    } = useGetQuestions();

    if (isLoading) {
        return <Heading>Loading ...</Heading>
    }

    if (isError) {
        <Heading>Error has occured.</Heading>
    }

    return (
        <VStack
            divider={<StackDivider borderColor='gray.200' />}
        >
            {data.questions.map((questionProps) => (
                <Question key={questionProps.id} {...questionProps} />
            ))}
        </VStack>
    )
}