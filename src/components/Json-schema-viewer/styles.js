import { hp, wp } from "../constants";

export default theme => ({

    jsonView: {
        // resize: 'none',
        height: hp('100%'),
        width:wp('50%'),
        // backgroundColor: '#E5FFF2',
        fontSize: '18px',
        padding: '2rem',
        paddingTop:'3rem',
        paddingLeft:'4rem',
        fontFamily: 'sans-serif',
        border: 'none',
        // overflow: 'auto',
        '-webkit-box-sizing': 'border-box',
        '-moz-box-sizing': 'border-box',
        'box-sizing': 'border-box'
    },
    // compareContainer: {
    //     padding: '2%',
    //     paddingTop: '10%',
    //     display: 'flex',
    //     border: 'none',
    //     overflow: 'visible'
    // },
    // textField: {
    //     height: '100%',
    //     width: '100%',
    //     // resize: 'none',
    //     backgroundColor: 'white',
    //     // border: '1px',//solid  black,
    //     fontSize: '18px',
    //     padding: '2rem',
    //     // paddingRight:'none',
    //     fontFamily: 'sans-serif',
    //     border: 0,
    //     // height: 'auto',
    //     overflow: 'auto',
    //     '-webkit-box-sizing': 'border-box',
    //     '-moz-box-sizing': 'border-box',
    //     'box-sizing': 'border-box'
    // },
    '@global': {
        '::-webkit-scrollbar': {
            width: '0.5rem',
        },

        /* Track */
        '::-webkit-scrollbar-track': {
            'box-shadow': 'inset 0 0 5px grey',
            'border-radius': '10px',
        },

        /* Handle */
        ':: -webkit-scrollbar-thumb': {
            backgroundColor: '#2196f3',
            'border-radius': ' 5px',
        },

        /* Handle on hover */
        '::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#2196f3',
        }
    },
})
