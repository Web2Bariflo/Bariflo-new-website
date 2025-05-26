import ReactPlayer from "react-player";
import { FaYoutube } from "react-icons/fa6";

const TeamSection = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <p style={styles.description}>
          Bariflo Cybernetics, an Industry 4.0 startup, specializes in water
          body management using fluid dynamics <br/>
          We provide smart aquaculture
          equipment, robotics, and IoT-based farm automation for efficient,
          climate-resilient shrimp farming.{" "}
        </p>
      </div>
      <div style={styles.buttonGroup}>
        <h2>Get to know us</h2>
        <button  style={styles.button}>Meet our management Team</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "200px", // Adjust padding to suit layout
    backgroundColor: "#f9f9f9",
    flexWrap: "wrap",
    boxShadow: "inset 0 -10px 15px rgba(0, 0, 0, 0.1)", // Inner bottom shadow
  },
  textContainer: {
    flex: 1,
    maxWidth: "50%",
    paddingRight: "20px",
    minWidth: "300px",
  },

  description: {
    fontSize: "20px",
    margin: "50px 0",
      lineHeight: "2rem",
  },
  link: {
    fontSize: "24px",
    marginBottom: "0px",
    fontWeight: "bold",
  },
  buttonGroup: {
    flex: 1,
    maxWidth: "50%",
    paddingLeft: "200px",
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",  // Vertically center
    alignItems: "flex-start",  // Align items within column
  },
  button: {
    backgroundColor: "#00b3e6",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background 0.3s ease",
  },

};

export default TeamSection;
