export default function Privacy() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl text-neutral-300">
            <h1 className="text-3xl font-bold mb-6 text-white">Privacy Policy</h1>
            <p className="mb-4 text-sm text-neutral-500">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-white">1. Information Collection</h2>
                <p className="mb-4">
                    We collect information you provide directly to us, such as when you contact us via email or apply for partnership.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-white">2. Use of Information</h2>
                <p className="mb-4">
                    We use the information we collect to provide, maintain, and improve our services, and to communicate with you.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-white">3. Data Security</h2>
                <p className="mb-4">
                    We implement reasonable security measures to protect your personal information.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-white">4. Cookies</h2>
                <p className="mb-4">
                    We may use cookies to improve your experience on our website.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-white">5. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions about this Privacy Policy, please contact us at info@codedream.com.au.
                </p>
            </section>
        </div>
    )
}
