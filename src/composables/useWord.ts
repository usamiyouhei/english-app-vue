import type { Word } from "../types/Word";

const STORAGE_KEY = "my_word_list"


// useWordsの設定
export const useWords = () => {
  // defaultWordsの設定
  const defaultWords: Word[] = [
    { english: 'apple', japanese: 'りんご' },
    { english: 'banana', japanese: 'バナナ' },
    { english: 'coffee', japanese: 'コーヒー' },
    { english: 'tea', japanese: 'お茶' }
  ]
  // 単語データ（words）を管理するためののカスタムフック
  const words = useState<Word[]>('words' ,() => {
    if(process.client) {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : defaultWords
    }
    return defaultWords
  })

  const saveWords = () => {
    if(process.client){
      localStorage.setItem(STORAGE_KEY, JSON.stringify(words.value))
    }
  } 
  
}
