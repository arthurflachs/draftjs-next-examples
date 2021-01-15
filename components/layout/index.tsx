import { ReactNode } from "react";
import styles from './styles.module.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>{ children }</div>
  );
}