//angular
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//cellarstone
import { CellarSenzor } from '../../../entities/CellarSenzor';

//http + rxjs
import { Subject, Observable, of } from 'rxjs';

//ngRx
import { ApplicationState } from 'app/state/state/application.state';
import { Store } from '@ngrx/store';
import { LoadCellarSenzorAction, SaveCellarSenzorAction, DeleteCellarSenzorAction } from 'app/state/actions/senzor.actions';
import * as RouterActions from 'app/state/actions/router.actions';
import { PublishToMqttModel } from 'app/models/publishToMqtt.model';
import { PublishToMqttAction } from 'app/state/actions/mqtt.actions';
import { CellarWorkflow } from '../../../entities/CellarWorkflow';
import { WorkflowService } from '../../../service/workflow.service';
import { mergeMap } from 'rxjs/operators';

@Component({
    templateUrl: './senzor-detail.html',
    styleUrls: ['./senzor-detail.scss']
})
export class SenzorDetail {

    item$: Observable<CellarSenzor>;

    private sub: any;

    //senzorName = "";

    id = "";
    //sensor: string = 'Sensor Overview';



    constructor(
        private route: ActivatedRoute,
        private store: Store<ApplicationState>,
        private workflowservice: WorkflowService) {

        //this.item$ = this.store.select(mapSenzorFromState);
        this.item$ = this.store.select(mapSenzorFromState).pipe(
            mergeMap((data: CellarSenzor) => {

                console.log(data);

                if (data != null && data.id != null) {
                    //this.senzorName = data.name;
                }

                return of(data);
            })
        );

    }


    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {

            let id = params['id']; // (+) converts string 'id' to a number
            this.id = id;

            this.store.dispatch(new LoadCellarSenzorAction(id));

        });

        // this.pathCheck = {
        //     newSenzor0: this.route.snapshot.params['id']
        // }

        // if (this.pathCheck.newSenzor0 === '0') {
        //     this.sensor = 'New Sensor';
        // }

    }
    ngOnDestroy() {
        console.log("destroy");

        this.sub.unsubscribe();
    }


    //*********************************/
    /* SENZOR */
    //*********************************/

    private saveSenzor(item: CellarSenzor) {
        this.store.dispatch(new SaveCellarSenzorAction(item));
    }
    private deleteSenzor(item: CellarSenzor) {
        this.store.dispatch(new DeleteCellarSenzorAction(item));


    }
    private cancelSenzor() {
        this.store.dispatch(new RouterActions.Back());
    }

}



function mapSenzorFromState(state: ApplicationState): CellarSenzor {
    if (state.uiState == undefined) {
        return undefined;
    }

    return state.uiState.selectedSenzor;
}