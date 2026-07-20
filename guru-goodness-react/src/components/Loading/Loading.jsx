import loadingGif from "../../assets/images/loading.gif";

const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="loading-overlay">
      <img
        src={loadingGif}
        alt={text}
        className="loading-gif"
      />
      <p className="loading-text">{text} <span className="loading-dots"></span></p>
    </div>
  );
};

export default Loading;