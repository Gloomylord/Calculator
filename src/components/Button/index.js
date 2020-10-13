import React from 'react';
import './style.scss';
import cn from 'classnames';

export const Button = ({children, className, ...rest}) => {
    return <button className={cn('calculatorButton',className)} {...rest}>
        {children}
    </button>
}
