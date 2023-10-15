import React, { Dispatch, SetStateAction } from "react";
import { VStack, Button, Flex, Text, Heading, Box } from "@chakra-ui/react";
interface props {
    titles: string[]
    currentIndex: number
    setIndex: Dispatch<SetStateAction<number>>
    parentIndex: number | undefined
}
export default function ShowTitleList({ titles, currentIndex, setIndex, parentIndex }: props) {
    const reversedTitles = titles.map((_, i, a) => a[a.length - 1 - i])
    const pIndex: number = (parentIndex !== undefined && Number.isSafeInteger(parentIndex) ? parentIndex : -1)
    return (
        <Flex minH='400px' width='400px' border='2px' borderColor='blue.400' rounded='lg'
            bgColor='gray.50'
        >
            <VStack alignItems="start">
                <Box p={2}>
                    <Heading fontSize='2xl'>タイトル一覧</Heading>
                </Box>
                <VStack spacing='0px' marginLeft='10px' marginBottom='10px'>
                    {reversedTitles.map((title: string, index: number, a: string[]) => (
                        <Button key={index} minH='35px' width='370px' border='1px' borderColor='gray.300' rounded={0}
                            whiteSpace='unset'
                            bgColor={
                                currentIndex === a.length - index - 1 ? 'green.200' :
                                    pIndex === a.length - index - 1 ? 'green.50' :
                                        'gray.100'
                            }
                            _hover={{
                                border: '2px',
                                borderColor: 'gray.400'
                            }}
                            onClick={() => setIndex(a.length - 1 - index)}
                        >
                            <Text fontSize='md'>{pIndex === a.length - index - 1 &&
                                <Text as='b' color='gray.500'>【派生元】:</Text>
                            }
                                {title.length > 15 ? title.slice(0, 15) + '...' : title}</Text>
                        </Button>
                    ))
                    }
                </VStack>
            </VStack>
        </Flex >
    );
}