# Omazon - clone of a famous website 🌟

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.


## Frontend architecture: 

To build this clone, I used React with TypeScript and Sass for styling. The application fetches data from an API and renders it in a Single Page Application (SPA) format. The design and layout are based on a Figma mockup that guided the integration process.

## Objective:

I created this project to practice and showcase my skills building front-end web applications using React and TypeScript. This project was developed in my free time, and I plan to continually enhance it with new features listed below.

In the future, I will also develop a new backend API with NestJS with mariaDB database, which I intend to deploy on a Linux test server.

All of these folders and updates will be gradually published on my GitHub account.


## To-Do List: 

### Components 🧱
- Create modal for add products `<ProductAddForm />`
- Develop the shopping cart page `<CartPage />`
- Set up JWT for authentication
- Create a loader for the product page `<ProductPageLoader />`
- Build the category page `<CategoryPage />`

### Features 🌟
- Submit `formData` to backend for user authentication
- Implement user registration and display username
- Validate access rights to the `/cart`

### Configuration ⚙️
- Install & set redux store
- Create unit tests 
- Write Dockerfiles for the project
- Make CI/CD script for github pages
- Deploy the project on a Linux server 

## Getting started 

Follow these steps to set up the project locally:

### Prerequisites 🔍

Before running the project, make sure you have the following tools installed:
- Node.js (v22 or higer)
- npm or yarn as your package manager
- Git 
- A code editor like VSCode

### Installation 🔧

1. Clone the repository:
```bash
  git clone https://github.com/Yoann-86/Omazon-SPA.git
```

2. Navigate to the project directory:
```bash
  cd Omazon-SPA
```

3. Install dependencies:
Using npm:
```bash
  npm install
```

Or using yarn:
```bash
  yarn install
```

### Running the project 🚀

1. Start the development server:
Using npm:
```bash
  npm run dev
```

Or using yarn:
```bash
  yarn dev
```

2. Open the application in your browser:
```arduino
  http://localhost:5173
```


<!-- ### Running tests (optional)

Using npm:
```bash
  npm run test
```

Or using yarn:
```bash
  yarn test
``` -->