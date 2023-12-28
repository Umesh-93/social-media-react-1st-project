const Button = (props) => {
  const { className, buttonName } = props;
  return <button className={`button ${className}`}>{buttonName}</button>;
};

const element = (
  <div className="main-container">
    <h1 className="main-heading">Social Buttons</h1>
    <div className="button-container">
      <Button className="likeButton" buttonName="Like" />
      <Button className="commentButton" buttonName="Comment" />
      <Button className="shareButton" buttonName="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
