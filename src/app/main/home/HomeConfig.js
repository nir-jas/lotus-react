import Home from './Home';

export const HomeConfig = {
    settings: {
        layout: {
            config: {
				
			}
        }
    },
    routes  : [
        {
            path     : '/home',
            component: Home
        }
    ]
};

/**
 * Lazy load Home
 */
/*
import FuseLoadable from '@fuse/components/FuseLoadable/FuseLoadable';

export const HomeConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: FuseLoadable({
                loader: () => import('./Home')
            })
        }
    ]
};
*/
