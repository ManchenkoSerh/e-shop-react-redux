import React from "react";

const AddComments = ({ addComments, productsInfo, comments }) => {
  let input, input2;
  function handlerSubmit(e) {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    debugger;
    addComments(input.value, input2.value, productsInfo.urlVideoId);
    input.value = "";
    input2.value = "";
  }
  console.log(comments);
  return (
    <div>
      <h2>Відгуки</h2>
      <form onSubmit={handlerSubmit}>
        <div>
          <div>
            <input ref={(node) => (input = node)} placeholder="Введите текст" />
            <input ref={(node) => (input2 = node)} placeholder="Введите name" />
          </div>
          <button type="submit">add</button>
        </div>
      </form>
      <ul>
        {comments.map((item) => {
          const { id, name, comments } = item;
          return (
            <li key={id}>
              <h3>{name}</h3>
              <br />
              <p>{comments}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default AddComments;
