import React, { Component } from 'react';

export class AppFooter extends Component {

    render() {
        return  (
            <div className="layout-footer">
                <img src="assets/layout/images/logo.svg" alt="" width="50"/>
                <span className="footer-text" style={{'marginRight': '5px'}}>&nbsp;&nbsp; beta v 0.1</span>
                <span className="footer-text" style={{'marginLeft': '5px'}}><a href="http://sohanchoudhury.com">sohanchoudhury.com</a></span>
            </div>
        );
    }
}
