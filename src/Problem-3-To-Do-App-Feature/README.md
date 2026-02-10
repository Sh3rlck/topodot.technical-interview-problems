# Problem 3 – To-do App Feature

Create a feature with two parts: display a TodoList that renders TodoListItems given an array of Todo items.

Requirements:

* Define the type for a **Todo** item to at least contain id, text and whether it is completed or not.
* **TodoList** renders a **TodoListItem** for each Todo item.
* **TodoListItem** should display the text of the **Todo** as well as a button to toggle said **Todo** as completed or not completed.
* When the button is clicked, only that specific **Todo** becomes completed. Completing a **Todo** should visually change it (e.g., strike-through, checkbox, color change, etc).
* Center the list on the screen and ensure the buttons are aligned to the right.
  
Conceptual (explain verbally)

* Explain how parents and children communicate in React based on the requirements.
* Explain how the child component should notify the parent when the "Complete" button is clicked.
* Describe how to minimize unnecessary re-renders of child components.

Code

* Build **TodoList** and **TodoListItem** components
* Defining **Todo** type
* Styling components to meet the minimum requirements
* Components need to be returned in **ToDoAppComponent**
