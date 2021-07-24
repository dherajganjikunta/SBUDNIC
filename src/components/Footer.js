import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faTwitter, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="flex flex-row items-start p-6">
          <a
            href="https://www.linkedin.com/company/sbudnic/"
            target="_blank"
            rel="noreferrer"
            className="px-3 transition duration-500 ease-out transform opacity-50 hover:scale-110 hover:opacity-100"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
          <a
            href="https://twitter.com/SbudnicS"
            target="_blank"
            rel="noreferrer"
            className="px-3 transition duration-500 ease-out transform opacity-50 hover:scale-110 hover:opacity-100"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://instagram.com/sbudnics"
            target="_blank"
            rel="noreferrer"
            className="px-3 transition duration-500 ease-out transform opacity-50 hover:scale-110 hover:opacity-100"
          >
            <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
          </a>
        </div>
        <div className="flex flex-col items-end p-6 text-sm font-semibold md:text-xl">
          © {new Date().getFullYear()}
        </div>
      </div>
    </div>
  )
}

export default Footer
