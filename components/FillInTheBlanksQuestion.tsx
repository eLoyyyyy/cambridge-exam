import { VStack, RadioGroup, SimpleGrid, Radio, Text, Box, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { Question } from "../types/Question";

export default function FillInTheBlanksQuestion ({ id, questionText }: Question) {
    return (
       <Box>
            <FormControl as='fieldset'>
                <FormLabel as='legend'>
                    Fill in the blanks: {questionText}
                </FormLabel>
                <Input size='lg' />
            </FormControl>
        </Box>
    )
}