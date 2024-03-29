import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { Params, RouterStateSnapshot } from '@angular/router';
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterReducerState,
  RouterStateSerializer
} from '@ngrx/router-store';



//ngRx router
export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
  }

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
      let route = routerState.root;
      while (route.firstChild) {
        route = route.firstChild;
      }
  
      const { url } = routerState;
      const queryParams = routerState.root.queryParams;
      const params = route.params;
  
      // Only return an object including the URL, params and query params
      // instead of the entire snapshot
      return { url, params, queryParams };
    }
  }
  