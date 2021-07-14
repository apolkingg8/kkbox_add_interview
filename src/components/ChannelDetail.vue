<template>
  <div>
    <h1>{{channelStore.channels[0].title}}</h1>
    <p>{{channelStore.channels[0].desc}}</p>
    <EpisodeList/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import {Observer} from "mobx-vue";
import channelStore from "@/store/channelStore";
import EpisodeList from "@/components/EpisodeList";

@Observer
@Component({
  components: {
    EpisodeList
  },
})
export default class ChannelDetail extends Vue {

  channelStore = channelStore

}
</script>

<style scoped>

</style>
