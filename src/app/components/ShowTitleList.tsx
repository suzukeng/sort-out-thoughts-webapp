import React, { Dispatch, SetStateAction } from "react";
import { VStack, Button, Flex, Center, Text, Heading, Box } from "@chakra-ui/react";
interface props {
    titles: string[]
    currentIndex: number
    setIndex: Dispatch<SetStateAction<number>>
}
export default function ShowTitleList({ titles, currentIndex, setIndex }: props) {
    const reversedTitles = titles.map((_, i, a) => a[a.length - 1 - i])
    console.log('currentIndex', currentIndex, reversedTitles.length);
    return (
        <Flex minH='320px' width='320px' justifyContent="space-between" border='2px' borderColor='green.400' rounded='lg'
            bgColor='gray.50'
        >
            <VStack alignItems="start">
                <Box p={2}>
                    <Heading fontSize='2xl'>タイトル一覧</Heading>
                </Box>
                <VStack spacing='0px' marginLeft='5px'>
                    {reversedTitles.map((title: string, index: number, a: string[]) => (
                        <Button key={index} minH='35px' width='300px' border='1px' borderColor='gray.200' rounded={0}
                            whiteSpace='unset'
                            bgColor={currentIndex == a.length - index - 1 ? 'green.200' : 'gray.100'}
                            _hover={{
                                border: '2px',
                                borderColor: 'gray.400'
                            }}
                            onClick={() => setIndex(a.length - 1 - index)}
                        >
                            <Text fontSize='md'> {title}</Text>
                        </Button>
                    ))
                    }
                </VStack>
            </VStack>
        </Flex >
    );
}