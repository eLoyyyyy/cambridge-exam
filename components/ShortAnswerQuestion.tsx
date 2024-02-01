import { VStack, Box, Text, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { Question } from "../types/Question";

export default function ShortAnswerQuestion ({ questionText }: Question) {
    return (
        <Box>
            <FormControl as='fieldset'>
                <FormLabel as='legend'>
                    Short Answer: {questionText}
                </FormLabel>
                <Input size='lg' />
            </FormControl>
        </Box>
    )
}