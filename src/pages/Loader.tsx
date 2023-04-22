import React from "react";
import {IonPage} from "@ionic/react";
import { IonSpinner } from '@ionic/react';

import ExploreContainer from "../components/ExploreContainer";
import './Loader.css';
const Loader: React.FC = () => {
    return (
        <IonPage>
            <div className="container">
        <IonSpinner name="crescent"></IonSpinner>
                <h2>Loading</h2>
            </div>
        </IonPage>
    );
};

export default Loader;