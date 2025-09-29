import Container from "../shared/Container";
import { Title } from "../shared/Title";

const logos = ["discord", "openai", "line", "google", "chrome", "youtube"];

const Brand = () => {
  return (
    <section className="">
      <Container className="space-top-8">
        <div className="text-center max-w-3xl mx-auto">
          <Title>Favorite Websites and Services</Title>
        </div>
      </Container>
      <div className="flex justify-center flex-wrap gap-[15px] pt-4">
        {logos.map((logo, key) => (
          <div
            key={key}
            className="p-4 sm:p-5 rounded-xl bg-body border-box group"
          >
            <img
              src={`/src/assets/logos/${logo}.png`}
              width="100"
              height="60"
              alt={logo}
              className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale
              group-hover:!grayscale-0 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brand;
