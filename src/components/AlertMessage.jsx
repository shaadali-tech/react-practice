const AlertMessage = ({ type }) => {
  if (type === "success") {
    return (
      <div className="alert alert-success">
        <p>Success! Your action worked.</p>
      </div>
    );
  }

  if (type === "error") {
    return (
      <div className="alert alert-danger">
        <p>Error: Something went wrong.</p>
      </div>
    );
  }

  return null;
};

export default AlertMessage;
