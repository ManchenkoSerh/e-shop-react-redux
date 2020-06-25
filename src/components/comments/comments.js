import React from "react";
import {
  ButtonAdd,
  CommentsContainer,
  CommentsTitle,
  ExitModal,
  Form,
  ImgProfile,
  InputComments,
  ListComments,
  ListCommentsItem,
  Modal,
  ModalContent,
  Submit,
  TextArea,
  TextBox,
} from "./comments-style";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import CommentsModal from "./comments-modal";

const AddComments = ({ addComments, productsInfo, comments }) => {
  const { t } = useTranslation();
  return (
    <CommentsContainer>
      <CommentsTitle>{t("Customer reviews")}</CommentsTitle>
      <CommentsModal productsInfo={productsInfo} addComments={addComments} />
      <ListComments>
        {comments.map((item) => {
          const { id, name, comments } = item;
          return (
            <ListCommentsItem key={id}>
              <ImgProfile src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSQ-rO2aSvnGQKLbWPUOcuTC0Af9ipDQ9DqlE2TdxcIw&usqp=CAU&ec=45673586" />
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
