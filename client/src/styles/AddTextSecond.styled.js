import styled from "styled-components";
import {motion} from 'framer-motion'


export const AddTextSecondStyled = styled(motion.div) `
  max-width: 250px;
  height: calc(100% - 150px);
  padding:  0px 15px 0 15px;
  //margin:0 auto;
  display: flex;
  justify-content: start;
  gap: 1.5rem;
  align-items: start;
  flex-direction: column;
  position: absolute;
  z-index: 150;
  left: 0;
  top: 135px;
  border: 1px solid grey;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  //background: rgb(236, 236, 236);
  background-color: rgba(124,168,186,0.29);
  #chooseText {
    padding:0;
  }

`