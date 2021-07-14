<template>
  <div class="wrap" v-on:click="routeStore.toChannelDetail()">
    <div v-for="channel in channelStore.channels">
      <h1>{{channel.title}}</h1>
      <p>{{channel.desc}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import {Observer} from "mobx-vue";
import channelStore from "@/store/channelStore";
import routeStore from "@/store/routeStore";

@Observer
@Component
export default class ChannelList extends Vue {

  routeStore = routeStore
  channelStore = channelStore

}
</script>

<style scoped>

</style>
