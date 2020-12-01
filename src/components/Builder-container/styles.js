import { hp, wp } from "../constants";

export default theme => ({

    builderContainer: {
        // width: wp('100%'),
        // height: hp('100%'),
        maxWidth: wp('100%'),
        maxHeight: hp('100%'),
        // border: '1px',
        // borderRadius: '2px',
        // borderBottom: '1px',
        // borderColor: 'gray',
        // backgroundColor: 'red',
        padding:0,
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        flex: 1,
        // position: 'relative',
    },
    hiddenClass: {
        display: 'none',
    },
    customFileUploadTab: {
        borderBottom: 'none',
    },
    customFileUpload: {
        width: '8%',
        border: '1px', //solid #ccc
        display: 'flex',
        padding: '0',
        alignItems: 'center',
        backgroundColor: "#397bc9",
        cursor: 'pointer'
    },
    // input[type = "file"] {
    //     display: none,
    // },
    textLabel: {
        paddingBottom: 0,
    },

    // builderGrid: {
    //     minWidth: '100%',
    //     maxHeight: '100%',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     overflow: 'hidden',
    //     flex: 1,
    //     position: 'relative'
    // },

    designer: {
        minHeight: '100%',
        width: '100%',
        backgroundColor: "white",
        // borderWidth: '1rem',
        // borderRadius: '2px',
        // borderBottom: '1rem',
        // borderColor: 'gray',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        // elevation: 5, 

        // overflow:'hidden',
        overflowY: 'auto',
        // border:'8px outset #999',
        borderRadius:'10px',
        '-webkit-box-shadow': '5px 5px 15px rgba(0,0,0,0.4)',
        '-moz-box-shadow': '5px 5px 15px rgba(0,0,0,0.4)'
    },
    jsonschema: {
        minHeight: '100%',
        width: '100%',
        // alignSelf:'center',
        // height:'100%'
        // borderWidth: '1rem',
        // borderRadius: '2px',
        // borderBottom: '1rem',
        // borderColor: 'gray',

        // overflow:'auto',
        overflow: 'hidden',
        // backgroundColor:'#E5FFF2',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        // elevation: 5, 

        // border:'8px outset #999',
        borderRadius:'10px',
        '-webkit-box-shadow': '5px 5px 15px rgba(0,0,0,0.4)',
        '-moz-box-shadow': '5px 5px 15px rgba(0,0,0,0.4)'
    },

    /* width */
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
        },
        'scrollhost::-webkit-scrollbar' : {
            display: 'none'
          }
    },
    root: {
        minWidth: wp('49%'),
        maxWidth: wp('49%'),
        height: hp('100%'),
        display: 'flex',
        flexDirection: 'column',
        justifyConent: 'center',
        padding: '10px',

        backgroundColor: "white"
    },
    divider: {
        width: '0.1rem',
        background: 'red',
        marginRight: '2px',
        marginLeft: '2px'
    }

})
