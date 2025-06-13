async function fetchUserData() {
  // Define the API URL
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  // Select the data container element
  const dataContainer = document.getElementById("api-data");

  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);
    const users = await response.json(); // Corrected JSON parsing

    // Clear loading text
    dataContainer.innerHTML = "";

    // Create a list of users
    const userList = document.createElement("ul");

    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Append list to the container
    dataContainer.appendChild(userList);
  } catch (error) {
    // Handle fetch errors
    dataContainer.textContent = "Failed to load user data.";
    console.error("Error fetching data:", error);
  }
}

// Ensure function runs when the page loads
document.addEventListener("DOMContentLoaded", fetchUserData);
