# Dev Stack Builder

Dev Stack Builder is a responsive React and TypeScript web application where users can explore different technologies and build their own technology stack. Technology information is loaded from a JSON file, and users can add or remove technologies from their personal stack.

## Technologies Used

* React.js
* TypeScript
* Tailwind CSS
* React-Toastify
* JSON
* Vite

## Features

* Explore different technologies with their category, difficulty, rating, and description.
* Add and remove technologies from your personal stack.
* Responsive design with toast notifications and loading state.

---

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write and understand because we can describe the UI directly in the component.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time and update the UI.

### 3. What does the useState hook do, and where did you use it in this project?

The useState hook is used to create and manage state in a React component. In this project, I used it in the `Technologies` component to store the selected technologies and in the App component to store the technology data Promise.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects such as fetching data after a component renders. In this project, I did not use `useEffect`. Instead, I used React's use() with a Promise to load the JSON data and Suspense to handle the loading state.

### 5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list. It allows React to efficiently detect which items were added, removed, or changed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it in the Stack component to show an empty message when no technology is selected:

```tsx
{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  selectedTechnologies.map((technology) => (
    <StackItem key={technology.id} technology={technology} />
  ))
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. A child can send information back to the parent by calling a function that the parent passes as a prop.

In this project, Technologies passes selectedTechnologies and setSelectedTechnologies to child components through props.