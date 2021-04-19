import React from "react";

export default class About extends React.Component {

    render() {
        return (
            <a href={this.props.link}>
                <div className="social-card">
                    <img className="social-img" src={this.props.imgsrc}></img>
                    <p className="social-name white">{this.props.name}</p>
                </div>
            </a>
        )
    }

}