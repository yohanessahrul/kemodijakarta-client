import React, { Component } from 'react';
import { Button } from 'reactstrap';

import { Icon } from 'react-icons-kit';
import { home, userPlus, checkmark } from 'react-icons-kit/icomoon';
import { Link } from "react-router-dom";

class TabAutentikasi extends Component {
    render() {
        return (
            <div>
              <div className="tabsWrap">
                <ul>
                  <li>
                    <Link to="/">
                      <Button color="link">
                        <Icon size="20" style={{ marginRight: 8 }} icon={home}/>
                          Home
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/register">
                      <Button color="link">
                        <Icon size="20" style={{ marginRight: 8 }} icon={userPlus}/>
                          Register
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <Button color="link">
                        <Icon size="20" style={{ marginRight: 8 }} icon={checkmark}/>
                          Login
                      </Button>
                    </Link>
                  </li>
                  <div className="clear"></div>
                </ul>
              </div>
            </div>
        );
    }
}

export default TabAutentikasi;