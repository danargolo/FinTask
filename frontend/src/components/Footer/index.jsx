import * as Styled from './styles';

import linkedin from '../../public/footer/linkedin.png';
import github from '../../public/footer/github.png';

export const Footer = () => {
  return (
    <Styled.Footer >
        <p>©2024 - Desenvolvido por DanArgolo.Dev</p>
        <div >
          <a href='https://github.com/danargolo' target='_blank'>
            <img src={github} alt='Github icon' width={24} height={24}/>
          </a>
          <a href='https://www.linkedin.com/in/danargolo/' target='_blank'>
            <img src={linkedin} alt='Linkedin icon' width={24} height={24}/>
          </a>
        </div>
    </Styled.Footer>
  );
};
