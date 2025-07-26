import type { Word } from "../types/Word";

const STORAGE_KEY = "my_word_list"

export const useWords = () => {
  const defaultWords: Word[] = [
    { english: 'apple', japanese: 'りんご' },
    { english: 'banana', japanese: 'バナナ' },
    { english: 'coffee', japanese: 'コーヒー' },
    { english: 'tea', japanese: 'お茶' }
  ]
}

