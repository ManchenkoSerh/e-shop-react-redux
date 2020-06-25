import React from "react";
import {ExitModal, Form, Modal, ModalContent, Submit, TextArea, TextBox} from "../comments/comments-style";
import {useTranslation} from "react-i18next";
import {ButtonOrder} from "./shopping-cart-style";


const ShoppingCartModal=()=>{
    const { t } = useTranslation();

    const onSubmit = (e) => {
        Exit();
    }

    const handlerAddComments = () => {
        let modal = document.querySelector(`.modal`);
        modal.style.display = "block";
    };
    const Exit = () => {
        let modal = document.querySelector(`.modal`);
        modal.style.display = "none";
    };
    return(
        <div>
            <ButtonOrder onClick={handlerAddComments}>{t('ToOrder')}</ButtonOrder>
        <Modal className="modal">
            <ModalContent>
                <ExitModal onClick={Exit}>&times;</ExitModal>
                <h2>{t("Your review")}</h2>
                <Form onSubmit={onSubmit}>
                    <div>
                        <div>
                            <TextBox
                                placeholder={t("Your name")}
                            />
                            <TextBox
                                placeholder={t("Your surname")}
                            />
                            <TextBox
                                placeholder={t("Your address")}
                            />
                        </div>
                        <Submit>{t("Add review")}</Submit>
                    </div>
                </Form>
            </ModalContent>
        </Modal>
        </div>
    )
}
export default ShoppingCartModal;
