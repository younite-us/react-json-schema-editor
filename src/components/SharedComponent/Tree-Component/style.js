
export default theme => ({
  gridList: {
    'padding-top': '24px',
    gridList: {
      'padding-top': 0
    },
    li: {
      paddingLeft: '24px',
      position: 'relative',
      '&:after': {
        content: '',
        display: 'block',
        position: 'absolute',
        left: '60px',
        top: '23px',
        border: '1px dashed #d7dae2',
        width: '28px',
        height: '1px',
        zIndex: 1
      },
      div: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        'material-icons': {
          fontSize: '2.5rem !important',
          position: 'relative',
          zIndex: 2
        },
        a: {
          display: 'block',
          boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.14)',
          background: '#fff',
          padding: '10px',
          minWidth: '240px'
        },
      },
      li: {
        paddingLeft: '44px',
        minHeight: '60px',
        '&:before': {
          content: '',
          display: 'block',
          position: 'absolute',
          left: '73px',
          top: '0px',
          border: '1px dashed #d7dae2',
          width: '1px',
          height: '100%',
          zIndex: 1,
        },
        '&:after': {
          left: '80px',
          top: '30px'
        },
        'button, div a': {
          marginTop: '7px'
        },
        '&:last-child': {
          '&:before': {
            height: '50%',
            top: 0
          }
        }
      }
    }
  }

})
