<template>
  <div class="hello">
    <div id="elements-page-wrapper">
      <section
        id="element-header"
        class="elements-header"
        style="background-position: 0 0;background-attachment: fixed;"
      >
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="header-design">
              <div class="col-md-12">
                <h1 class="elements-h">A Grain of Sand</h1>
              </div>
              <div class="col-md-12">
                <P>
                  To see a world in a grain of sand, And a heaven in a wild
                  fllower, Hold infinity in the palm of your hand, And eternity
                  in an hour.<br />
                  --William Blake
                </P>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div style="display: flex">
      <div style="overflow: hidden;" :style="{width:showRightMenu?'calc(100% - 320px)':'100%'}">
        <BlogItem :cfg="config" :seq="index"></BlogItem>
      </div>
      <div style="width: 320px;background: beige;" :class="scroll>475?'fixedMenu':''"  v-show="showRightMenu">
        <div class="topImg" ></div>
        <div style="margin-left: 6px;overflow: auto;max-height: 950px;">
          <el-timeline>
            <el-timeline-item
              v-for="(it, idx) in configs.blogs"
              :timestamp="it.date"
              :key="it.url"
              placement="top"
            >
              <el-card shadow="hover" style="cursor:pointer">
                <div @click="choose(it, idx)">
                  <h4>
                    <span style="float:left;">{{ idx + 1 }}、</span
                    >{{ it.title }}
                  </h4>
                  <h5 style="margin-top:6px;">
                    <el-tag
                      v-for="(it, idx) in it.tag"
                      :key="idx"
                      :type="color[idx % color.length]"
                      style="height:25px;line-height: 20px"
                    >
                      {{ it }}</el-tag
                    >
                  </h5>
                </div>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>
    <div class="rightMenu" @click="toggelRightMenu">
        <i class="el-icon-menu"></i>
    </div>
  </div>
</template>

<script>
import BlogItem from "@/components/BlogItem.vue";

export default {
  components: {
    BlogItem
  },
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => {
    return {
      color: ["warning", "danger", "", "success", "info"],
      config: {},
      index: 0,
      scroll:0,
      showRightMenu:true,
      configs: {
        blogs: []
      }
    };
  },
  mounted() {
    window.addEventListener('scroll', this.menuScroll)
    const url = `./blog/bloglist.json`;
    this.$axios.get(url).then(
      response => {
        if(!response.data){
          return
        }
        response.data.blogs.sort((a, b) => b.date.localeCompare(a.date));
        this.configs = response.data;
        this.config = response.data.blogs[0];
        this.index = 0;
      },
      error => {
        console.log(error);
      }
    );
    if(window.screen.width<500){
      this.showRightMenu=false
    }
  },
  methods: {
    choose(it, idx) {
      console.log(it);
      this.config = it;
      this.index = idx;
      window.scrollTo(0, 475);
      if(window.screen.width<500){
        this.showRightMenu=false
      }
    },
    menuScroll(){
      this.scroll=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(this.scroll)
    },
    toggelRightMenu(){
      this.showRightMenu=!this.showRightMenu
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/deep/.el-card__body {
  padding: 6px;
}

/deep/.el-timeline-item__timestamp {
  text-align: left;
}

.hello{
  /* margin-top:-240px; */
}

.fixedMenu{
  position:fixed;
  top: -240px;
  right: 0;
}
.topImg{
  margin:8px 0;
  height: 234px;
  background-image: url('http://pic.yupoo.com/owendawn/151720c0/23c4482d.jpg')
}
.rightMenu{
  position: fixed;
    right: 0;
    top: 50%;
    font-size: 25px;
    background: #403c3c;
    opacity: 0.5;
    color: white;
    border-radius: 45%;
    padding: 5px 7px;
    z-index: 2000;
}

</style>
