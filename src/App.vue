<template>
    <div>
        <h1>{{ msg }}</h1>
        <app-car :carName="carName" :carYear="carYear"></app-car>
        <app-car :carName="carName2" :carYear="carYear2"></app-car>
        <app-car></app-car>
    </div>
</template>

<script>
    import Car from "./Car";

    export default {
        data: function () {
            return {
                msg: "Welcome to Your Vue.js App",
                carName: "Fiat",
                carYear: 2012,
                carName2: "Ferarri",
                carYear2: 2017,

            }
        },
        components: {
            appCar: Car,
        }
    }
</script>

<style>

</style>
