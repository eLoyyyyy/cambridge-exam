import { Link } from '@chakra-ui/next-js'
import { Box, Button, Flex, HStack, Heading, Stack, VStack, Text, SimpleGrid, Radio, RadioGroup } from '@chakra-ui/react'

export default function Page() {

  const onClick = async () => {
    const result = await fetch('http://localhost:3000/api/questions', {
      method: 'GET'
    })

    console.log(result)
  }
  
  return (
    <Flex height='lg' justify='center' align='center'>
      <Box>
        <VStack>
            <Heading>Welcome!</Heading>
            <Text>
              We will ask you a few questions.
            </Text>
            <Button onClick={onClick}>
              Start
            </Button>
        </VStack>
      </Box>
    </Flex>
  )
}