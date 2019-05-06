<template>
    <div id="box">
        <tab-bar :config="config"></tab-bar>
    </div>
</template>

<script>
    import tabBar from './components/tabBar'
    import config from './public/js/tabBarConfig'
    export default {
        components: {
            tabBar
        },
        data() {
            return {
                config
            }
        },
        methods: {

        }
    }
</script>

<style>
</style>
