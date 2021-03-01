import { defineComponent } from "vue";
export default defineComponent({
    name: 'array',
    setup() {

    },
    render(ctx) {
        return ctx.$route.path;
    }
})