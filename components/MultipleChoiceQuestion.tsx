import { Box, Radio, RadioGroup, SimpleGrid, VStack, Text, FormControl, FormLabel } from "@chakra-ui/react";
import { Question } from "../types/Question";

export default function MultipleChoiceQuestion({ id, questionText, answers }: Question) {
    return (
        <Box>
            <FormControl as='fieldset'>
                <FormLabel as='legend'>
                    {questionText}
                </FormLabel>
                <RadioGroup>
                    <SimpleGrid columns={2}>
                        {answers?.map(a => (
                            <Box key={a.id} height='40px'>
                                <Radio
                                    key={a.id}
                                    value={a.text}
                                >{a.text}</Radio>
                            </Box>
                        ))}
                    </SimpleGrid>
                </RadioGroup>
            </FormControl>
        </Box>
    )
}