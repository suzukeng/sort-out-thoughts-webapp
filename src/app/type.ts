export interface Thought {
    // key: string;
    parentIndex?: number|undefined;
    title:string;
    parentTitle?:string|undefined;
    thoughtList?:string[];
}