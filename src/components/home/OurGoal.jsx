import React from 'react';

const OurGoal = () => {
  const youtubeUrl = 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID'; // Replace with your video ID

  const openVideo = () => {
    window.open(youtubeUrl, '_blank');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Our Goal</h1>
      <p style={styles.description}>
        To Drive The Shift From Traditional To Tech-Enabled Aquaculture With Scalable, Smart, And Sustainable Solutions.
      </p>
      <div onClick={openVideo} style={styles.videoContainer}>
        <img
          src="YOUR_VIDEO_THUMBNAIL_URL" // Replace with your video thumbnail URL
          alt="Video Thumbnail"
          style={styles.thumbnail}
        />
        <div style={styles.playButton}>
          <span style={styles.playIcon}>▶</span>
        </div>
      </div>
      <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" style={styles.link}>
        WATCH OUR STORY ON <span style={styles.youtubeIcon}>YouTube</span>
      </a>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
  },
  title: {
    fontSize: '24px',
    color: '#007BFF',
  },
  description: {
    fontSize: '16px',
    margin: '10px 0',
  },
  videoContainer: {
    position: 'relative',
    cursor: 'pointer',
  },
  thumbnail: {
    width: '100%',
    borderRadius: '8px',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    borderRadius: '50%',
    padding: '10px',
  },
  playIcon: {
    color: 'white',
    fontSize: '24px',
  },
  link: {
    marginTop: '10px',
    color: 'black',
    textDecoration: 'none',
    fontSize: '16px',
  },
  youtubeIcon: {
    color: 'red',
    fontWeight: 'bold',
  },
};

export default OurGoal;
