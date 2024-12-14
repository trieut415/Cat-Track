# CatTrack: A Smart Cat Behavior Tracking Device

**Authors**: Joshua Bardwick, Trieu Tran, Noah Hathout, Cole Knutsen  
**Date**: October 4, 2024  

---

## Overview

The **CatTrack** project is a wearable device designed to monitor and classify a cat's behavior, providing insights into their activity levels and environment. The device tracks movements using an accelerometer, logs data such as temperature and activity duration, and reports information to a Node.js interface for real-time visualization. 

This project demonstrates the integration of sensors, alphanumeric displays, and graphical outputs into a cohesive system for tracking animal behavior, with a focus on modular and extensible design.

---

## Key Features

1. **Behavior Classification**
   - Uses accelerometer data to classify activity into three states:
     - **Highly Active**: Intense movement or parkour.
     - **Active**: Moderate movement.
     - **Inactive**: Minimal or no movement.
   - Calculates pitch and roll to enhance classification accuracy.

2. **Data Logging and Reporting**
   - Continuously logs and transmits:
     - **Time**: Maintains real-time tracking in hours, minutes, and seconds.
     - **Temperature**: Records environmental temperature in Fahrenheit.
     - **Activity Type**: Logs classified behavior states.
   - Displays data on a laptop in real-time as strip charts for intuitive visualization.

3. **Local OLED Display**
   - Displays:
     - The cat’s name (e.g., "Otto").
     - Current activity classification.
     - Duration in the current activity.
   - Includes a button for toggling between display modes.

4. **Temperature Monitoring**
   - Reads environmental temperature via an ADC pin.
   - Converts raw data using the Steinhart-Hart equation for accurate results.

5. **Modular Design**
   - Implements a buzzer (future use).
   - Uses the I2C bus for communication between components.

---

## Implementation Details

### System Design

The system operates using four primary tasks:

#### 1. **Accelerometer Task**
   - Samples x, y, and z-axis data from the accelerometer over a two-second interval.
   - Averages results and computes pitch and roll to classify activity states.
   - Sends activity data to the logging and display tasks.

#### 2. **Button Task**
   - Monitors button input to toggle OLED display modes:
     - **Mode 1**: Displays the cat’s name.
     - **Mode 2**: Shows the current activity classification.
     - **Mode 3**: Displays the elapsed time in the current activity.

#### 3. **Display Task**
   - Manages the alphanumeric OLED display.
   - Formats and displays data such as the cat’s name, activity, and elapsed time.
   - Communicates with other components via the I2C bus.

#### 4. **Temperature Task**
   - Reads temperature data from the ADC pin.
   - Converts raw readings into Fahrenheit using the Steinhart-Hart equation.
   - Synchronizes with the accelerometer task for combined data reporting.

---

### Data Flow

1. **Data Acquisition**
   - Sensors collect time, temperature, and movement data.
2. **Data Processing**
   - Accelerometer data is processed for classification.
   - Temperature data is converted to Fahrenheit.
3. **Data Reporting**
   - Processed data is transmitted to a laptop for real-time visualization.
   - Data is logged and displayed on the OLED.

---

## Results and Performance

### Achievements
- Successfully classified cat activities into **Highly Active**, **Active**, and **Inactive** states.
- Maintained real-time data reporting to a laptop, with accurate time and temperature measurements.
- Displayed current activity and elapsed time on the OLED with button-triggered toggling.

### Challenges
1. **Accelerometer Calibration**:
   - Fine-tuning thresholds for accurate activity classification required iterative testing.
2. **Temperature Synchronization**:
   - Avoiding conflicts between data acquisition and OLED display tasks.

### Improvements
- Enhance classification accuracy by incorporating machine learning models.
- Add functionality to display the current time on the OLED.

---

## Demonstrations

### Videos
- [Functionality Demo](https://drive.google.com/file/d/1MHmP07e8tH0pH1_1BzXr1exhsDJ_sImG/view?usp=sharing)  
- [Design Walkthrough](https://drive.google.com/file/d/1kXdl_pqsfS58n2JaBD2br86vPUoF4mpm/view?usp=sharing)  

### Visuals
#### Circuit Diagram
![Circuit Diagram](https://github.com/trieut415/Cat-Track/blob/main/circuit-diagram1.png)

#### Circuit Images
![Circuit Image 1](https://github.com/trieut415/Cat-Track/blob/main/circuit-image1.png)  
![Circuit Image 2](https://github.com/trieut415/Cat-Track/blob/main/circuit-image2.png)

---

## Future Enhancements

1. **Hardware Improvements**:
   - Miniaturize the circuit for better wearability.
   - Replace jumper cables with a PCB design for durability.

2. **Software Features**:
   - Incorporate machine learning models for more precise activity classification.
   - Add sound feedback via the buzzer for alerts or activity milestones.

3. **Sustainability**:
   - Explore rechargeable battery options for extended use.

---

## Conclusion

The **CatTrack Smart Collar** successfully integrates accelerometer-based activity tracking, temperature monitoring, and real-time data visualization to provide insights into a cat's behavior. With future refinements, this device could serve as a practical tool for pet owners, veterinarians, or researchers studying animal behavior.
