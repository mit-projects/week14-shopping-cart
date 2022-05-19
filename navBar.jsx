

// use of "props" to set data
function NavBar(props) {
  const list = props.menuitems;
  const { Button } = ReactBootstrap;
  const [clicks, setClicks] = React.useState([]);
  console.log(clicks);
  // each item should have an unique key

  const handleClick = (e) => {
    setClicks([...clicks, e.target.id]);
  }

  React.useEffect(() => console.log(clicks), []);

  // note that React needs to have a single Parent
  const updatedList = list.map((listItems, index) => {
    return <Button id={index} key={index} onClick={handleClick}>{listItems}</Button>;
  });
  return <ul>{updatedList}</ul>;
}
const menuItems = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root")
);
