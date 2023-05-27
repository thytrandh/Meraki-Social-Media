const ItemMessageRight = ({ imgUser, time, message }) => {
  time = time.slice(14, 19);
  return (
    <div className="item-message message-right">
      <div className="message">
        <p className="mb-0 message-content">{message}</p>
      </div>
      <div className="user-info">
        <div className="img-user">
          <img src={imgUser} alt="" />
        </div>
        <p className="mb-0 time">{time}</p>
      </div>
    </div>
  );
};

export default ItemMessageRight;
