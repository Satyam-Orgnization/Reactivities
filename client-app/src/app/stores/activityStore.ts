import { makeAutoObservable, runInAction } from "mobx";
import { Activity } from "../models/Activity";
import agent from "../api/agent";

export default class ActivityStore {
    activities: Activity[] = [];
    selectedActivity: Activity | null = null;
    editMode = false;
    loading = false;
    loadingInitial = false;


    constructor() {
        makeAutoObservable(this);
    }

    loadActivities = async () => {
        this.loadingInitial = true;
        console.log("this.loadingInitial = true;")
        try {

            const activities = await agent.Activities.list();
            runInAction(() => {
                activities.forEach(activity => { this.activities.push(activity) });
                this.loadingInitial = false;
                console.log("this.loadingInitial = false;")
            })


        }
        catch (error) {
            console.log(error);
            runInAction(() => {
                this.loadingInitial = false;
            })
        }

    }
}