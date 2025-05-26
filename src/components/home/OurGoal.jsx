import ReactPlayer from 'react-player';
import { FaYoutube} from 'react-icons/fa6';

const OurGoal = () => {

  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Our Goal</h1>
        <p style={styles.description}>
          To Drive The Shift From Traditional To Tech-Enabled Aquaculture With Scalable, Smart, And Sustainable Solutions.
        </p>
        <a style={styles.link}>
          WATCH OUR STORY ON <FaYoutube style={styles.youtubeIcon}/>
        </a> 
      </div>
      <div  style={styles.videoContainer}>
          <ReactPlayer url="https://www.youtube.com/watch?v=cL_214QnjZI" controls />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '200px', // Adjust padding to suit layout
    backgroundColor: '#f9f9f9',
    flexWrap: 'wrap',
    boxShadow: 'inset 0 -10px 15px rgba(0, 0, 0, 0.1)', // Inner bottom shadow
  },
  textContainer: {
    flex: 1,
    maxWidth: '50%',
    paddingRight: '20px',
    minWidth: '300px',
  },
  title: {
    fontSize: '40px',
    color: '#00bcd4',
  },
  description: {
    fontSize: '20px',
    margin: '50px 0',
  },
  link:{
    fontSize: '24px',
    marginBottom: '0px', 
    fontWeight: 'bold',
  },
  videoContainer: {
    flex: 1,
    maxWidth: '50%',
    position: 'relative',
    cursor: 'pointer',
    minWidth: '300px',
  },
  youtubeIcon: {
    color: 'red',
    fontWeight: 'bold',
  },
};

export default OurGoal;
