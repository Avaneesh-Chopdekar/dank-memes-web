import CircularProgress from "@suid/material/CircularProgress";

const Meme = ({ loaded, setLoaded, image }) => {
  return (
    <>
      {loaded() ? null : (
        <div className="progress-indicator-height">
          <CircularProgress />
        </div>
      )}
      <img
        src={image()}
        alt="meme"
        onLoad={() => setLoaded(true)}
        style={loaded() ? {} : { display: "none" }}
      />
    </>
  );
};

export default Meme;
