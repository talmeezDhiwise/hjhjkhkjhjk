import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const TextArea = React.forwardRef(
  (
    { className, name, placeholder, children, errors = [], ...restProps },
    ref
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={`${className}    common-select`}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);
TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  errors: PropTypes.array,
};
TextArea.defaultProps = {
  className: "",
  name: "",
  placeholder: "",
  errors: [],
};
export { TextArea };
