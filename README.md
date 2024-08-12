
# Task Tracker Application

This is a simple Task Tracker application built using Vue.js, Pinia for state management, Vue Router for routing, and Tailwind CSS for styling. The application allows users to view, add, edit, and delete tasks. Each task includes an ID, name, due date, and completion status.

## Features

- **Task Management**: View, add, edit, and delete tasks.
- **State Management**: State management is handled by Pinia.
- **Routing**: Vue Router is used to navigate between the task list and task detail/edit pages.
- **Styling**: Tailwind CSS is used for responsive and modern UI design.
- **Icons**: Heroicons (via @heroicons/vue) are used for icons within the application.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/han-11/task-tracker.git
   cd task-tracker
   ```

2. **Install Dependencies**:
   Install the necessary npm packages:
   ```bash
   npm install
   ```

## NPM Packages Used

- **Vue.js**: A progressive JavaScript framework for building user interfaces.
- **Pinia**: A state management library for Vue.js, used as a replacement for Vuex.
- **Vue Router**: The official router for Vue.js, enabling navigation between pages.
- **Tailwind CSS**: A utility-first CSS framework for creating responsive and modern user interfaces.
- **@heroicons/vue**: A set of free, MIT-licensed high-quality SVG icons for you to use in your web projects.

## Development

To run the project locally:

```bash
npm run dev
```

This will start a development server and open the project in your default web browser. Any changes you make to the source code will automatically trigger a rebuild and reload the browser.

## Building for Production

To build the project for production:

```bash
npm run build
```

This will create an optimized version of the application in the `dist` directory, ready to be deployed.

## Project Structure

- **src/components**: Contains all Vue components, including `TaskList.vue`, `TaskItem.vue`, `TaskDetail.vue`, and `AddTask.vue`.
- **src/stores**: Contains the Pinia store (`taskStore.js`) used for managing application state.
- **src/router.js**: Configures Vue Router with routes for the task list, task detail, and adding tasks.
- **src/assets**: Contains global styles and other static assets.

## Contributing

If you'd like to contribute to the project, feel free to fork the repository and submit a pull request. Contributions, issues, and feature requests are welcome.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Thanks to the creators of Vue.js, Pinia, Vue Router, Tailwind CSS, and Heroicons for their fantastic tools that made this project possible.
```

### How to Use

1. Copy the above content.
2. Create a `README.md` file in the root directory of your project.
3. Paste the content into the `README.md` file.
4. Commit and push the changes to your GitHub repository.

This README file provides a detailed overview of your project and will help others understand, set up, and contribute to your application.
