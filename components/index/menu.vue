<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="leave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menu" :key="index" @mouseenter="enter">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow" />
      </dd>
    </dl>
    <div v-if="kind" class="detail" @mouseenter="sover" @mouseleave="sout">
      <template v-for="(item,index) in curDetail.child">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="v in item.child" :key="v">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: "",
      menu: [
        {
          type: "food",
          name: "美食",
          child: [
            {
              title: "美食",
              child: ["火锅", "猪脚粉", "刮粉"]
            }
          ]
        },
        {
          type: "takeout",
          name: "外卖",
          child: ["美团外卖"]
        },
        {
          type: "hotel",
          name: "酒店",
          child: [
            { title: "h酒店星级", child: ["经济型", "高档/四星", "豪华/五星"] }
          ]
        }
      ]
    };
  },
  computed: {
    curDetail() {
      return this.menu.filter(item => item.type === this.kind)[0];
    }
  },
  methods: {
    enter(e) {
      this.kind = e.target.querySelector("i").className;
    },
    leave() {
      let self = this;
      self._timer = setTimeout(function() {
        self.kind = "";
      }, 150);
    },
    sover() {
      clearTimeout(this._timer);
    },
    sout() {
      this.kind = "";
    }
  }
};
</script>

