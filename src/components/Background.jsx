import React, {useState, useEffect} from 'react';
import Sketch from 'react-p5';
import Cozette from '../fonts/CozetteVector.ttf';
import css from './Background.module.css'


let starChars = ['*', '+', ':', '*', '-', '~', '¤'];
let stars = [];

let CozetteVector;

export default (props) => {

	const setup = (p5, canvasParentRef) => {
		CozetteVector = p5.loadFont(Cozette)
		p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
		p5.textFont(CozetteVector);
		for(let i = 0; i < p5.width/50; i++) {
			stars.push(new Star(starChars[p5.floor(p5.random(0,7))], p5.random(0, p5.width), p5.random(0, p5.height), p5.floor(p5.random(1, 25)), p5))
		}	
	};

	const windowResized = (p5, canvasParentRef) => {
		while(stars.length < p5.width/50) {
			stars.push(new Star(starChars[p5.floor(p5.random(0,7))], p5.random(0, p5.width), p5.random(0, p5.height), p5.floor(p5.random(1, 25)), p5))
		};
		p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
	};

	class Star {
		constructor(ch, x, y, z, p5) {
			this.ch = ch;
			this.pos = p5.createVector(x, y);
			this.vel = p5.createVector(p5.random(-1,1), p5.random(-1,1));
			this.acc = p5.createVector(0, 0);
			this.size = 8 + z;
			this.z = z;
			this.alpha = 10*z;
			this.p5 = p5;
			this.wanderTheta = this.p5.PI/2;
			this.maxForce = 0.05;
			this.maxSpeed = this.size / 40;
		};

		wander () {
			let wanderPoint = this.vel.copy();
			wanderPoint.setMag(100);
			wanderPoint.add(this.pos);
			// fill(255,0,0);
			// circle(wanderPoint.x,wanderPoint.y,8);
			
			let wanderRadius = this.size;
			// noFill();
			// stroke(255);
			// circle(wanderPoint.x, wanderPoint.y, wanderRadius*2);
			
			let theta = this.wanderTheta + this.vel.heading();
			
			let x = wanderRadius * this.p5.cos(theta);
			let y = wanderRadius * this.p5.sin (theta);
			// fill(0,255,0);
			wanderPoint.add(x, y);
			// circle(wanderPoint.x, wanderPoint.y, 8)
			
			let steer = wanderPoint.sub(this.pos);
			steer.setMag(this.maxForce);
			this.applyForce(steer);
			
			let displaceRange = 0.5
			this.wanderTheta += this.p5.random(-displaceRange,displaceRange);
		}

		applyForce(force) {
			this.acc.add(force);
		}

		update(ch) {
			if(this.p5.frameCount % 10 == 0) {
				this.ch = ch;
			}
			this.vel.add(this.acc);
			this.vel.limit(this.maxSpeed);
			this.pos.add(this.vel);
			this.acc.set(0,0);
			if(this.pos.x >= this.p5.width + this.size) {
				this.pos.x = 5;
			} else if (this.pos.x <= 0 - this.size) {
				this.pos.x = this.p5.width;
			};

			if(this.pos.y >= this.p5.height + this.size) {
				this.pos.y = 5;
			} else if (this.pos.y <= 0 - this.size) {
				this.pos.y = this.p5.height;
			}
		}

		draw() {
			this.p5.fill(255, 255, 255, this.alpha);
			this.p5.textSize(this.size);
			this.p5.text(this.ch, this.pos.x, this.pos.y);
		}
	};

	const draw = (p5) => {
		p5.background(0);
		p5.fill(0);
		for(let i = 0; i < stars.length; i++) {
			stars[i].update(starChars[p5.floor(p5.random(0,7))]);
			stars[i].draw();
			stars[i].wander();
		}
	};
	 

	return <Sketch className={css.Background} setup={setup} windowResized={windowResized} draw={draw} />
}
