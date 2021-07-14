<template>
  <div>
    <ChannelList/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import {Component} from "vue-property-decorator";
import ChannelList from "@/components/ChannelList.vue";
import dataService from "@/service/dataService";

@Component({
  components: {
    HelloWorld,
    ChannelList,
  },
})
export default class App extends Vue {
  mounted() {
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
