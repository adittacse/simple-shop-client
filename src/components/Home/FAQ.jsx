import React from 'react';

const Faq = () => {
    return (
        <section className="max-w-5xl mx-auto px-4 space-y-6">
            <h2 className="text-2xl font-bold text-center">FAQ</h2>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="faq" defaultChecked />
                    <div className="collapse-title text-base font-medium">
                        Is this production ready?
                    </div>
                    <div className="collapse-content text-sm opacity-80">
                        <p>
                            Yes, this site is production ready.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="faq" />
                    <div className="collapse-title text-base font-medium">
                        Is it CRUD operation website?
                    </div>
                    <div className="collapse-content text-sm opacity-80">
                        <p>
                            Yes. It already uses MongoDB via Express.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;