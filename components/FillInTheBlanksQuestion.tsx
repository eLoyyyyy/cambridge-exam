import { VStack, RadioGroup, SimpleGrid, Radio, Text, Box, Input } from "@chakra-ui/react";
import { Question } from "../types/Question";

export default function FillInTheBlanksQuestion ({ id, questionText }: Question) {
    return (
       <Box>
            <VStack>
            <Text>Fill in the blanks: {questionText}</Text>
            <Input size='lg' />
            </VStack>
        </Box>
    )
}