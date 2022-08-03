import { Link } from "react-router-dom";
import styled from "styled-components";
import website2 from "../assets/images/web2.jpg";
import website3 from "../assets/images/web3.jpg";
import website4 from "../assets/images/web5.jpg";
import website5 from "../assets/images/web6.jpg";
import website6 from "../assets/images/web7.jpg";

const Container = styled.section`
  font-family: "Kanit", sans-serif;
  width: 100%;
  background-color: #ffffff;
  padding: 3rem 0rem;
  margin-bottom: 64px;
  .padding {
    width: 80%;
    margin: 0 auto;
  }
  .padding h1 {
    margin-bottom: 16px;
    letter-spacing: 1px;
    font-size: 32px;
    text-align: center;
  }
  .padding p {
    margin-bottom: 32px;
    font-size: 24px;
    /* text-align: left; */
    text-align: center;
    color: #afb0a5;
  }
  .padding p span {
    font-size: 36px;
    color: #f6c90e;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .padding .review {
    display: flex;
    flex-wrap: wrap;
    /* overflow: hidden; */
    /* justify-content: space-between; */
    justify-content: center;
    gap: 36px;
  }
  .padding .review .image {
    width: 45%;
    /* width: 300px;
    height: 200px; */
  }
  .padding .review .image img {
    display: block;
    width: 100%;
    /* height: 100%; */
    object-fit: cover;
    transition: all 0.5s ease-out;
  }
  .padding .review .image img:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    .padding .review .image {
      width: 100%;
    }
  }
`;

const Review = () => {
  return (
    <Container id="review">
      <div className="padding">
        <h1>ผลงานของเรา</h1>
        <p>
          <span>projectman</span>{" "}
          ทีมงานพัฒนาเว็บไซต์และระบบควบคุมไมโครคอนโทลเลอร์
          ตามความพึงพอใจของลูกค้า
          รวมตัวเบื้องหลังบุคลากรที่ทำงานเฉพาะทางให้กับบริษัทชั้นนำ
        </p>
        <div className="review">
          <div className="image">
            <Link to="/example/add">
              <img src={website2} alt="" />
            </Link>
          </div>
          <div className="image">
            <Link to="/example/agent">
              <img src={website3} alt="" />
            </Link>
          </div>
          <div className="image">
            <Link to="/example/life">
              <img src={website4} alt="" />
            </Link>
          </div>
          <div className="image">
            <Link to="/example/friday">
              <img src={website5} alt="" />
            </Link>
          </div>
          <div className="image">
            <Link to="/example/backoffice">
              <img src={website6} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Review;
