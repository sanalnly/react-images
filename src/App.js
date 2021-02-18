import React,{Component} from 'react';
import axios from "axios";
import './App.css';

class App extends Component {
  
	constructor(props) 
	{
		super(props);
		this.state = { images : [] };
    }
	
	
	fetchimages()
	{
		 axios({
		  method: "get",
		  url: "https://jsonplaceholder.typicode.com/photos",
		  headers: { "content-type": "application/json" },
		  data: this.state
		})
      .then(response => {
			 
		if(response.status=="200")
		{
			this.setState({images:response.data})
		}
		else
		{
			alert(response.status+"Error: somthing went wrong.");
		}
      })
      .catch(response => {
        console.log(response);
      });
	}
	
	componentDidMount()
	{
		this.fetchimages();
	}
	
	render()
	{
		let imagess=this.state.images.length ? this.state.images.slice(0, 50).map((item) => {
         return (

				  <p><img src={item.url} alt="" /></p>

	       )})
			:"loading";
	
		return (
		<div className="App">
          {imagess}
		</div>
	  );
	
	}
}

export default App;
