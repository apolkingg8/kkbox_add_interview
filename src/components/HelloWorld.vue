<template>
  <div>
    <v-btn
        dark
        outlined
        v-on:click="hello"
    >
      {{title}}
    </v-btn>
    <img v-bind:src="coverUrl" alt="cover">
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import dataService from "@/service/dataService";
import {Observer} from "mobx-vue";
import channelStore from "@/store/channelStore";

@Observer
@Component
export default class HelloWorld extends Vue {

  title: string = ``

  coverUrl: string = ``

  hello = async ()=> {
    await dataService.fillFromChannelRss(`954689a5-3096-43a4-a80b-7810b219cef3`)
    this.coverUrl = channelStore.channels[0].coverUrl
  }
}
</script>
