import TextFooter from "./TextFooter";
import Logo from "./Logo";

const TextSection = () => {
  return (
    <div className="h-full bg-primary font-Poppins text-white col-span-5">
      <Logo />
      <p>Notice : Website revamp is in progress</p>
      <span>
        We are currently revamping our website to enhance your browsing
        experience. During this time, We may be unavailable. We apologize for
        any inconveniences and appreciate your patience
      </span>
      <TextFooter />
    </div>
  );
};

export default TextSection;
