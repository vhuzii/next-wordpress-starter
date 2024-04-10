import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import styles from './ResponsiveMenu.module.scss';
import NavListItem from 'components/NavListItem';

const ResponsiveMenu = ({ navListItems }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="md:flex md:items-center md:justify-between">
      {/* desktop view */}
      <div
        className={`md:flex items-center hidden md:visible`}
      >
        <ul className={'md:flex ' + styles.navMenu}>
          {navListItems?.map((listItem) => {
            return <NavListItem key={listItem.id} className={styles.navSubMenu} item={listItem} />;
          })}
        </ul>
      </div>
      {/* movile view */}
      <div className="md:hidden selt-end">
        <Hamburger className={'mt-20'} toggled={isOpen} size={19} toggle={toggleMenu} />
      </div>
      <div
        className={`items-center ${
          isOpen ? "block" : "hidden"
        } mt-4 md:mt-0 absolute flex z-10`}
      >
        <ul className={'flex-column'}>
          {navListItems?.map((listItem) => {
            return <NavListItem key={listItem.id} className={styles.navSubMenu} item={listItem} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveMenu;