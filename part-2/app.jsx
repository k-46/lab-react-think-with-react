const container = document.getElementById("react-container");

class ReactContainer extends React.Component {
  render() {
    return (
      <div>
        Hello! Welcome to Kalvium
        <div>Let's rock and roll - This is babel</div>
      </div>
    );
  }
}

ReactDOM.render(<ReactContainer/>,container)