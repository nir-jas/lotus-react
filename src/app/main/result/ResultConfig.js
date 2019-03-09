import Result from './Result';

export const ResultConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/result',
            component: Result
        }
    ]
};

/**
 * Lazy load Result
 */
/*
import FuseLoadable from '@fuse/components/FuseLoadable/FuseLoadable';

export const ResultConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: FuseLoadable({
                loader: () => import('./Result')
            })
        }
    ]
};
*/
