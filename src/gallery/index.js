import styles from "./gallery.module.css";
import { useLocation } from "react-router-dom";
import cx from "classnames";
// import bbom from "../assets/images/bbom.jpg";
import project1 from "../assets/images/1.JPG";
import project2 from "../assets/images/2.JPG";
import project3 from "../assets/images/3.JPG";
import project4 from "../assets/images/4.JPG";
import project5 from "../assets/images/5.JPG";
import project6 from "../assets/images/6.JPG";
import project7 from "../assets/images/7.JPG";
import project8 from "../assets/images/8.JPG";
import project9 from "../assets/images/9.JPG";
import project10 from "../assets/images/10.JPG";
import project11 from "../assets/images/11.JPG";
import project12 from "../assets/images/12.JPG";
import website1 from "../assets/images/web1.jpg";
import website2 from "../assets/images/web2.jpg";
import website3 from "../assets/images/web3.jpg";
import website4 from "../assets/images/web4.jpg";
import website5 from "../assets/images/web5.jpg";
import website6 from "../assets/images/web6.jpg";
import website7 from "../assets/images/web7.jpg";

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
              img={website2}
              title="คลิกเพื่อดูตัวอย่าง"
              content="website"
              link={"/example/add"}
            />
            <ImageBox
              img={website3}
              title="คลิกเพื่อดูตัวอย่าง"
              content="website"
              link={"/example/agent"}
            />
            <ImageBox
              img={website5}
              title="คลิกเพื่อดูตัวอย่าง"
              content="website"
              link={"/example/life"}
            />
            <ImageBox
              img={website6}
              title="คลิกเพื่อดูตัวอย่าง"
              content="website"
              link={"/example/friday"}
            />
            <ImageBox
              img={website7}
              title="คลิกเพื่อดูตัวอย่าง"
              content="website"
              link={"/example/backoffice"}
            />
            <ImageBox
              img={website4}
              title="คลิกเพื่อดูตัวอย่าง (CMS)"
              content="website"
              link={"/login"}
            />
            <ImageBox
              img={website1}
              title="คลิกเพื่อดูตัวอย่าง"
              content="website"
              link={"/example/kfc"}
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
              title="เครื่องจ่ายยาและแจ้งเตือนผ่าน Line Notify"
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
            <ImageBox
              img={project5}
              title="เครื่องควบคุมมอเตอร์เพื่อสั่งตัดถ่านตามจำนวน"
              content="arduino"
            />
            <ImageBox
              img={project9}
              title="ระบบควบคุมโรงเรือนผ่านมือถือ"
              content="arduino"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;
