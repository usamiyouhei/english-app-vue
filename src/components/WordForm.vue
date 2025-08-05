<template>
  <div class="bg-white text-black p-6 rounded-xl shadow-xl w-full max-w-md mx-auto">
    <form
      @submit.prevent="handleSubmit"
      class="flex flex-col gap-4">
      <input
        v-model="english"
        type="text"
        placeholder="English"
        class="border p-2 rounded focus:outline-none"
      >
      <input
        v-model="japanese"
        type="text"
        placeholder="Japanese"
        class="border p-2 rounded focus:outline-none">
      <button
        type="submit"
        class="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        単語を追加
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Word } from "../types/Word";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
const emit = defineEmits<{
  (e: 'add', word: Word ) : void
}>()


const english = ref('')
const japanese = ref('')

const handleSubmit = () => {
  if(!english.value.trim() || !japanese.value.trim()) return
  emit('add', { english: english.value.trim(), japanese: japanese.value.trim()})
  english.value=''
  japanese.value=''
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