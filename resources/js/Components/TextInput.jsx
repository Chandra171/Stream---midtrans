import { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

forwardRef.PropTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'file']),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'error', 'primary-outline']),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placehorder: PropTypes.string,
    isError: PropTypes.bool,
}

export default forwardRef(function TextInput({ type = 'text', className, name,
    value, defaultValue, variant='primary', autoComplete, required, handleChange, placehorder,
    isError, isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            name={name}
            className={
                `rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError && "input-error"} input-${variant} ${className}`
            }
            value = {value}
            autoComplete={autoComplete}
            required={required}
            onChange={(e) => handleChange(e)}
            defaultValue={defaultValue}
            placehorder={placehorder}
            ref={input}
        />
    );
});
