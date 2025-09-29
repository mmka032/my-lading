import Container from "../shared/Container";

function Numbers() {
  return (
    <section className="relative">
      <Container className="flex justify-center align-center">
        <div
          className="mx-auto lg:mx0 p-5 sm:p-2.5 sm:py-7.5 max-w-5xl rounded-3xl
          bg-box-bg border border-line border-box-border shadow-lg shadow-box-shadow
          md:divide-x divide-[#C2C2C2] grid grid-cols-2 md:grid-cols-5"
        >


          <div className="text-center px-12.5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              90+
            </h2>
            <p className="mt-2 text-heading-3">HTML/CSS</p>
          </div>

          <div className="text-center px-12.5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              65+
            </h2>
            <p className="mt-2 text-heading-3">JavaScript</p>
          </div>

          <div className="text-center px-12.5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              60+
            </h2>
            <p className="mt-2 text-heading-3">TypeScript</p>
          </div>

          <div className="text-center px-12.5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              50+
            </h2>
            <p className="mt-2 text-heading-3">React</p>
          </div>

          <div className="text-center px-12.5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1 ">
              80+
            </h2>
            <p className="mt-2 text-heading-3">Python</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Numbers;
