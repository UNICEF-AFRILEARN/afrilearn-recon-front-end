
import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseTwoToneIcon from '@material-ui/icons/CloseTwoTone';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import EventNoteSharpIcon from '@material-ui/icons/EventNoteSharp';
import RemoveRedEyeSharpIcon from '@material-ui/icons/RemoveRedEyeSharp';



import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 730,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const VideoDetailPage = (
  {
    handleOpen, 
    handleClose, 
    videoUrls,
    classId,
    closeModal, 
    filtered_course_term,
    sortTermId
  }) => {


    let sorted_term_videos = [];
    let sorting_courses = filtered_course_term()

    const share_course_to_term = (obj, id) => {
      for(let i = 0; i < obj.length; i++){
          for(let j = 0; j < obj[i].length; j++){
            if(obj[i][j].termId === id){
              sorted_term_videos.push(obj[i][j])
            }
          }
      }
    }

    
    share_course_to_term(sorting_courses, sortTermId)
    console.log("sorted_term_videos from video ++++", sorted_term_videos)
    
    
  return (
    <div>
      <Button onClick={handleOpen}></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography 
          id="modal-modal-title" 
          variant="h6" 
          component="h2"
          onClick={closeModal}
          >
            <CloseTwoToneIcon />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mb: 2 }}>
          <video 
          src={videoUrls} 
          controls 
          autoPlay={"autoplay"} 
          poster="./Jacobandbella.jpg" 
          preLoad="auto" 
          loop
          width={900} height={450}
          >
          </video>
          <Typography >
          <EventNoteSharpIcon />
          <MicOutlinedIcon />
          <Typography>
          <ThumbUpAltOutlinedIcon />
          10 likes
          </Typography>
          <MoreVertOutlinedIcon />
          </Typography>
          <Typography>
            <RemoveRedEyeSharpIcon />
          </Typography>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default VideoDetailPage;