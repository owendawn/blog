<template>
  <div class="home">
    <section id="banner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>一个人吹吹风</h2>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <p>
              &emsp;我想静静坐到天亮，享受沉默的时光
              <br />&emsp;&emsp;&emsp;最好没有声响，哪怕一丝微风的惊扰
              <br />&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;一个人，仅仅只是一个人，在天地之间
              <br /><br />……
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <a href="#" class="btn btn-banner" style="font-size: 3rem">悠</a>
          </div>
        </div>
      </div>
    </section>

    <section id="one">
      <div class="container">
        <div class="one-features">
          <div class="row">
            <div class="col-md-8">
              <div class="section-highlight">
                <h2>Love’s Inconsistency</h2>
              </div>
              <div class="section-details">
                <p>
                  I find no peace , and all my war is done; I fear hope , I burn
                  and freeze likewise; I fly above the wind , yet cannot rise;
                  And nought I have , yet all the world I seize on; That
                  looseth,nor locketh , holdeth me in prison, And holds me not ,
                  yet can I’scape no wise; Nor lets me live , nor die , at my
                  devise, And yet of death it giveth none occasion, Without eyes
                  I see , and without tongue I plain; I wish to perish , yet I
                  ask for health; I love another , and yet I hate myself; I feed
                  in sorrow , and laugh in all my pain; Lo , thus displeaseth me
                  both death and life, And my delight is causer of my grief.
                </p>
                <a href="#" class="btn btn-learn-more"
                  >Francesco Petrarca <i class="ion-ios-arrow-right"></i
                ></a>
              </div>
            </div>
            <div class="col-md-4">
              <img
                src="http://pic.yupoo.com/owendawn/891e9189/f1b135ff.jpg"
                alt="Responsive image"
                class="img-responsive"
              />
              <!--<img src="assets/images/kuangye.jpg" alt="Responsive image" class="img-responsive">-->
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="four">
      <div class="container" id="about">
        <div class="four-top">
          <div class="section-heading">
            <div class="title">
              <div class="row">
                <div class="col-md-12">
                  <h2>CHECK MY EXPERIENCE</h2>
                </div>
              </div>
            </div>

            <div class="subtitle">
              <div class="row">
                <div class="col-md-9 col-md-offset-1">
                  <p>
                    seeking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="four-features four-features-left-bottom">
              <div class="features-img">
                <img
                  src="http://pic.yupoo.com/owendawn/941816ce/6577c125.jpg"
                  alt="Responsive image"
                  class="img-responsive"
                />
                <!--<img src="assets/images/lvxing.jpg" alt="Responsive image" class="img-responsive">-->
              </div>
              <div class="features-content">
                <h3>TRAVEL</h3>
                <p>
                  Enjoying ,but do not have much time. hey ...
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="four-features four-features-right-bottom">
              <img
                src="http://pic.yupoo.com/owendawn/8f3cef8f/09cbcaa1.jpg"
                alt="Responsive image"
                class="img-responsive"
              />
              <!--<img src="assets/images/ciji.jpg" alt="Responsive image" class="img-responsive">-->
              <div class="features-content">
                <h3>ULTIMATE CHALLENGE</h3>
                <p>
                  Exciting makes my adrenalin pumping. wow ...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="four-features four-features-left-top">
              <img
                src="http://pic.yupoo.com/owendawn/7111db9e/852c3189.jpg"
                alt="Responsive image"
                class="img-responsive"
              />
              <!--<img src="assets/images/cao.jpg" alt="Responsive image" class="img-responsive">-->
              <div class="features-content">
                <h3>AMBROSIA</h3>
                <p>
                  What strange food! but i like. ha ...
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="four-features four-features-right-top">
              <img
                src="http://pic.yupoo.com/owendawn/dd584f89/4457d2eb.jpg"
                alt="Responsive image"
                class="img-responsive"
              />
              <!--<img src="assets/images/weizhi.jpg" alt="Responsive image" class="img-responsive">-->
              <div class="features-content">
                <h3>MORE</h3>
                <p>
                  Any thing else? who knows? hee...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import "@/../public/assets/css/main.css";

export default {
  components: {},
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => {
    return {
      content: ""
    };
  },
  mounted() {
    if (this.$route.query.to === "about") {
      document.getElementById("about").scrollIntoView();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
