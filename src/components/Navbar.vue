<template>
  <div
    class="navbar"
    :class="[show ? 'toggled' : '']"
    style="position: absolute;width:100%;top:0"
  >
    <header>
      <div class="header">
        <nav>
          <ul class="navigation cf">
            <li><router-link class="pjx" to="/Home">首页</router-link></li>
            <li>
              <router-link
                class="pjx"
                :to="{ path: '/Home', query: { to: 'about' } }"
                ><span @click="toAbout">关于</span></router-link
              >
            </li>
            <li>2<router-link class="pjx" to="/NotFound">相册</router-link></li>
            <li><router-link class="pjx" to="/Blog">博客</router-link></li>
            <li><a class="pjx" @click="toFooter">联系</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <div class="toggle" @click="shows">
      <div class="toggle_body">
        <div class="bars bars_1"></div>
        <div class="bars bars_2"></div>
        <div class="bars bars_3"></div>
        <div class="bars bars_4"></div>
        <div class="bars bars_5"></div>
        <div class="bars bars_6"></div>
        <div class="bars bars_7"></div>
        <div class="bars bars_8"></div>
        <div class="bars bars_9"></div>
      </div>
    </div>

    <div id="panel">
      <ul>
        <li class="panel-1">
          <router-link to="/Home" class="pjx">
            <div class="front">
              <!-- Home -->
              <svg
                version="1.1"
                x="0px"
                y="0px"
                width="72px"
                height="72px"
                viewBox="0 0 72 72"
              >
                <path
                  d="M67.572,37.08L38.686,8.168c-1.476-1.534-3.892-1.534-5.368,0L4.428,37.08c-1.48,1.529-0.929,2.786,1.224,2.786h6.023V62.07	c0,1.603,0.068,2.912,2.966,2.912h14.022V42.706h14.67v22.276h14.72c2.211,0,2.272-1.307,2.272-2.912V39.866h6.019C68.493,39.866,69.048,38.613,67.572,37.08z"
                ></path>
              </svg>
            </div>
            <div class="back" @click="this.hide">
              <div class="wrap">
                <h3>首页</h3>
                <p class="panelbtn">View</p>
              </div>
            </div>
          </router-link>
        </li>
        <li class="panel-2">
          <router-link
            :to="{ path: '/Home', query: { to: 'about' } }"
            class="pjx"
          >
            <div class="front">
              <!-- About -->
              <svg
                version="1.1"
                x="0px"
                y="0px"
                width="72px"
                height="72px"
                viewBox="0 0 72 72"
              >
                <path d="M54.812,52.014c-8.873-3.234-11.711-5.963-11.711-11.805c0-3.506,2.711-2.361,3.899-8.784c0.493-2.664,2.887-0.043,3.349-6.124c0-2.423-1.308-3.028-1.308-3.028s0.666-3.589,0.925-6.347C50.284,12.484,47.98,3.6,35.661,3.6c-12.316,0-14.627,8.885-14.303,12.326c0.259,2.758,0.925,6.347,0.925,6.347s-1.31,0.601-1.31,3.028	c0.457,6.08,2.851,3.46,3.344,6.124c1.192,6.423,3.902,5.278,3.902,8.784c0,5.843-2.837,8.572-11.711,11.805	C7.602,55.253,1.82,58.561,1.82,60.818c0,2.255,0,7.578,0,7.578H69.5c0,0,0-5.323,0-7.578C69.5,58.564,63.715,55.257,54.812,52.014L54.812,52.014z"
                ></path>
              </svg>
            </div>
            <div class="back" @click="this.hide">
              <div class="wrap">
                <h3>关于</h3>
                <p class="panelbtn">View</p>
              </div>
            </div>
          </router-link>
        </li>
        <li class="panel-3">
          <router-link to="/NotFound" class="pjx">
            <div class="front">
              <!-- Album -->
              <svg
                version="1.1"
                x="0px"
                y="0px"
                width="72px"
                height="72px"
                viewBox="0 0 72 72"
              >
                <path
                  d="M21.996,9.824v42.721c-2.326-0.486-5.033-0.302-7.718,0.691c-6.037,2.242-8.168,7.703-6.566,12.189c1.598,4.489,6.325,6.305,12.362,4.061c5.126-1.903,8.485-6.123,8.399-10.104c0,0,0-22.655,0-35.291l25.564-5.857v27.108c-2.326-0.486-5.033-0.302-7.719,0.691c-6.041,2.242-8.172,7.703-6.569,12.189c1.603,4.489,6.325,6.305,12.366,4.062c5.13-1.904,8.482-6.124,8.402-10.104V1.549L21.996,9.824L21.996,9.824z"
                ></path>
              </svg>
            </div>
            <div class="back" @click="this.hide">
              <div class="wrap">
                <h3>相册</h3>
                <p class="panelbtn">View</p>
              </div>
            </div>
          </router-link>
        </li>
        <li class="panel-4">
          <router-link to="/Blog" class="pjx">
            <div class="front">
              <!-- News -->
              <svg
                version="1.1"
                x="0px"
                y="0px"
                width="72px"
                height="72px"
                viewBox="0 0 72 72"
              >
                <path
                  d="M62.003,25.304C56.305,12.038,47.128,1.936,42.486,3.826c-7.879,3.204,4.699,18.59-34.005,34.322c-3.344,1.356-4.19,6.797-2.79,10.047c1.397,3.252,5.969,6.488,9.313,5.131c0.576-0.234,2.704-0.918,2.704-0.918c2.387,3.203,4.885,1.303,5.774,3.341c1.066,2.448,3.38,7.765,4.165,9.571c0.792,1.808,2.578,3.486,3.874,2.992c1.289-0.492,5.692-2.17,7.375-2.808c1.685-0.637,2.088-2.142,1.574-3.325c-0.555-1.275-2.83-1.65-3.479-3.14c-0.652-1.49-2.772-6.261-3.38-7.765c-0.828-2.045,0.932-3.709,3.492-3.975c17.619-1.836,20.912,9.047,26.91,6.606C68.645,52.014,67.7,38.57,62.003,25.304L62.003,25.304z M60.02,46.822c-1.031,0.418-7.963-5.047-12.396-15.361c-4.429-10.31-3.87-19.735-2.845-20.153c1.031-0.421,7.795,6.178,12.227,16.488C61.43,38.104,61.049,46.404,60.02,46.822z"
                ></path>
              </svg>
            </div>
            <div class="back" @click="this.hide">
              <div class="wrap">
                <h3>博客</h3>
                <p class="panelbtn">View</p>
              </div>
            </div>
          </router-link>
        </li>
        <li class="panel-5">
          <a class="gotobottom">
            <div class="front">
              <!-- Contact -->
              <svg
                version="1.1"
                x="0px"
                y="0px"
                width="72px"
                height="72px"
                viewBox="0 0 72 72"
              >
                <path
                  d="M67.298,9.486C66.062,9.922,4.942,31.457,3.74,31.882c-1.022,0.36-1.253,1.242-0.036,1.724c1.444,0.58,13.666,5.476,13.666,5.476h-0.004l8.104,3.247c0,0,39.012-28.652,39.542-29.038c0.529-0.389,1.146,0.342,0.76,0.76c-0.385,0.421-28.336,30.65-28.336,30.65c-0.004,0-0.004,0-0.004,0l-1.626,1.814l2.156,1.158c0,0,16.74,9.012,17.932,9.655c1.045,0.562,2.405,0.094,2.707-1.206c0.356-1.534,10.242-44.143,10.463-45.086C69.35,9.802,68.536,9.05,67.298,9.486L67.298,9.486zM25.398,61.783c0,0.889,0.5,1.134,1.192,0.508c0.9-0.82,10.256-9.216,10.256-9.216l-11.448-5.927V61.783z"
                ></path>
              </svg>
            </div>
            <div class="back" @click="this.toFooter">
              <div class="wrap">
                <h3>联系</h3>
                <p class="panelbtn">View</p>
              </div>
            </div>
          </a>
        </li>
        <li class="panel-6">
          <router-link to="/NotFound">
            <div class="front">
              <!-- SoundCloud -->
              <svg
                version="1.1"
                x="0px"
                y="0px"
                width="72px"
                height="72px"
                viewBox="0 0 72 72"
              >
                <path
                  d="M2.419,48.441L3.6,43.402l-1.181-5.209c-0.032-0.155-0.328-0.274-0.691-0.274c-0.367,0-0.662,0.119-0.691,0.274L0,43.402l1.04,5.039c0.029,0.158,0.324,0.274,0.691,0.274C2.091,48.716,2.386,48.602,2.419,48.441z M9.799,51.239l1.001-7.79L9.799,31.4c-0.029-0.31-0.403-0.551-0.857-0.551c-0.457,0-0.832,0.238-0.853,0.547L7.2,43.449l0.889,7.79c0.022,0.306,0.396,0.544,0.853,0.544C9.396,51.787,9.77,51.545,9.799,51.239z M17.165,51.113L18,43.452l-0.835-16.045c-0.022-0.374-0.468-0.673-1.012-0.673c-0.547,0-0.994,0.295-1.012,0.673l-0.742,16.045l0.742,7.664c0.018,0.374,0.464,0.67,1.012,0.67C16.697,51.786,17.143,51.491,17.165,51.113z M24.516,50.998l0.684-7.542l-0.684-16.164c-0.018-0.446-0.522-0.799-1.152-0.799c-0.634,0-1.138,0.353-1.156,0.799L21.6,43.456l0.612,7.542c0.011,0.443,0.518,0.796,1.152,0.796C23.994,51.794,24.498,51.448,24.516,50.998z M31.86,50.904l0.54-7.445l-0.54-18.533c-0.011-0.511-0.59-0.925-1.289-0.925c-0.699,0-1.274,0.414-1.285,0.925L28.8,43.452c0,0.011,0.486,7.448,0.486,7.448c0.011,0.504,0.587,0.918,1.285,0.918C31.269,51.822,31.849,51.411,31.86,50.904z M37.001,51.826c0.022,0,25.556,0.014,25.722,0.014c5.127,0,9.277-4.018,9.277-8.975s-4.15-8.975-9.277-8.975c-1.273,0-2.484,0.248-3.589,0.698c-0.737-8.086-7.754-14.429-16.308-14.429c-2.092,0-4.133,0.396-5.934,1.073c-0.698,0.263-0.889,0.529-0.893,1.051v28.48C36.007,51.314,36.446,51.771,37.001,51.826L37.001,51.826z"
                ></path>
              </svg>
            </div>
            <div class="back" @click="this.hide">
              <div class="wrap">
                <h3>404</h3>
                <p class="panelbtn">View</p>
              </div>
            </div>
          </router-link>
        </li>
        <li class="panel-7">
          <router-link to="/NotFound">
            <div class="front">
              <!-- Facebook -->
              <svg
                version="1.1"
                x="0px"
                y="0px"
                width="72px"
                height="72px"
                viewBox="0 0 72 72"
              >
                <path
                  d="M54,14.864H43.718c-1.217,0-2.573,1.598-2.573,3.74v7.423H54v10.584H41.145v31.787h-12.14V36.615H18V26.027h11.005v-6.228c0-8.932,6.199-16.2,14.71-16.2H54v11.264V14.864z"
                ></path>
              </svg>
            </div>
            <div class="back" @click="this.hide">
              <div class="wrap">
                <h3>404</h3>
                <p class="panelbtn">View</p>
              </div>
            </div>
          </router-link>
        </li>
        <li class="panel-8">
          <router-link to="/NotFound">
            <div class="front">
              <svg
                version="1.1"
                x="0px"
                y="0px"
                width="72px"
                height="72px"
                viewBox="0 0 72 72"
              >
                <!-- Twitter -->
                <path
                  d="M69.12,15.455c-2.44,1.084-5.058,1.811-7.808,2.142c2.808-1.681,4.963-4.345,5.976-7.517c-2.624,1.555-5.533,2.689-8.626,3.298c-2.48-2.642-6.012-4.291-9.922-4.291c-7.506,0-13.59,6.084-13.59,13.586c0,1.066,0.119,2.102,0.353,3.096C24.21,25.204,14.195,19.793,7.495,11.571c-1.174,2.005-1.847,4.342-1.847,6.833c0,4.716,2.401,8.874,6.048,11.311c-2.228-0.072-4.324-0.68-6.156-1.699c0,0.058,0,0.112,0,0.169c0,6.584,4.687,12.074,10.901,13.327c-1.138,0.311-2.34,0.475-3.582,0.475c-0.875,0-1.724-0.082-2.556-0.24c1.728,5.4,6.75,9.328,12.694,9.436C18.346,54.829,12.489,57,6.12,57c-1.098,0-2.178-0.064-3.24-0.191c6.012,3.856,13.154,6.106,20.833,6.106c24.995,0,38.664-20.707,38.664-38.668c0-0.587-0.011-1.174-0.04-1.757C64.994,20.575,67.294,18.181,69.12,15.455L69.12,15.455z"
                ></path>
              </svg>
            </div>
            <div class="back" @click="this.hide">
              <div class="wrap">
                <h3>404</h3>
                <p class="panelbtn">View</p>
              </div>
            </div>
          </router-link>
        </li>
        <li class="panel-9">
          <div class="multi_a">
            <div class="front">
              <svg
                version="1.1"
                x="0px"
                y="0px"
                width="72px"
                height="72px"
                viewBox="0 0 72 72"
              >
                <!-- Share -->
                <path
                  d="M54,46.8c-2.477,0-4.745,0.839-6.566,2.239L28.646,37.768c0.09-0.576,0.155-1.166,0.155-1.769c0-0.605-0.065-1.192-0.155-1.768l18.788-11.272c1.822,1.4,4.09,2.239,6.566,2.239c5.962,0,10.8-4.835,10.8-10.8s-4.838-10.8-10.8-10.8s-10.8,4.835-10.8,10.8c0,0.601,0.065,1.192,0.157,1.768L24.57,27.441c-1.822-1.404-4.093-2.243-6.57-2.243c-5.965,0-10.8,4.835-10.8,10.8c0,5.962,4.835,10.8,10.8,10.8c2.477,0,4.748-0.839,6.57-2.239l18.788,11.272C43.264,56.407,43.2,56.994,43.2,57.6c0,5.961,4.838,10.799,10.8,10.799S64.8,63.561,64.8,57.6C64.8,51.637,59.962,46.799,54,46.8L54,46.8z"
                ></path>
              </svg>
            </div>
            <div class="back" @click="this.hide">
              <div class="wrap">
                <h3>404</h3>
                <p class="social">
                  <router-link to="/NotFound" class="gg icon" @click="this.hide"
                    >404</router-link
                  >
                  <router-link to="/NotFound" class="fb icon" @click="this.hide"
                    >404</router-link
                  >
                  <router-link to="/NotFound" class="tw icon" @click="this.hide"
                    >404</router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div id="mask" @click="hide"></div>
    </div>
  </div>
</template>

<script>
import "@/../public/assets/css/navbar.css";

export default {
  name: "PanNavbar",
  components: {},
  props: {
    msg: String
  },
  data: () => {
    return {
      show: false
    };
  },
  watch: {
    $route () {
      this.hide();
    }
  },
  mounted () {},
  methods: {
    hide () {
      this.show = false;
    },
    shows () {
      this.show = true;
    },
    toFooter () {
      document.getElementById("footer").scrollIntoView();
      this.hide();
    },
    toAbout () {
      document.getElementById("about") &&
        document.getElementById("about").scrollIntoView();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header nav ul li {
  cursor: default;
}
</style>
