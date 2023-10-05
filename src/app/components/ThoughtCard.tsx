import { useState, ChangeEvent, useEffect } from "react";
import { Flex, Input, Button, Text, Card, CardHeader, CardBody, Box, VStack } from "@chakra-ui/react";
import { Thought } from "../type";
interface props {
    thought: Thought
    createDerivation: Function,
}
export default function ThoughtCard({ thought, createDerivation }: props) {
    const [input, setInput] = useState<string>('');
    const [currentThoughtList, setCurrentThoughtList] = useState<string[]>([]);
    useEffect(() => {
        console.log('aaaa', thought.thoughtList);
        setCurrentThoughtList(thought.thoughtList)
    }, [thought]);
    const thoughtOnSubmit = () => {
        console.log("出力:", input);
        setCurrentThoughtList([...currentThoughtList, input]);
        setInput('');
    };
    const createNewDerivation = (newTheme: string) => {
        console.log("新しい出力:", newTheme);
        createDerivation(newTheme, thought.title, currentThoughtList)
    };
    const delThoughtListItem = (id: number) => {
        setCurrentThoughtList(
            currentThoughtList.filter((_, index) => (index !== id))
        )
    };
    return (
        <Card width='1050px' minH='700px' justifyContent="space-between" p={2} border='2px' borderColor='green.400' bgColor='gray.50'>
            <CardHeader>
                <Text as='b' fontSize='3xl'>
                    タイトル :
                    <Text as='span' fontSize='3xl' color='blue.500'>{thought.title}</Text>
                </Text>
                <Text color='gray.500' fontSize='xl' marginBottom='10px'>派生元タイトル :<Text as='span' fontSize='xl'>{thought.parentTitle}</Text></Text>
                <Text fontSize='2xl'>なぜそう思ったのか（40文字以内）</Text>
                <Flex width='900px' height='60px' justifyContent="space-between" p={1}>
                    <Input type='text' placeholder={`\"${thought.title.length >= 20 ? thought.title.slice(0, 20) + "..." : thought.title}\"について思ったことを記載してください`} height='50px' borderColor='blue.600'
                        _hover={{
                            borderColor: 'blue.600'
                        }}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} value={input} />
                    <Button textColor='white' bgColor='blue.400' width='100px' marginLeft='5px' height='50px' onClick={thoughtOnSubmit} >追加</Button>
                </Flex >
            </CardHeader>
            <CardBody>
                <Box>
                    <Text fontSize='xl'>Thought List</Text>
                </Box>
                <VStack as='ul' marginLeft='20px' marginTop='10px' spacing='5px'>
                    {currentThoughtList.map((_, index: number, a: string[]) => (
                        <Flex key={index} as='li' width='950px' minH='48px' justifyContent="space-between">
                            <Box width='800px' minH='45px' border='2px' borderColor='green.400' bgColor='white' rounded='md'><Text fontSize='xl'>{a[a.length - 1 - index]}</Text></Box>
                            <Button textColor='white' bgColor='blue.400' width='70px' marginLeft='5px' minH='45px' border='1px' borderColor='blue.100' onClick={() => createNewDerivation(a[a.length - 1 - index])}>派生</Button>
                            <Button textColor='white' bgColor='red.400' width='70px' marginLeft='5px' minH='45px' border='1px' borderColor='red.100' onClick={() => delThoughtListItem(a.length - index - 1)}>削除</Button>
                        </Flex >
                    ))}
                </VStack>
            </CardBody>
        </Card >
    );
}