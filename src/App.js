import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import Portfolio from "./pages/Portfolio";
import Hero from "./components/Hero"
import "./assets/style.css"

import project from"./assets/cyberpunkAesthetic.jpg"
import perfectNight from"./assets/perfect-night-in.PNG"
import syntaxTrainer from"./assets/syntax-trainer.PNG"
import daySchedule from "./assets/daySchedulerCapture.png"
import passwordGenerator from "./assets/passwordGeneratorCapture.PNG"
import fitnessTracker from "./assets/fitness-tracker.PNG"
import wikiHive from "./assets/wiki-hive.PNG"

function App() {
  return (
    <div className="App">
      <Header />
      
      <Hero />
      <Portfolio />

      <div class ="work">
        <ProjectCard 
          title="Syntax Trainer" 
          description="A game for people learning to code to practice their syntax" 
          img={syntaxTrainer} 
          github="https://github.com/go-yasi/syntax-trainer"
          link="https://syntax-trainer.herokuapp.com/"
        />
        <ProjectCard 
          title="Perfect Night In" 
          description="An app to help you plan food, entertainment, and activities for a night in" 
          img={perfectNight} 
          github="https://github.com/go-yasi/perfect-night-in"
          link="https://go-yasi.github.io/perfect-night-in/"
        />
        <ProjectCard 
          title="Wiki Hive" 
          description="A hub where you can visit and save your favorite wikis" 
          img={wikiHive}
          github="https://github.com/Lilliemefie/WikisHub"
          link="https://remembrance-lumberjack-47538.herokuapp.com/"
        />
        <ProjectCard 
          title="Fitness Tracker" 
          description="Help you track your workouts to achieve fitness goals" 
          img={fitnessTracker} 
          github="https://github.com/joshuagalvez11/fitness-tracker"
        />
        <ProjectCard 
          title="Day Scheduler" 
          description="Help keep track of your daily activities" 
          img={daySchedule} 
          github="https://github.com/joshuagalvez11/day-planner"
        />
        <ProjectCard 
          title="Password Generator" 
          description="Generate a random password based on user selected criteria" 
          img={passwordGenerator} 
          github="https://github.com/joshuagalvez11/password-generator"
        />
      </div>
      

      <Footer />
    </div>
  );
}

export default App;
