import React, { Component } from 'react';

const WithLogging = WrappedComponent => {
	class WithLoggingHOC extends Component {
		componentDidMount() {
			console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name || 'Component'} is mounted`);
		}

		componentWillUnmount() {
			console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name || 'Component'} is going to unmount`);
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	}

	// Set the display name for debugging purposes
	WithLoggingHOC.displayName = `WithLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

	return WithLoggingHOC;
};

export default WithLogging;

