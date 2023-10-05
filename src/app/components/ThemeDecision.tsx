import { useState, ChangeEvent } from "react";
import { Flex, Input, Button, Container, Stack, Box, Heading, Text, Image } from "@chakra-ui/react";
interface Props {
    handleSave: Function;
}
export default function ThemeDecision({ handleSave }: Props) {
    const [input, setInput] = useState<string>('');
    const handleSubmit = () => {
        handleSave(input);
    };
    return (
        <>
            <Container marginTop='100px' minH="70vh" maxW="container.xl" bgColor='red.100'>
                <Stack
                    as={Box}
                    align={'center'}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        SORT out THOUGHTs!
                    </Heading>
                    <Image src='/images/sorted.png' alt='image of thoughts sorted'
                        boxSize='55%'
                        p={8}
                    />
                    <Text color={'gray.500'} fontSize='2xl'>
                        考えや悩みを整理しましょう
                    </Text>
                    <Flex width='700px' height='90px' justifyContent="space-between" p={4} border='2px' borderColor='green.400' rounded='lg'>
                        <Input type='text' height='60px' placeholder='整理したいテーマを入力してください' fontSize='md' onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} value={input} />
                        <Button textColor='white' width='100px' height='60px' bgColor='blue.500' marginLeft='5px' onClick={() => handleSubmit()}>始める</Button>
                    </Flex >
                </Stack>
            </Container>
        </>
    );
}