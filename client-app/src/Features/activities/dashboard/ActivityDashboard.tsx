import  { useEffect } from 'react';
import { Grid, } from 'semantic-ui-react'
import ActivityList from './ActivityList';
import { useStore } from '../../../App/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../App/Layout/LoadingComponents';
import ActivityFilter from './ActivityFilter';



export default observer( function ActivityDashboard(){
    const {activityStore} = useStore();
    const {loadActivities, activityRegistry} = activityStore
  
  useEffect(() => {
    if(activityRegistry.size <= 1)loadActivities();
    },[loadActivities])

  

  if (activityStore.loadingInitial) return<LoadingComponent content='Loading app...' />
    return(
        <Grid>
            <Grid.Column width='10'>
               <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
               <ActivityFilter/>
            </Grid.Column>
        </Grid>
    )

})