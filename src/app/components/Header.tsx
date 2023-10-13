'use client'
import { Box, Container, Heading, Flex, Image, HStack, Button } from '@chakra-ui/react'
import React from 'react';
import NextLink from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
export const Header = () => {
    const router = useRouter()
    const pathname = usePathname()
    const aboutPageNavigation = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (pathname != '/about') {
            const answer = window.confirm('入力したデータは保存されません。\n 本当にページ遷移しますか？')
            if (!answer) {
                console.log('RouteChange abort')
            } else {
                router.push('/about')
            }
        }
    };
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
                            fontSize="md"
                            color="black"
                            bg="blue.50"
                            _hover={{
                                bg: 'blue.50'
                            }}
                            onClick={aboutPageNavigation}
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