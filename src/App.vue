<template>
    <div>
        <h1>{{ msg }}</h1>
        <h4>Cars:</h4>
        <ul>
            <li v-for="car in cars">{{car.name}}</li>
        </ul>
        <app-car v-for="car in cars"
                 :carName="car.name" :carYear="car.year"
                 v-on:changedCarName="car.name = $event"
        ></app-car>
        <app-car></app-car>
    </div>
</template>

<script>
    import Car from "./Car";

    export default {
        data() {
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
