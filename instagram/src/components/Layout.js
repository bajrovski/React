import React from "react";
import { Comments } from "./Comments"
export class Layout extends React.Component {
	render(){
		return(
			<div className="layout">
				<div className="layout_section">
					<a href="#">
						<span className="img_holder">
							<img width="50" src={require('../assets/images/avatar.jpg')}/>
						</span>
						<h2>Emil Bajrovski</h2>
					</a>
				</div>

				<div className="img_src">
					<img width="200" src={require('../assets/images/layout_img.jpg')}/>

					<div className="layout_section">
					<button>
						<i className="fa fa-heart"></i>
					</button>
					<button>
							<i className="fa fa-comment"></i>
					</button>
					</div>

					<div className="layout_section">
					<h2>420 likes</h2>
					</div>

					<div className="layout_section">
					<Comments />
					</div>
				</div>
			</div>
			);
		}
}