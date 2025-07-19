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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Temporibus optio rerum sequi unde corporis commodi sed quod dolor fugiat. 
            Non explicabo inventore vero culpa saepe adipisci ratione molestias illum. Ipsa.
          </Paragraph>
          <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
            <div className="flex sm:flex-row flex-col gap-5 w-full">
              <form action="#" className="py-1 pl-6 w-full flex gap-3 items-center 
                                          text-heading-3 shadow-lg shadow-box-shadow border
                                          border-box-border bg-box-bg rounded-full 
                                          ease-linear focus-within:bg-body 
                                          focus-within:border-primary">

              <span className="min-w-max pr-w border-r border-box-border">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-paper-heart" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.133l.941.502A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765L2 3.133zm0 2.267-.47.25A1 1 0 0 0 1 5.4v.817l1 .6zm1 3.15 3.75 2.25L8 8.917l1.25.75L13 7.417V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm11-.6 1-.6V5.4a1 1 0 0 0-.53-.882L14 4.267zM8 2.982C9.664 1.309 13.825 4.236 8 8 2.175 4.236 6.336 1.31 8 2.982m7 4.401-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734Z"/>
              </svg>
              </span>
              <input type="email" placeholder="example@gmail.com" className="w-full py-3 outline-none"/>
              <Button className="min-w-max text-white">
                <span className="hidden sm:flex relative z-[5]">Get Started</span>
              </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-1 lg:w-1/2 lg:h-auto lg:max-w-none lg:mx-auto max-w-3xl">
          <img
          src="https://images.pexels.com/photos/7773731/pexels-photo-7773731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="hero image"
          width={2300}
          height={2300}
          className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"/>
        </div>
      </Container>
      <Number></Number>
    </section>
  );
};
