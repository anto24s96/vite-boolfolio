<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'ProjectDetails',
    data() {
        return {
            store,
            project: [],
            technologies: [],
        }
    },
    created() {
        this.getProjectData();
    },
    methods: {
        getProjectData() {
            axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
                this.project = response.data.project;
            })
        },

        getImg(img) {
            let path = 'https://pluspng.com/img-png/folder-png-folder-png-image-1979.png';

            if (img != null) {
                path = `${store.baseUrl}/storage/${img}`
            }

            return path;
        }
    },
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center text-uppercase py-3 fw-bolder">Project Details</h2>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-4">
                <div class="card my-card bg-dark text-white rounded-3 ">
                    <div class="card_top">
                        <div class="img-container">
                            <img :src="getImg(project.logo)" :alt="project.logo" class="card-img-top">
                        </div>
                    </div>
                    <div class="card-body text-center">
                        <div>NOME PROGETTO:
                            {{project.name }}
                        </div>
                        <p class="py-3">DESCRIZIONE:
                            {{ project.description }}
                        </p>
                        <div>DATA INIZIO: {{ project.start_date }}</div>
                        <div>DATA FINE: {{ project.end_date }}</div>                        
                        <div class="py-2">Tipologia: {{ project.type ? project.type.name : 'Nessuna tipologia specificata' }}</div>
                    </div>
                </div>            
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.my-card {

    .card_top {
        width: 100%;
        display: flex;
        justify-content: center;

        .img-container {
            width: 250px;
            height: 250px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>