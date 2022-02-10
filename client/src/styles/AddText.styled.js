import styled from "styled-components";
import {motion} from 'framer-motion'


export const AddTextStyled = styled(motion.div) `
  max-width: 250px;
  height: calc(100% - 150px);

  padding: 0px 15px 0 15px;
 
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

  background: rgba(236, 236, 236, 0.56);

  #chooseText {
    padding: 0;
  }

`