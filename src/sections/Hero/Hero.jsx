import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Shyama_patro-modified.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/SHYAMA_RESUME.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (<> 
  
    <section id="hero" className={styles.container}>
   
      <div>
      <div className={styles.colorModeContainer}>
    <img
      className={styles.colorMode}
      src={themeIcon}
      alt="Color mode icon"
      onClick={toggleTheme}
    />
  </div>
      <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Shyama Patro"
        />
      </div>
      <div className={styles.info}>
        <h1>
          SHYAMA
          <br />
          PATRO
        </h1>
        <h2>Full stack Developer</h2>
        <span>
          {/* <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a> */}
          <a href="https://github.com/Shyamapatro" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/shyama-patro-0to1/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        a skilled Full stack developer with over 2 years of experience in building scalable, user-friendly web applications using modern technologies.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
    </>
  );
}

export default Hero;
