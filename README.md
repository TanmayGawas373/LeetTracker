# LeetTracker 🎉

## Overview 🌟
LeetTracker is a web application designed to help users track their progress on LeetCode problems across various difficulty levels: Easy, Medium, and Hard. The application provides a user-friendly interface where users can input their LeetCode username to retrieve and display their problem-solving statistics.

## Features 🚀
- **User Input**: Users can enter their LeetCode username to fetch statistics.
- **Progress Visualization**: Displays progress in a circular format for each difficulty level. 🟢🟡🔴
- **Dynamic Statistics Card**: Shows detailed statistics including the number of problems solved and total problems available for each difficulty level.
- **Responsive Design**: Optimized for various screen sizes using CSS flexbox and conic gradients. 📱💻

## Technologies Used 🛠️
- **HTML**: Structure of the web application.
- **CSS**: Styling and layout, including responsive design features.
- **JavaScript**: Functionality for fetching user data from the API and updating the UI dynamically.

## Getting Started 🚧
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd LeetTracker
   ```

2. **Open `index.html`**
   Open the `index.html` file in your preferred web browser. 🌐

3. **Usage**
   - Enter your LeetCode username in the input field. ✍️
   - Click the "Search" button to retrieve your statistics. 🔍
   - View your progress displayed in circular graphs and detailed statistics.

## Code Structure 📂
- **index.html**: Main HTML file containing the structure of the application.
- **style.css**: Contains all styling rules for the application.
- **script.js**: JavaScript file that handles user input validation, API calls, and UI updates.

## API Integration 🔗
The application fetches user data from the LeetCode Stats API:
```javascript
const url = 'https://leetcode-stats-api.herokuapp.com/' + username;
```
This API returns JSON data containing:
- Number of easy, medium, and hard problems solved.
- Total number of problems available in each category.

## Progress Calculation 📈
The progress for each difficulty level is calculated as follows:
```javascript
const progressDegree = (solved / total) * 100;
```
This value is used to set the CSS variable `--progress-degree`, which visually represents the user's progress in a circular format.

## Contributing 🤝
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.
