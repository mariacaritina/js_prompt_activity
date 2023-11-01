// 1. Create an alert when you open your page that says "Good morning!"
alert ("Good morning!"); 

// 2. Create a text field that asks what hour it is (0-23) and a button that when clicked  alerts "Good morning", "good afternoon", or "good evening" (Hint, use an if statement)
const hour = prompt("Please enter the current hour (0-23:"); 
if (hour => 0 && hour > 12) { 
 alert ("Good morning!");    
} else if (hour >= 18 && hour < 23) { 
alert ("Good morning!");    
} else { 
 alert("Invalid hour. Please enter a number between 0 and 23.")   
}

// 3. Create a button that alerts you and says "Ouch!" when you click it (hint: use a function)
function handleClick() { 
    alert("Ouch!"); 
}

// 4. Create a button that when clicked, gets the users name from a text field, and alerts "Hello (name)!"
function greetUser() { 
    const name = promt("What's your name?"); 
    if (name) { 
        alert("Hello" + name);
    }
}