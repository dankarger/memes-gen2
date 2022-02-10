import styled from "styled-components";
import {motion} from 'framer-motion'


export const AddTextSecondStyled = styled(motion.div) `
  width: 230px;
  height: calc(100% - 150px);
   //padding: 70px 15px 0 25px;
  padding:10px;
  //margin:0 auto;
  display: flex;
  justify-content: start;
  gap: 4rem;
  align-items: start;
  flex-direction: column;
  position: absolute;
  z-index: 150;
  left: 0;
  top: 150px;
  border: 1px solid grey;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  //background-color: rgba(124, 168, 186, 0.29);
  background: rgb(236, 236, 236);

  #chooseText {
    padding: 0;
  }

`