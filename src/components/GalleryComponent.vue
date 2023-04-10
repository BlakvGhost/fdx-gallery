<script setup lang="ts">
import PhotoSwipeLightbox from 'photoswipe';
import 'photoswipe/style.css';
import type { Photo } from '@/types/Media.js'

defineProps({
    galleryId: String,
    images: Array<Photo>
})
</script>
<template>
    <div :id="galleryId">
        <div v-for="(image, key) in images" :key="key" :href="image.src" :data-pswp-width="image.width"
            :data-pswp-height="image.height" target="_blank" rel="noreferrer">
            <img :src="image.thumbnail" :alt="image.alt" />
        </div>
    </div>
</template>
  
<script lang="ts">

export default {
    data() {
        return {
            lightbox: null
        }
    },
    mounted() {
        new PhotoSwipeLightbox({
            gallery: '#' + this.$props.galleryId,
            children: 'div',
            pswpModule: () => import('photoswipe'),
        })
            .init();
    },
    methods: {},
};
</script>
  