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
    <div class="col-4 py-3">
        <div class="card">
            <div class="card-body text-center">
                <img :src="getImg(project.logo)" :alt="cover_image" class="card-img-top">
                <div>Name:
                    {{project.name }}
                </div>
                <div>{{ project.start_date }}</div>
                <div>{{ project.end_date }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="">

</style>