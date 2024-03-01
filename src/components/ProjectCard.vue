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
        /*         getUrlImage() {
                    let image;
        
                    if (this.project.logo != null) {
                        image = '/storage/' + this.project.logo;
                    }
                    else {
                        image = 'http://pngimg.com/uploads/folder/folder_PNG100474.png';
                    }
        
                    return `${this.store.baseUrl}${image}`;
                } */
    },
}
</script>
<template lang="">
    <div class="col-4 py-3">
        <div class="card">
            <div class="card-body text-center">
                <img src="http://pngimg.com/uploads/folder/folder_PNG100474.png" alt="" class="card-img-top">
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