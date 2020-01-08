<template>
    <div>
        Total cars: <span>{{ counter }}</span>
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
</style>