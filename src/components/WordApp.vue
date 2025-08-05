<template>
  <div 
    v-touch:swipe.left="handleSwipeLeft"
    v-touch:swipe.right="handleSwipeRight"
      >
    <WordCard 
      :word="words[currentIndex]"
      :flipped="flipped"
      @flip="handleFlip"
      />
    <WordButtons
      :prev="prev"
      :next="next"
      :onToggle="toggleLearned"
      :isLearned="currentWord?.isLearned || false"
      />
      <!-- modal button -->
      <button 
        @click="openModal" 
        class="mt-4 px-4 py-2 bg-yellow-600 rounded"
        > ＋ 単語を追加
      </button>

      <!-- modal -->
      <div
        v-if="showModal"
        class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
        <div
          class="bg-white h-60  p-4 rounded shadow-2xl w-11/12 max-w-md text-black relative"
          >
          <button
            class="absolute top-2 right-2 text-black"
            @click="showModal = false">
            ×
          </button>
          <WordForm/>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import type { Word } from "../types/Word";
import { ref } from "vue";
import { useWords } from "../composables/useWord";
import WordForm from "../components/WordForm.vue";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
// 全wordsをuseWords()から紐付け
  const { words } = useWords()
// 現在のIndexを初期値０で設定
  const currentIndex = ref(0)
// flippedの初期値をfalseに
  const flipped = ref(false)
  
// 戻るボタン（現在の値＝（現在のIndexから−１＋words.value.length）％ words.value.length
  const prev = () => {
    flipped.value = false
    setTimeout(() => {
      currentIndex.value = (currentIndex.value - 1 + words.value.length) % words.value.length;
    }, 200);
  }
  const next = () => {
    flipped.value = false
    setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % words.value.length;
    }, 200);
  }

  const handleSwipeLeft = () => {
    flipped.value = false
    setTimeout(() => {
      currentIndex.value = (currentIndex.value - 1 + words.value.length) % words.value.length;
    }, 200);
  }

  const handleSwipeRight = () => {
    flipped.value = false
    setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % words.value.length;
    }, 200);
  }

  const handleFlip = () => {
    flipped.value = !flipped.value
  }

  const currentWord = computed(() => words.value[currentIndex.value])

  const toggleLearned = () => {
    const index = currentIndex.value
    if( index >= 0 && index < words.value.length) {
      const newWords = [...words.value]
      newWords[currentIndex.value]!.isLearned = !newWords[currentIndex.value]!.isLearned
      words.value = newWords
    }
  }

  const showModal = ref(false)
  
  const openModal = () => {
    showModal.value = true
  }
 //------------------------------------------------------------------------------------------------------------
// 引数
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
// ライフサイクル
//------------------------------------------------------------------------------------------------------------
/*
onBeforeMount(() => {
  //記憶した位置、サイズでの復帰を可能にする
})

onMounted(() => {
  //window.addEventListener('resize', onGetPosition)
})

onBeforeUnmount(() => {
  //window.removeEventListener('resize', onGetPosition)
})
*/
//------------------------------------------------------------------------------------------------------------
//watch
//------------------------------------------------------------------------------------------------------------
/*
watch(
  () => props.value,
  (value) => {
    input.value = value
  }
)
//------------------------------------------------------------------------------------------------------------
//computed
//------------------------------------------------------------------------------------------------------------
/*
const counter: Ref<number> = useState('counter', () => 500)

// computedによりcounter変数の監視が行われる
const doubleCount = computed(() => {
  return counter.value * 2
})
*/
//------------------------------------------------------------------------------------------------------------
// エミット
//------------------------------------------------------------------------------------------------------------
/*
const emits = defineEmits<{ (e: 'update:value', item: any): void }>()
const input = ref(props.value)

function onChange(value: any) {
  input.value = value
  emits('update:value', value)
}
*/

//------------------------------------------------------------------------------------------------------------
// メソッド
//------------------------------------------------------------------------------------------------------------
</script>

<style lang="scss" scoped>
</style>