import { Star } from "lucide-react";

type IRating = {
  value: number; // rating value (e.g., 3 for a 3-star rating)
  max?: number; // maximum rating value (default is 5 stars)
};

const Rating = ({ value, max = 5 }: IRating) => {
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: max }, (_, index) => (
        <Star
          key={index}
          width={"14"}
          height={"14"}
          className="text-primary"
          fill={index < value ? "#ff9900" : "none"}
        />
      ))}
    </div>
  );
};

export default Rating;
