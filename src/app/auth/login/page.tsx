import BackArrow from "../components/BackArrow";
import LoginForm from "../components/LoginForm";

export default function page() {
  return (
    <main className="flex w-full  h-screen md:items-center justify-center">
      <div className="md:p-12 px-4 w-10/12  lg:w-full flex">
        <section className="w-7/12 hidden  lg:block">
          <img src={"/img/login2.webp"} alt="login-image" className="rounded-lg h-[600px]" />
        </section>
        <section className="flex flex-col w-full  py-4 lg:w-5/12 md:px-12 md:py-4">
          <BackArrow />
          <div className="text-main">
            <h2 className="text-4xl font-semibold mb-4">Bienvenido!</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              ullam voluptates similique, p rovident quae ad?
            </p>
          </div>
          <LoginForm />
        </section>
      </div>
    </main>
  );
}
