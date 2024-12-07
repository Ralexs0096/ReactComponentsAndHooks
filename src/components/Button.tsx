import { ComponentProps, FC } from 'react';
import { Button as MUIButton } from '@mui/material';

type ButtonProps = {
  title: string;
  buttonType: 'base' | 'primary' | 'secondary'; // union type
};

type Props = ButtonProps & ComponentProps<'button'>;

// intersection type
const Button: FC<Props> = ({ buttonType, title, onClick }) => {
  const colorAttr = {
    base: 'info',
    primary: 'primary',
    secondary: 'secondary'
  } as const;

  return (
    <MUIButton
      onClick={onClick}
      variant="contained"
      color={colorAttr[buttonType]}
    >
      {title}
    </MUIButton>
  );
};

export default Button;
