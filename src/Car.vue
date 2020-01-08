<template>
    <div>
        <h1>{{ printCarName }}</h1>
        <p>{{ printCarYear }}</p>
        <div v-if="carName !== defaultCarName">
            <button @click="changeName">new name</button>
            <button @click="addCar">Add car</button>
        </div>
    </div>
</template>

<script>
    import Helpers from "./utils/Helpers";

    const defaultCarName = "Train";

    export default {
        name: "Car",
        props: {
            carName: {
                type: String,
                default: defaultCarName,
            },
            carYear: {
                type: Number,
                default: new Date().getFullYear(),
            },
            counter: {
                type: Number,
                default: 0,
            }
        },
        data() {
            return {
                defaultCarName: defaultCarName,
            }
        },
        methods: {
            changeName() {
                this.carName = "Lotus";
                this.$emit('changedCarName', this.carName);
            },
            addCar() {
                this.$emit('addCarToStock', this.counter += 1);
            }
        },
        computed: {
            printCarName() {
                return this.carName.toUpperCase();
            },
            printCarYear() {
                const age = new Date().getFullYear() - this.carYear;
                const ageText = Helpers.declensionOfNumber(age, ["год", "года", "лет"]);
                return `${this.carYear} год выпуска, возраст ${ageText}`;
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: blue;
    }

    p {
        color: gray;
    }
</style>