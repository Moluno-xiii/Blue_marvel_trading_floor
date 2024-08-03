import ImageSection from "./components/ImageSection";
import TextSection from "./components/TextSection";
function App() {
  return (
    <div className="flex flex-col max-md:flex-col-reverse md:grid-cols-10 md:grid md:h-[100dvh] md:w-[100vw]">
      <TextSection />
      <ImageSection />
    </div>
  );
}

export default App;
