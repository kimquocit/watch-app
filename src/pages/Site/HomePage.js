import React, { Component } from 'react';
import ItemsContainer from '../../containers/ItemsContainer';

class HomePage extends Component {
    render() {
        return (
            <div class="col-md-8 mens_right">
                <div id="cbp-vm" class="cbp-vm-switcher cbp-vm-view-grid">
                    <div class="cbp-vm-options">
                        <a href="#" class="cbp-vm-icon cbp-vm-grid cbp-vm-selected" data-view="cbp-vm-view-grid" title="grid">Grid View</a>
                        <a href="#" class="cbp-vm-icon cbp-vm-list" data-view="cbp-vm-view-list" title="list">List View</a>
                    </div>
                    <div class="clearfix"></div>
                    <ItemsContainer />
                </div>
                <script src="js/cbpViewModeSwitch.js" type="text/javascript"></script>
                <script src="js/classie.js" type="text/javascript"></script>
            </div>
        );
    }
}

export default HomePage;
