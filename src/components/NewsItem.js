import React from "react";

// export default class NewsItem extends Component {
const NewsItem = (props) => {
  const { title, description, imageUrl, newsUrl, author, publishedAt, source } =
    props;

  return (
    <div className="my-2">
      <div className="card" style={{ position: "relative" }}>
        <span
          className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
          style={{ left: "90%", zIndex: 1 }}
        >
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img
          src={
            !imageUrl
              ? "https://t3.ftcdn.net/jpg/04/29/42/42/360_F_429424279_dokEFwnSoJeOKpqvV1ttXum8piESsF5L.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <p className="card-text">
            <small>
              By {!author ? "Unknown" : author} on{" "}
              {new Date(publishedAt).toUTCString()}
            </small>
          </p>

          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary mt-auto"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
