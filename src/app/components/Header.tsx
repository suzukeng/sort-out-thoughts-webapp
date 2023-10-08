import NextLink from 'next/link'
import { Box, Container, Heading, Flex, Image, HStack } from '@chakra-ui/react'
export const Header = () => {
    return (
        <Box as='header' height='75px' px={6} bgColor='blue.50'
            borderBottom='thick double'
            borderBottomColor='gray.300'
        >
            <Container maxW='container.xxl'>
                <HStack>
                    <Image src='/images/SORT-out-THOUGHTs.png' alt='SORT-out-THOUTs-Icon' width='40px' height='40px' />
                    <Flex as="header" py="5" justifyContent="space-between" align="center">
                        <NextLink href='/' passHref>
                            <Heading as='h1' fontSize="3xl" cursor="pointer">
                                SORT out THOUGHTs !
                            </Heading>
                        </NextLink>
                    </Flex>
                </HStack>
            </Container>
        </Box >
    )
}
export default Header