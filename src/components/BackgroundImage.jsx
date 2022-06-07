import { useEffect, useState } from "react";
import { getCoverImage } from "../utils/getImage";

const BackgroundImage = () => {
  const [imageDetails, setImageDetails] = useState("");
  const getImage = async () => {
    const res = await getCoverImage();
    console.log(res);
    setImageDetails({
      url: res.data.urls.regular,
      location: res.data.location.name,
    });
  };

  useEffect(() => {
    // getImage();
    // const timer = setInterval(() => getImage(), 10000);
  }, []);

  return (
    <div>
      <div className="bg-image">
        <img
          src={
            imageDetails.url || "https://images3.alphacoders.com/102/102609.jpg"
          }
        />
      </div>
      <div className="img-details">
        <h3>{imageDetails.location || "Manali, India"}</h3>
      </div>
    </div>
  );
};

export default BackgroundImage;
