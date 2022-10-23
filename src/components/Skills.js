import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

//skills
import android from "../assets/skillsicon/android.png";
import angular from "../assets/skillsicon/angular.png";
import c from "../assets/skillsicon/c.png";
import Ccsharp from "../assets/skillsicon/csharp.png";
import cpp from "../assets/skillsicon/C++.png";
import cSs from "../assets/skillsicon/css.png";
import html from "../assets/skillsicon/html.png";
import java from "../assets/skillsicon/java.png";
import js from "../assets/skillsicon/javascript.png";
import machinelearning from "../assets/skillsicon/machine learning.png";
import pythonn from "../assets/skillsicon/python.png";
import reactt from "../assets/skillsicon/react.png";
import springg from "../assets/skillsicon/spring.png";
import unity from "../assets/skillsicon/unity.png";



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Skills gain from previous working experience and educational projects</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={android} alt="Image" />
                                <h5>Android Studio</h5>
                            </div>
                            <div className="item">
                                <img src={angular} alt="Image" />
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={c} alt="Image" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={machinelearning} alt="Image" />
                                <h5>Machine Learning</h5>
                            </div>
                            <div className="item">
                                <img src={Ccsharp} alt="Image" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={cpp} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={cSs} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={pythonn} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={reactt} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={springg} alt="Image" />
                                <h5>Spring</h5>
                            </div>
                            <div className="item">
                                <img src={unity} alt="Image" />
                                <h5>Unity</h5>
                            </div>

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
