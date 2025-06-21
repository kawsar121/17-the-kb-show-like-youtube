import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const DetilsVideo = () => {
  const dVideo = useLoaderData();
  const { thumbnail, title, description, profile_name, profile_picture } =
    dVideo;
  console.log(dVideo);
  return (
    <div className="card bg-base-100 w-96 mx-auto shadow-xl mt-28">
      <figure>
        <img src={thumbnail} alt="Img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link to='/' className="badge badge-outline">
            back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetilsVideo;
<h1>helo</h1>;
