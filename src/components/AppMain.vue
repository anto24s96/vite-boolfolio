<script>
import axios from 'axios';

import ProjectCard from './ProjectCard.vue';

import { store } from '../store';

export default {
    name: 'AppMain',
    components: {
        ProjectCard,
    },

    data() {
        return {
            store,
            projects: [],
            currentPage: 1,
            lastPage: null,
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects(page_number) {
            axios.get(`${this.store.baseUrl}/api/projects`, {
                params: {
                    page: page_number
                }

            }).then((response) => {
                this.projects = response.data.results.data;
                this.currentPage = response.data.results.current_page
                this.lastPage = response.data.results.last_page
            });
        }
    },
}
</script>
<template lang="">
    <div class="mt-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">Boolpress</h1>
                    <p class="text-center py-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, incidunt. Sunt optio non consectetur. Illum libero architecto iure! Placeat voluptates doloribus quis sequi error sed facere quia fugit eos suscipit!
                    </p>
                </div>
            </div>

            <div class="row">
                <ProjectCard v-for="project, index in projects" ::key="index" :project="project" />
            </div>

            <div class="row py-3">
                <div class="col-12">
                    <ul class="list-unstyled d-flex justify-content-center">
                        <li class="mx-2">
                            <button :class="currentPage == 1 ? 'disabled' : ''" class="btn btn-outline-success" @click="getProjects(currentPage - 1)">
                                PREV
                            </button>
                        </li>
                        <li class="mx-2">
                            <button :class="currentPage == lastPage ? 'disabled' : ''" class="btn btn-outline-success" @click="getProjects(currentPage + 1)">
                                NEXT
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>