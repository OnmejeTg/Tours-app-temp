import Title from "./Title";
import { services } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">
        {services.map((service) => (
          <article key={service.id} className="service">
            <span className="service-icon">
              <i className={`fas fa-${service.icon} fa-fw`}></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">{service.title}</h4>
              <p className="service-text">{service.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Services;
