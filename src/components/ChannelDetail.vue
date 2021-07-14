<template>

</template>

<script>
import Vue from "vue";
import {Component} from "vue-property-decorator";
import {Observer} from "mobx-vue";
import channelStore from "@/store/channelStore";

@Observer
@Component
export default class ChannelDetail extends Vue {

  channelStore = channelStore

}
</script>

<style scoped>

</style>
