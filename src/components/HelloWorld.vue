<template>
  <v-btn
      dark
      outlined
      v-on:click="hello"
  >
    {{title}}
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {

  @Prop({default: ``})
  title: string

  hello = ()=> {
    alert(this.title)
  }
}
</script>
