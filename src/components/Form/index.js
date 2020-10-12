import React from 'react';
import cn from 'classnames';
import './style.scss';

export const Form = ({className, ...rest}) => {
    return <input className={cn('calculatorForm', className)} {...rest}/>
}
