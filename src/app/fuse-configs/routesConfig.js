import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse/index';
import {ResultConfig} from 'app/main/result/ResultConfig';
import {HomeConfig} from 'app/main/home/HomeConfig';

const routeConfigs = [
    ResultConfig,
    HomeConfig
];

 const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/home"/>
    }
];

 export default routes;
