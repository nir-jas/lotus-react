import React from 'react';
import {AppBar, Hidden, MuiThemeProvider, Toolbar, withStyles} from '@material-ui/core';
import {FuseSearch, FuseShortcuts} from '@fuse';
import connect from 'react-redux/es/connect/connect';
import {withRouter} from 'react-router-dom';



const styles = theme => ({
    separator: {
        width          : 1,
        height         : 64,
        backgroundColor: theme.palette.divider
    }
});

const ToolbarLayout1 = ({classes, settings, toolbarTheme}) => {

    const layoutConfig = settings.layout.config;

    return (
        <MuiThemeProvider theme={toolbarTheme}>
            <AppBar id="fuse-toolbar" className="flex relative z-10" color="default">
                <Toolbar className="p-0">

                    {layoutConfig.navbar.display && layoutConfig.navbar.position === 'left' && (
                        <Hidden lgUp>
                            
                            <div className={classes.separator}/>
                        </Hidden>
                    )}

                    <div className="flex flex-1">
                        <Hidden mdDown>
                            <FuseShortcuts className="px-16"/>
                        </Hidden>
                    </div>

                    <div className="flex">

                        <FuseSearch/>

                        <div className={classes.separator}/>

                       
                    </div>

                  
                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    );
};

function mapStateToProps({fuse})
{
    return {
        settings    : fuse.settings.current,
        toolbarTheme: fuse.settings.toolbarTheme
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps)(ToolbarLayout1)));
