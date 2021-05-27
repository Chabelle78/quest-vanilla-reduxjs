const addAction = {
  type: "ADD",
};

const removeAction = {
  type: "REMOVE",
};

const addAction2 = {
  type: "ADD10",
};

const removeAction2 = {
  type: "REMOVE10",
};
const start = {
  type: "START",
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "REMOVE":
      return state - 1;
    case "ADD10":
      return state + 10;
    case "REMOVE10":
      return state - 10;
    case "START":
      return 0;
    default:
      return state;
  }
};

const { createStore } = Redux;
const store = createStore(counterReducer);

const renderStore = document.getElementById("render-store");
const render = () => {
  renderStore.innerHTML = store.getState();
};

store.subscribe(render);
render();

const add = document.getElementById("add");
add.addEventListener("click", () => {
  store.dispatch(addAction);
});

const remove = document.getElementById("remove");
remove.addEventListener("click", () => {
  store.dispatch(removeAction);
});

const add10 = document.getElementById("add-10");
add10.addEventListener("click", () => {
  store.dispatch(addAction2);
});

const remove10 = document.getElementById("remove-10");
remove10.addEventListener("click", () => {
  store.dispatch(removeAction2);
});

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  store.dispatch(start);
});
