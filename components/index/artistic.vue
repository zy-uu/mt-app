<template>
  <seciton class="m-istyle">
    <dl>
      <dt>有格调</dt>
      <dd :class="{active: kind === 'all'}" kind="all" keyword="景点">全部</dd>
      <dd :class="{active: kind==='part'}" kind="part" keyword="美食">约会聚餐</dd>
      <dd :class="{active: kind === 'spa'}" kind="spa" keyword="丽人">丽人spa</dd>
      <dd :class="{active: kind === 'movie'}" kind="movie" keyword="电影">电影</dd>
      <dd :class="{active: kind === 'travel'}" kind="travel" keywork="旅游">旅游</dd>
    </dl>
    <ul class="ibody">
      <li v-for="item in cur" :key="item.title">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.img" class="image" />
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos">
              <span>{{ item.pos }}</span>
            </li>
            <li class="price">
              ￥
              <em>{{ item.price }}</em>
              <span>/起</span>
            </li>
          </ul>
        </el-card>
      </li>
    </ul>
  </seciton>
</template>

<script>
export default {
  data() {
    return {
      kind: "all",
      list: {
        all: ["hh", "kjjk", "lll"],
        part: [],
        spa: [],
        movie: [],
        travel: []
      }
    };
  },
  computed: {
    cur() {
      return this.list[kind];
    }
  }
};
</script>

<style lang="scss" >
@import "@/assets/css/index/artistic.scss";
</style>