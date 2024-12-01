import React, { useState } from 'react';
import './jokes.css';
import { AnimatePresence, motion } from 'framer-motion';
import { makepromt, questions } from '../services/utils';
import { fetchJokes } from '../services/api-service';
import { CircularProgress } from '@mui/material';

const Jokes = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [jokes, setJokes] = useState("");
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        hobbies: '',
        job: '',
        personality: '',
        lovelife: '',
        sleep: '',
    });


    const isStepValid = () => {
        const currentQuestion = questions[currentStep];
        const currentValue = formData[currentQuestion.id];

        if (currentQuestion.type === 'text') {
            return currentValue.trim() !== '';
        } else if (currentQuestion.type === 'mcq') {
            return currentValue !== '';
        }

        return false;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const nextStep = (e) => {
        e.preventDefault();
        if (currentStep < questions.length - 1) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleMultipleChoice = (name, val) => {
        setFormData(prev => ({
            ...prev,
            [name]: val
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const prompt = makepromt(formData.name, formData.job, formData.hobbies, formData.personality, formData.lovelife, formData.sleep);
        setIsLoading(true);
        const res = await fetchJokes(prompt);
        setJokes(res.replace(/\n/g, "<br>"));
        setIsLoading(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            return;
        }
    };

    return (
        <div className="typeform-container">
            <div className="typeform-wrapper">
                {
                    isLoading ?
                        <div className="ring">
                            <CircularProgress />
                        </div>
                        :
                        jokes === "" ?
                            // <div className="typeform-wrapper">
                            <form onSubmit={handleSubmit} className="typeform">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentStep}
                                        initial={{ opacity: 0, x: 300 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -300 }}
                                        transition={{ duration: 0.3 }}
                                        className="form-step"
                                    >
                                        <h2 className="form-question">
                                            {questions[currentStep].question}
                                        </h2>

                                        {questions[currentStep].type === 'text' && (
                                            <input
                                                type="text"
                                                name={questions[currentStep].id}
                                                value={formData[questions[currentStep].id]}
                                                onChange={handleChange}
                                                placeholder={questions[currentStep].placeholder}
                                                onKeyDown={(e) => handleKeyDown(e)}
                                                required
                                                className="form-input"
                                            />
                                        )}

                                        {questions[currentStep].type === 'mcq' && (
                                            <div className="multiple-choice-container">
                                                {questions[currentStep].options.map((option) => (
                                                    <button
                                                        type="button"
                                                        key={option}
                                                        onClick={() => handleMultipleChoice(questions[currentStep].id, option)}
                                                        className={`multiple-choice-btn ${formData[questions[currentStep].id] === option ? 'selected' : ''}`}
                                                        onKeyDown={(e) => handleKeyDown(e)}
                                                    >
                                                        {option}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>

                                <div className="form-navigation">
                                    {currentStep > 0 && (
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className="btn btn-prev"
                                        >
                                            Previous
                                        </button>
                                    )}

                                    {currentStep < questions.length - 1 ? (
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className={`btn btn-next ${!isStepValid() ? 'btn-disabled' : ''}`}
                                        >
                                            Next
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className={`btn btn-submit ${!isStepValid() ? 'btn-disabled' : ''}`}
                                        >
                                            Submit
                                        </button>
                                    )}
                                </div>
                            </form>
                            :
                            <>
                                <div className="joke-heading">Jokes on you (take them well) : </div>
                                <div dangerouslySetInnerHTML={{ __html: jokes }} />
                            </>
                }
            </div>
        </div>
    );
}

export default Jokes;