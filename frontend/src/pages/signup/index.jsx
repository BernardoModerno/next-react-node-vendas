import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import logoImg from '../../../public/vendas.svg';
import { useState } from 'react'
import Head from 'next/head';


export default function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const [loading, setLoading] = useState(false);
  
    async function handleSignUp(event){
      event.preventDefault();
  
      if(name === '' || email === '' || password === ''){
        alert("PREENCHA TODOS OS CAMPOS")
        return;
      }
  
      setLoading(true);
  
    }

    return (
        <>
          <Head>
           <title>Sistema de vendas</title> 
          </Head>
          <Container className='container text-center dark mt-5'>
            <Form onSubmit={handleSignUp}>
              <Image src={logoImg} alt="Vendas" width="72" height="57"/>
              <div className='form-signin w-50 m-auto'>
                <Form.Group className="mb-3" controlId="nome">
                  <Form.Label>Nome Completo:</Form.Label>
                  <Form.Control type='text' placeholder='Digite seu nome completo' value={name} onChange={ (e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Senha:</Form.Label>
                  <Form.Control type="password" placeholder="Senha" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </Form.Group>
              </div>
              <button className="w-50 btn btn-lg btn-primary" type="submit" loading={loading}>Registrar-se</button>
            </Form>
          </Container>
        </>
    )
}