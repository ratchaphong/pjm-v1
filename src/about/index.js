import styles from "./about.module.css";
import cx from "classnames";
import { useState } from "react";

const About = () => {
  const [page, setPage] = useState(true);
  return (
    <div
      className={styles.container}
      onClick={() => {
        setPage(!page);
      }}
    >
      {page ? (
        <>
          <section className={styles.parallax}>
            <div className={cx(styles.parallaxInner, styles.forest)}>
              <h1>Forests</h1>
            </div>
          </section>
          <h3 style={{ backgroundColor: "cornsilk", padding: 24 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis
            quibusdam, ex totam aliquam provident alias culpa, sit illo, eum
            doloribus doloremque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Excepturi reprehenderit voluptatum aperiam
            pariatur numquam praesentium recusandae, ipsa at iusto eveniet,
            distinctio sunt dolore nemo veniam maiores vitae deserunt cum
            ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis minima fuga debitis quasi eius aliquid sapiente? Cumque
            blanditiis quibusdam, ex totam aliquam provident alias culpa, sit
            illo, eum doloribus doloremque. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Excepturi reprehenderit voluptatum
            aperiam pariatur numquam praesentium recusandae, ipsa at iusto
            eveniet, distinctio sunt dolore nemo veniam maiores vitae deserunt
            cum ducimus.
          </h3>
          <section className={styles.wrapper}>
            <div className={cx(styles.bgImage)}></div>
            <div className={styles.bgText}>
              <h2>Blurred Background</h2>
              <h1>I am John Doe</h1>
              <p>And I'm a Photographer</p>
            </div>
          </section>
        </>
      ) : (
        <div className={styles.parallaxWrapper}>
          <div className={cx(styles.background, styles.spring)}>
            <h2 className={styles.title}>Spring</h2>
          </div>
          <section className={styles.seasonDesc}>
            <div className={styles.descWrapper}>
              <h3 className={styles.seasonTitle}>Spring</h3>
              <p className={styles.seasonAbout}>
                Spring is one of the four conventional temperate seasons,
                following winter and preceding summer. There are various
                technical definitions of spring, but local usage of the term
                varies according to local climate, cultures and customs. When it
                is spring in the Northern Hemisphere, it is autumn in the
                Southern Hemisphere and vice versa. At the spring (or vernal)
                equinox, days and nights are approximately twelve hours long,
                with day length increasing and night length decreasing as the
                season progresses.
              </p>
            </div>
          </section>
          <div className={cx(styles.background, styles.summer)}>
            <h2 className={styles.title}>Summer</h2>
          </div>
          <section className={styles.seasonDesc}>
            <div className={styles.descWrapper}>
              <h3 className={styles.seasonTitle}>Summer</h3>
              <p className={styles.seasonAbout}>
                Summer is the hottest of the four temperate seasons, falling
                after spring and before autumn. At the summer solstice, the days
                are longest and the nights are shortest, with day-length
                decreasing as the season progresses after the solstice. The date
                of the beginning of summer varies according to climate,
                tradition, and culture. When it is summer in the Northern
                Hemisphere, it is winter in the Southern Hemisphere, and vice
                versa.
              </p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default About;
