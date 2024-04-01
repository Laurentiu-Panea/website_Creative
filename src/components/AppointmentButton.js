import { Link } from "react-router-dom";

export default function AppointmentButton() {
  return (
    <button className="appointment_button">
      <Link to="/AppointmentForm">FA O PROGRAMARE!</Link>
    </button>
  );
}
