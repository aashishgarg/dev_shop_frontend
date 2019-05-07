import React, {Component} from 'react'
import StartFeature from './Homes/StartFeature';
import FeatureProd from './Homes/FeatureProd';
import OfferArea from './Homes/OfferArea';
import Banner from './Homes/Banner';
import NewProds from './Homes/NewProds';
import InspiredProds from './Homes/InspiredProds';

class Home extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <StartFeature/>
                <FeatureProd/>
                <OfferArea/>
                <NewProds/>
                <InspiredProds/>
            </div>
        );
    };
}

export default Home;
