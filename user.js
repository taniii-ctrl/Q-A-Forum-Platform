let quill;

document.addEventListener("DOMContentLoaded", () => {
  quill = new Quill('#editor', {
    theme: 'snow',
    placeholder: 'Write your question here...',
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image', 'emoji'],
        [{ align: [] }],
        ['clean']
      ]
    }
  });
});

function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = 'block';

  document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
  document.querySelector(`.sidebar li[onclick="showSection('${id}')"]`).classList.add('active');
}

function vote(btn, type) {
  let current = parseInt(btn.innerText.split(' ')[1]);
  btn.innerText = type === 'up' ? `👍 ${current + 1}` : `👎 ${current + 1}`;
}

function submitQuestion() {
  const title = document.getElementById("qTitle").value;
  const desc = quill.root.innerHTML;
  if (!title.trim() || !desc.trim()) {
    alert("Please fill in all fields.");
    return;
  }
  alert("Question posted!");
}
