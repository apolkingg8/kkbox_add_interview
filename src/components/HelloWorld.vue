<template>
  <div>
    <v-btn
        dark
        outlined
        v-on:click="hello"
    >
      {{title}}
    </v-btn>
    <div v-for="channel in channelStore.channels">
      <p>{{channel.title}}</p>
    </div>
    <div v-for="episode in episodeStore.episodes">
      <p>{{episode.title}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import dataService from "@/service/dataService";
import {Observer} from "mobx-vue";
import channelStore from "@/store/channelStore";
import {Component, Prop} from "vue-property-decorator";
import episodeStore from "@/store/episodeStore";

@Observer
@Component
export default class HelloWorld extends Vue {

  channelStore = channelStore
  episodeStore = episodeStore

  @Prop({
    default: ``,
  })
  title: string

  hello = async ()=> {
    await dataService.fillFromChannelRss(`954689a5-3096-43a4-a80b-7810b219cef3`)
  }
}
</script>
