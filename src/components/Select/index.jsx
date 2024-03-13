import { StyledSelect } from "./select";

export const Select = ({ label, error, register, ...rest }) => {
  return (
    <StyledSelect>
      <label>{label}</label>
      <select {...rest} {...register} />
      {error && <p>{error}</p>}
    </StyledSelect>
  );
};
