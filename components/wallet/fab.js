import React from "react"
import styled from "styled-components"
import { Reducer } from "../../libs/utils"

const Fab = styled.div`
  position: fixed;
  bottom: 18px;
  right: 18px;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background: #ff9800;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 0 4px rgba(0, 0, 0, .14), 0 4px 8px rgba(0, 0, 0, .28);
  z-index: 10;
`

const Amount = styled.p`
  flex: 1;
  color: white;
  font-family: Monaco, Menlo, Consolas, Lucida Console, Ubuntu Mono, courier new,
    courier, andale mono, free mono, monospace;
  text-align: center;
  padding: 0;
`

export default props =>
  <Fab onClick={() => props.toggle()}>
    <Amount>
      {props.balance && Reducer(props.balance)}
    </Amount>
  </Fab>
