import React, { useState } from "react";

export default function ShibaImage() {
  const [imageURL, setImageURL] = useState([]);
  const [imageVersion, setImageVersion] = useState(0);
  const webside =
    "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true";

  const fetchRandomShibaImage = async () => {
    try {
      const response = await fetch(webside);
      const json = await response.json();
      setImageURL([...imageURL, ...json]);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchRandomShibaImage();
  }, [imageVersion]);

  let buttonHandler = () => {
    setImageVersion(imageVersion + 1);
  };

  return (
    <div>
      {imageURL.map((url) => {
        return (
          <div className="container">
            <img className="shibaInu" src={url} alt="Random dog" />
          </div>
        );
      })}
      <div className="spanBtn">
        {" "}
        <button className="btnShiba" onClick={buttonHandler}>
          fetch more random Shiba inu
        </button>
      </div>
    </div>
  );
}
