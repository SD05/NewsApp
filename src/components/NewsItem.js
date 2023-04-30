import React from "react";

const NewsItem = (props) => {
  let { title, description, ImageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "91%", zIndex: 1 }}
        >
          {source}
        </span>
        <img
          src={
            ImageUrl
              ? ImageUrl
              : "https://www.livemint.com/lm-img/img/2023/04/24/600x338/mumbai--621x414_1682346759014.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
