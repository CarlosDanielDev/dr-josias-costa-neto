import { useEffect, useState, lazy } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { MdContentCopy, MdOutlineEmail, MdOutlineLocationOn, MdOutlinePhone } from 'react-icons/md';
import { BiLogoInstagramAlt } from 'react-icons/bi'
import * as S from './styles';

const LazyHeader = lazy(() => import('./components/header'));
const LazyMap = lazy(() => import('./components/map'));
const LazyScheduleAppointment = lazy(() => import('./components/schedule-appointment'))

export { Page }

const procedures = [
  {
    title: 'Implantes',
    icon: '',
    description: 'Substitua os seus dentes ausentes por implantes dentários ou então próteses dentárias, restaurando assim a sua capacidade de voltar a mastigar firme, falar e sorrir com muita confiança e tranquilidade.',
  },
  {
    title: 'Cirurgias',
    icon: '',
    description: 'Resolva problemas específicos e também melhore a saúde bucal com procedimentos cirúrgicos odontológicos, como extração de sisos, enxertos ósseos e cirurgias de gengiva de forma eficiente.',
  },
  {
    title: 'Próteses',
    icon: '',
    description: 'Recupere seu sorriso com próteses personalizadas que podem ser fixas ou removíveis. Projetadas para se adaptarem perfeitamente à sua boca, proporcionando muito mais conforto e segurança.',
  },
  {
    title: 'Facetas',
    icon: '',
    description: 'Tenha um novo sorriso brilhante, harmonioso e natural com facetas que são colocadas sobre os dentes para corrigirem as imperfeições estéticas dentárias como manchas, desalinhamentos e espaçamentos.',
  },
  {
    title: 'Clínico Geral',
    icon: '',
    description: 'Realize limpezas, restaurações, avaliações de rotina e tratamentos preventivos. Nosso objetivo é manter sua saúde bucal em dia e garantir um sorriso radiante e saudável ao longo da vida.',
  },
]

