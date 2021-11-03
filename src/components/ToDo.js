import React from "react";

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            newTask: "",
            list: [],
        }
    }

    updateInput(key, value) {
        //updates reacts state with a key and a value
        this.setState({ [key]: value })
    }

    addItem() {
       // creates a unique id for the new task on the list 
        const newTask = {
            id: 1 + Math.random(),
            value: this.state.newTask.slice()
        };

        //copy current list of the items (spread operator into an array)
        const list = [...this.state.list];

        // add the new task to the list 
        list.push(newTask);

        //updates the list every time the user adds a new item
        this.setState({ list, newTask: ""})

    }

    deleteItem(id) {
        const list = [...this.state.list];

        const updatedList = list.filter(item => item.id !== id )

        this.setState({ list: updatedList});
    }


    render() {
        return (
            <div className="list-container">
                <center>
                <h1>Add an Item to your to to list...</h1>
                    <br/>
                    <input type="text"
                    placeholder="Type an item here..."
                    value={this.state.newTask}
                    onChange={e => this.updateInput("newTask", e.target.value)}
                    />

                <button onClick={() => this.addItem()}> add
                </button>  
                <br/>  
            <div className="inner-list ">
               <ul>
                {this.state.list.map(item => {
                    return(
                        <li key={item.id}>
                            {item.value}
                            <button onClick={() => this.deleteItem(item.id)}>X</button>
                        </li>
                    )
                })}
               </ul> 
                </div>
            </center>
            </div>
        )
    }
}

export default ToDo; 