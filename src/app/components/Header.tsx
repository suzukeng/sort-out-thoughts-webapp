import NextLink from 'next/link'
import { Box, Container, Heading, Flex, Image, HStack, Button } from '@chakra-ui/react'
export const Header = () => {
    return (
        <Box as='header' height='75px' px={6} bgColor='blue.50'
            borderBottom='thick double'
            borderBottomColor='gray.300'
        >
            <Container maxW='container.xxl'>
                <Flex as="header" py="5" justifyContent="space-between" align="center">
                    <NextLink href='/' passHref>
                        <HStack>
                            <Image src='/images/SORT-out-THOUGHTs.png' alt='SORT-out-THOUTs-Icon' width='40px' height='40px' />
                            <Heading as='h1' fontSize="3xl" cursor="pointer">
                                SORT out THOUGHTs !
                            </Heading>
                        </HStack>
                    </NextLink>
                    <HStack spacing='20px'>
                        <Button
                            as={NextLink}
                            fontSize="md"
                            color="black"
                            bg="blue.50"
                            _hover={{
                                bg: 'blue.50'
                            }}
                            href='/'
                        >
                            home
                        </Button>
                        <Button
                            as={NextLink}
                            fontSize="md"
                            color="black"
                            bg="blue.50"
                            _hover={{
                                bg: 'blue.50'
                            }}
                            href='/about'
                        >
                            about
                        </Button>
                    </HStack>
                </Flex>
            </Container>
        </Box >
    )
}
export default Header