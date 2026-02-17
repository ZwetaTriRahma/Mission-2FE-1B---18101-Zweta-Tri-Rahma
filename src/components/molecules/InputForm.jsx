import InputBox from "../atoms/InputBox";
import InputPassword from "../atoms/InputPassword";
import LabelInput from "../atoms/LabelInput";
const InputForm = ({ label, type, placeholder, id }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <LabelInput htmlFor={id}>{label}</LabelInput>
      {type === "password" ? (
        <InputPassword placeholder={placeholder} id={id} />
      ) : (
        <InputBox type={type} placeholder={placeholder} id={id} />
      )}
    </div>
  );
};

export default InputForm;
