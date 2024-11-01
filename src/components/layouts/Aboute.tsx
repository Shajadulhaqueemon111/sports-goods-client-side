/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetAboutdataQuery } from "../../redux/api/api";
import AbouteDetails from "./AbouteDetails";

const Aboute = () => {
  const { data } = useGetAboutdataQuery({});
  console.log(data);
  return (
    <div>
      <div className="container">
        <h1 className="text-4xl font-bold my-10">All Products</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {data?.data.map((aboute: any) => (
            <AbouteDetails key={aboute.id} aboute={aboute} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboute;
