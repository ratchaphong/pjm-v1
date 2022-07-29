import styled from "styled-components";

const Container = styled.section`
  font-family: "Kanit", sans-serif;
  width: 100%;
  /* background-color: #f1f1f1; */
  /* background-color: #cfcfc3; */
  background-color: #f0f0f0;
  padding: 3rem 0rem;
  /* margin-bottom: 64px; */
  .padding {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2rem;
  }
  .card {
    width: 30%;
    border: 4px solid #c0c1b7;
    border-radius: 4px;
    /* background-color: #f1f1f1; */
    background-color: #ffffff;
  }
  .card .b {
    padding: 0 2rem 2rem;
  }
  .card .b .discount {
    background-color: #f6c90e;
    padding: 16px 0;
    font-size: 24px;
    text-align: center;
  }
  .card .b .discount s {
  }
  .card .b .discount span {
    color: #f1f1f1;
    font-size: 32px;
  }
  .card .b h1 {
    margin: 12px 0;
    font-size: 32px;
    letter-spacing: 2px;
  }
  .card .b h1 span {
    color: #f6c90e;
  }
  .card .b ul {
    list-style: circle;
    padding-left: 1rem;
    font-size: 24px;
  }
  .card .b ul li {
    margin-bottom: 8px;
  }
  .card .b ul li:last-of-type {
    margin-bottom: 0px;
  }
  @media (max-width: 1366px) {
    .card {
      width: 45%;
    }
  }
  @media (max-width: 768px) {
    .card {
      flex: 1;
      width: unset;
    }
  }
`;

const Suggestion = () => {
  return (
    <Container id="suggestion">
      <div className="padding">
        <div className="card">
          {/* <div className="a">adsfafaf</div> */}
          <div className="b">
            <div className="discount">
              ราคาเริ่มต้น <s>1,990 บาท</s>
              <br />
              <span>1,490 บาท</span>
            </div>
            <h1>
              <span>Landing</span> Website
            </h1>
            <ul>
              <li>รองรับการแสดงผลทุกอุปกรณ์แบบ Responsive</li>
              <li>
                ไม่ต้องมีทักษะพื้นฐานความรู้ใด ๆ ก็สามารถปรับแต่งทั้งหมดง่าย ๆ
                ด้วยตัวเอง
              </li>
              <li>ไม่ต้องพัฒนาระบบเอง เรามีให้ครบ</li>
              <li>รองรับการทำ SEO และการตลาดออนไลน์</li>
            </ul>
          </div>
        </div>
        <div className="card">
          {/* <div className="a">adsfafaf</div> */}
          <div className="b">
            <div className="discount">
              ราคาเริ่มต้น <s>31,990 บาท</s>
              <br />
              <span>21,490 บาท</span>
            </div>
            <h1>
              <span>Informative</span> Website
            </h1>
            <ul>
              <li>รองรับการแสดงผลทุกอุปกรณ์แบบ Responsive</li>
              <li>รองรับการทำ SEO และการตลาดออนไลน์</li>
              <li>ระบบการจัดการหลังบ้าน (CMS)</li>
              <li>รองรับการแบ่งระดับการเข้าถึงของแอดมิน</li>
            </ul>
          </div>
        </div>
        <div className="card">
          {/* <div className="a">adsfafaf</div> */}
          <div className="b">
            <div className="discount">
              ราคาเริ่มต้น <s>231,990 บาท</s>
              <br />
              <span>121,490 บาท</span>
            </div>
            <h1>
              <span>E-commerce</span> Website
            </h1>
            <ul>
              <li>รองรับการแสดงผลทุกอุปกรณ์แบบ Responsive</li>
              <li>รองรับการทำ SEO และการตลาดออนไลน์</li>
              <li>ระบบการจัดการหลังบ้าน (CMS)</li>
              <li>ระบบการจัดการสมาชิก และระบบการจัดการคลังสินค้า</li>
              <li>คู่มือการใช้งานเว็บไซต์</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Suggestion;
