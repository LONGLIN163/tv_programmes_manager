import React,{useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import {Form} from './';
import { useProgramContext } from '../ProgramStore';

const Preview = () => {
    const {
        editMode,
        programme,
        onEditForm
    } = useProgramContext()

    //console.log("programme in preview-----",programme)

    const isEmpty= Object.keys(programme).length === 0

    return ( 
        <>
            <Typography 
                variant={"h4" }
                style={{marginTop:20}}
                color="secondary"
                gutterBottom
            >
                {
                editMode
                ? 'Edit View'
                : 'Preview'
                }
            </Typography>

            {
                isEmpty
                ? <div>...</div>
                : <Card>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="400"
                        image={programme.imageUrl}
                        />
                        <CardContent>
                        <Typography variant="h5" component="h2">
                            {programme.title}
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p">
                            {programme.synopsis}
                        </Typography>

                        <Typography variant="subtitle1" component="h2">
                           Duration:
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {programme.duration}
                        </Typography>

                        <Typography variant="subtitle1" component="h2">
                           Episode/Chapter:
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {programme.episode} / {programme.chapter}
                        </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>

            }


            {
                editMode
                ? <Form 
                    onSubmit={onEditForm}
                    programme={programme}
                />
                : <Typography variant={"subtitle2" }>
                    {isEmpty ? "please select an item!" : '' }
                </Typography>
            }
        </>
     );
}
 
export default Preview;