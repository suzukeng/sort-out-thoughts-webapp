import NextLink from 'next/link'
import { Box, Container, Heading, Flex } from '@chakra-ui/react'
export const Header = () => {
    return (
        <Box as='header' height='75px' px={6} bgColor='green.100'>
            <Container maxW='container.xxl'>
                <Flex as="header" py="5" justifyContent="space-between" align="center">
                    <NextLink href='/' passHref>
                        <Heading as='h1' fontSize="2xl" cursor="pointer">
                            SORT out THOUGHT!
                        </Heading>
                    </NextLink>
                </Flex>
            </Container>
        </Box>
    )
}
export default Header