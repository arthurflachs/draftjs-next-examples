import StyleButton from './style-button';
import styles from './styles.module.css';
import { COLORS } from '../../../lib/color/color-utils';

export default function ColorControls() {
  const onToggle = (toggledColor: string) => {
    console.log(toggledColor);
  }
  
  return (
    <div className={styles.controls}>
      {COLORS.map(color => (
        <StyleButton
          key={color.label}
          active={true}
          label={color.label}
          style={color.style}
          onToggle={onToggle} 
       />
      ))}
    </div>
  );
}