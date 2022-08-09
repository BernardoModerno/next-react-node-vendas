import React from 'react'
import { canSSRAuth } from '../../utils/canSSRAuth'
import { useState } from 'react'
import Link from 'next/link'
import Head from "next/head"
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Wrapper } from '../../components/wrapper';
import { setupAPIClient } from '../../services/api'

export default  function Category({categorys}) {

  const [termoBusca, setTermoBusca] = useState('');
  const [categoryList, setCategoryList] = useState(categorys || []);


  async function handleRefreshCategory(categorys){
    const apiClient = setupAPIClient();

    const response = await apiClient.get('/category');
    setCategoryList(response.data);
    console.log(response.data)

  }


  return (
    <>
        <Head>
             <title>Categoria</title>
        </Head>
          <Wrapper>
              <Link href='/createCategory'>
                <Button variant='outline-success mt-4' >
                    Nova Categoria
                </Button>
              </Link>
            <InputGroup className='mt-3 mb-3'>
                <InputGroup.Text>Buscar:</InputGroup.Text>
                <FormControl
                    onChange={(e) => {setTermoBusca(e.target.value)}}
                    placeholder='Buscar por nome da categoria'
                />
            </InputGroup>
            <table className='table table-striped table-hover'>
                <thead className='table-dark mt-3'>
                    <tr>
                        <th scope='col'>NU</th>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Opções</th>
                    </tr>
                </thead>
                <tbody>
                   {categoryList.filter((categoria) => {
                    if (termoBusca == '') {
                        return categoria
                    } else if (categoria.name.toLowerCase().includes(termoBusca.toLowerCase())) {
                        return categoria
                    }
                   })
                   .map(categoria => (
                        <tr key={categoria.id}>
                            <td>{categoria.numerounico}</td>
                            <td>{categoria.name}</td>
                            <td>
                                <div>
                                    <button
                                        className='btn btn-sm btn-outline-primary me-2'
                                    >
                                        Editar
                                    </button>
                                    <button className='btn btn-sm btn-outline-danger me-2'>
                                        Excluir
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </Wrapper>
        </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    const apiClient = setupAPIClient(ctx);
  
    const response = await apiClient.get('/category');
    console.log(response.data);
  
  
    return {
      props: {
        categorys: response.data
      }
    }
  })

