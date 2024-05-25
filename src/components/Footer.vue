<template>
  <footer id="footer">
    <div class="container">
      <div class="footer-top">
        <div class="section-heading">
          <div class="title">
            <div class="row">
              <div class="col-md-12">
                <h2>GET IN TOUCH</h2>
              </div>
            </div>
          </div>
          <div class="subtitle">
            <div class="row">
              <div class="col-md-9 col-md-offset-1">
                <p>
                  Just In Case
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-features">
        <div class="row">
          <div class="col-md-6">
            <div class="footer-list">
              <ul class="list-unstyled">
                <li class="list-table">
                  <font-awesome-icon icon="fa-solid fa-envelope" />
                  <p>eirvingpan@gmail.com</p>
                </li>
              </ul>
              <ul class="list-unstyled">
                <li class="list-table">
                  <font-awesome-icon icon="fa-brands fa-twitter" />
                  <p>owen_pan_uv</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="footer-list">
              <ul class="list-unstyled">
                <li class="list-table">
                  <font-awesome-icon icon="fa-brands fa-facebook" />
                  <p>Eirving Pan</p>
                </li>
                <li class="list-table">
                  <font-awesome-icon icon="fa-brands fa-github" />
                  <p>
                    <a
                      href="https://owendawn.github.io/blog/dist/"
                      target="_blank"
                      >owendawn</a
                    >
                  </p>
                </li>
                <li class="list-table">
                  <font-awesome-icon icon="fa-brands fa-github-alt" />
                  <p>
                    <a
                      href="http://owendawn.gitee.io/blog/dist/"
                      target="_blank"
                      >owendawn</a
                    >
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="row">
          <div class="col-md-12">
            <p>&copy; 2018. ALL RIGHTS RESERVED .</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "PanFooter",
  components: {},
  props: {
    msg: String
  },
  data: () => {
    return {
      content: ""
    };
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
