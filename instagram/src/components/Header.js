import React from "react";
export class Header extends React.Component {
	render(){
		return(
		<header>
			<div className="header_item">
				<img width="150" src={require('../assets/images/logo.png')}/>
			</div>

			<div className="header_item">
				<input type="text" placeholder="Search..." />
			</div>

			<div className="header_item">
				<ul>
					<li>
						<button>
							<i className="fa fa-compass"></i>
						</button>
					</li>
					<li>
						<button>
							<i className="fa fa-heart"></i>
						</button>
					</li>
					<li>
						<button>
							<i className="fa fa-user"></i>
						</button>
					</li>
				</ul>
			</div>
		</header>


			);
	}
}