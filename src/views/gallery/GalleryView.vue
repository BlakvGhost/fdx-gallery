<script setup lang="ts">
import Lightgallery from 'lightgallery/vue'
import lgZoom from 'lightgallery/plugins/zoom'
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import type { Photo } from '@/types/Media'
</script>
<template>
  <div class="container-fluid bg-dark position-relative" style="min-height: 100vh;">
    <div class="position-absolute bottom-0 end-0">
      <div class="user_info bxs">
        <div class="">
          <p><a href="/my-gallery" class=""><i class="mdi mdi-home-circle-outline"></i>&nbsp;&nbsp; Home </a></p>
          <div class="flex justify-sb">
            <p><a href="/my-gallery/upload" class=""><i class="mdi mdi-cloud-upload"></i> Upload</a></p>
            <p><a href="/user/logout" class=""><i class="mdi mdi-logout"></i> Logout</a></p>
            <p><a href="javascript:void(0)"><i class="mdi mdi-cog"></i>Setting </a> </p>
          </div>
        </div>
        <ul class="user_info_ul">
          <li><u>Username</u> : BlakvGhost
            <!-- <?php echo $_SESSION['user']['username'] ?> -->
          </li>
          <li><u>Storage</u> : BlakvGhost
            <!-- <?php echo sumSize($_SESSION['user']['email']) ?> / 2 Go -->
          </li>
        </ul>
      </div>
      <div class="user_lg bxs">
        <p class="m10"><i class="mdi mdi-account"></i> </p>
      </div>
    </div>
    <lightgallery class="row row-cols-1 row-cols-md-3" :settings="{ speed: 500, plugins: plugins, thumbnail: true }"
      :onInit="onInit" :onBeforeSlide="onBeforeSlide">
      <div v-for="item in photos" :key="item.id" :data-lg-size="item.size" className="gallery-item col my-3"
        :data-src="item.src">
        <img className="img-responsive" :src="item.thumbnail" :alt="item.alt" class="w-100 h-100" />
      </div>
    </lightgallery>
  </div>
</template>

<script lang="ts">
let lightGallery: any = null
export default {
  data() {
    return {
      plugins: [lgZoom, lgThumbnail],
      photos: Array<Photo>()
    }
  },
  mounted() {
    this.photos = [
      {
        id: 1,
        size: '1400-800',
        src: 'https://plus.unsplash.com/premium_photo-1679436985567-24325ae4bbf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
        alt: 'Photo 1',
        thumbnail:
          'https://plus.unsplash.com/premium_photo-1679436985567-24325ae4bbf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
      },
      {
        id: 2,
        size: '1400-800',
        src: 'https://images.unsplash.com/photo-1640552435388-a54879e72b28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        alt: 'Photo 2',
        thumbnail:
          'https://images.unsplash.com/photo-1640552435388-a54879e72b28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      },
      {
        id: 3,
        size: '1400-800',
        src: 'https://images.unsplash.com/photo-1629654291663-b91ad427698f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        alt: 'Photo 3',
        thumbnail:
          'https://images.unsplash.com/photo-1629654291663-b91ad427698f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      }
    ]
  },
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
  watch: {
    photos() {
      this.$nextTick(() => {
        lightGallery.refresh()
      })
    }
  },
}
</script>
<style>
@import 'lightgallery/css/lightgallery.css';
@import 'lightgallery/css/lg-thumbnail.css';
@import 'lightgallery/css/lg-zoom.css';
</style>