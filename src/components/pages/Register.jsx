import AuthLayout from "../templates/AuthLayout";
import FormHeader from "../molecules/FormHeader";
import RegisterForm from "../organisms/RegisterForm";
const Register = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[url('/img/bg/bgRegister.png')] bg-center">
      <AuthLayout>
        <FormHeader title="Daftar" description="Selamat Datang!" />
        <RegisterForm />
      </AuthLayout>
    </div>
  );
};

export default Register;
