<template>
  <div
    class="container"
    style="margin: 10px auto;max-width: 600px;text-align: center;"
  >
    <div style="padding-top:36%;padding-bottom: 100px;">
      <div class="bottle">
        <div class="bottle_top">
          <div class="bottle_mouth"></div>
          <div class="highlight"></div>
        </div>
        <div class="bottle_neck">
          <div class="highlight"></div>
        </div>
        <div class="bottle_main">
          <div class="bottle_inner">
            <div class="water">
              <div class="cloverTop">
                <div class="clover">
                  <div class="leaves">
                    <i class="leave angleN"></i>
                    <i class="leave angleS"></i>
                    <i class="leave angleW"></i>
                    <i class="leave angleE"></i>
                  </div>
                  <i class="branch"></i>
                </div>
              </div>
              <div class="cloverBottom">
                <div class="clover">
                  <div class="leaves">
                    <i class="leave angleN"></i>
                    <i class="leave angleS"></i>
                    <i class="leave angleW"></i>
                    <i class="leave angleE"></i>
                  </div>
                  <i class="branch"></i>
                </div>
              </div>

              <div class="jellyfish">
                <div class="jellyfish_head"></div>
                <div class="jellyfish_tail">
                  <div class="jellyfish_tail_in"></div>
                </div>
              </div>

              <div class="bubble bubble1"></div>
              <div class="bubble bubble2"></div>
              <div class="bubble bubble3"></div>
            </div>
          </div>
          <div class="highlight"></div>
        </div>
      </div>
      <span
        class="fzf"
        style="font-style: italic;margin-top:26px;display: inline-block;"
        >404</span
      >

      <p class="ms"><strong>Page not found :(</strong></p>
    </div>
  </div>
</template>

<script>
import "@/../public/assets/css/bottle.css";

export default {
  components: {},
  props: {
    msg: String
  },
  data: () => {
    return {};
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 450px) {
  .bottle {
    margin: auto;
  }

  .fzf {
    font-size: 4em;
  }

  .ms {
    font-size: 3rem;
    font-family: initial;
  }
}

@media screen and (min-width: 451px) {
  .bottle {
    display: inline-block;
    margin-right: 59px;
  }

  .fzf {
    font-size: 8em;
  }

  .ms {
    font-size: 4rem;
    margin-top: 0.5em;
    font-family: serif;
  }
}
</style>
