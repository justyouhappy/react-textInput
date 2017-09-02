import React from 'react';
import '../scss/index.scss';
class TextInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            value: ''
        }
	}
	render() {
        const {placeholder, style, className} = this.props;
		return (
            <div className={`flex-text-wrap ${className}`} style={style}>
                <pre>
                    <span>{this.state.value}</span><br></br>
                </pre>
                <textarea id="content" placeholder={placeholder} onChange={(e)=> {
                    this.setState({
                        value: e.target.value
                    })
                }}></textarea>
            </div>
		);
	}
}
export default TextInput;