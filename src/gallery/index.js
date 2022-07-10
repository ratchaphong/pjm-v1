import styles from "./gallery.module.css";
import cx from "classnames";
// import bbom from "../assets/images/bbom.jpg";
import project1 from "../assets/images/1.JPG";
import project2 from "../assets/images/2.JPG";
import project3 from "../assets/images/3.JPG";
import project4 from "../assets/images/4.JPG";
import project6 from "../assets/images/6.JPG";
import project7 from "../assets/images/7.JPG";
import project8 from "../assets/images/8.JPG";
import project10 from "../assets/images/10.JPG";
import project11 from "../assets/images/11.JPG";
import project12 from "../assets/images/12.JPG";
import website1 from "../assets/images/web1.jpg";
import website2 from "../assets/images/web2.jpg";
import website3 from "../assets/images/web3.jpg";
import { useLocation } from "react-router-dom";

const ImageBox = ({
  copyright,
  title = "You Title",
  content = "Catagory",
  img,
  link,
}) => {
  return (
    <div className={styles.imageBox}>
      <img src={img} className={copyright ? styles.imgBlur : {}} alt="" />
      <div className={styles.overlay}>
        <div className={styles.details}>
          <h3 className={cx(styles.title, styles.fontTh)}>
            {copyright ? "ไม่สามารถให้ข้อมูลได้" : <a href={link}>{title}</a>}
          </h3>
          <span className={cx(styles.category, styles.fontTh)}>
            {copyright
              ? "เนื่องจากลิขสิทธิ์จึงไม่สามารถแสดงเนื้อหาดังกล่าวได้"
              : content}
          </span>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const location = useLocation();
  const { state } = location;
  const { catalogue } = state;
  return (
    <div className={styles.container}>
      <div className={styles.imageGallery}>
        {catalogue === "website" && (
          <>
            <ImageBox
              img={website1}
              title="เว็บหน้าเดียว ค่ายแดง"
              content="website"
              link={"/example/kfc"}
            />
            <ImageBox
              img={website2}
              title="เว็บหลายหน้า ค่ายเขียว"
              content="website"
              link={"/example/add"}
            />
            <ImageBox
              img={website3}
              title="เว็บหลายหน้า ค่ายฟ้า"
              content="website"
              link={"/example/agent"}
            />
          </>
        )}
        {catalogue === "arduino" && (
          <>
            <ImageBox
              img={project11}
              title="เครื่องวัดจำนวนครั้งการดันพื้น"
              content="arduino"
            />
            <ImageBox
              img={project2}
              title="ระบบตรวจจับใบหน้า"
              content="arduino"
            />
            <ImageBox
              img={project3}
              title="ระบบเช็คคนเข้างาน"
              content="arduino"
            />
            <ImageBox
              img={project4}
              title="เครื่องแยกน็อตจากการประมวลผลภาพ"
              content="arduino"
            />
            <ImageBox
              img={project6}
              title="ระบบตรวจจับเส้นถนน"
              content="arduino"
            />
            <ImageBox
              img={project8}
              title="ระบบตรวจจับคนล้ม"
              content="arduino"
            />
            <ImageBox
              img={project12}
              title="ระบุตัวตนจากลายนิ้วมือ"
              content="arduino"
            />
            <ImageBox
              img={project1}
              title="เครื่องจ่ายยาและแจ้งเตือนผ่านไลน์"
              content="arduino"
            />
            <ImageBox
              img={project10}
              title="ตรวจคำตอบจากประมวลผลจากภาพ"
              content="arduino"
            />
            <ImageBox
              img={project7}
              title="วิเคราะห์ความผิดปกติใบพืชจากสี"
              content="arduino"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;
