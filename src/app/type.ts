import {z} from 'zod'
export const ThoughtSchema=z.object({
    title:z.string().min(1,{message:'1文字以上40文字以内で入力してください。'}).max(40,{message:'1文字以上40文字以内で入力してください。'}),
    parentTitle:z.string().optional(),
    thoughtList:z.array(z.string().min(1,{message:'1文字以上40文字以内で入力してください。'}).max(40,{message:'1文字以上40文字以内で入力してください。'})).max(15,{message:'追加できるのは15個までです。'}).default([])
})
export type Thought=z.infer<typeof ThoughtSchema>

// export interface Thought {
//     // key: string;
//     // id: string;
//     title:string;
//     parentTitle:string;
//     thoughtList:string[];
// }
