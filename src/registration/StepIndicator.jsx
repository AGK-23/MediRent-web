
import React from 'react';

const StepIndicator = ({ currentStep, onNext, onBack }) => {
    const steps = [
        { number: 1, text: 'Registration' },
        { number: 2, text: 'Address' },
        { number: 3, text: 'Details' },
        { number: 4, text: 'Photos' },
        { number: 5, text: 'Availability' },
        { number: 6, text: 'Payment' }
    ];

    const handleBack = () => {
        if (currentStep > 1) {
            onBack();
        }
    };

    return (
        <div className="flex justify-center items-center mt-4 space-x-6">
            {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center space-y-1">
                    <div
                        className={`step w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 ${currentStep === step.number ? 'bg-blue-500 text-white font-bold' : 'bg-white text-black-500'}`}
                    >
                        {step.number}
                    </div>
                    <p className={`text-1xl ${currentStep === step.number ? 'font-bold text-black' : 'text-black-500'}`}>{step.text}</p>
                </div>
            ))}
            {/* {currentStep > 1 && (
                <button className="step w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white text-blue-500" onClick={handleBack}>
                    {'< Back'}
                </button>
            )}
            {currentStep < steps.length && (
                <button className={`step w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 ${currentStep === 1 ? 'bg-lightgreen text-white font-bold' : 'bg-blue-500 text-white font-bold'}`} onClick={onNext}>
                    {currentStep === 1 ? 'Next Step' : 'Next >'}
                </button>
            )} */}
        </div>
    );
};

export default StepIndicator;
