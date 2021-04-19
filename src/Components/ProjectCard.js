import React from "react";

export default class ProjectCard extends React.Component {

    render() {
        return (
            <div className="project-card">
                <div className="project-card-title">{this.props.name}</div>
                <img className="project-img" src={this.props.imgSrc} />
                <a href={this.props.ghLink}>Github</a>
                {
                    this.props.deployLink !== ""
                    ?
                    <a href={this.props.deployLink}>Deployed Link</a>
                    :
                    <></>
                }
            </div>
        )
    }

}