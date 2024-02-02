import { useGetQuestions } from "../hooks/hooks"
import { Button, Heading, StackDivider, VStack } from "@chakra-ui/react"
import Question from "../components/Question";
import { useRouter } from "next/router";

export default function Page () {
    const {
        isLoading,
        isError,
        data,
    } = useGetQuestions();
    const router = useRouter();

    const randomlyGenerateScore = () => {
        const randomNum = Math.floor(Math.random() * 100) + 1

        return router.push({
            pathname: '/result',
            query: { score: randomNum }
        })
    }

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
            <Button
                onClick={() => randomlyGenerateScore()}
            >
                Submit Answers
            </Button>
        </VStack>
    )
}