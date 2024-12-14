const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const fs = require('fs');

// Set up the serial port and parser
const port = new SerialPort({ path: '/dev/cu.usbserial-019FD4C1', baudRate: 115200 });
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

// Define the log file path
const logFilePath = 'cat_data.csv';

// Function to log data to CSV
function logDataToFile(logEntry) {
  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error('Error writing to file', err);
    } else {
      console.log('Data written:', logEntry.trim());
    }
  });
}

// Listen for data from the ESP32
parser.on('data', (data) => {
  const currentTime = new Date().toISOString();
  const logEntry = `${currentTime}, ${data.trim()}\n`;

  // Log to console and append to file
  console.log(`Received: ${data.trim()}`);
  logDataToFile(logEntry);
});

// Error handling
port.on('error', (err) => {
  console.log('Error: ', err.message);
});

console.log('Listening for data...');
