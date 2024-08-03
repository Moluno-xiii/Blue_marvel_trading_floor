import TextFooter from "./TextFooter";
import Logo from "./Logo";

const TextSection = () => {
  return (
    <div className="col-span-5 h-full max-w-[50vw] bg-primary font-Poppins text-white max-lg:h-[100dvh] max-lg:w-[100vw]">
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
