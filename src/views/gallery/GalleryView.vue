<script setup lang="ts">
import Lightgallery from 'lightgallery/vue'
import lgZoom from 'lightgallery/plugins/zoom'
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import type { Photo } from '@/types/Media'
import UploadFileModal from '@/components/UploadFilesComponent.vue'
</script>
<template>
  <div class="container-fluid bg-light position-relative" style="min-height: 100vh;">
    <div class="position-fixed bottom-0 end-0" style="z-index: 1000;">
      <div class="p-4 m-3 shadow rounded bg-midnightblue d-none fade-in-down" id="menuToDisplayUserMenu"
        style="font-size: 1.3rem;">
        <div class="border-bottom pb-3 text-center text-light">
          <span>Welcome BlakvGhost <br> To Fdx-Gallery!</span>
        </div>
        <div class="text-center">
          <div class="d-flex justify-content-between">
            <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#fdxUploadFileArea"
              class="text-decoration-none text-lightblue-hover-light text-lightblue fw-bolder mx-2"><i
                class="mdi mdi-cloud-upload fw-bold fs-1x d-block"></i> Upload</a>
            <a href="javascript:void(0)"
              class="text-decoration-none text-lightblue-hover-light text-lightblue fw-bolder m-3"><i
                class="mdi mdi-logout fw-bold fs-1x d-block"></i> Logout</a>
            <a href="javascript:void(0)" @click="switchMode"
              class="text-decoration-none text-lightblue-hover-light text-lightblue mx-2 fw-bolder"><i
                class="mdi mdi-brightness-4 fw-bold fs-1x d-block"></i>Dark</a>
          </div>
        </div>
        <div class="border-top py-3">
          <ul class="list-unstyled">
            <li class="text-lightblue fw-bolder">
              <u>Username</u> :
              <span>BlakvGhost</span>
            </li>
            <li class="text-lightblue fw-bolder">
              <u>Storage</u> :
              <span>17Mb/2Go</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex me-2">
        <div @click="displayUserOverlayMenu" id="btnToDisplayUserMenu"
          class="mx-auto transition-1x mb-3 shadow rounded-circle bg-midnightblue text-lightblue-hover-light text-lightblue text-center"
          style="font-size: 4rem;height: 100px;width: 100px;">
          <i class="mdi mdi-account"></i>
        </div>
      </div>
    </div>
    <lightgallery class="row row-cols-1 row-cols-md-3" :settings="{ speed: 500, plugins: plugins, thumbnail: true }"
      :onInit="onInit" :onBeforeSlide="onBeforeSlide">
      <div v-for="item in photos" :key="item.id" :data-lg-size="item.size"
        className="gallery-item position-relative col my-3" :data-src="item.src">
        <div class="position-absolute d-none" style="left: 20px;top: 5px;">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        </div>
        <img className="img-responsive" :src="item.thumbnail" :alt="item.alt" class="w-100 h-100" />
      </div>
    </lightgallery>
  </div>
  <div class="modal-container">
    <UploadFileModal></UploadFileModal>
  </div>
</template>

<script lang="ts">
let lightGallery: any = null
export default {
  data() {
    return {
      plugins: [lgZoom, lgThumbnail],
      photos: Array<Photo>(),
      displayOverlayMenu: false,
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
    },
    displayUserOverlayMenu: function () {
      const icon = document.querySelector('#btnToDisplayUserMenu i');
      const menu = document.querySelector('#menuToDisplayUserMenu');
      if (!this.displayOverlayMenu) {
        this.displayOverlayMenu = true;
        icon?.classList.add('mdi-close-outline');
        return menu?.classList.remove('d-none');
      }
      this.displayOverlayMenu = false;
      icon?.classList.remove('mdi-close-outline');
      menu?.classList.add('d-none');
    },
    switchMode: function() {

      const $body = document.documentElement;
      const themeMode = localStorage.getItem('data-bs-theme');

      if(themeMode == 'light') {
        localStorage.setItem('data-bs-theme', 'dark')
        return $body?.setAttribute('data-bs-theme', 'dark');
      }
      $body?.setAttribute('data-bs-theme', 'light');
      localStorage.setItem('data-bs-theme', 'light')
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