<template>
  <div>
    <WordCard 
      :word="words[currentIndex]"
      :flipped="flipped"
      @flip="handleFlip"
      />
    <WordButtons
      :prev="prev"
      :next="next"
      :onToggle="() => toggleLearned(currentIndex)"
      :isLearned="words[currentIndex]?.isLearned || false"
      />
  </div>
</template>

<script setup lang="ts">
import type { Word } from "../types/Word";
import { ref } from "vue";
import { useWords } from "../composables/useWord";
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

  const handleFlip = () => {
    flipped.value = !flipped.value
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