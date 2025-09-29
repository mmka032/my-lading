import { services } from "../../utils/services-data";
import Service from "../cards/Service";
import Container from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const Services = () => {
  return (
    <section id="projects">
      {" "}
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>Projects</Title>
          <Paragraph>
            高校に入ってからの3年間、授業や自主制作を通していろいろ学んできました。<br />
            その中から、今の私らしさが感じられる3つを選んで紹介します。
          </Paragraph>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, key) => (
            <Service
              key={key}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
