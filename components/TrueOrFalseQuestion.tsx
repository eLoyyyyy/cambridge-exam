import { VStack, Text, Box, Switch, Stack, FormControl, FormLabel } from "@chakra-ui/react";
import { Question } from "../types/Question";

export default function TrueOrFalseQuestion ({ questionText }: Question) {
    return (
        <Box>
            <FormControl as='fieldset'>
                <FormLabel as='legend'>
                    {questionText}
                </FormLabel>
                <Stack align='center' direction='row'>
                    <Text>Yes</Text>
                    <Switch size='lg' />
                    <Text>No</Text>
                </Stack>
            </FormControl>
        </Box>
    )
}