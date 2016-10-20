import React from 'react';

/* component styles */
import { styles } from './styles.scss';

var footerTopStyle = {
  fontSize: 0.9 + "em"
};

var footerBottomStyle = {
  fontSize: 0.75 + "em"
};


export const Footer = () =>
    <footer className={`${styles}`}>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p style={footerTopStyle}>
                      Developed by <a href="http://github.com/joeflack4" target="_blank">Joe Flack</a> & <a href="http://github.com/jkpr" target="_blank">James Pringle</a>, © <a href="http://www.pma2020.org/about-pma2020" target="_blank">PMA2020</a><br/>
                    </p>
                    <p style={footerBottomStyle}>
                        Bill & Melinda Gates Institute for Population and Reproductive Health<br/>
                        Department of Population, Family, and Reproductive Health<br/>
                        Johns Hopkins Bloomberg School of Public Health<br/>
                    </p>
                </div>
            </div>
        </div>
    </footer>;
