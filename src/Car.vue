<template>
    <div>
        <h1>{{ carName }}</h1>
        <p>{{ carYear }}</p>
    </div>
</template>

<script>
    export default {
        name: "Car",
        props: ["carName", "carYear"],
    }
</script>

<style scoped>
    h1 {color: blue;}
    p {color: gray;}
</style>