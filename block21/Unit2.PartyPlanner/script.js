const partyList = document.getElementById("party-list");
const partyForm = document.getElementById("party-form");
const API_URL =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events";

let parties = [];

async function fetchParties() {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    parties = json.data;
    renderParties();
  } catch (error) {
    console.error("Error fetching parties:", error);
  }
}

function renderParties() {
  partyList.innerHTML = "";
  parties.forEach((party) => {
    const partyItem = document.createElement("li");
    partyItem.className = "party-item";
    partyItem.innerHTML = `
      <h3>${party.name}</h3>
      <p>Date: ${party.date}</p>
      <p>Time: ${party.time}</p>
      <p>Location: ${party.location}</p>
      <p>Description: ${party.description}</p>
      <button class="delete-button" data-id="${party.id}">Delete</button>
    `;
    partyList.appendChild(partyItem);
  });

  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      const id = event.target.dataset.id;
      await deleteParty(id);
    });
  });
}

async function createParty(party) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(party),
    });
    const json = await response.json();
    if (json.success) {
      await fetchParties();
    } else {
      console.error("Failed to create party:", json);
    }
  } catch (error) {
    console.error("Error creating party:", error);
  }
}

async function deleteParty(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    const json = await response.json();
    if (json.success) {
      await fetchParties();
    } else {
      console.error("Failed to delete party:", json);
    }
  } catch (error) {
    console.error("Error deleting party:", error);
  }
}

partyForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const location = document.getElementById("location").value;
  const description = document.getElementById("description").value;

  await createParty({ name, date, time, location, description });

  partyForm.reset();
});

fetchParties();
