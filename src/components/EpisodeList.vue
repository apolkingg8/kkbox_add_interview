<template>
  <div>
    <div
        v-for="episode in episodeStore.episodes"
        v-on:click="routeStore.toEpisodeDetail()"
    >
      <h1>{{episode.title}}</h1>
      <p>{{episode.desc}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {Observer} from "mobx-vue";
import {Component} from "vue-property-decorator";
import Vue from "vue";
import episodeStore from "@/store/episodeStore";
import routeStore from "@/store/routeStore";

@Observer
@Component
export default class EpisodeList extends Vue {

  episodeStore = episodeStore
  routeStore = routeStore

}
</script>

<style scoped>

</style>
