const guestFeed = document.getElementById("guestFeed");

const questions = [
  {
    user: "DevMia",
    question: "What's the best way to learn React?",
    tags: ["React", "Frontend", "JS"]
  },
  {
    user: "LogicMan",
    question: "How does event delegation work in JavaScript?",
    tags: ["JavaScript", "DOM"]
  },
  {
    user: "TaniyaC",
    question: "What is the difference between GET and POST in HTTP?",
    tags: ["HTTP", "Web", "API"]
  }
];

questions.forEach(post => {
  const card = document.createElement("div");
  card.classList.add("col-md-6");
  card.innerHTML = `
    <div class="card">
      <h5>${post.user}</h5>
      <p>${post.question}</p>
      <p><strong>Tags:</strong> ${post.tags.join(", ")}</p>
      <p class="text-muted">🔒 Log in to interact</p>
    </div>
  `;
  guestFeed.appendChild(card);
});
