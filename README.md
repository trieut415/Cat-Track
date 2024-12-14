
# CatTrack: A Cat Behavior Tracking Device

**Authors**: Joshua Bardwick, Trieu Tran, Noah Hathout, Cole Knutsen  
**Date**: 2024-10-04  

## Overview

CatTrack is a device designed to monitor and classify a cat's behavior using movement data, display the information locally, and transmit it to a web interface for visualization. The system combines data from an accelerometer, a temperature sensor, and an alphanumeric display to provide real-time tracking and reporting of the cat's activity and environment.

---

## Features

1. **Behavior Classification**  
   - Tracks movement with an accelerometer, measuring x, y, and z axes.  
   - Calculates pitch and roll from the data to classify behaviors such as sleeping, walking, or standing.

2. **Data Reporting**  
   - Continuously measures and transmits time, temperature, and classified activity to a web interface.  
   - Displays data as strip charts for intuitive visualization.

3. **Local Display**  
   - Shows the cat’s name, current activity, and elapsed time in the activity on an alphanumeric OLED display.  
   - Includes a button interface to toggle between display modes.  

4. **Temperature Monitoring**  
   - Captures temperature using an ADC pin and converts the readings to Fahrenheit via the Steinhart-Hart equation.  
   - Synchronizes with other system components to avoid data conflicts.

---

## System Design

The system is built around four main tasks:

1. **Accelerometer Task**  
   - Samples acceleration in all axes over two seconds and averages the results.  
   - Uses the data to compute pitch and roll for activity classification.  
   - Sends results to a centralized data-handling function.

2. **Button Task**  
   - Monitors button presses to cycle through display modes.  

3. **Display Task**  
   - Handles the OLED display, presenting the cat’s name, activity level, or elapsed time.  
   - Supports scrolling for longer messages and communicates via the I2C bus.  

4. **Temperature Task**  
   - Reads temperature data from an analog pin.  
   - Converts raw data into engineering units and synchronizes with other tasks.

---

## Visuals

### Circuit Diagram
![Circuit Diagram](https://github.com/BU-EC444/Quest2-Team6-Bardwick-Hathout-Knutsen-Tran/blob/main/quest2/circuit-diagram1.png)

### Images of the Circuit
![Circuit 1](https://github.com/BU-EC444/Quest2-Team6-Bardwick-Hathout-Knutsen-Tran/blob/main/quest2/circuit-image1.png)  
![Circuit 2](https://github.com/BU-EC444/Quest2-Team6-Bardwick-Hathout-Knutsen-Tran/blob/main/quest2/circuit-image2.png)

---

## Performance Highlights

The device reliably classifies activities such as sleeping, walking, and standing, with accurate movement measurements from the accelerometer. The OLED display effectively communicates real-time data, and the web interface visualizes the information in an easily interpretable format. Potential future improvements include displaying the current time on the OLED and incorporating a phone number for identification purposes.

---

## Demonstrations

- [Video Demo: Report](https://drive.google.com/file/d/1MHmP07e8tH0pH1_1BzXr1exhsDJ_sImG/view?usp=sharing)  
- [Video Demo: Design](https://drive.google.com/file/d/1kXdl_pqsfS58n2JaBD2br86vPUoF4mpm/view?usp=sharing)  
