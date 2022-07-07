import styles from "./gallery.module.css";
import cx from "classnames";
import bbom from "../assets/images/bbom.jpg";

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
  return (
    <div className={styles.container}>
      <div className={styles.imageGallery}>
        <ImageBox
          img={bbom}
          title="เว็บหน้าเดียว ค่ายแดง"
          content="website"
          link={"/example/kfc"}
        />
        <ImageBox
          img={bbom}
          title="เว็บหลายหน้า ค่ายเขียว"
          content="website"
          link={"/example/add"}
        />
        <ImageBox
          img={bbom}
          title="เครื่องแยกน็อตจากการประมวลผลภาพ"
          content="arduino"
        />
        <ImageBox img={bbom} title="ระบบตรวจจับใบหน้า" content="arduino" />
        <ImageBox img={bbom} title="ระบบเช็คคนเข้างาน" content="arduino" />
        <ImageBox
          img={bbom}
          title="เครื่องจ่ายยาและแจ้งเตือนผ่านไลน์"
          content="arduino"
        />
        <ImageBox img={bbom} title="ระบบตรวจจับเส้นถนน" content="arduino" />
        <ImageBox
          img={bbom}
          title="เครื่องวัดจำนวนครั้งการดันพื้น"
          content="arduino"
        />
        <ImageBox img={bbom} title="ระบบตรวจจับคนล้ม" content="arduino" />
        <ImageBox img={bbom} title="ระบุตัวตนจากลายนิ้วมือ" content="arduino" />
        <ImageBox
          img={bbom}
          title="วิเคราะห์ความผิดปกติใบพืชจากสี"
          content="arduino"
        />
      </div>
    </div>
  );
};

export default Gallery;
