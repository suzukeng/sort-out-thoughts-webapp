import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkBreaks from "remark-breaks";
import { Heading, Box, Container, Center } from '@chakra-ui/react'
export default async function about() {
    const filePath = path.join(process.cwd(), 'contents', 'about.md');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const title = data.title; // 記事のタイトル
    const processedContent = await remark().use(remarkBreaks).use(remarkHtml).process(content);
    const contentHtml = processedContent.toString(); // 記事の本文をHTMLに変換
    console.log(contentHtml)
    return (
        <Center>
            <Container m={4} maxW='container.xl' bgColor='gray.50'>
                <Heading as='h1' fontSize='5xl'>{title}</Heading>
                <Box marginTop={4} marginLeft={4} fontSize='xl' dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </Container>
        </Center >
    )
}