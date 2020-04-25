import Layout from "../components/Layout/index";

function Roadmap() {
  return (
    <Layout>
      <div className="roadmap-container">
        <h3 className="title">Roadmap</h3>
        <p className="subtitle">
          A list of update releases and planned improvements
        </p>
        <div className="roadmap-section">
          <h2 className="title is-size-5 roadmap-header">Recent Updates</h2>
          <ul>
            <li>none yet</li>
          </ul>
        </div>

        <div className="roadmap-section">
          <h2 className="title is-size-5 roadmap-header">Planned Features</h2>
          <ul>
            <li>Save user progress for each tutorial</li>
            <li>
              <s>User can add note for specific video</s>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Roadmap;
