import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Skeleton } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
    margin: theme.spacing(2, 0),
}));

function NewsArticle() {

    return (
        <StyledCard>
            <CardActionArea>
                <Skeleton variant="rectangular" height={140} />
                <CardContent>
                    <Skeleton height={50} />
                    <Skeleton height={30} />
                </CardContent>
            </CardActionArea>
            <Box p={2}>
                <Typography variant="body2" color="text.secondary">
                    <Skeleton width={120} height={20} />
                </Typography>
                <Skeleton height={30} width={200} />
            </Box>
        </StyledCard>
    )
}

export default NewsArticle;