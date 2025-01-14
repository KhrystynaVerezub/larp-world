/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { NavLink } from "react-router-dom";

import { SubMenu } from "./sub-menu";
import { Logo } from "../../components/logo";
import staticLogo from '../../assets/logo_EMPTY_BACK_2024.png';
import { NavigationModal, useResize } from "../../components";
import { rules } from "../../components/navigation/lists";
import { videoObject } from "../../links/main-video/video-objects";

import s from './main.module.css';

export function Main(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const { width } = useResize();

  const handleClick = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const renderLogo = React.useMemo(() => {
    return width < 800 ? <img src={staticLogo} alt='' width={200} style={{marginLeft:'-100px'}}/> : <Logo />
  }, [width]);

  return (
    <>    
      <div className={s.container}>
        <div className={s.buttons}>
            <NavLink className={s.mainButton} replace to='/player/registration'>Регистрация на игру</NavLink>

            <NavLink className={s.secondButton} replace to='/about'>О мероприятии</NavLink>

            <a className={s.secondButton} onClick={() => handleClick()}>Правила</a>

            <NavLink className={s.secondButton} replace to='/more'>Дополнительно</NavLink>

            {/* Включить когда раздел будет иметь смысл */}
            {/* <NavLink className={s.secondButton} replace to='/player/map-support'>Как подготовить себя</NavLink> */}
        </div>

        <div className={s.logo}>
          {renderLogo}
        </div>

        <div className={s.subMenuContainer}>
          {videoObject.map((e) => {
            return (
              <div key={e.link}>
                <SubMenu obj={e} />
              </div>
            )
          })}
        </div>
      </div>

      {isOpen && (
        <NavigationModal
          setIsOpen={setIsOpen} 
          list={rules} 
          title='Правила'
          link='/rules'
        />
      )}
    </>
  )
}