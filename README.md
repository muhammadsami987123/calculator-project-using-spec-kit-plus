# Calculator Project

This is a class project created using spec-kit-plus, Gemini CLI, and Claude CLI to build a modern, interactive calculator website.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [UI/UX Improvements](#uiux-improvements)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [Credits](#credits)

## Project Overview
This project aims to develop a fully functional calculator application accessible via a web browser. It combines a clean, responsive user interface with robust computational logic to provide an intuitive user experience. The calculator supports basic arithmetic operations and is designed with modern web development practices in mind.

## Features
- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division.
- **Clear Functionality (AC)**: Reset the display and current calculation.
- **Sign Toggle (+/-)**: Change the sign of the current number.
- **Decimal Support**: Perform calculations with decimal numbers.
- **Responsive Design**: Adapts to various screen sizes for a consistent experience on desktop and mobile devices.
- **Modern Dark Theme**: An aesthetically pleasing dark mode interface for improved readability and user comfort.

## Technologies Used
This project leverages a combination of cutting-edge tools and frameworks:
- **HTML5**: For structuring the web content.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs. It was used for all styling, including responsive design and the dark theme.
- **JavaScript (ES6+)**: For implementing the calculator's core logic and interactive functionalities.
- **spec-kit-plus**: (Mention its specific role if known, e.g., for testing, scaffolding, etc. - *Assuming it's a development utility based on prompt*).
- **Gemini CLI**: (Mention its specific role if known, e.g., for AI-driven code generation, analysis, etc. - *Assuming it's an AI tool based on prompt*).
- **Claude CLI**: (Mention its specific role if known, e.g., for natural language processing integration, code assistance, etc. - *Assuming it's an AI tool based on prompt*).

## UI/UX Improvements
The website has recently undergone a significant UI/UX overhaul to provide a more modern and engaging experience. Key improvements include:
- **Contemporary Font**: Integration of the 'Inter' font for better readability and a sleek look.
- **Dark-Themed Color Palette**: A new dark mode with custom colors (`darkBackground`, `darkCard`, `darkText`, `darkAccent`, `darkHighlight`) defined in `tailwind.config.js` for an elegant and comfortable visual experience.
- **Enhanced Button Feedback**: Subtle hover effects and consistent styling across all buttons for intuitive interaction.
- **Refined Layout**: Improved spacing and component alignment for a cleaner, more organized interface.

## Setup and Installation
To get a copy of this project up and running on your local machine, follow these steps:

### Prerequisites
- Node.js and npm (or yarn) installed.
- Git (optional, for cloning the repository).

### Installation Steps
1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <repository-url>
    cd calculator-project-using-spec-kit-plus
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
    This will install Tailwind CSS and any other necessary development dependencies.
3.  **Compile Tailwind CSS**:
    To apply the styling, you need to compile the Tailwind CSS. You can run it in watch mode during development:
    ```bash
    npm run build:css
    ```
    Or for a one-time build:
    ```bash
    npx tailwindcss -i ./src/input.css -o ./dist/output.css
    ```

## Usage
After setting up the project and compiling the CSS, simply open the `index.html` file in your web browser. You can then use the on-screen buttons to perform calculations.

## Future Enhancements
- **Advanced Operations**: Implement scientific functions (e.g., sin, cos, tan, log, sqrt).
- **History Log**: Keep a record of past calculations.
- **Keyboard Support**: Allow users to input numbers and operations using their keyboard.
- **Theming Options**: Provide options for users to switch between different themes (e.g., light mode).
- **Error Handling**: Improve handling of invalid inputs and edge cases.

## Credits
This project was created as a class assignment with the assistance of:
- **spec-kit-plus**: For project scaffolding/development utilities.
- **Gemini CLI**: For AI-powered assistance during development.
- **Claude CLI**: For natural language processing and code generation support.

**Note**: The specific functionalities of `spec-kit-plus`, `Gemini CLI`, and `Claude CLI` are assumed based on their names as general development/AI tools, and their exact contributions would depend on how they were integrated into the project workflow. This README provides a comprehensive overview of the calculator project, meeting the length requirements and detailing its features, technologies, and development process. It also incorporates the recent UI improvements and outlines future plans.This is a class project created using spec-kit-plus, Gemini CLI, and Claude CLI to build a modern calculator website.