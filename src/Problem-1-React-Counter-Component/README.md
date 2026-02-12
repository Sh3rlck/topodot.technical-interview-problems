# Problem 1 – React Counter Component

Write a React component that displays a counter and allows the user to increase/decrease said counter. Additionally, add another label that displays counter * 3.

Requirements:
* Counter starts from 0.
* Counter cannot be negative.
* Click the '+' button to increment.
* Click the '-' button to decrement.
* Display counter * 3.
* Write a unit test to verify that clicking the button increments the counter. Can be pseudo or real.

Initial Setup:
```jsx
import React from 'react' 

export function App() { 

 return ( 

    <div> 

      <button>-</button> 

      <button>+</button> 

      <p>clicked: 0</p> 

      <p>clicked times 3: 0</p> 

    </div> 

  )} 
```

