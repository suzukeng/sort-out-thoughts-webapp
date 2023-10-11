'use client'
import React, { useEffect, useState } from "react"
import { Thought } from "./type"
import { Center, Spinner, VStack, HStack, Box } from "@chakra-ui/react"
import ThemeDecision from "./components/ThemeDecision"
import ShowTitleList from "./components/ShowTitleList"
import ShowTheme from "./components/ShowTheme"
import ThoughtCard from "./components/ThoughtCard"
import SessionEndAlart from './components/SessionEndAlart'

function createNewThgout({ parentIndex = undefined, title, parentTitle = undefined, thoughtList = [] }: Thought): Thought {
  let newThought: Thought = { parentIndex, title, parentTitle, thoughtList };
  return newThought;
}
export default function Home() {
  const [index, setIndex] = useState<number>(-1);
  const [titleList, setTitleList] = useState<string[]>([]);
  const [theme, setTheme] = useState<string>('');
  const [thoughtList, setThoughtList] = useState<Thought[]>([]);
  const [isEditing, setIsEditing] = useState<Boolean>(false);
  const [parentIndex, setParentIndex] = useState<number | undefined>(undefined);
  const [currentThought, setCurrentThought] = useState<Thought>(createNewThgout({ title: 'no title' }));
  useEffect(() => {
    console.log(index, thoughtList.length);
    console.log(titleList.length, titleList);
    if (index < 0 || index >= thoughtList.length) return;
    setCurrentThought(thoughtList[index]);
    setParentIndex(thoughtList[index].parentIndex)
    console.log('更新後の中身', thoughtList)
  }, [index, thoughtList, titleList])

  const addTitleList = (input: string) => {
    if (!input.length) return
    if (!theme.length) setTheme(input);
    console.log(input)
    setIsEditing(true)
    setThoughtList([...thoughtList, createNewThgout({ title: input })])
    setTitleList([...titleList, input])
    setIndex((index) => index + 1)
    console.log(titleList.length, titleList);
    setIsEditing(false)
  }
  const createDerivation = (input: string, parentTitle: string, updatedThoughtList: string[]) => {
    if (!input.length) return
    if (titleList.length > 20) {
      //TODO:バリデーションとタイトルの最大数の検討
      console.log('20個以上派生を作ることはできません')
    }
    console.log('新しいタイトル', input)
    setIsEditing(true)
    const updatedThought: Thought = createNewThgout({
      parentIndex: currentThought.parentIndex,
      title: currentThought.title,
      parentTitle: currentThought.parentTitle,
      thoughtList: updatedThoughtList
    })
    console.log(updatedThought)
    console.log('result', thoughtList.map((value: Thought, id: number) => (
      index === id ? updatedThought : value
    )))
    setThoughtList(thoughtList => thoughtList.map((value: Thought, id: number) => (
      index === id ? updatedThought : value
    )))
    const prevTitleListLength = titleList.length;
    console.log()
    setThoughtList(thoughtList => [...thoughtList, createNewThgout({ parentIndex: index, title: input, parentTitle })])
    setTitleList(titleList => [...titleList, input])
    setIndex(index => prevTitleListLength)
    // console.log(titleList.length, titleList);
    setIsEditing(false)
  }
  return (
    <SessionEndAlart>
      <Center>
        <VStack>
          {isEditing ? (
            <Center>
              <Spinner size='xl' />
            </Center>
          ) : (
            index >= 0 ? (
              <>
                <ShowTheme themeTitle={theme} />
                <HStack marginTop='10px' alignItems="start">
                  <ThoughtCard thought={currentThought} createDerivation={createDerivation} />
                  <ShowTitleList titles={titleList} currentIndex={index} setIndex={setIndex} parentIndex={parentIndex} />
                </HStack>
              </>
            ) :
              (
                <ThemeDecision handleSave={addTitleList} />
              )
          )}
        </VStack>
      </Center>
    </SessionEndAlart>
  );
}
