import React from "react";
import NabigationBar from "../../sharedComponents/NavigationBar/NabigationBar";
import AppointmentsHeader from "../AppointmentsHeader/AppointmentsHeader";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";

const Appointments = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div>
      <NabigationBar></NabigationBar>
      <AppointmentsHeader date={date} setDate={setDate}></AppointmentsHeader>
      <AvailableAppointments date={date}></AvailableAppointments>
    </div>
  );
};

export default Appointments;
