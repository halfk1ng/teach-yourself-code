import Layout from "../components/Layout/index";
import Link from "next/link";

function Topics() {
  return (
    <Layout>
      <div className="topic-view">
        <h3 className="title topic-header has-text-centered">
          <b>What do you want to learn?</b>
        </h3>
        <div className="topics-container">
          <img
            src="/static/images/html5.png"
            alt="html graphic"
            className="topic-graphic"
          />
          <img
            src="/static/images/css3.png"
            alt="css graphic"
            className="topic-graphic"
          />
          <img
            src="/static/images/js.png"
            alt="javascript graphic"
            className="topic-graphic"
          />
          <Link href="tutorials?topic=React">
            <img
              src="/static/images/react.png"
              alt="react graphic"
              className="topic-graphic"
            />
          </Link>
          <img
            src="/static/images/vue.png"
            alt="vue graphic"
            className="topic-graphic"
          />
          <img
            src="/static/images/node.png"
            alt="node graphic"
            className="topic-graphic"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Topics;
