import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ReactCounterComponent} from "./Problem-1-React-Counter-Component/ReactCounterComponent.tsx";
import {UsersListComponent} from "./Problem-2-API-Fetching/UserListComponent.tsx";
import {ToDoAppComponent} from "./Problem-3-To-Do-App-Feature/ToDoAppComponent.tsx";
// import {AuthApp} from "./Problem-4-Auth-Session/AuthApp.tsx";
// import {DeckGLMap} from "./Problem-6-DeckGL-Map-Integration/DeckGLMap.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className="container">
            <div className="d-flex">
                <div className="leftpane">
                    <h1>Problem 1 - React Counter Component</h1>
                    <ReactCounterComponent/>
                </div>
                <div className="middlepane">
                    <h1>Problem 2 - API Fetching</h1>
                    <UsersListComponent/>
                </div>
                <div className="rightpane">
                    <h1>Problem 3 - To Do App Feature</h1>
                    <ToDoAppComponent/>
                </div>
            </div>
            {/*<div className={"bottom-row"}>*/}
            {/*    <div className="problem-4-pane">*/}
            {/*        <h1>Problem 4 - Auth Session &amp; Role-Based UI</h1>*/}
            {/*        <div className="pane-body">*/}
            {/*            <AuthApp/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={"map-row"}>*/}
            {/*    <div className="problem-6-pane">*/}
            {/*        <h1>Problem 6 - Deck.gl Map Integration</h1>*/}
            {/*        <div className="pane-body">*/}
            {/*            <DeckGLMap/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    </StrictMode>,
)
