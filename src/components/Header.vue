<script>
import { store } from '../store';

export default {
    name: 'Header',
    data() {
        return {
            store,
        }
    },
}
</script>

<template lang="">
    <header class="py-3">
        <div class="container d-flex align-items-center justify-content-between">
            <h2 class="text-white mb-0 fw-bolder">Boolfolio</h2>
            <ul class="list-unstyled d-flex mb-0">
                <li v-for="(item, index) in store.menuItems" :key="index">
                    <router-link :to="{ name: item.name }" class="text-header text-uppercase">
                        {{ item.label }}
                    </router-link>                   
                </li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: rgb(0, 0, 98);

    .text-header {
        color: white;
        text-decoration: none;
        margin: 0 10px;
        font-size: 15px;
        font-weight: bolder;
    }
}
</style>
