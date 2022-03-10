<div className={`tree-ring ${quizName}`} >
    
</div>
const quizzesEx = [{
    name: "7: The Enthusiast",
    description:
      "The Busy, Variety-Seeking Type: Spontaneous, Versatile, Acquisitive, and Scattered",
    image:
      "https://images.squarespace-cdn.com/content/v1/585179fe1b631b51e1837bac/1482155875727-5H6T695BP0HSOTYWTD0B/image-asset.gif?format=500w",
  },  {
    name: "4: The Individualist",
    description:
      "The Sensitive, Introspective Type:Expressive, Dramatic, Self-Absorbed, and Temperamental",
    image:"https://images.squarespace-cdn.com/content/v1/585179fe1b631b51e1837bac/1481922116625-6PLCPBH7OAJA4RU1JXX2/image-asset.gif?format=500w"
  }]

function createRings(quizzes) {
    let toRender = <div></div>
    let i = 0; 
    while(i < quizzes.length) {
        toRender = <div
        className={`tree-ring ${quizzes[i].name}`}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >{toRender}</div>
        i++;
    }
    return toRender;
}

console.log(createRings(quizzesEx))