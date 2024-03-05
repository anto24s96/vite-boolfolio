<script>
import Header from "./components/Header.vue";

export default {
    components: {
        Header,
    }
};
</script>

<template lang="">
    <div>
        <Header />
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
@use "./styles/generals.scss" as *;
@use "./styles/partials/variables" as *;
</style>
