import zeroDefect from '@/assets/badge/zero-defect.png';
import Year from '@/assets/badge/year.png';
import iso from '@/assets/badge/iso.png';
import certISO from '@/assets/certificate & awards/ISO.jpg';
import certAward from '@/assets/certificate & awards/Award.jpg';
import certGST from '@/assets/certificate & awards/GST.jpg';
import certMSME from '@/assets/certificate & awards/MSME.jpg';
import founder1 from '@/assets/founders/founder-1.jpg';
import founder2 from '@/assets/founders/founder-2.jpg';
import plantPic1 from '@/assets/plant images/our-team-pic-1.jpg';
import plantPic2 from '@/assets/plant images/our-team-pic-2.jpg';
import plantPic3 from '@/assets/plant images/our-team-pic-3.jpg';
import plantPic4 from '@/assets/plant images/our-team-pic-4.jpg';

export interface Certificate {
    title: string;
    subtitle: string;
    image?: string;
}

export const ABOUT_PAGE_DATA = {
    legacy: "Our Legacy",
    whoWeAre: "Who We Are",
    description: "With five decades of expertise, Fence Fittings Company has been a global leader in fence fittings manufacturing, delivering 150 million+ pieces across four continents. We specialize in Pressed Steel, Malleable, and Aluminum Fence Fittings & Tension Bars, all galvanized or powder-coated for superior durability.",
    additionalInfo: "A premier name in the fence fittings industry, our state-of-the-art manufacturing facility features an in-house galvanizing plant, die & mold development, and a dedicated quality testing laboratory. We specialize in delivering top-quality, innovative, and custom-engineered solutions for the global market, ensuring every component meets rigorous international standards.",
    credentials: {
        satisfaction: {
            image: zeroDefect
        },
        years: {
            image: Year
        },
        iso: {
            image: iso
        }
    },
    certificates: [
        { title: "ISO 9001:2015", subtitle: "Quality Management System", image: certISO },
        { title: "Export Excellence", subtitle: "International Trade Certificate", image: certAward },
        { title: "GST", subtitle: "Registration Certificate", image: certGST },
        { title: "MSME", subtitle: "Registration Certificate", image: certMSME }
    ],
    founders: [
        {
            id: "1",
            name: "Mr. Arjun Mehta",
            role: "Founder & Managing Director",
            image: founder1,
            bio: "With over 35 years of experience in the engineering and manufacturing sector, our founder established Fence Fittings Company with a vision to deliver world-class fencing solutions. His leadership and commitment to quality have propelled the company to become a trusted name in the industry, serving clients across four continents. Under his guidance, the company has consistently invested in advanced manufacturing technology and skilled workforce development."
        },
        {
            id: "2",
            name: "Mr. Vikram Singh",
            role: "Director of Operations",
            image: founder2,
            bio: "Our Director of Operations brings over 20 years of expertise in supply chain management and quality control systems. He oversees day-to-day manufacturing operations, ensuring that every product leaving our facility meets stringent international quality standards. His dedication to operational excellence and continuous improvement has been instrumental in building Fence Fittings Company's reputation for reliability and precision."
        }
    ],
    officeInfo: {
        office: "123 Industrial Area, Sector 6, Corporate Plaza, Mumbai - 400001, India",
        factory: "Fence Fittings Manufacturing Hub, Plot No. 45, MIDC Industrial Zone, Pune - 411001, Maharashtra, India",
        contacts: {
            india: "+91 98765 43210",
            usa: "+1 (555) 123-4567",
            email: "info@fencefittingscompany.com / sales@fencefittingscompany.com"
        }
    },
    plantImages: [
        { id: "1", image: plantPic1, alt: "Manufacturing Facility" },
        { id: "2", image: plantPic2, alt: "Production Team" },
        { id: "3", image: plantPic3, alt: "Factory Equipment" },
        { id: "4", image: plantPic4, alt: "Factory" }
    ]
};
