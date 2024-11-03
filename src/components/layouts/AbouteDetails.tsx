interface AbouteProps {
  aboute: {
    name: string;
    description: string;
    missionState: string;
    visionStatement: string;
    contact?: {
      address: string;
      email: string;
      phone: string;
    };
    storeLocations?: {
      name: string;
      address: string;
      hours: string;
      phone: string;
    };
    team?: {
      role: string;
      name: string;
      bio: string;
    };
  };
}

const AbouteDetails = ({ aboute }: AbouteProps) => {
  const {
    name,
    description,
    missionState,
    visionStatement,
    contact,
    storeLocations,
    team,
  } = aboute;

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-2">{name}</h1>
      <p className="text-lg mb-4">{description}</p>

      <h2 className="text-xl font-semibold">Mission</h2>
      <p>{missionState}</p>

      <h2 className="text-xl font-semibold">Vision</h2>
      <p>{visionStatement}</p>

      <h2 className="text-xl font-semibold mt-4">Contact Information</h2>
      <p>Address: {contact?.address}</p>
      <p>Email: {contact?.email}</p>
      <p>Phone: {contact?.phone}</p>

      <h2 className="text-xl font-semibold mt-4">Store Location</h2>
      <p>Name: {storeLocations?.name}</p>
      <p>Address: {storeLocations?.address}</p>
      <p>Hours: {storeLocations?.hours}</p>
      <p>Phone: {storeLocations?.phone}</p>

      <h2 className="text-xl font-semibold mt-4">Team</h2>
      <p>Role: {team?.role}</p>
      <p>Name: {team?.name}</p>
      <p>Bio: {team?.bio}</p>
    </div>
  );
};

export default AbouteDetails;
