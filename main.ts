/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Alex
 * Created on: Sep 2025
 * This program gets the current temperature. in K.
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Converts temperature to kelvin
let temperature: number
let temperatureValueKelvin: number

// Gets temperature value
temperature = input.temperature()
temperatureValueKelvin = (temperature + 273.15)
temperatureValueKelvin = Math.round (temperatureValueKelvin)


// When button A is pressed...
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString('The temperature is' + temperatureValueKelvin.toString ()+ 'K')
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)

})