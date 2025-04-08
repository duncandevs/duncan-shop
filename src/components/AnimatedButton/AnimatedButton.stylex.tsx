import * as React from 'react';
import * as stylex from '@stylexjs/stylex';
import { styles } from './styles.stylex';

type AnimatedButtonProps = {
    title:string
}
export const AnimatedButton: React.FC<AnimatedButtonProps> = ({ title }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      {...stylex.props(styles.container)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        {...stylex.props(
          styles.rect,
          styles.posOne,
          hovered ? styles.down : styles.top,
          hovered ? styles.secondary : styles.primary
        )}
      >
        <span {...stylex.props(styles.content)}>
            <p className='font-sans-regular'>{title}</p>
        </span>
      </div>
      <div
        {...stylex.props(
          styles.rect,
          styles.posTwo,
          hovered ? styles.top : styles.down,
          hovered ? styles.primary : styles.secondary
        )}
      />
    </div>
  );
};
