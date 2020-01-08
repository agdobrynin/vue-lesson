<template>
    <div>
        <h1>{{ printCarName }}</h1>
        <p>{{ printCarYear }}</p>
    </div>
</template>

<script>
    import Helpers from "./utils/Helpers";

    export default {
        name: "Car",
        props: {
            carName: {
                type: String,
                default: "Train",
            },
            carYear: {
                type: Number,
                default: new Date().getFullYear(),
            },
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