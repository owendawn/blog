<template>
  <div class="blog-item markdown-no-edit" style="background-color: floralwhite;height: 100%;">
    <h1
        style="text-align: center;padding: 36px 0;"
        v-show="this.$props.seq != undefined"
    >
      - . {{ this.$props.seq + 1 }} . - ~ {{ this.$props.cfg.title }} ~
    </h1>
    <h4>
      {{ this.$props.cfg.date }}
      <el-button icon="el-icon-tickets" circle v-if="dhBtn" class="dhBtn" @click="showDh"></el-button>
    </h4>
    <mavon-editor
        ref="markdownEd"
        v-model="content"
        :toolbarsFlag="false"
        :navigation="true"
        codeStyle="paraiso-dark"
        :subfield="false"
        :ishljs="true"
        @navigationToggle="navigationToggle"
        defaultOpen="preview"
    />
  </div>
</template>

<script>


export default {
  components: {
    // VueMarkdown
  },
  name: "BlogItem",
  props: {
    cfg: Object,
    seq: Number
  },
  data: () => {
    return {
      content: "",
      dhBtn: false
    };
  },
  watch: {
    cfg(a) {
      if (a) {
        this.init();
      }
    }
  },
  mounted() {
    this.init();
    if(window.screen.width<500){
      setTimeout(()=>{
        this.hideDh()
      },300)
    }
  },
  methods: {
    showDh(){
      this.dhBtn = false
      this.$refs.markdownEd.s_navigation=true
    },
    hideDh(){
      this.dhBtn = true
      this.$refs.markdownEd.s_navigation=false
    },
    navigationToggle(state) {
      console.log(arguments)
      this.dhBtn = !state
    },
    init() {
      if (this.$props.cfg.url) {
        const url = "." + this.$props.cfg.url + ".md";
        this.$axios.get(url).then(response => {
          this.content = response.data;
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog-item {
  text-align: left;
  padding: 60px 60px;
  line-height: 3rem;
}
.dhBtn{
  float: right;
}
/deep/ .markdown-body pre code{
  padding:24px;
  display: inline-block;
}
@media(max-width: 500px){
  .blog-item{
    padding: 30px 0px;
  }
}
</style>
