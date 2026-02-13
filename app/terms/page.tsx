import Link from "next/link"
import { GraduationCap } from "lucide-react"
import SiteFooter from "../view/site-footer"
import { contact } from "../content/contact"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-2 rounded-xl">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{contact.service.name}</h1>
              <p className="text-sm text-gray-600">{contact.service.description}</p>
            </div>
          </Link>
        </div>
      </header>

      {/* Terms Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Learner Agreement & Terms</h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
            These Terms and Conditions form the Learner Agreement between <strong>{contact.company.name}</strong>
            (“we”, “us”, “our”) and you as the learner or sponsoring organisation (“you”, “your”). By enrolling on a
            course, or accessing our learning platform, you agree to be bound by these terms.
          </p>

          <section className="pt-6 mt-6 border-t border-orange-100 space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              1. Welcome & Enrolment
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Your enrolment is complete once you have submitted the course application and, where applicable, made your
              first
              payment. Your <strong>official course start date</strong> is the date you submit the course application.
            </p>
          </section>

          <section className="pt-6 mt-6 border-t border-orange-100 space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              2. Course Duration
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">Standard qualification durations are:</p>
            <ul className="list-disc ml-5 space-y-2 text-base md:text-lg leading-relaxed text-gray-700">
              <li>EYP / EYE learners: <strong>12 months</strong> from start date</li>
              <li>Level 5 CYP learners: <strong>18 months</strong> from start date</li>
              <li>CAVA trainee assessors: <strong>9–12 months</strong> from start date</li>
              <li>Business &amp; Administration learners: <strong>12 months</strong> from start date</li>
              <li>Residential Childcare learners: <strong>18 months</strong> from start date</li>
            </ul>
          </section>

          <section className="pt-6 mt-6 border-t border-orange-100 space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              3. Contact Details
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              <strong>{contact.company.name} (Party A) </strong><br />
              {contact.company.addressLineOne}<br />
              {contact.company.city}<br />
              {contact.company.postcode}<br />
              {contact.company.country}
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Email:{" "}
              <a
                href={`mailto:${contact.company.email}`}
                className="text-orange-600 hover:text-orange-700 underline"
              >
                {contact.company.email}
              </a>
              <br />
              Phone (weekdays only):{" "}
              <a href={`tel:+${contact.company.phoneCountryCode}${contact.company.phone.slice(1)}`} className="text-orange-600 hover:text-orange-700 underline">
                {contact.company.phone.slice(0, 5)} {contact.company.phone.slice(5)}
              </a>
            </p>
          </section>

          <section className="pt-6 mt-6 border-t border-orange-100 space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              4. Our Responsibilities (Party A)
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">We commit to:</p>
            <ul className="list-disc ml-5 space-y-2 text-base md:text-lg leading-relaxed text-gray-700">
              <li>Grade written assignments within <strong>14 days</strong>.</li>
              <li>Grade observation visits within <strong>7 days</strong>.</li>
              <li>
                Offer at least <strong>five group webinars</strong> within 12 months (with a minimum of two weeks&apos;
                notice).
              </li>
              <li>Conduct at least <strong>two workplace observation visits</strong>, where applicable.</li>
              <li>Provide access to the <strong>Laser Learning</strong> e-learning platform.</li>
              <li>Update learners and sponsors on progress at least <strong>twice per year</strong>.</li>
              <li>
                Offer <strong>30-minute one-to-one support sessions</strong> (bookable online) on Mondays and Fridays.
              </li>
              <li>Provide learning plans, progress trackers, and Information, Advice and Guidance (career mapping).</li>
              <li>Respond to emails within <strong>48 hours</strong> (weekdays only).</li>
            </ul>
          </section>

          <section className="pt-6 mt-6 border-t border-orange-100 space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              5. Learner Responsibilities (Party B)
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              As a learner (or sponsoring Manager), you agree to the following responsibilities:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-base md:text-lg leading-relaxed text-gray-700">
              <li>Submit all written assignments via the <strong>Laser Learning E-Platform</strong>.</li>
              <li>Access the e-learning platform regularly to maintain steady progress.</li>
              <li>
                Inform {contact.company.name} promptly of any absences, workplace changes, or challenges affecting
                your
                learning.
              </li>
              <li>
                Confirm that <strong>all submitted work is your own</strong>. Plagiarised or AI-generated work may
                result in
                two warnings and further discussion with you and your sponsor.
              </li>
              <li>
                Complete your qualification within the agreed timeframe:
                <ul className="list-disc ml-6 space-y-2">
                  <li>12 months (Level 2 &amp; 3, except Residential Childcare)</li>
                  <li>18 months (Level 3 Residential &amp; Level 5)</li>
                </ul>
              </li>
              <li>Attend all scheduled learning activities punctually.</li>
              <li>Engage in independent study as outlined in your individual learning plan.</li>
              <li>Report any safeguarding concerns immediately to your line manager or {contact.company.name}.</li>
              <li>
                Be employed in a <strong>relevant workplace</strong> for Level 2, 3, and 5 qualifications, as practical
                experience is mandatory.
              </li>
              <li>Use an electronic device for assignments (handwritten work is not accepted).</li>
              <li>Ensure all outstanding payments are cleared before any certificates are claimed.</li>
              <li>
                Complete at least <strong>55% of knowledge criteria</strong> and required planning before any workplace
                observation visits.
              </li>
            </ul>
          </section>

          <section className="pt-6 mt-6 border-t border-orange-100 space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              6. Awarding Body Fees
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Awarding body registration fees are <strong>not</strong> included in course package prices. These must be
              paid directly to the awarding body (such as iCQ or NCFE). Costs typically range between{" "}
              <strong>£22 – £160</strong>, depending on the qualification.
            </p>
          </section>

          <section className="pt-6 mt-6 border-t border-orange-100 space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              7. Duration, Extensions & Additional Charges
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 font-medium">Expected Duration</p>
            <ul className="list-disc ml-5 space-y-2 text-base md:text-lg leading-relaxed text-gray-700">
              <li>Level 2 / 3 (except Residential): <strong>12 months</strong></li>
              <li>Level 3 Residential / Level 5: <strong>18 months</strong></li>
            </ul>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Some learners complete earlier (typically within 5–8 months). Please discuss this with Nicole to create a
              personalised learning tracker.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 font-medium">Extension Charges</p>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">Level 2 / 3 EYP / EYE / BA / CAVA:</p>
            <ul className="list-disc ml-5 space-y-2 text-base md:text-lg leading-relaxed text-gray-700">
              <li>Month 13 – <strong>£60</strong></li>
              <li>Month 14 – <strong>£100</strong></li>
              <li>Month 15 – <strong>£300</strong></li>
            </ul>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">Level 3 Residential / Level 5 CYP:</p>
            <ul className="list-disc ml-5 space-y-2 text-base md:text-lg leading-relaxed text-gray-700">
              <li>Month 20 – <strong>£60</strong></li>
              <li>Month 21 – <strong>£100</strong></li>
              <li>Month 22 – <strong>£300</strong></li>
            </ul>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Additional charges apply because tutors are contracted for the expected course duration only.
            </p>
          </section>

          <section className="pt-6 mt-6 border-t border-orange-100 space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              8. Late Invoice & Payment Policy
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              If payment is not received by the due date, the following may apply:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-base md:text-lg leading-relaxed text-gray-700">
              <li>A <strong>10% late payment fee</strong> on the overdue amount.</li>
              <li>
                <strong>1.5% monthly interest</strong> on outstanding balances until payment is received in full.
              </li>
              <li>
                Fail to apply the late and overdue rules, your laser learning and personal tutor will be suspended until
                the policy is applied.
              </li>
            </ul>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              This policy applies to all learners, sponsors, brokers, and partners.
            </p>
          </section>

          <section className="pt-6 mt-6 border-t border-orange-100 space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              9. Confidentiality & Data Protection
            </h2>
            <ul className="list-disc ml-5 space-y-2 text-base md:text-lg leading-relaxed text-gray-700">
              <li>Learners must not share their <strong>Laser Learning</strong> login details with others.</li>
              <li>{contact.company.name} will not share learner data unnecessarily with third parties.</li>
              <li>All learner information is stored securely with appropriate password protection and access controls.</li>
            </ul>
          </section>

          <section className="pt-6 mt-6 border-t border-orange-100 space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              10. Termination
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              This agreement may be terminated if you fail to complete your qualification within the agreed duration,
              including any approved extensions. In such cases, access to learning resources and tutor support may be
              withdrawn.
            </p>
          </section>

          <section className="pt-6 mt-6 border-t border-orange-100 space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              11. Fast Track Option (Transfer Learners)
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              If you previously completed your qualification with another provider but have not received your
              certificate,
              you may apply for our <strong>Fast Track Support</strong> (3‑month completion plan).
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Cost: <strong>£1,299</strong> (includes Laser Learning access, personal tutor, and intensive support).
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 font-medium">Important notes:</p>
            <ul className="list-disc ml-5 space-y-2 text-base md:text-lg leading-relaxed text-gray-700">
              <li>Awarding body registration fees must still be paid if you were not previously registered.</li>
              <li>Existing evidence will be reviewed against ICQ or NCFE standards.</li>
              <li>
                Any evidence gaps will be completed through professional discussion, verbal questioning, observation, or
                work products.
              </li>
              <li>No full invoice payment is required until {contact.company.name} is prepared to claim your
                certificate.
              </li>
            </ul>
          </section>

          <section className="pt-6 mt-6 border-t border-orange-100 space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              12. Certification Process
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-gray-700 font-medium">Claiming Windows & Timelines:</p>
            <ul className="list-disc ml-5 space-y-2 text-base md:text-lg leading-relaxed text-gray-700">
              <li>NCFE Learners: Certificates can only be claimed in <strong>April</strong> or <strong>November</strong>.</li>
              <li>ICQ Learners: Certificates are normally issued within <strong>one month</strong> after they are claimed.</li>
            </ul>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 font-medium">
              To receive your certificate, you must:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-base md:text-lg leading-relaxed text-gray-700">
              <li>Complete second IQA sampling, where applicable.</li>
              <li>Complete <strong>all instalment payments</strong> to {contact.company.name}.</li>
              <li>Achieve <strong>100% progression</strong> on the Laser Learning platform.</li>
            </ul>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              You will receive both a <strong>hard copy certificate</strong> and an <strong>electronic (e) version</strong>.
            </p>
          </section>

          <section className="pt-6 mt-6 border-t border-orange-100 space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              13. Starting Your Course
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              You may begin your course once you have:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-base md:text-lg leading-relaxed text-gray-700">
              <li>Submit the course application.</li>
              <li>Paid your first monthly instalment (where applicable).</li>
            </ul>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Your Laser Learning login details will be sent to your registered email after payment. You will then be
              able
              to access your course materials and book one-to-one tutor support.
            </p>
          </section>

          <section className="pt-6 mt-6 border-t border-orange-100 space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              14. 14‑Day Refund Policy
            </h2>
            <ul className="list-disc ml-5 space-y-2 text-base md:text-lg leading-relaxed text-gray-700">
              <li>
                You have the right to cancel your course within <strong>14 calendar days</strong> from the date you
                enrolling a course.
              </li>
              <li>
                A <strong>full refund</strong> of course fees will be issued if cancellation is requested in writing
                within this 14‑day period.
              </li>
              <li>
                Awarding body registration fees (iCQ / NCFE) are <strong>non‑refundable</strong> once paid to the
                awarding body.
              </li>
              <li>
                After 14 days, course fees are generally <strong>non‑refundable</strong>.
              </li>
            </ul>
          </section>

          <section className="pt-6 mt-6 border-t border-orange-100 space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              15. Credit Card Payments
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Credit card payments are accepted. A small transaction fee may apply. For current details, please contact
              the admin team using the contact information above.
            </p>
          </section>

          <section className="pt-6 mt-6 border-t border-orange-100 space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              16. Governing Law
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              This agreement and any dispute arising from it are governed by the laws of <strong>England and Wales</strong>.
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
