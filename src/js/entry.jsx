import React from 'react';
import '../scss/index.scss';
import ReactDOM from 'react-dom';
const app = document.createElement('div');
document.body.appendChild(app);
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
ReactDOM.render(<TextInput style={{width: '80%', margin: '50px auto', padding: '40px 0', border: '1px solid #c6c8ce'}}/>, app);