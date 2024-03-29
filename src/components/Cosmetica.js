import ButonProgramare from "./ButonProgramare";
import Logo from "./Logo";

export default function Cosmetica() {
  return (
    <>
      <Logo />
      <div className="cosmetica-page">
        <h2 className="cosmetica-text-title">
          Cosmetica & Make-Up Creative Beauty Studio Reghin :
        </h2>
        <div className="cosmetica-text">
          <h2 className="nume-persoane">Ioana : 074xxxxxxx</h2>{" "}
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
          <ButonProgramare />
        </div>
      </div>
    </>
  );
}
