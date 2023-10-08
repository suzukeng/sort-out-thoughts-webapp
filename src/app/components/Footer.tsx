import { Container, Box, Text } from '@chakra-ui/react'

export default function Footer() {
    return (
        <Box bg="gray.200" color="gray.700" as="footer" height='60px'
            borderTop='solid'
            borderTopColor='gray.50'
        >
            <Container maxW="container.xxl" p={4}>
                <Text as="small">© 2023 suzuken</Text>
            </Container>
        </Box >
    );
}