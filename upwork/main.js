var SelectShirt = React.createClass({
      getInitialState() {
         return {selected: 's'};
      },
      selectState(event) {
       this.setState({selected : event.target.value})
      },
      render: function() {
        return (
          <div>
            <select value={this.state.selected}  onChange={this.selectState}>
              <option value="s">Small</option>
              <option value="m">Medium</option>
              <option value="l">Large</option>
              <option value="xl">Extra Large</option>
            </select>
             <div>
               <img src={"/shirt-" + this.state.selected + ".png"} />
             </div>
          </div>
        );
      }
    });


ReactDOM.render(
  <SelectShirt/>,
  document.getElementById('example')
);
