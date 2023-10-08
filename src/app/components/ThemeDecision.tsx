import { useState, ChangeEvent } from "react";
import { Flex, Input, Button, Container, Stack, Box, Heading, Text, Image, FormControl, FormHelperText } from "@chakra-ui/react";
import { z } from 'zod'

const TitleSchema = z.string().min(1, { message: '1文字以上入力してください。' }).max(40, { message: '40文字以内で入力してください。' })

interface Props {
    handleSave: Function;
}

export default function ThemeDecision({ handleSave }: Props) {
    const [input, setInput] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')
    const handleSubmit = () => {
        try {
            TitleSchema.parse(input);
            handleSave(input);
        } catch (error) {
            if (error instanceof z.ZodError) {
                console.log(error.issues[0].message);
                setErrorMessage(error.issues[0].message);
            }
        }
    };
    const isError = (errorMessage !== '')
    return (
        <>
            <Container marginTop='90px' minH="70vh" maxW="container.xl">
                <Stack
                    as={Box}
                    align={'center'}
                >
                    <Heading
                        fontWeight={700}
                        fontSize={{ base: '2xl', sm: '4xl', md: '8xl' }}
                        lineHeight={'110%'}>
                        SORT out THOUGHTs!
                    </Heading>
                    <Image src='/images/sorted.png' alt='image of thoughts sorted'
                        boxSize='60%'
                        p={10}
                    />
                    <Text color='gray.500' fontSize='2xl'>
                        考えや悩みを整理しましょう
                    </Text>
                    <Flex width='700px' height='120px' justifyContent="space-between" p={4}>
                        <FormControl isInvalid={isError}>
                            <Input type='text' height='60px' placeholder='整理したいテーマを入力してください' fontSize='md'
                                bgColor='gray.100'
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                                value={input} />
                            <FormHelperText>{errorMessage}</FormHelperText>
                        </FormControl>
                        <Button textColor='white' width='100px' height='60px' bgColor='blue.500' marginLeft='5px' onClick={() => handleSubmit()}>始める</Button>
                    </Flex >
                </Stack>
            </Container >
        </>
    );
}