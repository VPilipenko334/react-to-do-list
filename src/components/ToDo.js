import React from "react";

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            newTask: "",
            list: [],
        }
    }

    render() {
        return (
            <div>
                <h1>Add an Item to your to to list...</h1>
                    <br/>
                    <input type="text"
                    placeholder="Type an item here..."
                    value={this.state.newTask}
                    onChange={e => this.updateInput("newTask, e.target.value")}
                    />

                <button onClick={() => this.addItem()}> add
                </button>     
            </div>
        )
    }
}

export default ToDo; 