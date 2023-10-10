'use client'
import { Heading, Box, Text } from '@chakra-ui/react'
export default function about() {
    return (
        <Box m={4} bgColor='red.100'>
            <Heading as='h1' fontSize='5xl'> About</Heading>
            <Box>
                <Box marginTop={4} marginLeft={4}>
                    <Heading as='h2' fontSize='3xl'> このサイトについて</Heading>
                    <Box marginLeft={2}>
                        <Text fontSize='xl'>
                            悩みや考えを書きたい
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}