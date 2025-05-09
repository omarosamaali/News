import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
const StyledCard = styled(Card)(({ theme }) => ({
    margin: theme.spacing(2, 0),
}));

function NewsArticle(props) {
    const { image, title, description, author, publishedAt, url } = props;
    return (
        <StyledCard>
            <CardActionArea>
                <Link href={url} target="_blank">
                {image && <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="News Article"
                />}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                </Link>

            </CardActionArea>
            <Box p={2}>
                <Typography variant="body2" color="text.secondary">
                    {author}
                </Typography>
                {publishedAt &&
                    <Typography variant="body2" color="text.secondary">
                        {new Date(publishedAt).toLocaleString()}
                    </Typography>
                }
            </Box>
        </StyledCard>
    )
}

export default NewsArticle;