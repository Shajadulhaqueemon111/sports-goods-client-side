/* eslint-disable @typescript-eslint/no-explicit-any */

import ShopeLocation from "./ShopeLocation";
import Teammember from "./Teammember";

const Aboute = () => {
  return (
    <div>
      <div className="container">
        <h1 className="text-2xl font-bold mt-4 text-center">Aboute Us</h1>

        <div>
          <h1 className="text-2xl font-bold"> Company Information</h1>

          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Welcome My New Company
              </div>
              <div className="collapse-content">
                <p> AquaSports Gear</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                View Comany Description
              </div>
              <div className="collapse-content">
                <p>
                  AquaSports Gear is dedicated to providing high-quality sports
                  equipment and accessories for enthusiasts around the world,
                  with a focus on swimming and soccer gear. We prioritize
                  innovation, quality, and customer satisfaction in everything
                  we do.
                </p>
              </div>
            </div>
          </div>
          <div className="join join-vertical w-full">
            <h1 className="text-2xl font-bold">Mission-Vission</h1>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">Mission</div>
              <div className="collapse-content">
                <p>
                  To inspire and empower athletes of all levels by providing
                  high-quality sports gear that enhances performance and
                  enjoyment.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">Vission</div>
              <div className="collapse-content">
                <p>
                  To be the global leader in innovative, sustainable sports
                  equipment, making active lifestyles accessible to everyone
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* team member section */}
        <Teammember></Teammember>
        <ShopeLocation></ShopeLocation>
      </div>
    </div>
  );
};

export default Aboute;
