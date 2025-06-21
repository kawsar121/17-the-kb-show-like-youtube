import { useLoaderData } from "react-router-dom";
import DisplayData from "./DisplayData";

const Video = () => {
  const data = useLoaderData();
  const datas = data.category;
  console.log(datas);
  if (datas.length === 0) {
    return <h1 className="mt-48 text-5xl text-red-500">No videos Found Brooo</h1>;
  }
  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2">
        {datas.map((dataShow) => (
          <DisplayData show={dataShow}></DisplayData>
        ))}
      </div>
    </div>
  );
};

export default Video;
