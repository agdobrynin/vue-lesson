<template>
    <div>
        <span>Total cars:</span> <strong>{{ counter }}</strong>
    </div>
</template>

<script>
    import {eventEmmiter} from "./main";

    export default {
        name: "Counter",
        data() {
            return {
                counter: 0,
            }
        },
        created() {
            eventEmmiter.$on('addCarToStock', () => {
                this.counter++
            });
        },
    }
</script>

<style scoped>
    span {
        color: red;
    }

    strong {
        color: green;
    }
</style>