import TextFooter from "./TextFooter";
import Logo from "./Logo";

const TextSection = () => {
  return (
    <div className="col-span-5 mx-auto flex h-full max-w-[438px] flex-col items-center bg-primary font-Poppins text-white max-lg:h-[100dvh] max-lg:w-[100vw] md:max-w-[50vw]">
      <Logo />
      <div>
        <p className="text-[40px] font-bold leading-[60px]">
          Notice : Website revamp is in progress
        </p>
        <span className="text-xl leading-8 text-lightWhite">
          We are currently revamping our website to enhance your browsing
          experience. During this time, We may be unavailable. We apologize for
          any inconveniences and appreciate your patience
        </span>
      </div>
      <TextFooter />
    </div>
  );
};

export default TextSection;
