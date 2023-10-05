import { Container, Center, VStack } from '@chakra-ui/react'

export default function Main({ children }: { children: React.ReactNode }) {
    return (
        <Container
            as="main"
            maxW="container.xxl"
            minH="calc(100vh - 75px - 60px)"
        ><Center>
                <VStack>
                    {children}
                </VStack>
            </Center>
        </Container>
    );
}