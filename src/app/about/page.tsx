import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from 'remark-gfm';
import remarkBreaks from "remark-breaks";
import { Heading, Box, Container, Center, Text } from '@chakra-ui/react'
export default async function about() {
    const filePath = path.join(process.cwd(), 'contents', 'about.md');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const { title, date } = data; // 記事のタイトル
    const processedContent = await remark().use(remarkBreaks).use(remarkHtml).use(remarkGfm).process(content);
    const contentHtml = processedContent.toString(); // 記事の本文をHTMLに変換
    return (
        <Center>
            <Container m={4} maxW='container.xl' bgColor='gray.50'>
                <Heading as='h1' fontSize='5xl'>{title}</Heading>
                <Text color='gray.500' fontSize='md'>最終更新日:{date}</Text>
                <Box marginTop={4} marginLeft={4} fontSize='xl' dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </Container>
        </Center >
    )
}