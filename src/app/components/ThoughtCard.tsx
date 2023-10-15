import { useState, ChangeEvent, useEffect } from "react";
import { Flex, Input, Button, Text, Card, CardHeader, CardBody, Box, VStack, FormControl, FormHelperText } from "@chakra-ui/react";
import { Thought } from "../type";
import { z } from 'zod'
const ThoughtListSchema = z.array(z.string().min(1, { message: '1文字以上入力してください。' }).max(40, { message: '40文字以内で入力してください。' }))
    .max(15, { message: '追加できるのは15個までです。' })
interface props {
    thought: Thought
    createDerivation: Function,
}
export default function ThoughtCard({ thought, createDerivation }: props) {
    const [input, setInput] = useState<string>('');
    const [currentThoughtList, setCurrentThoughtList] = useState<string[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('')
    useEffect(() => {
        if (thought.thoughtList) setCurrentThoughtList(thought.thoughtList)
    }, [thought]);
    const thoughtOnSubmit = () => {
        try {
            ThoughtListSchema.parse([...currentThoughtList, input])
            setCurrentThoughtList([...currentThoughtList, input]);
            setInput('');
            setErrorMessage('')
        } catch (error) {
            if (error instanceof z.ZodError) {
                setErrorMessage(error.issues[0].message);
            }
        }
    };
    const createNewDerivation = (newTheme: string) => {
        createDerivation(newTheme, thought.title, currentThoughtList)
    };
    const delThoughtListItem = (id: number) => {
        setCurrentThoughtList(
            currentThoughtList.filter((_, index) => (index !== id))
        )
    };
    const isError = (errorMessage !== '')
    return (
        <Card width='1000px' minH='700px' justifyContent="space-between" p={2} border='2px' borderColor='blue.400' bgColor='gray.50' marginBottom='10px' >
            <CardHeader>
                {thought.parentTitle ? (
                    <Text color='gray.500' fontSize='xl'>派生元タイトル :<Text as='span' fontSize='xl'>{thought.parentTitle}</Text></Text>
                ) : (
                    <Text color='gray.500' fontSize='xl'>メインテーマ</Text>
                )}
                <Text as='b' fontSize='3xl'>
                    タイトル :
                    <Text as='span' fontSize='3xl' color='blue.500'>{thought.title}</Text>
                </Text>
                <Text fontSize='2xl' marginTop='10px'>なぜ・いつまでに・どのように・どうしたいか<Text as='span' fontSize='md' color='gray.500'>（40文字以内）（15個まで追加可能）</Text></Text>
                <Flex width='900px' height='60px' justifyContent="space-between" p={1}>
                    <FormControl isInvalid={isError}>
                        <Input type='text' placeholder={`\"${thought.title.length >= 20 ? thought.title.slice(0, 20) + "..." : thought.title}\"について思ったことを記載してください`} height='50px' borderColor='blue.600'
                            _hover={{
                                borderColor: 'blue.600'
                            }}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} value={input} />
                        <FormHelperText>{errorMessage}</FormHelperText>
                    </FormControl>
                    <Button textColor='white' bgColor='blue.400' width='100px' marginLeft='5px' height='50px' onClick={thoughtOnSubmit} >追加</Button>
                </Flex >
            </CardHeader>
            <CardBody>
                <Box>
                    <Text as='h2' fontSize='xl'>Thought List</Text>
                </Box>
                <VStack as='ul' marginTop='10px' marginLeft='20px' spacing='5px'>
                    {currentThoughtList.map((_, index: number, a: string[]) => (
                        <Flex key={index} as='li' width='900px' minH='48px' justifyContent="space-between">
                            <Box width='750px' minH='45px' border='2px' borderColor='blue.400' bgColor='white' rounded='md'><Text fontSize='30px'>{a[a.length - 1 - index]}</Text></Box>
                            <Button textColor='white' bgColor='blue.400' width='70px' marginLeft='5px' minH='45px' border='1px' borderColor='blue.100' onClick={() => createNewDerivation(a[a.length - 1 - index])}>派生</Button>
                            <Button textColor='white' bgColor='red.400' width='70px' marginLeft='5px' minH='45px' border='1px' borderColor='red.100' onClick={() => delThoughtListItem(a.length - index - 1)}>削除</Button>
                        </Flex >
                    ))}
                </VStack>
            </CardBody>
        </Card >
    );
}