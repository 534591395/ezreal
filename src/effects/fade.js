import transition from '../utils/transition.js';

// const fade = {
//     componentWillEnter (duration) {
//         transition.begin(this, duration * 0.5, {
//             color: 'red',
//             backgroundColor: 'red'
//         });
        
//         transition.end(this, duration * 0.5, {
//             color: 'blue',
//             transform: 'scale(2)',
//         });
        
//         setTimeout(() => {
//             transition.end(this, duration * 0.5, {
//             color: 'pink',
//             transform: 'scale(2) scale(0.5)',
//             backgroundColor: 'blue'
//         });
//         }, duration * 0.5);
        
//     }
// };

const fade = {
    componentWillEnter (duration) {
        transition({
            0: {
                backgroundColor: 'red'
            },
            25: {
                backgroundColor: 'yellow',
                transform: 'scale(2) rotate(180deg)'
            },
            50: {
                backgroundColor: 'blue',
                transform: 'scale(0.5) rotate(-180deg)'
            },
            100: {
                backgroundColor: 'green',
                transform: 'scale(1)'
            }
        }, duration, this);
    }
};

export default fade;