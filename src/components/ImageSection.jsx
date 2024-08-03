const ImageSection = () => {
  return (
    <div className="col-span-5 md:max-w-[50vw] max-lg:w-[100vw]">
      <img
        className="h-full w-full max-lg:h-[]"
        src="/hero-image.svg"
        alt="Image of workers on their PC"
        // height={320}
        // width={3000}
      />
    </div>
  );
};

export default ImageSection;
