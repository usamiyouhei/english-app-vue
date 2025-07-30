<template>
  <div class="w-full max-w-md mx-auto perspective">
    <div
      class="card relative h-48 flex items-center justify-center rounded-xl shadow-lg transition-transform duration-300 bg-gray-400 cursor-pointer"
      :class="{ flipped : flipped}"
      @click="flipped = !flipped">

      <!-- 表面 -->
        <div class="face front">
          {{ word?.english || "Loading..." }}
        </div>

        <!-- 裏面 -->
        <div class="face back">
          {{ word?.japanese || "Loading..." }}
        </div>
      <!-- <p class="text-xl backface-hidden">
        {{ word ? (flipped ?   word.japanese : word.english) : "Loading..." }}
      </p> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Word } from "../types/Word";
/**===================================================================================================================
 * 
 ===================================================================================================================**/
  defineProps<{word: Word | undefined}>()

  const flipped = ref(false)

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
.perspective {
  perspective: 1000px;
}

.card {
  width: 100%;
  height: 12rem;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.flipped {
  transform: rotateY(180deg);
}

.backface-hidden {
  backface-visibility: hidden;
}


</style>