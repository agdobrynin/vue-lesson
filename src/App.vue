<template>
    <div>
        <h1>{{ msg }}</h1>
        <app-counter></app-counter>
        <h4>Cars:</h4>
        <ul>
            <li v-for="car in cars">{{car.name}}</li>
        </ul>
        <app-car v-for="car in cars"
                 :carName="car.name" :carYear="car.year"
                 @changedCarName="car.name = $event"
                 @addCarToStock="counter = $event"
                 :content="counter"
        ></app-car>
        <app-car></app-car>
    </div>
</template>

<script>
    import Car from "./Car";
    import Counter from "./Counter";

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
            appCounter: Counter,
        }
    }
</script>

<style>

</style>
