<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'AppContactForm',
    data() {
        return {
            store,
            name: '',
            surname: '',
            email: '',
            phone: '',
            content: '',
            loading: false
        }
    },
    methods: {
        sendForm() {
            this.loading = true

            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                content: this.content
            }

            axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
                if (response.data.success) {
                    this.name = '';
                    this.surname = '';
                    this.email = '';
                    this.phone = '';
                    this.content = '';
                }

                this.loading = false;
            });
        }
    },
}
</script>
<template lang="">
    <div>
        <form @submit.prevent="sendForm()" methods="POST">
            <div class="row">
                <div class="col-6 py-3">
                    <label for="name" class="control-label fw-bolder mb-1">Nome</label>
                    <input type="text" name="name" id="name" placeholder="Nome" class="form-control" v-model="name" required>
                </div>
                <div class="col-6 py-3">
                    <label for="surname" class="control-label fw-bolder mb-1">Cognome</label>
                    <input type="text" name="surname" id="surname" placeholder="Cognome" class="form-control" v-model="surname" required>
                </div>
                <div class="col-6 py-3">
                    <label for="email" class="control-label fw-bolder mb-1">Email</label>
                    <input type="text" name="email" id="email" placeholder="Email" class="form-control" v-model="email" required>
                </div>
                <div class="col-6 py-3">
                    <label for="phone" class="control-label fw-bolder mb-1">Telefono</label>
                    <input type="text" name="phone" id="phone" placeholder="Telefono" class="form-control" v-model="phone">
                </div>
                <div class="col-12 py-3">
                    <label for="content" class="control-label fw-bolder mb-1">Messaggio</label>
                    <textarea name="content" id="content" placeholder="Messaggio" cols="30" rows="10" class="form-control" v-model="content"></textarea>
                </div>

                <div class="col-12">
                    <button class="btn btn-success my-2" :disabled="loading" type="submit">{{ loading ? 'Invio in corso...' : 'Invia' }}</button>
                </div>
            </div>
        </form>
    </div>
</template>
<style lang="">

</style>