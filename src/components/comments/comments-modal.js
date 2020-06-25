import React from "react";
import {
  ButtonAdd,
  CommentsContainer,
  ExitModal,
  Form,
  Modal,
  ModalContent,
  Submit,
  TextArea,
  TextBox,
} from "./comments-style";
import { useTranslation } from "react-i18next";

const CommentsModal = ({ addComments, productsInfo }) => {
  const { t } = useTranslation();
  let input, input2;
  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim() || !input2.value.trim()) {
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
    input.value = "";
    input2.value = "";
  };
  return (
    <div>
      <Modal className="modal">
        <ModalContent>
          <ExitModal onClick={Exit}>&times;</ExitModal>
          <h2>{t("Your review")}</h2>
          <Form onSubmit={onSubmit}>
            <div>
              <div>
                <TextBox
                  ref={(node) => (input = node)}
                  placeholder={t("Your name")}
                />
                <br />
                <TextArea
                  ref={(node) => (input2 = node)}
                  placeholder={t("Your review")}
                />
              </div>
              <Submit>{t("Add review")}</Submit>
            </div>
          </Form>
        </ModalContent>
      </Modal>
      <ButtonAdd onClick={handlerAddComments}>{t("Add review")}</ButtonAdd>
    </div>
  );
};
export default CommentsModal;
