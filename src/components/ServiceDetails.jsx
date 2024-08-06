import React, { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "./Modal";
import axios from "axios";
import { ServiceContext } from "../context/ServicesContext";

const ServiceDetails = () => {
  const { services, setServices } = useContext(ServiceContext);
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 110,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });

    const fetchData = async () => {
      try {
        const response = await axios.get("/data.json");
        setServices(response.data.services);
      } catch (error) {
        console.error("error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-4 justify-center items-start w-full md:px-[120px] px-10 py-10 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex flex-col justify-center items-center text-center gap-4"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="size-16 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
            <h1 className="text-2xl text-black font-semibold">
              {service.title}
            </h1>
            <button
              onClick={() => {
                setSelectedService(service);
                setShowModal(true);
              }}
              className="px-10 py-3 bg-black text-white text-md font-semibold rounded-xl hover:bg-themeyellow hover:text-black cursor-pointer"
            >
              MORE
            </button>
          </div>
        ))}
      </section>
      <Modal showModal={showModal} onClose={() => setShowModal(false)} service={selectedService} />
    </div>
  );
};

export default ServiceDetails;
