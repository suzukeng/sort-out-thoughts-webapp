import { HStack, Box, Flex, Center, Text, Heading } from "@chakra-ui/react";
interface props {
    themeTitle: string
}
export default function ShowTheme({ themeTitle }: props) {
    return (
        <Box marginTop='20px'>
            <Heading fontSize='5xl'>全体テーマ : <Text fontSize='6xl' as='span' color='blue.500'>{themeTitle}</Text></Heading>
        </Box>
    );
}