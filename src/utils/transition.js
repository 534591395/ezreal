'use strict'

import run from './run.js';

const transition = function (animation, duration, styles) {
    let actions = [];
    let durations = [];
    
    for (let phase in animation) {
        let time = parseFloat(phase) / 100 * duration;
        let actionDuration = time - (durations[durations.length - 1] || 0);
        let propertys = animation[phase];
        
        let action = (cb) => {
            let transitionValue = '';
            for (let attr in propertys) {
                if (propertys.hasOwnProperty(attr)) {
                    styles[attr] = propertys[attr];
                    transitionValue += transitionValue === '' ? `${ 'background-color' } ${ actionDuration }ms` : `,${ attr } ${ actionDuration }ms`;
                }
            }
            styles['transition'] = transitionValue;
            setTimeout(() => {
                cb();
            }, actionDuration);
        };
        
        actions.push(action);
        durations.push(time);
    }
    
    run(actions);
};

export default transition;