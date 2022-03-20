<template>
  <div class="m-header-searchbar">
    <el-row>
      <el-col :sapn="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt />
      </el-col>
      <el-col :sapn="15" class="center">
        <div class="wrapper">
          <el-input placeholder="搜索商家或地点" v-model="search" @focus="focus" @blur="blur"></el-input>
          <el-button type="danger">
            <i class="el-icon-search"></i>
          </el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dd v-for="(item,index) in hostPlace" :key="index">{{item}}</dd>
          </dl>
          <dl class="searchList" v-if="isSearchPlace">
            <dd v-for="(item,index) in searchList" :key="index">{{item}}</dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
          <a href="#">故宫博物院</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="apartment">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">商家入驻</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :sapn="6" class="right">
        <ul class="security">
          <li>
            <i class="refund"></i>
            <p class="txt">随时退</p>
          </li>
          <li>
            <i class="single"></i>
            <p class="txt">不满意免单</p>
          </li>
          <li>
            <i class="overdue"></i>
            <p class="txt">过期退</p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      isFocus: false,
      hostPlace: ["猪脚粉", "阔烧粉", "刮粉"],
      searchList: ["西湖", "灵隐寺", "千岛湖"]
    };
  },
  computed: {
    isHotPlace() {
      return this.isFocus && !this.search;
    },
    isSearchPlace() {
      return this.isFocus && this.search;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      let self = this;
      setTimeout(function() {
        self.isFocus = false;
      }, 80);
    }
  }
};
</script>