import { VStack, Box, Text, Input } from "@chakra-ui/react";
import { Question } from "../types/Question";

export default function ShortAnswerQuestion ({ questionText }: Question) {
    return (
        <Box>
            <VStack>
            <Text>Short Answer: {questionText}</Text>
            <Input size='lg' />
            </VStack>
        </Box>
    )
}