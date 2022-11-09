<template>
  <Loading :rate="loadedRate"></Loading>
  <div class="strategy">
    <div class="strategy-model-gallery"></div>
    <div
      class="strategy-data-board"
      v-if="isMobile"
      :style="{
        height: `${isDrawerShow ? strategyDataBoardMaxHeight : strategyDataBoardMinHeight}px`,
      }"
    ></div>
    <div class="strategy-data-board" v-if="!isMobile"></div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

import useGlobalProperties from '../hooks/useGlobalProperties';

const globalProperties = useGlobalProperties();
const isMobile = computed(() => globalProperties.$isMobile);

// Loading计算

const modelTotalCount = 100;
let loadedModelCount = ref(0);
const loadedRate = computed(() => (loadedModelCount.value / modelTotalCount) * 100);

const isDrawerShow = isMobile.value ? ref(false) : ref(null);

let strategyDataBoardMaxHeight = ref(0);
let strategyDataBoardMinHeight = 85;

onMounted(() => {});
</script>
<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.strategy {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 60px 55px;
  background-image: url(http://u.thsi.cn/imgsrc/share/ff252e41066a8412ae3db22421570178.png);
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;

  & > :nth-child(n + 2) {
    margin-left: 30px;
  }

  &-model-gallery {
    width: 60%;
    height: 100%;
  }

  &-data-board {
    width: 40%;
    height: 100%;
  }
}

@media screen and (max-width: 768px) {
  .strategy {
    flex-direction: column;
    position: relative;
    padding: 0;
    & > :nth-child(n + 2) {
      margin-left: 0px;
    }

    &-model-gallery {
      width: 100%;
      height: 100%;
      padding: 8px 8px 0px 8px;
    }

    &-data-board {
      position: fixed;
      bottom: 0;
      width: 100%;
      transition: all 0.3s linear;
    }
  }
}
</style>
