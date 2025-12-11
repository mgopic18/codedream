export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-24 md:px-6 max-w-4xl text-slate-300">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
            <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">1. Information We Collect</h2>
                    <p>
                        We collect information you provide directly to us, such as when you fill out a contact form, request a demo, or communicate with us via email. This may include your name, email address, company name, and any other information you choose to provide.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Provide, maintain, and improve our services;</li>
                        <li>Respond to your comments, questions, and requests;</li>
                        <li>Communicate with you about services, offers, and events;</li>
                        <li>Monitor and analyze trends and usage.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">3. Data Security</h2>
                    <p>
                        We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">4. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@codedream.com.au" className="text-orange-500 hover:underline">info@codedream.com.au</a>.
                    </p>
                </section>
            </div>
        </div>
    );
}
