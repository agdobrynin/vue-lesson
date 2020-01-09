<template>
    <div>
        <app-counter></app-counter>
        <h4>Cars:</h4>
        <ul>
            <li v-for="car in cars">{{car.name}}</li>
        </ul>
        <app-car v-for="(car, index) in cars"
                 :carName="car.name" :carYear="car.year" :carOrigin="car.origin"
                 @changedCarName="car.name = $event"
                 @addCarToStock="counter = $event"
                 :content="counter"
        >
            <p slot="index">array index = {{ index }}</p>
            <h3 slot="initCarName">{{ car.origin }}</h3>
        </app-car>

        <app-car>
            <p slot="index">Пустой без параметров</p>
        </app-car>
    </div>
</template>

<script>
    import Car from "./Car";
    import Counter from "./Counter";

    export default {
        data() {
            return {
                cars: [
                    {name: "Fiat", year: 2012, origin: "Fiat",},
                    {name: "Bugatti", year: 2018, origin: "Bugatti",},
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
