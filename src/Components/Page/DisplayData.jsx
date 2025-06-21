import { Link } from "react-router-dom";

const DisplayData = ({ show }) => {
    const {title, description, thumbnail} =show
  return (
    <div className="card bg-base-100 w-96 mx-auto shadow-xl">
      <figure>
        <img
          src={thumbnail}
          alt="Img"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
        </h2>
        <div className="card-actions justify-end">
          <Link to={`/show/${show.video_id}`} className="badge badge-outline">View Detils</Link>
        </div>
      </div>
    </div>
  );
};

export default DisplayData;
