import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Sliderr = () => {
  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop:0,marginBottom: 5,backgroundColor:'#f7f7f7' }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
      <h5 style={{textAlign:'center',color:"#1E978C"}}> TESTIMONIAL</h5>
      <h1>What our client Says </h1>
      
      <p className='text'>See What Our Clients Comment about Our Services</p>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card img="images\sheraz.jpeg"
          name='Sheraz Liaqat'
          field='React.js Developer'
           para='I strongly believe that working in a challenging yet fun-filled environment undoubtedly brings the best out of you.It is a wonderful exposure to work along with compony. Working along with professional aspirants, helped me to perform chores comfortably and skillfully. Its marvelous when you have fun and work at the same place.'
/>
          <Card img="images\pp.jpeg" 
          name='Rashid'
          field='CEO'
          para='We have created a culture where our employees can balance both work and life, as life of an engineer is never easy. It is often said that learning is an everlasting process and this is what the idea has always been. With continuous exploration of new thoughts and techniques to gain sustainable growth and success,'/>
          <Card img="" 
          name='Hira Akram'
          field='React.js Developer'
          para=' At this conventional workplace practices are not followed, we focus on empowering our workforce by ensuring a healthy work-life balance We live by our motto; “TEAM WORK MAKES THE DREAM WORK”. We work as a team and overcome every hurdle to succeed.'
          />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img,para,name,field }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 140,
          height: 140,
          border: "1px solid lightgray",
          padding: 7,
          marginTop: 20,
          marginBottom: 20,
        }}
      />
       <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: '#1E978C' }}>{name}</span> ,
        {field}
      </p>
      <p>
       {para}
      </p>
     
    </div>
  );
};

export default Sliderr;