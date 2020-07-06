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
            lBsize='2rem'
        />
        <WorkCard
            mainColor='#27014e'
            secondaryColor='white'
            lBBackground='#0b0161'
            title='Casting Desgins'
            logo="/Casting -logo (1)/vector/isolated-monochrome-white.svg"
            logoTop='57%'
            screenshot="/CdesScreen.png"
            siteText='A portfolio of my own creation to show my work to the world'
            gitLink='https://github.com/Melvin-Code/Casting-Designs'
            liveLink='https://casting-designs.com'
            ReactJs='active'
            Html="active"
            Css="active"
            JavaScript="active"
        />
        <WorkCard
            mainColor='#27014e'
            secondaryColor='white'
            lBBackground='#0b0161'
            title='Casting Desgins'
            logo="/Casting -logo (1)/vector/isolated-monochrome-white.svg"
            logoTop='57%'
            screenshot="/CdesScreen.png"
            siteText='A portfolio of my own creation to show my work to the world'
            gitLink='https://github.com/Melvin-Code/Casting-Designs'
            liveLink='https://casting-designs.com'
            ReactJs='active'
            Html="active"
            Css="active"
            JavaScript="active"
        />
        
        {console.log(this.state)}
      </div>
      </div>
    );
  }
}

export default Work;
