import React from "react";
import {
  ButtonAdd,
  CommentsContainer,
  ExitModal,
  InputComments,
  ListComments,
  ListCommentsItem,
  Modal,
  ModalContent,
  TextArea,
} from "./comments-style";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const AddComments = ({ addComments, productsInfo, comments }) => {
  let input, input2;
  //const {inputValue,handleSubmit} = useForm();
  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }

    addComments(input2.value, input.value, productsInfo.id);
    input.value = "";
    input2.value = "";
    Exit();
  };
  const handlerAddComments = () => {
    let modal = document.querySelector(`.modal`);
    modal.style.display = "block";
  };
  const Exit = () => {
    let modal = document.querySelector(`.modal`);
    modal.style.display = "none";
  };
  const { t } = useTranslation();
  return (
    <CommentsContainer>
      <h2>{t("Customer reviews")}</h2>
      <Modal className="modal">
        <ModalContent>
          <ExitModal onClick={Exit}>&times;</ExitModal>
          <h2>{t("Your review")}</h2>
          <form onSubmit={onSubmit}>
            <div>
              <div>
                <input
                  ref={(node) => (input = node)}
                  placeholder={t("Your name")}
                />
                <br />
                <TextArea
                  ref={(node) => (input2 = node)}
                  placeholder={t("Your review")}
                />
              </div>
              <button type="submit">{t("Add review")}</button>
            </div>
          </form>
        </ModalContent>
      </Modal>

      <ButtonAdd onClick={handlerAddComments}>{t("Add review")}</ButtonAdd>
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