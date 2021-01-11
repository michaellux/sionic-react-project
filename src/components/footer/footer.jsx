import React from 'react';
import './footer.scss';

const Footer = () =>
  <footer className="footer">
    <div className="footer__container container">
      <div className="footer__wrapper wrapper">
        <span className="footer__logo">React</span>
        <div className="footer__socialsBlock socialsBlock">
          <span className="socialsBlock__title">Присоединяйтесь к нам</span>
          <a className="socialsBlock__facebook facebook" href="">
            <img className="facebook__logo" src="" alt="facebook" />
          </a>
          <a className="socialsBlock__vk vk" href="">
            <img className="vk__logo" src="" alt="vk" />
          </a>
          <a className="socialsBlock__instagram instagram" href="">
            <img className="instagram__logo" src="" alt="instagram" />
          </a>
        </div>
        <div className="footer__appsBlock">
          <span className="appBlocks__title">Устанавливайте приложение</span>
          <a className="appsBlock__googlePlay googlePlay" href="">
            <img className="googlePlay__logo" src="" alt="googlePlay" />
          </a>
          <a className="appsBlock__appStore appStore" href="">
            <img className="appStore__logo" src="" alt="appStore" />
          </a>
        </div>
        <div className="footer__copyrightBlock copyrightBlock">
          <span className="copyrightBlock__copyright">
            (C) Sionic
          </span>
          <ul className="copyrightBlock__links links">
            <li className="links__legalInfo">
              <a href="">Правовая информация</a>
            </li>
            <li className="links__privacy">
              <a href="">Политика конфиденциальности</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>


export default Footer;