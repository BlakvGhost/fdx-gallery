<script setup lang="ts">
import Lightgallery from 'lightgallery/vue'
import lgZoom from 'lightgallery/plugins/zoom'
import type { Photo } from '@/types/Media'
defineProps({
  medias: {
    type: Array<Photo>,
    required: true
  }
})
</script>
<template>
  <button :click="updateSlides">Add new image</button>
  <lightgallery
    :settings="{ speed: 500, plugins: plugins }"
    :onInit="onInit"
    :onBeforeSlide="onBeforeSlide"
  >
    <a
      v-for="item in photos"
      :key="item.id"
      :data-lg-size="item.size"
      className="gallery-item"
      :data-src="item.src"
    >
      <img className="img-responsive" :src="item.thumbnail" :alt="item.alt" />
    </a>
  </lightgallery>
</template>

<script lang="ts">
let lightGallery: any = null
export default {
  watch: {
    photos() {
      this.$nextTick(() => {
        lightGallery.refresh()
      })
    }
  },
  data: () => ({
    plugins: [lgZoom],
    photos: Array<Photo>()
  }),
  methods: {
    onInit: (detail: any) => {
      lightGallery = detail.instance
    },
    onBeforeSlide: (detail: any) => {
      const { index, prevIndex } = detail
      console.log(index, prevIndex)
    },
    updateSlides: function () {
      this.photos = [...this.photos]
      lightGallery.refresh()
    }
  },
  mounted() {
    this.photos = this.medias
  }
}
</script>
<style lang="css" scoped>
@import 'lightgallery/css/lightgallery.css';
@import 'lightgallery/css/lg-thumbnail.css';
@import 'lightgallery/css/lg-zoom.css';
</style>
