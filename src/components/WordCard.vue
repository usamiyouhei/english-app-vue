<template>
  <div class="w-full max-w-md mx-auto perspective">
    <div
      class="word-card "
      :class="{ flipped : flipped}"
      @click="$emit('flip')">

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
  defineProps<{
    word: Word | undefined
    flipped: boolean
  }>()

  defineEmits(['flip'])

  // const flipped = ref(false)



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

.word-card {
  width: 100%;
  height: 12rem;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 600ms;
  cursor: pointer;
}

.word-card.flipped {
  transform: rotateY(180deg);
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  backface-visibility: hidden;
  font-size: 1.25rem;
  background-color: #e5e7eb;
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);

}

.front {
  z-index: 2;
  background-color: #ccc;
}
.back {
  transform: rotateY(180deg);
}

.flipped {
  transform: rotateY(180deg);
}

.backface-hidden {
  backface-visibility: hidden;
}


</style>