<script>
import { store } from '../store';

export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return {
            store
        }
    },
    methods: {
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
    <div class="col-3 py-3">
        <router-link :to="{ name: 'project-details', params: { slug: project.slug } }" class="text-decoration-none">
            <div class="card my-card bg-dark text-white rounded-3">
                <div class="card_top">
                    <div class="img-container">
                        <img :src="getImg(project.logo)" :alt="project.logo" class="card-img-top">
                    </div>
                </div>
                <div class="card-body text-center">
                    <div>NOME PROGETTO:
                        {{project.name }}
                    </div>
                    <div>DATA INIZIO: {{ project.start_date }}</div>
                    <div>DATA FINE: {{ project.end_date }}</div>
                </div>
            </div>        
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.my-card {
    transition: transform 0.5s;
    min-height: 420px;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        cursor: pointer;
    }

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