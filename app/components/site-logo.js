export default function SiteLogo({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8"
        y="8"
        width="56"
        height="56"
        rx="18"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.38"
      />
      <path
        d="M22 49V23L36 38L50 23V49"
        stroke="currentColor"
        strokeWidth="4.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 23H45"
        stroke="currentColor"
        strokeWidth="4.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
