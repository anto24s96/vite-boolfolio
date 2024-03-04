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
    <div class="bg-dark py-3">
        <div class="container d-flex align-items-center justify-content-between">
            <h2 class="text-white mb-0">Boolfolio</h2>
            <ul class="list-unstyled d-flex mb-0">
                <li v-for="(item, index) in store.menuItems" :key="index">
                    <router-link :to="{ name: item.name }" class="text-header">
                        {{ item.label }}
                    </router-link>                   
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.text-header {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    font-size: 18px;
}
</style>
