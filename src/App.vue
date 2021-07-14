<template>
  <div>
    <ChannelList v-if="routeStore.route === EnumRoute.channelList"/>
    <ChannelDetail v-if="routeStore.route === EnumRoute.channelDetail"/>
    <EpisodeDetail v-if="routeStore.route === EnumRoute.episodeDetail"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import {Component} from "vue-property-decorator";
import ChannelList from "@/components/ChannelList.vue";
import dataService from "@/service/dataService";
import {Observer} from "mobx-vue";
import EnumRoute from "@/enum/EnumRoute";
import ChannelDetail from "@/components/ChannelDetail.vue";
import routeStore from "@/store/routeStore";
import EpisodeDetail from "@/components/EpisodeDetail.vue";

@Observer
@Component({
  components: {
    HelloWorld,
    ChannelList,
    ChannelDetail,
    EpisodeDetail,
  },
})
export default class App extends Vue {

  EnumRoute = EnumRoute
  routeStore = routeStore

  mounted() {
    let pathName = window.location.pathname.replace(/\//g, '')

    if(pathName === EnumRoute.channelDetail) {
      routeStore.toChannelDetail()
    } else if(pathName === EnumRoute.episodeDetail) {
      routeStore.toEpisodeDetail()
    } else {
      routeStore.toChannelList()
    }

    dataService.fillFromChannelRss(`954689a5-3096-43a4-a80b-7810b219cef3`)
  }
}
</script>

<style>
html, body {
  background: #000;
  color: #fff
}
</style>
