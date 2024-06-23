import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

export default function PageWrapper(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode  ? "rgba(40,44,53, 0.5)" : "cornsilk",
    minHeight: "100vh",
  };
  return <div style={styles}>{props.children}</div>;
}