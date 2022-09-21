import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

// import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
// import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  return (
    <div>

      {/* <icon onClick={() => setLike(like + 1)}> <ThumbUpOutlinedIcon color="primary"/> {like} </icon> */}
      <IconButton color="primary" onClick={() => setLike(like + 1)} aria-label="Like"> <Badge badgeContent={like} color="primary"> 👍
  </Badge></IconButton>
      
      <IconButton color="error" onClick={() => setDisLike(disLike + 1)}aria-label="disLike"> <Badge badgeContent={disLike} color="error"> 👎
  </Badge> </IconButton>

      {/* <icon onClick={() => setDisLike(disLike + 1)}> <ThumbDownOutlinedIcon color="primary" /> {disLike} </icon> */}

    </div>
    
  );
}
