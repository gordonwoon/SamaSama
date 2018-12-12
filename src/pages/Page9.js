import React from 'react';
import ReactBricks from "react-bricks-infinite";
import { Tile } from "./Tile";
export class Page9 extends React.Component {
  constructor(props) {
    super(props);
    this.values = {
      language: { count: 28, color: '#EC407A' },
      business: { count: 40, color: '#EF5350' },
      engineering: { count: 20, color: '#AB47BC' },
      sustainability: { count: 20, color: '#7E57C2' },
      'social sciences': { count: 4, color: '#5C6BC0' }
    }
    this.heights = [40, 80, 120, 160];
    this.elements = this.generateElements();
    this.state = {
      bricks: this.getBricks(),
      reRender: false
    }
    window.onresize = () => {
      this.setState({reRender: true});
    }
    this.defaultLoaderStyle = {
      spinnerSize: 64
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({bricks: this.getBricks()});
  }

  getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }

  generateElements = () => {
    return Object.keys(this.values).reduce((acc, key) => {
      let category = [];
      for(let i = 0; i < this.values[key].count; i++) {
        category.push({
          color: this.values[key].color,
          height: this.getRandomElement(this.heights),
        })
      }
      return [...acc, ...category];
    }, [])
  };

  loadMore = () => {
    this.elements = this.elements.concat(this.generateElements());
    
    setTimeout(() => {
      console.log("inside setTimeout");
      this.setState({bricks: this.getBricks()});
    }, 2500)
  }

  getBricks = () => {
    let results = null;
      results = this.elements.map(({key, color, height}, i) => {
        return (
          <Tile key={key} 
            className="card"
            height={height}
            color={color}
            data = {i} />
        );
      });
    return results;
  }

  render() {
    const sizes= [
      {columns: 25, gutter: 10}
    ];

    return(
      <div className="page9">
        <h1>If Migrant Workers could learn something new</h1>
        <ul>
          <li style={{color: '#EC407A'}}>Language</li>
          <li style={{color: '#EF5350'}}>Business</li>
          <li style={{color: '#AB47BC'}}>Engineering</li>
          <li style={{color: '#7E57C2'}}>Sustainability</li>
          <li style={{color: '#5C6BC0'}}>Social Sciences</li>
        </ul>
        <ReactBricks
          containerId = {"bricks-container-app"}
          ref={(ref) => this.reactBricks = ref}
          hasMoreBricks  = {false}
          reRender = {this.state.reRender}
          bricks= {this.state.bricks}
          sizes={sizes}
        />
      </div>
    );
  }
}
