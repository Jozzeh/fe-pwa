import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { MaterialIcon } from 'material-icons/index';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  name: MaterialIcon;
};

const Icon: FC<Props> = ({ name, className, ...otherProps }) => {
  return (
    <span className={classNames('material-symbols-rounded', className)} {...otherProps}>
      {name}
    </span>
  )
}

export default Icon;