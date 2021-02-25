const submitBtn = document.getElementById("submit");
const commentInput = document.getElementById("commentInput");
const deleteBtn = document.getElementById("deleteBtn");
const comments = document.querySelector(".comments");
const heartBtn = document.getElementById("heartBtn");

function onAdd() {
  const text = commentInput.value;

  if (text === "") {
    commentInput.focus();
    return;
  }
}
