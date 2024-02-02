import { Heading, VStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecommendation } from "../hooks/hooks"

export default function Page() {
    const { query } = useRouter()
    const recommendation = useRecommendation(Number(query.score))

    return (
        <VStack>
            <Text>
                Your score is
            </Text>
            <Heading
                aria-label="score"
            >
                {query.score}
            </Heading>

            <Text aria-label="recommendation">
                Recommendation: {recommendation}
            </Text>

            <Link href='/'>Home</Link>
        </VStack>
    )
}