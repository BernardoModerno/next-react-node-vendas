import { canSSRAuth } from '../../utils/canSSRAuth'
import { Wrapper } from '../../components/wrapper'

export default function Dashboard(){

   return (
     <Wrapper>
       Dashboard
     </Wrapper>
   )
  

}

export const getServerSideProps = canSSRAuth(async (ctx) => {

  return {
    props: {}
  }
}) 
