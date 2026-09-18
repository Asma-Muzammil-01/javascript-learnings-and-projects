# javascript-learnings-and-projects

## Weather App

A small client-side Weather App that uses the OpenWeatherMap API to show current weather for a city.

## Files
- [index.html](index.html) — main HTML and client-side JavaScript
- [style.css](style.css) — app styles
- images/ — weather icons used by the UI

## Local usage
1. Open `index.html` in your browser (double-click or use Live Server).
2. Enter a city name and press the search button or press Enter.

Note: The app currently includes an API key in the page for convenience. For production use, move the API key to a backend or use server-side environment variables.

## Add this project to GitHub
1. Initialize Git and commit the project:

```bash
cd "c:\Users\asma-\Documents\Javascript\Weather-App"
git init
git add .
git commit -m "Initial Weather App"
```

2. Create a new GitHub repository (via the website) and copy the remote URL, then add and push:

```bash
git remote add origin <your-repo-ssh-or-https-url>
git branch -M main
git push -u origin main
```

## Hiding your API key (recommended)
Move API calls to a small backend that stores the API key in environment variables. Example workflow:
- Create a simple Node/Express endpoint that forwards requests to OpenWeatherMap using the server-side API key.
- In the client, call your backend instead of contacting OpenWeatherMap directly.

## License
MIT
