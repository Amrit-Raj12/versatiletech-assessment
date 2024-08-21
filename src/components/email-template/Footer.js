import React from 'react'

const Footer = () => {
    return (
        <footer className="text-center p-6 bg-gray-100 text-[1rem] sm:text-[1.25rem] text-[#8A8A8A]">
          <p className="mb-4">
            To protect your privacy, we do not include medication names, complete order numbers, or complete prescription numbers in emails.
          </p>
          <p className="mb-4">
            To ensure our emails get to your inbox, add{" "}
            <a
              href="mailto:sdspharmacy@orders.expressscripts.com"
              className="text-[#1E5E93] underline"
            >
              sdspharmacy@orders.expressscripts.com
            </a>{" "}
            to your address book or safe sender list. To update your email address or stop receiving emails, call us at the number listed above.
          </p>
          <p className="mb-4">Please do not reply to this message.</p>
          <p className="mb-4">
            We sent it from an account that can’t receive email. We don’t discriminate based on race, color, national origin, sex, gender identity, age, or disability.
          </p>
          <p className="mb-4">
            We comply with all applicable federal civil rights laws. This includes your right to get free information and help in your language.
          </p>
          <p className="mb-4">
            <a href="#" className="text-[#1E5E93] underline">繁體中文</a> |{" "}
            <a href="#" className="text-[#1E5E93] underline">Español</a> |{" "}
            <a href="#" className="text-[#1E5E93] underline">More</a>
          </p>
          <p className="mb-4">© 2023 Express Scripts Specialty Distribution Services Inc. All Rights Reserved.</p>
          <p className="mb-4">
            Express Scripts Specialty Distribution Services Inc.,
            4600 N. Hanley Rd, STE B, St. Louis, MO 63134
          </p>
        </footer>
    )
}

export default Footer
