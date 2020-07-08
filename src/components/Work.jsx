import React, { Component } from "react";
import WorkCard from "./partials/WorkCard";


class Work extends Component {
  
  
  render() {
    
    return (
      <div className="work-page setter">
      <div className="work-card-container">
        <WorkCard
            mainColor='#4a9ea6'
            secondaryColor='#0e3d51'
            lBBackground='white'
            title='Title Leap Demo'
            logo="/logo2.png"
            screenshot="https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5e8bb18100632c000686ccda/screenshot.png"
            siteText='Demo site for a company to demostrate my design capabiltites'
            gitLink='https://github.com/Melvin-Code/TFC-project'
            liveLink='https://tfc-project.netlify.app'
            ReactJs='active'
            Html="active"
            Css="active"
            JavaScript="active"
            lBsize='2rem'
        />
        <WorkCard
            mainColor='#344559'
            secondaryColor='white'
            lBBackground='#51d4a4'
            title='Card Network'
            logo="/CardLogo.png"
            logoTop='50%'
            screenshot="/CardScreen2.png"
            widthS='50rem'
            siteText='A social media site to look for teamates and see their skills'
            gitLink='https://github.com/Cards2/Cards'
            liveLink='https://cardmatch.netlify.app'
            ReactJs='active'
            Html="active"
            Css="active"
            JavaScript="active"
            Express='active'
            Mongo='active'
            lBsize='2rem'
            iconBk='white'
        />
        {/* <WorkCard
            mainColor='#516894'
            secondaryColor='#b2aeaa'
            lBBackground='rgb(52, 111, 109)'
            title='Super Supervisor'
            logo="/SuperLogo.png"
            logoTop='50%'
            screenshot="/SuperScreen.png"
            widthS="35rem"
            siteText='A small browser base videogame made with Phaser3'
            gitLink='https://github.com/Melvin-Code/Casting-Designs'
            liveLink='https://casting-designs.com'
            Html="active"
            Css="active"
            JavaScript="active"
        /> */}
        <WorkCard
            mainColor='#282828'
            secondaryColor='#282828'
            lBBackground='#282828'
            title='Code Helper'
            logo="/CodeLogo.svg"
            logoTop='50%'
            logoWidth='5rem'
            screenshot="/CodeScreen.png"
            siteText='A place to ask all your programing questions'
            gitLink='https://github.com/Melvin-Code/Code-Helper'
            liveLink='https://the-melvin-code.com/'
            ReactJs='active'
            Html="active"
            Css="active"
            JavaScript="active"
            Heroku='active'
            lBsize='2rem'
        />
        
        
        {console.log(this.state)}
      </div>
      </div>
    );
  }
}

export default Work;
