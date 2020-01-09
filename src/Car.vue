<template>
    <div>
        <h1>{{ printCarName }}</h1>
        <slot name="initCarName"></slot>
        <p>{{ printCarYear }}</p>
        <div v-if="carName !== defaultCarName">
            <button @click="changeName">new name</button>
            <button @click="addCar">Add car to stock</button>
        </div>
        <slot name="index"></slot>
    </div>
</template>

<script>
    import Helpers from "./utils/Helpers";
    import {eventEmmiter} from "./main";

    const defaultCarName = "Train";

    export default {
        name: "Car",
        props: {
            carOrigin:{

            },
            carName: {
                type: String,
                default: defaultCarName,
            },
            carYear: {
                type: Number,
                default: new Date().getFullYear(),
            },
        },
        data() {
            return {
                defaultCarName: defaultCarName,
            }
        },
        methods: {
            changeName(event) {
                const isOld = this.carName === this.carOrigin;
                this.carName = isOld ? "Lotus" : this.carOrigin;
                event.target.innerText = isOld ? "return origin" : "new name";
                this.$emit("changedCarName", this.carName);
            },
            addCar() {
                eventEmmiter.$emit("addCarToStock");
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
    h3 {
        font-size: 1.1em;
        color: #0A0;
    }
</style>