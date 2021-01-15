import StyleButton from './style-button';
import styles from './styles.module.css';

export default function ColorControls() {
  const onToggle = (toggledColor: string) => {
    console.log(toggledColor);
  }
  
  return (
    <div className={styles.controls}>
      <StyleButton active={true} label="Blue" style="blue" onToggle={onToggle} />
      <StyleButton active={false} label="Red" style="red" onToggle={onToggle} />
    </div>
  );
}