import ImageSection from "./components/ImageSection";
import TextSection from "./components/TextSection";
function App() {
  return (
    <div className="flex h-[100dvh] w-[100vw] flex-col md:grid md:grid-cols-10">
      <TextSection />
      <ImageSection />
    </div>
  );
}

export default App;
