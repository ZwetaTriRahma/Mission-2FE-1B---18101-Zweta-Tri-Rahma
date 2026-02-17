import AuthLayout from "../templates/AuthLayout";
import FormHeader from "../molecules/FormHeader";
import Form from "../organisms/LoginForm";
const Login = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[url('/img/bg/bgLogin.png')] bg-center">
      <AuthLayout>
        <FormHeader title="Masuk" description="Selamat Datang Kembali!" />
        <Form />
      </AuthLayout>
    </div>
  );
};

export default Login;
