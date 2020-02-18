const View = ({ children }) => (
  <div
    style={{
      backgroundColor: "white",
      height: "100%",
      borderRadius: "24px",
      padding: "2.75em"
    }}
    className="content-view"
  >
    {children}
  </div>
);

export default View;
