import React from 'react';
import { FooterBase } from './styles';
import LogoFooter from '../../assets/img/sailingbr_logo_footer.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://pontodojazz.com.br">
        <img className="Logo" src={LogoFooter} alt="Logo Sailing BR" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
