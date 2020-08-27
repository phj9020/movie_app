import React from "react";

class Detail extends React.Component{
    componentDidMount(prop){
        // url에 movie-detail쳐서 들어가면 홈으로 리다이렉트 되게 만듦
        
        const {location, history} = this.props;
        // console.log(this.props);
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if (location.state) {
            return <span>{location.state.title}</span>
        } else {
            return null;
        }
        
    }
}

export default Detail;