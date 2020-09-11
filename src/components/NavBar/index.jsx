import React from 'react'
import Navegacao from './styles'

export default function NavBar(){
  return (
    <>
    <Navegacao>

         <div className='list'>

<div>
    <h1>DevConnect</h1>
</div>

<div>
    <ul>
      <li>Postagens</li>
      <li>Procurar</li>
      <li>Sobre</li>
      <li>Perfil</li>
    </ul>
</div>

<div>
    <a href="/login">Login</a>
    <a href="/cadastrar">Cadastrar</a>
</div>



         </div>
    </Navegacao>

    </>
  )
}