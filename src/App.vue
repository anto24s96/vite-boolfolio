<script>
import Header from "./components/Header.vue";
import AppMain from "./components/AppMain.vue";

export default {
    components: {
        Header,
        AppMain,
    }
};
</script>
<template lang="">
    <div>
        <Header />
        <AppMain />
    </div>
</template>
<style lang="scss">
@use "./styles/generals.scss" as *;
@use "./styles/partials/variables" as *;
</style>
