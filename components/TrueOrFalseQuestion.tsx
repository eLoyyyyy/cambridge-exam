import { VStack, Text, Box, Switch, Stack } from "@chakra-ui/react";
import { Question } from "../types/Question";

export default function TrueOrFalseQuestion ({ questionText }: Question) {
    return (
        <Box>
            <VStack>
            <Text>{questionText}</Text>
            <Stack align='center' direction='row'>
                <Text>Yes</Text>
                <Switch size='lg' />
                <Text>No</Text>
            </Stack>
            </VStack>
        </Box>
    )
}