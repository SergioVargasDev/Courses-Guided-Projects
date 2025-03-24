import profilePic from "./assets/profile2.jpeg";
function Card() {
  return (
    <div className="card-container">
      <img
        className="card_img"
        width="200px"
        src={profilePic}
        alt="profile picture"
      />
      <h2 className="card_title">Sergio Vargas</h2>
      <p className="card_desc">I study computer science</p>
    </div>
  );
}

export default Card;
