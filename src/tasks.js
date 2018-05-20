
	let shortid = require('shortid');


let tasks = {


	done: [
		{id: shortid.generate(), name: 'Learn HTML/CSS basics'},
		{id: shortid.generate(), name: 'Learn JavaScript basics'},
		{id: shortid.generate(), name: 'Learn Git basics'},
		{id: shortid.generate(), name: 'Learn NodeJs basics'},
		{id: shortid.generate(), name: 'Learn React basics'},
		{id: shortid.generate(), name: 'Create ToDo list'},
		{id: shortid.generate(), name: 'Build list in React'},
		{id: shortid.generate(), name: "Add interactive'n'functional features in React"}
	],

	undone:[
		{id: shortid.generate(), name: 'Learn Redux basics'},
		{id: shortid.generate(), name: 'Edit mobile version'},
		{id: shortid.generate(), name: 'Provide Sass and Sass styles compilation'},
		{id: shortid.generate(), name: 'Provide CssTransitionGroups tasks animation'},
		{id: shortid.generate(), name: 'Make list dragable and sortable'},
		{id: shortid.generate(), name: 'Find a work'},
	],

	addFromInput(isDone, text){
		let tasks = this.undone;
		let taskObj = {
						id:shortid.generate(),
						name: text
					};
		let arr = tasks.push(taskObj);
		return arr;
	},

	remove(isDone, taskObj){
		if(isDone) {
			let tasks = this.done
			for(let task of tasks){
				if (taskObj.id === task.id){
					let arr = tasks;
					arr.splice(arr.indexOf(taskObj), 1);
					return arr;
				}
			}
		}else if(!isDone){
			let tasks = this.undone
			for(let task of tasks){
				if (taskObj.id === task.id){
					let arr = tasks;
					arr.splice(arr.indexOf(taskObj), 1);
					return arr;
				}
			}
		};
	},

	refreshTaskValue(isDone, taskObj, text){
		if(isDone) {
			
			let tasks = this.done
			let i = tasks.indexOf(taskObj);
			tasks[i].name = text;
			return tasks;

		}else if(!isDone){
			
			let tasks = this.undone;
			let i = tasks.indexOf(taskObj);
			tasks[i].name = text;
			return tasks;
			
		}

	},

	toogleStatus(isDone, taskObj, arr){
		if(isDone){

			let tasks = arr;
			let i = tasks.done.indexOf(taskObj);
			tasks.done.splice(i, 1);
			tasks.undone.push(taskObj);

			return tasks
		}else if(!isDone){

			let tasks = arr;
			let i = tasks.undone.indexOf(taskObj);
			tasks.undone.splice(i, 1);
			tasks.done.push(taskObj);
			
			return tasks
		}
	},
};


export default tasks;