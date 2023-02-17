import CircularProgress from "@suid/material/CircularProgress";

const Meme = ({ loaded, setLoaded, image, preview }) => {
  return (
    <>
      {loaded() ? null : (
        <div className="progress-indicator-height">
          <CircularProgress />
        </div>
      )}
      <img
        src={
          image().endsWith("gif")
            ? preview()[2]
            : preview().length > 3
            ? preview()[3]
            : image()
        }
        alt="meme"
        onLoad={() => setLoaded(true)}
        style={loaded() ? {} : { display: "none" }}
      />
    </>
  );
};

export default Meme;
