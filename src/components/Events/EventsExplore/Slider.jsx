import ImageSlider from "./ImageSlider";


const App = (probs) => {
  
  const slides = [
    { url:probs.Images[0] , title: "A" },
    { url:probs.Images[1] , title: "B" },
    { url:probs.Images[2], title: "C" },
    { url:probs.Images[3], title: "D" },
    { url:probs.Images[4], title: "E" },
  ];
  const containerStyles = {
    width: "70%",
    height: "448px",
    margin: "0 auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;