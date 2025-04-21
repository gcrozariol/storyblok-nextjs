export default function AccessibilityPage() {
  return (
    <div className="min-h-[calc(100vh-420px)] bg-background text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Accessibility Statement</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-6">
              <span className="font-bold">Harmony Haven</span> is committed to
              ensuring digital accessibility for people with disabilities. We
              are continually improving the user experience for everyone, and
              applying the relevant accessibility standards.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Conformance status
            </h2>
            <p className="mb-6">
              The Web Content Accessibility Guidelines (WCAG) defines
              requirements for designers and developers to improve accessibility
              for people with disabilities. It defines three levels of
              conformance: Level A, Level AA, and Level AAA.{' '}
              <span className="font-bold">Harmony Haven</span> is partially
              conformant with WCAG 2.1 level AA. Partially conformant means that
              some parts of the content do not fully conform to the
              accessibility standard.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Feedback</h2>
            <p className="mb-6">
              We welcome your feedback on the accessibility of{' '}
              <span className="font-bold">Harmony Haven</span>. Please let us
              know if you encounter accessibility barriers on our website:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Phone: (555) 123-4567</li>
              <li>E-mail: accessibility@musicshop.com</li>
              <li>Postal address: 123 Music Avenue, Nashville, TN 37203</li>
            </ul>
            <p className="mb-6">
              We try to respond to feedback within 2 business days.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Compatibility with browsers and assistive technology
            </h2>
            <p className="mb-6">
              <span className="font-bold">Harmony Haven</span> is designed to be
              compatible with the following assistive technologies:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Screen readers (including NVDA, JAWS, and VoiceOver)</li>
              <li>Screen magnifiers</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Technical specifications
            </h2>
            <p className="mb-6">
              Accessibility of <span className="font-bold">Harmony Haven</span>{' '}
              relies on the following technologies to work with the particular
              combination of web browser and any assistive technologies or
              plugins installed on your computer:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>HTML</li>
              <li>WAI-ARIA</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Assessment approach
            </h2>
            <p className="mb-6">
              <span className="font-bold">Harmony Haven</span> has assessed the
              accessibility of this website by the following approaches:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Self-evaluation</li>
              <li>External evaluation</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Limitations and alternatives
            </h2>
            <p className="mb-6">
              Despite our best efforts to ensure accessibility of{' '}
              <span className="font-bold">Harmony Haven</span>, there may be
              some limitations. Below is a description of known limitations, and
              potential solutions. Please contact us if you observe an issue not
              listed below.
            </p>
            <p className="mb-6">
              We are always striving to improve the accessibility of our website
              to ensure we provide equal access to all of our users. If you find
              an issue that is not listed here, or think we&apos;re not meeting
              your needs, please contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
