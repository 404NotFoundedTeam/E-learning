import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { FaReply, FaStar, FaStarHalfAlt, FaThumbsUp } from 'react-icons/fa'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',

  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function Comments() {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card sx={{ border: 'none !important', boxShadow: 'none !important' }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            <img
              src="https://zone-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg"
              alt=""
            />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStarHalfAlt className="star" />
          </IconButton>
        }
        title="Jayvion Simon"
        subheader="20 Feb 2022"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FaThumbsUp />
        </IconButton>
        <span className="mr-4">Helpfull(32)</span>

        <IconButton aria-label="Reply">
          <FaReply />
        </IconButton>
        <span>Reply</span>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          sx={{
            padding: '30px',
            paddingLeft: '50px',
          }}
        >
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                <img
                  src="https://zone-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg"
                  alt=""
                />
              </Avatar>
            }
            title="Jayvion Simon"
            subheader="20 Feb 2022"
          />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook
            </Typography>
          </CardContent>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                <img
                  src="https://zone-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg"
                  alt=""
                />
              </Avatar>
            }
            title="Jayvion Simon"
            subheader="20 Feb 2022"
          />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook
            </Typography>
          </CardContent>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                <img
                  src="https://zone-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg"
                  alt=""
                />
              </Avatar>
            }
            title="Jayvion Simon"
            subheader="20 Feb 2022"
          />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook
            </Typography>
          </CardContent>
        </CardContent>
      </Collapse>
    </Card>
  )
}
