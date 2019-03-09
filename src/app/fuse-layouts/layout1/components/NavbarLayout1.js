import React from 'react';
import {AppBar, withStyles} from '@material-ui/core';
import {FuseScrollbars} from '@fuse';
import classNames from 'classnames';


const styles = theme => ({
    content: {
        overflowX                   : 'hidden',
        overflowY                   : 'auto',
        '-webkit-overflow-scrolling': 'touch',
        background                  : 'linear-gradient(rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 30%), linear-gradient(rgba(0, 0, 0, 0.25) 0, rgba(0, 0, 0, 0) 40%)',
        backgroundRepeat            : 'no-repeat',
        backgroundSize              : '100% 40px, 100% 10px',
        backgroundAttachment        : 'local, scroll'
    }
});

const NavbarLayout1 = ({classes, navigation, className}) => {
    return (
        <div className={classNames("flex flex-col overflow-hidden h-full", className)}>
            <AppBar
                color="primary"
                position="static"
                elevation={0}
                className="flex flex-row items-center flex-shrink h-64 min-h-64 pl-20 pr-12"
            >
                

               

                
            </AppBar>

            <FuseScrollbars className={classNames(classes.content)}>



            </FuseScrollbars>
        </div>
    );
};

export default withStyles(styles, {withTheme: true})(NavbarLayout1);


