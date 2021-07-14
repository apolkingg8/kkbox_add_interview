<template>
  <div class="wrap">
    <div v-for="channel in channelStore.channels">
      <h1>{{channel.title}}</h1>
      <p>{{channel.desc}}</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import {Component} from "vue-property-decorator";
import {Observer} from "mobx-vue";
import channelStore from "@/store/channelStore";

@Observer
@Component
export default class ChannelList extends Vue {

  channelStore = channelStore

}
</script>

<style scoped>

</style>
