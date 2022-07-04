import SvgImg from "./IconComponent/SvgImg";

export const Hero = () => {
  return (
    <div className="heroSection" id="heroSection">
      <div className="content">
        <h4 className="h4text">Hi, My name is</h4>
        <h1 className="h1text">Suman Pokharel.</h1>
        <h2 className="h2text">I design and code web applications.</h2>
        <h5 className="h5text">
          I am a full stack web developer focused on bringing beautiful ideas
          into web apps and building experiences.
        </h5>
      </div>
      {/* <div className="svgImgg"> */}
      <SvgImg height={221} className="svgImgg" />
      {/* </div> */}
    </div>
  );
};
