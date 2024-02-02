import { Heading, VStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Page() {
    const { query } = useRouter()

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

            <Link href='/'>Home</Link>
        </VStack>
    )
}