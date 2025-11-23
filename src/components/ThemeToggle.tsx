import { useTheme } from '../contexts/ThemeContext';
import styles from './ThemeToggle.module.scss';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles['theme-toggle']}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <FaMoon className={styles['theme-icon']} />
      ) : (
        <FaSun className={styles['theme-icon']} />
      )}
    </button>
  );
};

export default ThemeToggle;
