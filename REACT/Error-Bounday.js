import React from 'react'
class CustomErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    // componentDidCatch(error, errorInfo) {
    //   // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
    // }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1 className='text-red-600 text-lg font-semibold'>{this.props?.errorMsg}</h1>;
      }
  
      return this.props.children;
    }
  }
  export default CustomErrorBoundary
  
// pass only props and use as this.props.propsKey
