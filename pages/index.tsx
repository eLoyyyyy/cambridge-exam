import { Link } from '@chakra-ui/next-js'
import { Box, Button, Flex, HStack, Heading, Stack, VStack, Text, SimpleGrid, Radio, RadioGroup } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()

  const onClick = async () => {
    router.push('/ask')
  }
  
  return (
    <Flex height='lg' justify='center' align='center'>
      <Box>
        <VStack>
            <Heading as='h1'>Welcome!</Heading>
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