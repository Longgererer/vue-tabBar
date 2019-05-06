<template>
    <div id="tabBar" :style="tabBarStyle">
        <tab-bar-list id="tabList" v-for="(item, index) in config.list" :key=index :config="item" :index="index" @click.native="changeSelect(index)"></tab-bar-list>
    </div>
</template>

<script>
    import tabBarList from './tabBarList'
    export default {
        props: {
            config: Object
        },
        data() {
            const config = this.config
            return {
                tabBarStyle: {
                    borderTop: config.borderStyle,
                    backgroundColor: config.backgroundColor
                },
                index: 0
            }
        },
        components: {
            tabBarList
        },
        methods: {
            changeSelect(newIndex) {
                const oldIndex = this.index
                if (oldIndex !== newIndex) {
                    this.config.list[oldIndex].isSelect = false
                    this.config.list[newIndex].isSelect = true
                    this.index = newIndex
                }
            }
        }
    }
</script>

<style scoped>
    #tabBar{
        width: 100%;
        display: flex;
        position: fixed;
        font-size: 16px;
        bottom: 0;
        z-index: 1000;
        padding: 5px 0;
    }
    #tabList{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #tabList>img{
        width: 35px;
        height: 35px;
        margin-bottom: 3px;
    }
</style>