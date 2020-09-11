
import styled from 'styled-components'

const Navegacao = styled.div`

  background: rgba(0,0,0,0.82);
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;

  div.list{
    color: #F28705;
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  div.list h1{
    font-family: cursive
  }
  div.list ul{
    display:flex;
    font-family: cursive;
  }
  div.list li{
    font-family: cursive;
    padding:0 10px;
    font-size: 1.4rem;
  }
  div.list a {
    
    color: #F28705;
    font-family: cursive;
    margin-right:15px;
  }
  
`

export default Navegacao