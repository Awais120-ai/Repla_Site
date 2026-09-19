export type PhoneCountry = {
  iso: string;
  name: string;
  dial: string;
};

/** Curated dial-code list for project inquiries (GCC first, then major markets). */
export const PHONE_COUNTRIES: PhoneCountry[] = [
  { iso: "SA", name: "Saudi Arabia", dial: "+966" },
  { iso: "AE", name: "United Arab Emirates", dial: "+971" },
  { iso: "QA", name: "Qatar", dial: "+974" },
  { iso: "KW", name: "Kuwait", dial: "+965" },
  { iso: "BH", name: "Bahrain", dial: "+973" },
  { iso: "OM", name: "Oman", dial: "+968" },
  { iso: "EG", name: "Egypt", dial: "+20" },
  { iso: "JO", name: "Jordan", dial: "+962" },
  { iso: "LB", name: "Lebanon", dial: "+961" },
  { iso: "IQ", name: "Iraq", dial: "+964" },
  { iso: "PS", name: "Palestine", dial: "+970" },
  { iso: "YE", name: "Yemen", dial: "+967" },
  { iso: "TR", name: "Türkiye", dial: "+90" },
  { iso: "PK", name: "Pakistan", dial: "+92" },
  { iso: "IN", name: "India", dial: "+91" },
  { iso: "BD", name: "Bangladesh", dial: "+880" },
  { iso: "PH", name: "Philippines", dial: "+63" },
  { iso: "ID", name: "Indonesia", dial: "+62" },
  { iso: "MY", name: "Malaysia", dial: "+60" },
  { iso: "SG", name: "Singapore", dial: "+65" },
  { iso: "US", name: "United States", dial: "+1" },
  { iso: "CA", name: "Canada", dial: "+1" },
  { iso: "GB", name: "United Kingdom", dial: "+44" },
  { iso: "IE", name: "Ireland", dial: "+353" },
  { iso: "DE", name: "Germany", dial: "+49" },
  { iso: "FR", name: "France", dial: "+33" },
  { iso: "ES", name: "Spain", dial: "+34" },
  { iso: "IT", name: "Italy", dial: "+39" },
  { iso: "NL", name: "Netherlands", dial: "+31" },
  { iso: "BE", name: "Belgium", dial: "+32" },
  { iso: "CH", name: "Switzerland", dial: "+41" },
  { iso: "SE", name: "Sweden", dial: "+46" },
  { iso: "NO", name: "Norway", dial: "+47" },
  { iso: "DK", name: "Denmark", dial: "+45" },
  { iso: "FI", name: "Finland", dial: "+358" },
  { iso: "AT", name: "Austria", dial: "+43" },
  { iso: "PL", name: "Poland", dial: "+48" },
  { iso: "PT", name: "Portugal", dial: "+351" },
  { iso: "GR", name: "Greece", dial: "+30" },
  { iso: "CZ", name: "Czechia", dial: "+420" },
  { iso: "RO", name: "Romania", dial: "+40" },
  { iso: "HU", name: "Hungary", dial: "+36" },
  { iso: "UA", name: "Ukraine", dial: "+380" },
  { iso: "AU", name: "Australia", dial: "+61" },
  { iso: "NZ", name: "New Zealand", dial: "+64" },
  { iso: "ZA", name: "South Africa", dial: "+27" },
  { iso: "NG", name: "Nigeria", dial: "+234" },
  { iso: "KE", name: "Kenya", dial: "+254" },
  { iso: "BR", name: "Brazil", dial: "+55" },
  { iso: "MX", name: "Mexico", dial: "+52" },
  { iso: "AR", name: "Argentina", dial: "+54" },
  { iso: "CN", name: "China", dial: "+86" },
  { iso: "JP", name: "Japan", dial: "+81" },
  { iso: "KR", name: "South Korea", dial: "+82" },
];

/** Default dial code aligned with COMPANY.phone (+92). */
export const DEFAULT_PHONE_COUNTRY = "PK";

export function findCountry(iso: string) {
  return PHONE_COUNTRIES.find((c) => c.iso === iso) ?? PHONE_COUNTRIES[0];
}

export function formatInternationalPhone(iso: string, national: string) {
  const digits = national.replace(/[^\d]/g, "");
  if (!digits) return "";
  const country = findCountry(iso);
  return `${country.dial}${digits}`;
}

export function isValidPhoneNumber(iso: string, national: string) {
  const v = national.trim();
  if (!v) return true;
  const digits = v.replace(/[^\d]/g, "");
  return digits.length >= 7 && digits.length <= 15 && findCountry(iso).dial.length + digits.length <= 16;
}
