/* eslint-disable no-unused-vars */
import { Component } from 'react';
import NotFound from '../../assets/svg/notFound.svg'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false,
            message: ""
        };
    }

    componentDidCatch(error, info) {
        // You can log the error or perform other actions here
        console.error(error, " error in the message", info);
        this.setState({ hasError: true });
        this.setState({ message: error });
    }

    render() {
        if (this.state.hasError) {
            // You can render a custom error message here
            return <div
                className='h-screen flex justify-center flex-col items-center w-full'

            >
                <div className='bg-white p-3 max-w-xl'>
                    <div className=' mb-7'>
                        <img alt="" src={NotFound} className="text-[1px]" />
                    </div>

                    <div>
                        <div className='text-zinc-800 font-semibold text-sm'>
                            An Error occured in your Code:
                        </div>
                        <div className='font-light text-[#353535] text-xs leading-[20px]'>
                        Oops! Something went wrong. Our team has been notified and is working to fix the issue. Please try again later. Thank you for your patience..
                        </div>
                    </div>

                    
                </div>

                {/* Something went wrong. `${this.state.hasError}` */}
            </div>;
        }
        // eslint-disable-next-line react/prop-types
        return this.props.children;
    }
}

export default ErrorBoundary;
