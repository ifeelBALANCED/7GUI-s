import {createEvent, restore} from 'effector'
import {ChangeEvent, ChangeEventHandler} from "react";


const k = 9 / 5
const toFloor = (val: number) => Math.floor(val)
const toCelsius = (f: number) => toFloor((f - 32) / k)
const toFahrenheit = (c: number) => toFloor((c * k) + 32)
export const celsiusChange = createEvent<ChangeEvent<HTMLInputElement>>()
export const fahrenheitChange = createEvent<ChangeEvent<HTMLInputElement>>()
const celsiusChanged = celsiusChange.map(({target: {value}}) => +value)
const fahrenheitChanged = fahrenheitChange.map(({target: {value}}) => +value)
export const $celsius = restore(celsiusChanged, 0)
    .on(fahrenheitChanged, (_, f) => toCelsius(f))
export const $fahrenheit = $celsius.map(toFahrenheit)
