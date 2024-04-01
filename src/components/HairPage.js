import AppointmentButton from "./AppointmentButton";
import Logo from "./Logo";

export default function HairPage() {
  return (
    <>
      <Logo />
      <div className="hair-page">
        <h2 className="hair-text-title">
          Echipa Coaforului Creative Beauty Studio Reghin :
        </h2>
        <div className="hair-text">
          <h2 className="person-name">Man Delia : 074xxxxxxx</h2>
          <h5>
            {" "}
            Delia is the main contact for Coafor. She can be reached on her
            phone at any time of day or night. You can also email her through
            delia@com "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </h5>
          <h2 className="person-name">Eny : 074xxxxxxx</h2>{" "}
          <h5>
            {" "}
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </h5>
          <h2 className="person-name">Maria: 074xxxxxxx</h2>{" "}
          <h5>
            {" "}
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </h5>
          <AppointmentButton />
        </div>
      </div>
    </>
  );
}
