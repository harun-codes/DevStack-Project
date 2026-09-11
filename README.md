Tech Stack Builder

A beautiful and interactive Technology Stack Builder built with React and TypeScript.  
Users can explore different technologies, view their category, difficulty level, rating, and add their favorite technologies to their personal stack.

About The Project

Tech Stack Builder is a frontend web application that helps users create and manage their own technology stack.

The application displays different technologies such as React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, and more.

Users can:
- Browse available technologies
- View technology details
- Add technologies to their stack
- Remove individual technologies
- Remove all selected technologies
- Get toast notifications when technologies are added or removed
  
Technologies Used

The project was built using the following technologies:

- React – For building the user interface
- TypeScript – For type-safe development
- Tailwind CSS – For styling and responsive design
- DaisyUI – For UI components and styling
- React Toastify – For displaying success notifications
- Vite – For fast development and build tooling

Features

1. Technology Selection

Users can browse different technologies and add them to their personal stack by clicking the + Add to Stack button.

Each technology card displays:

- Technology name
- Technology icon
- Category
- Difficulty level
- Rating
- Badge such as Popular or Fast
- Technology description

2. Personal Technology Stack

The Your Stack section displays all technologies selected by the user.

Users can easily see:

- Number of selected technologies
- Technology name
- Technology icon
Users can also remove an individual technology from their stack.

3. Interactive Notifications

The application provides toast notifications when users interact with their stack.

For example:

- `React added to stack`
- `React removed`
- `All technologies were removed`

This makes the application more interactive and provides immediate feedback to the user.

Project Goals

The main goals of this project are:

- Practice React component-based development
- Practice TypeScript with React
- Manage state using React state
- Build reusable technology cards
- Create a clean and responsive user interface
- Practice handling user interactions and events


1.What is JSX, and why is it used in React?
- JSX is the JavaScript XML.JSX is used because it makes writing and understanding the UI much easier.

2.What is the difference between props and state?
-Props -- used to pass data from a parent component to a child component.
-State -- used to store data inside a component that can change and Update.

3.What does the useState hook do, and where did you use it in this project?
-useState is a React Hook that store data in a component and update that data when something changes.

4.What does the useEffect hook do, and why did you need it to load the JSON data?
-useEffect is a React Hook used to run some code after a component renders. It is commonly used for tasks like fetching data, calling APIs, or working with external data.

5.Why does every item in a .map() list need a unique key prop?
-When we use .map() to display a list, React needs a way to identify each item.That's why we use a unique Key.

6.What is conditional rendering? Show one place you used it (example: the empty stack message).
-Conditional rendering means showing different UI depending on whether a condition is true or false.

{selectedTechnology.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <StackList />
)}

7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
-A parent component passes data to a child component using props. A child cannot directly change the parent's state. Instead, the parent passes a function to the child as a props.