function Page() {
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const currentDate = new Date().getFullYear();

  function handleScroll() {
    const position = window.scrollY;

    setScrollPosition(position);
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);


  return (
    <S.Wrapper>
      <S.Main>
        <S.Banner>
          <LazyHeader scrolling={scrollPosition > 50 && true} />
          <S.BannerContent>
            <S.BannerTitle>
              Cuidando da função à estética,
              para um sorriso saudável e bonito
            </S.BannerTitle>
            <S.BannerSubtitle>
              Tratamentos odontológicos personalizados,
              focado no que você realmente precisa.
            </S.BannerSubtitle>
            <LazyScheduleAppointment />
          </S.BannerContent>
        </S.Banner>
        <S.ProceduresContainer>
          <S.ProcedureDisclaimer>
            Um sorriso saudável não apenas ilumina o seu rosto,
            mas também contribui para o seu bem-estar.
            Ofereço serviços especializados para a saúde dos
            seus dentes. Como dentista, minha missão é cuidar
            da sua saúde bucal, proporcionando resultados
            incríveis e um atendimento acolhedor.
          </S.ProcedureDisclaimer>
          <S.ProceduesTitle>Procedimentos</S.ProceduesTitle>
          <S.List>
            {procedures.map(item => (
              <S.Item key={item.title}>
                <S.ItemBadge />
                <S.ItemTitle>{item.title}</S.ItemTitle>
                <S.ItemDescription>{item.description}</S.ItemDescription>
              </S.Item>
            ))}
          </S.List>

        </S.ProceduresContainer>
        <S.Section>
          <S.CTAContainer>
            <S.CTAText>
              Agende a sua consulta agora mesmo e comece a trilhar o caminho para um sorriso radiante e saudável
            </S.CTAText>
            <LazyScheduleAppointment />
          </S.CTAContainer>
        </S.Section>
        <S.Section>
          <S.AboutContainer>
            <S.Profile />
            <S.AboutContent>
              <S.AboutContentTitle>
                Sobre mim
              </S.AboutContentTitle>
              <S.Separator />
              <S.AboutName>Dr. Josias Costa Neto</S.AboutName>
              <S.AboutBio>
                Atuo na Odontologia desde 2011, oferecendo tratamento de excelência, naquilo que é importante para o paciente restabelecer sua saúde bucal e também todo cuidado para prevenção. Com experiência em cirurgias
                de implantes, enxertos ósseos, exodontias de sisos, próteses sobre implantes. Ofereço um tratamento odontológico personalizado e acolhedor para você e sua família.
              </S.AboutBio>
            </S.AboutContent>
          </S.AboutContainer>
        </S.Section>
        <S.ContactContainer>
          <S.ContactInfoContainer>
            <S.AboutContentTitle>
              Contato
            </S.AboutContentTitle>
            <S.ContactSeparator />

            <S.AboutName>
              Dr. Josias Costa Neto
            </S.AboutName>
            <S.AboutBio>
              CRO-SP 136.595
            </S.AboutBio>

            <S.ContactInfo>
              <MdOutlinePhone color="#212121" />
              <S.ContactInfoLabel>
                Telefone
              </S.ContactInfoLabel>
            </S.ContactInfo>

            <S.ContactInfoValueButton>
              <S.ContactInfoValue>
                (11) 94982-9111
              </S.ContactInfoValue>
              <MdContentCopy />
            </S.ContactInfoValueButton>
            <S.ContactInfoValueButton>
              <S.ContactInfoValue>
                (99) 99999-9999
              </S.ContactInfoValue>
              <MdContentCopy />
            </S.ContactInfoValueButton>

            <S.ContactInfo className="above">
              <MdOutlineEmail color="#212121" />
              <S.ContactInfoLabel>
                E-mail
              </S.ContactInfoLabel>
            </S.ContactInfo>
            <S.ContactInfoValueButton>
              <S.ContactInfoValue>
                drjosiascostaneto@gmail.com
              </S.ContactInfoValue>
              <MdContentCopy />
            </S.ContactInfoValueButton>

            <S.ContactInfo className="above">
              <MdOutlineLocationOn color="#212121" />
              <S.ContactInfoLabel>
                Endereço
              </S.ContactInfoLabel>
            </S.ContactInfo>

            <S.ContactInfoValueButton>
              <S.ContactInfoValue className="address">
                Edifício São Paulo Office — 6° andar,
                sala 62. R. Frei Caneca, 33.
                São Paulo/SP. 01307-00.
              </S.ContactInfoValue>
              <MdContentCopy />
            </S.ContactInfoValueButton>
          </S.ContactInfoContainer>
          <LazyMap />
        </S.ContactContainer>
      </S.Main>
      <S.Footer>
        <S.FooterContent>
          <S.FooterMainContent>
            <S.FooterLogo />
            <LazyScheduleAppointment className="outline" />
            <S.Ul>
              <S.Li>
                <S.ArrowRight />
                <S.LiText href="#">
                  Início
                </S.LiText>
              </S.Li>
              <S.Li>
                <S.ArrowRight />
                <S.LiText href="#">
                  Procedimentos
                </S.LiText>
              </S.Li>
              <S.Li>
                <S.ArrowRight />
                <S.LiText href="#">
                  Sobre mim
                </S.LiText>
              </S.Li>
            </S.Ul>
          </S.FooterMainContent>
          <S.BottomInfoContainer>
            <S.SocialMediaContainer>
              <FaLinkedin size={32} />
              <BiLogoInstagramAlt size={32} />
            </S.SocialMediaContainer>
            <S.FooterSeparator />
            <S.Copyright>
              ©{currentDate} Dr. Josias Costa Neto. Todos os direitos reservados.
            </S.Copyright>
          </S.BottomInfoContainer>
        </S.FooterContent>
      </S.Footer>
    </S.Wrapper>
  )
}
