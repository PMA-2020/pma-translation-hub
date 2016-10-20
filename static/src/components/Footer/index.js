import React from 'react';

/* component styles */
import { styles } from './styles.scss';

export const Footer = () =>
    <footer className={`${styles}`}>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <p>
                      <a href="http://www.pma2020.org/about-pma2020" target="_blank">© PMA2020</a><br/>
                    </p>
                    {/*<p style="font-size: 0.5em;">*/}
                    <p>
                        Bill & Melinda Gates Institute for Population and Reproductive Health<br/>
                        Department of Population, Family, and Reproductive Health<br/>
                        Johns Hopkins Bloomberg School of Public Health<br/>
                    </p>
                </div>
            </div>
        </div>
    </footer>;
