import React from "react";
import styled from "styled-components";
import {typeScale} from "../utils";
import {CloseIcon, Illustrations} from "../assets";
import {PrimaryButton} from "./Buttons";
import {useSpring, animated, config} from "react-spring";

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0,0,0, .2);
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 2px;
`
const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`
const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
`
const CloseIconButton =styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`

export const SignUpModal = ({showModal, setShowModal}: {showModal: boolean, setShowModal: () => void}) => {

    const animation = useSpring({
        opacity: showModal ? 1: 0,
        transform: showModal ? 'translateY(0)' : 'translateY(-200%)',
        config: config.slow
    })

    return (
        <animated.div style={animation}>
            <ModalWrapper>
                <img
                    src={Illustrations.SignUp}
                    alt="Sign up for your account!"
                    aria-hidden={true}
                />
                <SignUpHeader>Sign Up</SignUpHeader>
                <SignUpText>Sign up today to get access!</SignUpText>
                <PrimaryButton>Sign Up</PrimaryButton>
                <CloseIconButton aria-label={"Close button"}>
                    <CloseIcon />
                </CloseIconButton>
            </ModalWrapper>
        </animated.div>

    )
}