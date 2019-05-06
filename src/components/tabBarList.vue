<template>
    <div>
        <img :src="modal.path" alt="">
        <span :style="modal.color">{{config.text}}</span>
    </div>
</template>

<script>
    export default {
        props: {
            config: Object,
            index: Number
        },
        computed: {
            modal: function() {
                const style = this.config
                return {
                    color: {
                        color: style.isSelect ? style.textSelectColor : style.textColor
                    },
                    path: style.isSelect ? style.selectIconPath : style.iconPath
                }
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    img{
        width: 35px;
        height: 35px;
        margin-bottom: 3px;
    }
</style>