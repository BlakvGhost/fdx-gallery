<script setup lang="ts">
import Gallery from '@/components/GalleryComponent.vue'
import type { Photo } from '@/types/Media';
</script>
<template>
    <Gallery gallery-id="fdxGallery" :images="images"></Gallery>
</template>
  
<script lang="ts">

export default {
    data() {
        return {
            images: Array < Photo >()
        }
    },
    mounted() {
        this.images = [
            {
                width: 200,
                height: 100,
                src: 'https://picsum.photos/id/100/200/300',
                alt: 'Photo 1',
                thumbnail: 'https://picsum.photos/id/100/200/300'
            },
            {
                width: 200,
                height: 100,
                src: 'https://picsum.photos/id/100/200/300',
                alt: 'Photo 2',
                thumbnail: 'https://picsum.photos/id/100/200/300'
            },
        ]
    },
    methods: {},
};
</script>
  