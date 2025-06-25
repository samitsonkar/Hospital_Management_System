import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/appointment/getmy`,
          { withCredentials: true }
        );
        setAppointments(data.appointments);
      } catch (error) {
        setAppointments([]);
      }
    };
    fetchAppointments();
  }, []);

  const handleUpdateStatus = () => {};

  return (
    <section className="dashboard page">
      <div className="banner">
        <h5>My Appointments</h5>
        <table>
          <thead>
            <tr>
              <td style={{ fontWeight: "bold" }}>Patient</td>
              <td style={{ fontWeight: "bold" }}>Date</td>
              <td style={{ fontWeight: "bold" }}>Doctor</td>
              <td style={{ fontWeight: "bold" }}>Department</td>
              <td style={{ fontWeight: "bold" }}>Status</td>
              <td style={{ fontWeight: "bold" }}>Visited</td>
            </tr>
          </thead>
          <tbody>
            {appointments && appointments.length > 0 ? (
              appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                  <td>{appointment.appointment_date.substring(0, 16)}</td>
                  <td>{`${appointment.doctor.firstName} ${appointment.doctor.lastName}`}</td>
                  <td>{appointment.department}</td>
                  <td>
                    <p
                      className={
                        appointment.status === "Pending"
                          ? "value-pending"
                          : appointment.status === "Accepted"
                          ? "value-accepted"
                          : "value-rejected"
                      }
                    >
                      {appointment.status}
                    </p>
                  </td>
                  <td>
                    {appointment.hasVisited === true ? (
                      <GoCheckCircleFill className="green" />
                    ) : (
                      <AiFillCloseCircle className="red" />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No Appointments Found!
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {}
      </div>
    </section>
  );
};

export default MyAppointment;
