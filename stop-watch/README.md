# Stop Watch

A simple stopwatch built with HTML and vanilla JavaScript. It tracks elapsed time in minutes and seconds and provides controls to start, stop, and reset the timer.

## Features

- Start the stopwatch
- Stop the stopwatch
- Reset the elapsed time to `00:00`
- Display time in `MM:SS` format
- No dependencies or build tools required

## Getting Started

1. Clone or download this project.
2. Open `main.html` in a web browser.
3. Use the buttons to control the stopwatch.

## Project Structure

```text
stop-watch/
|-- main.html   # Stopwatch interface
|-- index.js    # Timer logic and controls
|-- README.md   # Project documentation
```

## How It Works

The elapsed time is stored as seconds in JavaScript. A one-second interval increments the value, then updates the displayed minutes and seconds. The timer is cleared when Stop or Reset is pressed.

## Technologies

- HTML5
- JavaScript

## License

This project is available for personal and educational use.
