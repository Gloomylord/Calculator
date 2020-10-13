import React from 'react';
import cn from 'classnames';
import './style.scss';

export const Form = React.forwardRef(({className, ...rest},ref) => {
    return <input ref={ref} className={cn('calculatorForm', className)} {...rest}/>
})
