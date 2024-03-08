import { reactive } from "vue";

export const store = reactive({
    baseUrl: 'http://127.0.0.1:8000',

    menuItems: [
        {
            name: 'home',
            label: 'Home'
        },
        {
            name: 'project',
            label: 'Project'
        },
        {
            name: 'contacts',
            label: 'Contacts'
        }
    ],

});
