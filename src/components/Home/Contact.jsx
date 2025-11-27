import React from 'react';

const Contact = () => {
    return (
        <section
            id="contact"
            className="max-w-4xl mx-auto px-4 pb-16 space-y-6"
        >
            <h2 className="text-2xl font-bold text-center">Contact</h2>
            <form className="card bg-base-100 border border-base-200 shadow-sm max-w-xl mx-auto p-6 space-y-4">
                {/* email */}
                <div className="form-control w-full mb-5">
                    <legend className="fieldset-legend mb-1">Email</legend>
                    <input
                        name="email"
                        type="email"
                        className="input input-bordered w-full"
                        placeholder="Your Email"
                        required
                    />
                </div>

                {/* message */}
                <div className="form-control w-full mb-5">
                    <legend className="fieldset-legend mb-1">Message</legend>
                    <textarea className="textarea w-full h-24" placeholder="Write your message" required ></textarea>
                </div>

                <button type="button" className="btn btn-primary w-full">
                    Send
                </button>
            </form>
        </section>
    );
};

export default Contact;