import BackArrow from "../components/BackArrow";
import LoginForm from "../components/LoginForm";

export default function page() {
  return (
    <main className="flex w-full h-screen items-center justify-center">
      <div className="p-12 flex">
        <section className="w-7/12 ">
          <img src={"/img/login.webp"} alt="login-image" className="rounded-lg h-[600px]" />
        </section>
        <section className="flex flex-col w-5/12 px-12 py-4">
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
