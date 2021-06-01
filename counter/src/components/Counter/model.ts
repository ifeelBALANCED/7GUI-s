import {createEvent, createStore} from "effector";
import connectLocalStorage from "effector-localstorage/sync";
import {MouseEventTypes} from "../../types";


export const increment = createEvent<MouseEventTypes>('increment')
export const resetCounter = createEvent<MouseEventTypes>('reset counter')
const setCounter = createEvent('set counter')
const counterLocalStorage = connectLocalStorage("counter")
    .onError((err) => console.log(err))
    .onChange(setCounter)
export const $counter = createStore<number>(counterLocalStorage.init(0))
    .on(increment, counter => counter + 1)
    .on(setCounter, (state, value) => value)
    .reset(resetCounter)

$counter.watch(counterLocalStorage)

