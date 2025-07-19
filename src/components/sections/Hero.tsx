import { Button } from "../shared/Button";
import Container from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import Button from "../shared/Button";

export const Hero = () => {
  return (
    <section className="relative pt-32 lg:pt-36">
      {" "}
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
          <span
            className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90
            skew-x-12 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600
            blur-xl opacity-60 lg:opacity-95 lg:block hidden"
          ></span>
          <span
            className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl
            bg-primary blur-xl opacity-80"
          ></span>
        </div>

        <div
          className="relative flex flex-col items-center text-center lg:text-left lg:py-8
          lg:items-startlg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
        >
          <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            CRA is dead Hello
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600
              to-violet-600 ml-2"
            >
              Developer{" "}
            </span>
          </h1>
          <Paragraph className="mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            facilis quibusdam sit quam sint, consectetur corrupti laborum
            perferendis odit repellendus quia accusantium voluptatibus. Aliquid
            aut dolorem officiis cum nobis voluptas!
          </Paragraph>
          <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
            <div className="flex sm:flex-row flex-col gap-5 w-full">
              <form
                action="#"
                className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3
                  shadow-lg shadow-box-shadow border border-box-border
                  bg-box-bg rounded-full ease-linear focus-within:bg-body
                  focus-within:border-primary"
              >
                <span className="min-w-max pr-2 border-r border-box-border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-mail-opened"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
                    <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                    <path d="M3 19l6 -6" />
                    <path d="M15 13l6 6" />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full py-3 outline-none bg-transparent"
                />
                <Button className="min-w-max text-white">
                  <span className="hidden sm:flex relative z-5">
                    Get Started
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-non lg:mx-0 mx-auto max-w-3xl">
          <img
            src="https://images.pexels.com/photos/7773731/pexels-photo-7773731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Hero image"
            width={2350}
            height={2359}
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
          />
        </div>
      </Container>
      <Number></Number>
    </section>
  );
};
