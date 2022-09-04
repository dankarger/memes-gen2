import styled from "styled-components";
import {motion} from 'framer-motion'


export const AddBackGroundColorStyled = styled(motion.div) `
 width: 200px;
  height: calc(100% - 150px);
  overflow-y: scroll;
  padding: 70px 15px 0 25px;
  display: flex;
  justify-content: start;
  gap: 4rem;
  align-items: start;
  flex-direction: column;
  position: absolute;
  z-index: 150;
  left: 0;
  top: 70px;
  border: 1px solid grey;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: rgb(236, 236, 236);
`