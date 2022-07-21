import pic1 from "../pictures/gallery/pic1.jpeg";
import pic2 from "../pictures/gallery/pic2.jpeg";
import pic3 from "../pictures/gallery/pic3.jpeg";
import pic4 from "../pictures/gallery/pic4.jpeg";
import pic5 from "../pictures/gallery/pic5.jpeg";
import pic6 from "../pictures/gallery/pic6.jpeg";
import pic7 from "../pictures/gallery/pic7.jpeg";
import pic8 from "../pictures/gallery/pic8.jpeg";

const imageNameToTitleMap = {
  pic1: "titleForPic1",
  pic2: "titleForPic2",
  // pic1: "titleForPic1"

  // pic1: "titleForPic1"
  // pic1: "titleForPic1"
  // pic1: "titleForPic1"
  // pic1: "titleForPic1"
  // pic1: "titleForPic1"
};

export default function Gallery() {
  const pictures = [];
  for (let i = 1; i < 9; i++) {
    const key = `pic${i}`;
    pictures.push({
      title: imageNameToTitleMap[key],
      src: `~/public/images/pic1.jpeg`,
    });
  }
  return (
    <div className="gallery-container">
      <div className="gallery-item">
        <img src={pic1} />
      </div>
      <div className="gallery-item">
        <img src={pic2} />
      </div>
      <div className="gallery-item">
        <img src={pic3} />
      </div>
      <div className="gallery-item">
        <img src={pic4} />
      </div>
      <div className="gallery-item">
        <img src={pic5} />
      </div>
      <div className="gallery-item">
        <img src={pic6} />
      </div>
      <div className="gallery-item">
        <img src={pic7} />
      </div>
      <div className="gallery-item">
        <img src={pic8} />
      </div>
    </div>
  );
}
