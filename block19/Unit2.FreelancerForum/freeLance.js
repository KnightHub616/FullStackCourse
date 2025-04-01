const names = [
  "Alice",
  "Bob",
  "Carol",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Henry",
];
const occupations = [
  "writer",
  "teacher",
  "programmer",
  "driver",
  "chef",
  "accountant",
  "secretary",
  "lawyer",
];
let freelancers = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
];
function renderFreelancers() {
  const freelancerList = document.getElementById("freelancer-list");
  freelancerList.innerHTML = "";

  freelancers.forEach((freelancer) => {
    const li = document.createElement("li");
    li.textContent = `${freelancer.name} - ${freelancer.occupation}: $${freelancer.price}`;
    freelancerList.appendChild(li);
  });
}

renderFreelancers();
function generateRandomFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = Math.floor(Math.random() * 100) + 1;

  return { name: randomName, price: randomPrice, occupation: randomOccupation };
}
function calculateAveragePrice() {
  const totalPrice = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  const averagePrice = totalPrice / freelancers.length;

  return averagePrice;
}
function updateAveragePrice() {
  const averagePriceElement = document.getElementById("average-price");
  const averagePrice = calculateAveragePrice();
  averagePriceElement.textContent = `Average starting price: $${averagePrice.toFixed(
    2
  )}`;
}

updateAveragePrice();
setInterval(() => {
  const newFreelancer = generateRandomFreelancer();
  freelancers.push(newFreelancer);
  renderFreelancers();
  updateAveragePrice();
}, 2500);
