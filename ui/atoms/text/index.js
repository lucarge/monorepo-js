export default process.env.REACT_APP_DEVICE === 'web' ? require('./web').default : require('./native').default
