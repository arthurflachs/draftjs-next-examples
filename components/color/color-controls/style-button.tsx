import { MouseEvent } from 'react';
import { colorStyleMap } from '../../../lib/color/color-utils';
import styles from './styles.module.css';

interface StyleButtonProps {
  active: boolean;
  label: string;
  style: string;
  onToggle(toggledColor: string): any;
}
export default function StyleButton({ active, label, style, onToggle }: StyleButtonProps) {
  const handleToggle = (event: MouseEvent) => {
    event.preventDefault();
    onToggle(style);
  }

  const styleProperties = active ? colorStyleMap[style] : {};

  return (
    <span
      className={styles.button}
      style={styleProperties}
      onMouseDown={handleToggle}
    >
      {label}
    </span>
  );
}