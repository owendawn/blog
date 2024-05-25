<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <VueMarkdown :source="this.content"></VueMarkdown>
    </div>
</template>

<script>
    import VueMarkdown from 'vue-markdown'

    export default {
        components: {
            VueMarkdown
        },
        name: 'HelloWorld',
        props: {
            msg: String,
        },
        data: () => {
            return {
                content: ''
            }
        },
        mounted() {
            const url = `./blog/test.md`;
            this.$axios.get(url).then((response) => {
                this.content = response.data;
            });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
