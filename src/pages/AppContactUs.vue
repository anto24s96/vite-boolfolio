<script>
import AppContactForm from '../components/AppContactForm.vue';

export default {
    name: 'AppContactUs',
    components: {
        AppContactForm,
    }
}
</script>
<template lang="">
    <div>
        <div class="container">
            <div class="row py-5">
                <div class="col-12">
                    <h1 class="text-center fw-bolder">Contatti</h1>
                </div>

                <div class="col-12 mt-3">
                    <AppContactForm />
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">

</style>