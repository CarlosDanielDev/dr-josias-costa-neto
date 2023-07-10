import * as S from './styles'
import { FaProcedures } from "react-icons/fa";
import { lazy, Suspense, useState } from 'react';
import { MdOutlineHome, MdPersonOutline, MdOutlineEmail, MdMenu, MdClose } from "react-icons/md";

const LazyScheduleAppointment = lazy(() => import('../schedule-appointment'))

interface HeaderProps {
  scrolling?: boolean | undefined;
}

export function MainHeader({ scrolling }: HeaderProps) {
  const [active, setActive] = useState('none')

  return (
    <S.MainHeader scrolling={!!scrolling} className={active}>
      <a href="#" aria-label="ínicio">
        <S.Logo scrolling={!!scrolling} className={active} />
      </a>
      <S.Button scrolling={!!scrolling} className={active} type="button" onClick={() => setActive(active === 'none' ? 'visible' : 'none')}>
        {active === 'none' ? <MdMenu /> : <MdClose />}
        <span>
          {active === 'none' ? 'Menu' : 'Fechar'}
        </span>

      </S.Button>
      <S.NavContainer className={active}>
        <S.NavItem href="#">
          <MdOutlineHome />
          <S.NavText>
            Início
          </S.NavText>
        </S.NavItem>
        <S.NavItem href="#procedures">
          <FaProcedures />
          <S.NavText>
            Procedimentos
          </S.NavText>

        </S.NavItem>
        <S.NavItem href="#about">
          <MdPersonOutline />
          <S.NavText>
            Sobre mim
          </S.NavText>
        </S.NavItem>
        <S.NavItem href="#">
          <MdOutlineEmail />
          <S.NavText>
            Contato
          </S.NavText>
        </S.NavItem>
        <LazyScheduleAppointment />
      </S.NavContainer>
    </S.MainHeader>
  )
}

const renderLoader = () => <p>Carregando...</p>;

const Header = ({ scrolling }: { scrolling: boolean }) => (
  <Suspense fallback={renderLoader()}>
    <MainHeader scrolling={scrolling} />
  </Suspense>
)

export default Header; 
