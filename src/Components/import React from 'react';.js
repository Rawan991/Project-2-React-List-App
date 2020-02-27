import React from 'react';
import ReactDOM from 'react-dom';
class Form extends React.Component {
constructor(props) {
super(props)
}
// A delete-list and a list of children.
state = {
toDel: [],
checks: []
}
// Method called when checkbox is clicked.
recId = (idToDel) => {
// Grab the checkbox that was clicked.
let checker = document.getElementById(idToDel);
if (checker.checked) {
// Add the id to delete-list.
this.state.toDel.push(idToDel);
}
else {
// Remove the id from delete-list.
let index = this.state.toDel.indexOf(idToDel);
this.state.toDel.splice(index, 1);
}
}
// Method called when delete button is clicked.
del = () => {
// Loop through items to delete.
for (var i = 0; i < this.state.toDel.length; i++) {
// Convert id from string back to integer.
let index = parseInt(this.state.toDel[i])
// Replace the item to delete with empty string, so that every
// other element remains in place.
this.state.checks[index] = '';
}
// Re-render the component by calling setState.
this.setState({
toDel: [],
checks: this.state.checks
});
}
// Loading the component with child checkboxes. Children are handed
// parent methods as event handlers.
componentWillMount = () => {
for (var i = 0; i < 5; i++) {
this.state.checks.push(
<p key={i}>
<Check id={i.toString()} record={this.recId} />{i.toString()}
</p>
)
}
}
render () {
return (
<div>
{this.state.checks}
<button onClick={this.del}>Delete</button>
</div>
);
}
}
class Check extends React.Component {
constructor(props) {
super(props)
}
state = {}
render = () => {
// Call the parent method on click with proper context and pass
// id of this specific child back up to parent.
return (
<input type='checkbox' 
onClick={this.props.record.bind(null, this.props.id)} 
id={this.props.id} />
);
}
}
// Render component.
ReactDOM.render(
<Form />,
document.getElementById('test-container')
);