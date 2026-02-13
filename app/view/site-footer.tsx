import Link from "next/link"
import {
  Building2,
  Copyright,
  GraduationCap,
  Handshake,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import { contact } from "@/app/content/contact"

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-2 rounded-xl">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold">{contact.service.name}</h3>
              <p className="text-sm text-gray-400">{contact.service.description}</p>
            </div>
          </div>
          <div className="text-gray-400 text-sm flex flex-col">
            <div className="flex items-center space-x-2 mt-2">
              <Building2 className="h-5 w-5" />
              <span>Company Number {contact.company.number}</span>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Mail className="h-5 w-5" />
              <a href={`mailto:${contact.company.email}`}>{contact.company.email}</a>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Phone className="h-5 w-5" />
              <a href={`tel:+${contact.company.phoneCountryCode}${contact.company.phone.slice(1)}`}>+{contact.company.phoneCountryCode} {contact.company.phone.slice(1)}</a>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <MapPin className="h-5 w-5" />
              <span>{contact.service.city}, {contact.service.country}</span>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Copyright className="h-5 w-5" />
              <span>{new Date().getFullYear()} {contact.company.name}. All rights reserved</span>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Handshake className="h-5 w-5" />
              <Link href="/terms" className="underline hover:text-white">
                <span>Learner Agreement & Terms</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

