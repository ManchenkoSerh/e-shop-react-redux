import React from "react";
import {
    ButtonAdd,
    CommentsContainer, ExitModal,
    InputComments,
    ListComments,
    ListCommentsItem,
    Modal,
    ModalContent,
    TextArea
} from "./comments-style";
import {useForm} from "react-hook-form";

const AddComments = ({ addComments, productsInfo, comments }) => {
  let input, input2;
  //const {inputValue,handleSubmit} = useForm();
  const onSubmit=(e)=>{
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }

    addComments(input2.value, input.value, productsInfo.id);
    input.value = "";
    input2.value = "";
    Exit();
  }
  const handlerAddComments=()=>{
      let modal=document.querySelector(`.modal`)
      modal.style.display="block"
  }
    const Exit=()=>{
        let modal=document.querySelector(`.modal`)
        modal.style.display="none"
    }
  console.log(comments);
  return (
    <CommentsContainer>
      <h2>Відгуки</h2>
        <Modal  className="modal">
            <ModalContent>
                <ExitModal onClick={Exit}>&times;</ExitModal>
                <h2>Залишити коментар</h2>
                <form onSubmit={onSubmit}>
                  <div>
                    <div>
                      <input ref={node=>input=node} placeholder="Введіть ім'я" /><br/>
                      <TextArea ref={node=>input2=node} placeholder="Введите текст" />
                    </div>
                    <button type="submit">add</button>
                  </div>
                </form>
            </ModalContent>
        </Modal>

        <ButtonAdd onClick={handlerAddComments}>add comments</ButtonAdd>
      <ListComments>
        {comments.map((item) => {
          const { id, name, comments } = item;
          return (
            <ListCommentsItem key={id}>
              <h3>{name}</h3>
              <p>{comments}</p>
            </ListCommentsItem>
          );
        })}
      </ListComments>
    </CommentsContainer>
  );
};
export default AddComments;
