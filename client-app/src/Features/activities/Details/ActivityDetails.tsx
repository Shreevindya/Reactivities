import { Grid } from "semantic-ui-react";
import { useStore } from '../../../App/stores/store';
import LoadingComponent from '../../../App/Layout/LoadingComponents';
import { observer } from "mobx-react-lite";
import {  useParams } from "react-router-dom";
import { useEffect } from "react";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedSideBar from "./ActivityDetailedSideBar";


export default observer(function ActivityDetails(){
    const {activityStore}= useStore();
    const {selectedActivity: activity, loadActivity, loadingInitial }= activityStore;
    const {id} = useParams();

    useEffect(() => {
        if (id) loadActivity(id);
    },[id, loadActivity])

    if(loadingInitial || !activity) return<LoadingComponent /> ;

  
    return(
        <Grid>
            <Grid.Column width={10} >
                <ActivityDetailedHeader activity={activity} />
                <ActivityDetailedInfo  activity={activity}/>
                <ActivityDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailedSideBar/>
            </Grid.Column>

        </Grid>
    )
})