<template>
    <div>
        <span>Total cars:</span> <strong>{{ counter }}</strong>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        props: {
            counter: {
                type: Number
            }
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