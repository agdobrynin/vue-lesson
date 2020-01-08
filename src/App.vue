<template>
    <div>
        <h1>{{ msg }}</h1>
        <app-car v-for="car in cars" :carName="car.name" :carYear="car.year"></app-car>
        <app-car></app-car>
    </div>
</template>

<script>
    import Car from "./Car";

    export default {
        data: function () {
            return {
                msg: "Welcome to Your Vue.js App",
                cars: [
                    {name: "Fiat", year: 2012},
                    {name: "Bugatti", year: 2018},
                ],

            }
        },
        components: {
            appCar: Car,
        }
    }
</script>

<style>

</style>
