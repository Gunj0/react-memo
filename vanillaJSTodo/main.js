const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const addTextElement = document.getElementById("add-text");
  const inputText = addTextElement.value;
  addTextElement.value = "";
  // テキストから未完了リストを生成する
  createIncompleteTodo(inputText);
};

const enterEvent = (event) => {
  if (event.key === "Enter") {
    onClickAdd();
  }
};

const createIncompleteTodo = (todo) => {
  // タグ生成
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親にあるliタグ配下の完了ボタンと削除ボタンを削除
    const moveTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove();
    completeButton.remove();

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const todoText = backButton.previousElementSibling.innerText;
      createIncompleteTodo(todoText);
      backButton.closest("li").remove();
    });
    moveTarget.firstElementChild.appendChild(backButton);

    document.getElementById("complete-list").appendChild(moveTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親にあるliタグを未完了リストから削除
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  document.getElementById("incomplete-list").appendChild(li);
};

// 未完了リストに移動
document.getElementById("add-button").addEventListener("click", onClickAdd);
document.getElementById("add-text").addEventListener("keydown", enterEvent);
