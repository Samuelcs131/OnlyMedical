import Link from 'next/link';
import ContainernavBar from '../styles/components/navBar';
import {Container} from '../styles/default'
import Image from 'next/image'

const NavBar = () => {
  
    return (
         <ContainernavBar>
           
            <Container>
            <nav>
                <Image src={'/img/logo-onlymedical.svg'} width="30" height="30"></Image>
                <Link href="/"><a><span>OnlyMedical</span></a></Link>
            </nav>
            </Container>
           
          </ContainernavBar>
     );
}
 
export default NavBar;
