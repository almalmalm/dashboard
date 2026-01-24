import { NavLink } from 'react-router';
import styles from './Sidebar.module.css';
import { IoHome, IoSettings } from 'react-icons/io5';
import { BsFillKanbanFill } from 'react-icons/bs';

export default function Sidebar() {
  return (
    <nav className={styles.container}>
      <NavLink to="/" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
        <IoHome />
        <span>Dashboard</span>
      </NavLink>
      <NavLink to="/kanban" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
        <BsFillKanbanFill />
        <span>Kanban</span>
      </NavLink>
      <NavLink to="/settings" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
        <IoSettings />
        <span>Settings</span>
      </NavLink>
    </nav>
  );
}
