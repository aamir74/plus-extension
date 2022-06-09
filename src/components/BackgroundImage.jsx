import { useEffect, useState } from "react";
import { getCoverImage } from "../utils/getImage";

const BackgroundImage = () => {
  const [imageDetails, setImageDetails] = useState("");
  const getImage = async () => {
    const res = await getCoverImage();
    console.log(res);
    if (res?.data) {
      setImageDetails({
        url: res.data.urls.full,
        location: res.data.location.name,
      });
    }
  };

  useEffect(() => {
    getImage();
    setInterval(() => getImage(), 60000);
  }, []);

  return (
    <div>
      <div className="bg-image">
        <img
          src={
            imageDetails.url || "https://images3.alphacoders.com/102/102609.jpg"
          }
          alt="background"
        />
      </div>
      <div className="img-details">
        <h4>{imageDetails.location || "Manali, India"}</h4>
      </div>
    </div>
  );
};

export default BackgroundImage;
