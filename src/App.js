import "./App.css";
import bgimage from "./Images/bg.png";

function App() {
  return (
    <>
      <div className="cover container-fluid d-flex flex-column justify-content-center align-items-center p-5">
        <img src={bgimage} alt="" className="img-fluid bg-img" />
        <h1 className="text-center">h2</h1>
        <h3 className="text-center">Find the best restaurants, cafés, and bars</h3>
        <div className="row w-100 justify-content-center gx-5">
          <input placeholder="Please type a location" value={""} className="col-lg-2 col-md-3 bg-white text-dark border py-3 mx-3  cl-dg"/>
          <div className="col-lg-4 col-md-6 bg-white text-dark border py-3 mx-2  cl-dg">
            <i ></i>
            <input type="text" className="d-flex w-100"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
