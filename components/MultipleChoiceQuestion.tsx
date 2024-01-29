import { Box, Radio, RadioGroup, SimpleGrid, VStack, Text } from "@chakra-ui/react";

export default function MultipleChoiceQuestion() {
    return (
        <Box>
            <VStack>
            <Text>How are you?</Text>
            <RadioGroup>
                <SimpleGrid columns={2}>
                <Box height='40px'>
                    <Radio value='1'>First</Radio>
                </Box>
                <Box height='40px'>
                    <Radio value='2'>Second</Radio>
                </Box>
                <Box height='40px'>
                    <Radio value='3'>Third</Radio>
                </Box>
                <Box height='40px'>
                    <Radio value='4'>Fourth</Radio>
                </Box>
                </SimpleGrid>
            </RadioGroup>
            </VStack>
        </Box>
    )
}