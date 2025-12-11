export default function Terms() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl text-neutral-300">
            <h1 className="text-3xl font-bold mb-6 text-white">Terms of Service</h1>
            <p className="mb-4 text-sm text-neutral-500">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
                <p className="mb-4">
                    By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-white">2. Use of Service</h2>
                <p className="mb-4">
                    CodeDream provides software development and investment services. You agree to use these services only for lawful purposes.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-white">3. Intellectual Property</h2>
                <p className="mb-4">
                    All content on this site is the property of CodeDream or its content suppliers and protected by international copyright laws.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-white">4. Limitation of Liability</h2>
                <p className="mb-4">
                    CodeDream shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the service.
                </p>
            </section>
        </div>
    )
}
