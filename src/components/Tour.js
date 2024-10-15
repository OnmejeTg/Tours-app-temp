const Tour = ({
  image,
  tourDate,
  tourTitle,
  tourDetails,
  tourCountry,
  days,
  price,
}) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt="" />
        <p className="tour-date">{tourDate}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{tourTitle}</h4>
        </div>
        <p>{tourDetails}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {tourCountry}
          </p>
          <p>{days} days</p>
          <p>from {price}</p>
        </div>
      </div>
    </article>
  );
};
export default Tour;
