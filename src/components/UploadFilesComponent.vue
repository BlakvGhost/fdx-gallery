<script setup lang="ts">
import Dropzone from "dropzone"
import 'dropzone/dist/dropzone.css';
</script>
<template>
    <div class="modal fade" id="fdxUploadFileArea" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered mw-600px">
            <div class="modal-content">
                <form class="form" action="none" id="fdxUploadFileArea_form">
                    <div class="modal-header">
                        <h4 class="fw-bold">
                            Televerser des fichiers
                        </h4>
                        <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                            <span class="svg-icon svg-icon-1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                                        transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
                                    <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                                        fill="currentColor"></rect>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div class="modal-body pt-10 pb-15 px-lg-17">
                        <div class="dropzone dz-clickable p-4 rounded" style="border:1px dashed var(--bs-primary)"
                            id="fdxUploadFileAreaZone">
                            <div class="dz-message needsclick align-items-center d-flex">
                                <span class="svg-icon svg-icon-3hx svg-icon-primary">
                                    <svg class="text-primary" width="64" height="64" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3"
                                            d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM14.5 12L12.7 9.3C12.3 8.9 11.7 8.9 11.3 9.3L10 12H11.5V17C11.5 17.6 11.4 18 12 18C12.6 18 12.5 17.6 12.5 17V12H14.5Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M13 11.5V17.9355C13 18.2742 12.6 19 12 19C11.4 19 11 18.2742 11 17.9355V11.5H13Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M8.2575 11.4411C7.82942 11.8015 8.08434 12.5 8.64398 12.5H15.356C15.9157 12.5 16.1706 11.8015 15.7425 11.4411L12.4375 8.65789C12.1875 8.44737 11.8125 8.44737 11.5625 8.65789L8.2575 11.4411Z"
                                            fill="currentColor"></path>
                                        <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                                <div class="ms-3">
                                    <h3 class="fs-5 fw-bold text-gray-100 mb-1">Déposez les fichiers ici ou cliquez pour
                                        télécharger.</h3>
                                    <span class="fw-semibold fs-7 text-gray-200">Téléchargez jusqu'à 10 fichiers</span>
                                </div>
                            </div>
                        </div>
                        <div class="my-3">
                            <label for="fdxUploadFileAreaDesc">Description: </label>
                            <textarea class="form-control" id="fdxUploadFileAreaDesc" name="desc" rows="3"
                                placeholder="Description" required></textarea>
                        </div>
                        <div class="my-3 text-center">
                            <button type="submit" class="btn btn-primary bg-midnightblue w-50">
                                Envoyer
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
        }
    },
    mounted() {
        new Dropzone("#fdxUploadFileAreaZone", {
            url: "/api/file/upload",
            maxFilesize: 10,
            maxFiles: 10,
            acceptedFiles: "image/jpeg, image/png, image/gif",
            addRemoveLinks: true,
            dictDefaultMessage: "Déposez les fichiers ici ou cliquez pour télécharger.",
            dictFallbackMessage: "Veuillez télécharger les fichiers ici.",
            dictFileTooBig: "Le fichier est trop volumineux. Veuillez télécharger plus de 10 fichiers.",
            dictInvalidFileType: "Le fichier est invalide. Veuillez télécharger plus de 10 fichiers.",
            dictResponseError: "Une erreur s'est produite lors de l'envoi du fichier. Veuillez réessayer.",
            dictCancelUpload: "Annuler",
            dictRemoveFile: "Supprimer le fichier",
            dictMaxFilesExceeded: "Vous ne pouvez pas télécharger plus de 10 fichiers.",
            dictFileTooSmall: "Le fichier est trop court. Veuillez télécharger plus de 10 fichiers.",
        })
    },
    methods: {
    }
}
</script>

<style scoped></style>