import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";
import MyAppointment from "../components/MyAppointment";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | Heritage Medical Institute"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm/>
      <MyAppointment/>
    </>
  );
};

export default Appointment;
