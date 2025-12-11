export default function TermsAndConditions() {
    return (
        <div className="container mx-auto px-4 py-24 md:px-6 max-w-4xl text-slate-300">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">Terms & Conditions</h1>
            <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6">
                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">2. Intellectual Property</h2>
                    <p>
                        All content included on this site, such as text, graphics, logos, images, as well as the compilation thereof, is the property of CodeDream or its suppliers and protected by copyright and other laws.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">3. Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the materials (information or software) on CodeDream's website for personal, non-commercial transitory viewing only.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">4. Disclaimer</h2>
                    <p>
                        The materials on CodeDream's website are provided on an 'as is' basis. CodeDream makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-3">5. Governing Law</h2>
                    <p>
                        These terms and conditions are governed by and construed in accordance with the laws of Australia and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                    </p>
                </section>
            </div>
        </div>
    );
}
