var data = [{
        todo: "Vacuum Room",
        isDone: false
    },
    {
        todo: "Wash Dishes",
        isDone: false
    }
]

var ToDo = React.createClass({
	render: function(){
		return(
			<div> 
			  <SubmitTask />
			  <ToDoList data = {this.props.data} />
			  <DoneList />
			</div>
		);
	}
});

var SubmitTask = React.createClass({
	render: function(){
		return(
			<div className = "input-group col-xs-5" >
			  <input type = "text" className = "form-control" placeholder = "Enter Task"> </input>
			  <span className = "input-group-btn">
			  	<button className = "btn btn-primary pull-right">Add Task</button>
			  </span>
			</div>
		);
	}
});

var ToDoList = React.createClass({
    //getInitialState: function(){
    //    return{
    //        data: []
    //    }
    //},
	render: function(){
		return(
			<div>
			  <h1> Things To Do </h1>
                {this.props.data[0].todo}
			</div>
		);
	}
});

var DoneList = React.createClass({
	render: function(){
		return(
			<div>
			  <h1> Things Done! </h1>
			</div>
		)
	}
})

ReactDOM.render(
	< ToDo data = {data}/>,
	document.getElementById("container")
);