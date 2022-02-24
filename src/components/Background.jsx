import React, {useState, useEffect} from 'react';
import Sketch from 'react-p5';
import * as css from './Background.module.css'


let CozetteVector;

let starChars = ['*', '+', ':', '*', '-', '~', '¤'];
let stars = [];


export default (props) => {

	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
		p5.frameRate(10);
		for(let i = 0; i < p5.width/75; i++) {
			stars.push(new Star(starChars[p5.floor(p5.random(0,7))], p5.random(0, p5.width), p5.random(0, p5.height), p5.floor(p5.random(0, 2)), p5))
		}	
	};

	const windowResized = (p5, canvasParentRef) => {
		stars = [];
		for(let i = 0; i < p5.width/75; i++) {
			stars.push(new Star(starChars[p5.floor(p5.random(0,7))], p5.random(0, p5.width), p5.random(0, p5.height), p5.floor(p5.random(0, 2)), p5))
		}	
		p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
	};

	class Star {
		constructor(ch, x, y, z, p5) {
			this.ch = ch;
			this.x = x;
			this.y = y;
			this.z = z;
			this.alpha = 0;
			this.p5 = p5;

		}
		
		update(ch) {
			this.p5.noiseSeed(this.p5.random(1000));
			this.ch = ch;
			if(this.z <= 2) {
				this.x += this.p5.random(-0.5, 0.5);
				this.y += this.p5.random(-0.5, 0.5);
			if (this.z <= 1) {
				this.x += this.p5.random(-1, 1);
				this.y += this.p5.random(-1, 1);
			} else {
				this.x += this.p5.random(-2, 2);
				this.y += this.p5.random(-2, 2);
				}
			}
		}

		draw() {
			this.p5.fill(255, 255, 255);
			this.p5.textSize(18);
			this.p5.text(this.ch, this.x, this.y);
		}
	};

	const draw = (p5) => {
		p5.background(0);
		p5.fill(0);
		for(let i = 0; i < stars.length; i++) {
			stars[i].draw();
			stars[i].update(starChars[p5.floor(p5.random(0,7))]);
		}
	};
	 

	return <Sketch className={css.Background} setup={setup} windowResized={windowResized} draw={draw} />
}
